let {$, sleep} = require('./funcs');

module.exports = function() {

  this.Given(/^that I'm at the search page$/, async function () {
    await helpers.loadPage('http://localhost:8080');
    await sleep(2000)
    let elem = await $('nav>a>h1')
    assert(elem, 'Expected to find h1 element')
    await sleep(2000)
  });


  this.When(/^I enter search text "([^"]*)"$/, async function (searchText) {
    let elem = await $('#search')
    await elem.sendKeys(searchText)
  });

  this.Then(/^the first test result should contain the word "([^"]*)"$/, async function (expectedText) {
    let elem = await $('.product:first-child h2')
    let text = await elem.getText()
    assert.include(text, expectedText);
  })



}

