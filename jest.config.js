module.exports = {
    testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    collectCoverageFrom: ["./src/**"],
    coverageDirectory: "./coverage",
    coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
    coverageProvider: "v8",
    coverageReporters: [
        "html",
        "json",
        [
            "text",
            {
                skipFull: true
            }
        ]
    ]
};
