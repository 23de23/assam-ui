// https://jestjs.io/docs/en/configuration.html

module.exports = {
    verbose: true,
    clearMocks: false,
    reporters: ["default"],  //jest-junit 测试覆盖率的报表


    collectCoverage: false, //是否收集测试覆盖率


    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules'],
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.test.json',
      },
    },
    moduleNameMapper: {
      // mocks 在测试中对于图片、css对测试无效。替换文件
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
      "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/object-mock.js",
    },
    testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
    transform: {
      "^.+unit\\.(js|jsx)$": "babel-jest",
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
  }