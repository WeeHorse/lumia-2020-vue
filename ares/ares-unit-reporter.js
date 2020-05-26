const report = require('../reports/unit-report.json');
// load ares-helper and the ares configuration
const ares = require('ares-helper');
ares.debug = true;
ares.setProjectInfo('ares-config.json');

reportToAres();

async function reportToAres() {
  await ares.startTests();
  // a testResult = a unit testResult ≈ an ares module
  for (let testResult of report.testResults) {

    await ares.startModule({
      moduleName: testResult.name,
      totalTests: testResult.assertionResults.length
    });

    // assertionResult === one unit test with an assertion
    for (let assertionResult of testResult.assertionResults) {

      await ares.testResult({
        moduleName: testResult.name,
        title: assertionResult.fullName,
        passed: (assertionResult.status === 'passed'),
        errorMessage: (assertionResult.failureMessages && assertionResult.failureMessages.join('\n')),
        testBrowser: 'n/a'
      });

    }
    await ares.endModule({
      moduleName: testResult.name
    });
  }
  await ares.endTests()
}