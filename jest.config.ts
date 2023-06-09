import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    bail: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/*.test.ts'],
  };
};
