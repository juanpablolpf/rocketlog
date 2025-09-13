import type {Config} from 'jest';

const config: Config = {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  moduleNameMapper: {
  "^@/(.*)$": "<rootDir>/src/$1",
  "^@jest/(.*)$": "<rootDir>/node_modules/@jest/$1",
},
};

export default config
