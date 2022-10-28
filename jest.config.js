/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json",
      },
    ],
  },
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
};

// coverageThreshold: {
//     global: {
//       lines: 100,
//       branches: 100	,
//       functions: 100,
//       statements: 100,
//     },
//   },
