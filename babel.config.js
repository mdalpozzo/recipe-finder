module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@Components': './src/components',
                    '@Utils': './src/utils',
                    '@Screens': './src/screens',
                    '@Data': './src/data',
                    '@Models': './src/models',
                    '@Config': './src/data/Config/index.ts',
                    '@Theme': './src/Theme/index.ts',
                    '@Navigator': './src/Navigator/index.ts',
                    '@App': './src/App/index.ts',
                    '@Src': './src'
                },
            }
        ],
    ],
};
