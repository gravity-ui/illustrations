import {optimize} from 'svgo';
import {colorsProps} from 'svgo/plugins/_collections.js';

function getColorsTransformatorPlugin(transforms) {
    return {
        name: 'change-colors-to-css-vars',
        fn: () => {
            return {
                element: {
                    enter: (node) => {
                        for (const [name, value] of Object.entries(node.attributes)) {
                            if (colorsProps.has(name)) {
                                for (const {newValue, regexpOrStringToChange} of transforms) {
                                    const matched =
                                        typeof regexpOrStringToChange === 'string'
                                            ? regexpOrStringToChange === value
                                            : regexpOrStringToChange.test(value);

                                    if (matched) {
                                        node.attributes[name] = newValue;
                                    }
                                }
                            }
                        }
                        return null;
                    },
                },
            };
        },
    };
}

/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} Transforms
 * @property {string} newValue
 * @property {(RegExp | string)} regexpOrStringToChange
 */

/**
 * @param {string} svgString
 * @param {Transforms[]} [transforms]
 *
 * @return {string}
 */
export function svgoTransformer(svgString, transforms) {
    return optimize(svgString, {
        multipass: true,
        plugins: [
            {name: 'removeAttrs', params: {attrs: ['id']}},
            transforms ? getColorsTransformatorPlugin(transforms) : undefined,
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        removeViewBox: false,
                    },
                },
            },
        ].filter(Boolean),
    }).data;
}
