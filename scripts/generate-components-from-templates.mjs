import fs from 'fs/promises';
import path from 'path';

import {transform} from '@svgr/core';

import {ICONS_DIR, META_DATA_PATH, TEMPLATES_DIR} from './constants.mjs';
import {cleanDir, prettify} from './utils.mjs';

async function createIndexFile(files) {
    const indexFile = path.join(ICONS_DIR, 'index.ts');
    const content = files
        .map((file) => {
            const name = path.parse(file).name;

            return `export {default as ${name}} from './${name}'`;
        })
        .join('\n');
    const prettyContent = await prettify(content, indexFile);
    await fs.writeFile(indexFile, prettyContent);
}

async function run() {
    await cleanDir(ICONS_DIR);

    const metadata = JSON.parse(await fs.readFile(META_DATA_PATH, 'utf8'));

    const iconFiles = await Promise.all(
        metadata.illustrations.map(async ({svgName, componentName}) => {
            const filePath = path.resolve(TEMPLATES_DIR, `${svgName}.svg`);

            const code = await fs.readFile(filePath, 'utf8');
            try {
                await fs.mkdir(path.join(ICONS_DIR));
            } catch (_e) {}

            const iconFile = path.join(ICONS_DIR, `${componentName}.tsx`);
            const content = await transform(
                code,
                {
                    typescript: true,
                    plugins: ['@svgr/plugin-jsx'],
                    exportType: 'default',
                },
                {componentName},
            );
            const prettyContent = await prettify(content, iconFile);

            await fs.writeFile(iconFile, prettyContent);

            return iconFile;
        }),
    );
    await createIndexFile(iconFiles);
}

run().catch((error) => {
    console.error(error);
    process.exit(1);
});
