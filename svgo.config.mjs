export default {
    multipass: true,
    plugins: [
        {name: 'removeAttrs', params: {attrs: ['id']}},
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                },
            },
        },
    ],
};
