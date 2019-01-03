var object = {}
var testData = require('../data/goldData')
var prospectors = require('../data/pickAndShovel')

module.exports = {
    beforeEach: browser => {
        object = browser.page.objects()
        object.navigate()
        object.waitForElementPresent('#sb_form_q', 60000, 'Found the site ')
    },

    after: browser => {
        browser.end()
    },

    //Signed in
    "Sign In and Execute": () => {

        prospectors.searchInputs.forEach(test => {
            object
                .signInMobile(test.username, test.password)


            testData.searchInputs.forEach(test => {
                object
                    .bingSearch(test.search)
            })
            object.signOut()
            object.navigate()
        })
    },
}