import fsSync from 'fs';
import fs from 'fs/promises';
import path from 'path';

import {META_DATA_PATH, SVGS_DIR, TEMPLATES_DIR, themes} from './constants.mjs';
import colorsConfig from './gravity-colors-config.mjs';
import {svgoTransformer} from './transform-colors.mjs';
import {cleanDir} from './utils.mjs';

async function writeToFile(filePath, fileName, data) {
    if (!fsSync.existsSync(filePath)) {
        await fs.mkdir(filePath, {recursive: true});
    }
    await fs.writeFile(path.join(filePath, fileName), data);
}

async function run() {
    await cleanDir(SVGS_DIR);

    const metadata = JSON.parse(await fs.readFile(META_DATA_PATH, 'utf8'));

    metadata.illustrations.forEach(async ({svgName}) => {
        const ill = await fs.readFile(path.resolve(TEMPLATES_DIR, `${svgName}.svg`), 'utf8');

        themes.forEach(async (theme) => {
            const transforms = Object.entries(colorsConfig[theme]).map(([token, color]) => ({
                newValue: color,
                regexpOrStringToChange: `var(${token})`,
            }));
            const svg = await svgoTransformer(ill, transforms);

            await writeToFile(path.join(SVGS_DIR), `${svgName}-${theme}.svg`, svg);
        });
    });
}

run().catch((error) => {
    console.error(error);
    process.exit(1);
});
