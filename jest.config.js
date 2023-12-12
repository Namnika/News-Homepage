/** @type {import('jest').Config} */
module.exports = {
    verbose: true,
    transform: {
        "\\.[jt]sx?$": ["babel-jest", { configFile: "./babel.config.js" }]
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleNameMapper: {
        "^axios$": require.resolve("axios")
    }
};
