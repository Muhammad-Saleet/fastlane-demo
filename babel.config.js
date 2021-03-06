module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                extensions: [
                    ".ios.ts",
                    ".android.ts",
                    ".ts",
                    ".ios.tsx",
                    ".android.tsx",
                    ".tsx",
                    ".jsx",
                    ".js",
                    ".json",
                ],
                alias: {
                    screens: "./src/screens",
                    components: "./src/components",
                    stacks: "./src/navigation/stacks",
                    types: "./src/types",
                    theme: "./src/theme",
                },
            },
        ],
    ],
}
