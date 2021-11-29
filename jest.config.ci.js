const base = require('./jest.config');

module.exports =Object.assign({},base,{
  reporters: ["jest-junit"],  //jest-junit 测试覆盖率的报表


  collectCoverage: true, //是否收集测试覆盖率
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
})