var signOutFunction ={
    signOut: function () {
        this.api.pause(1000)
            this.click('#mHamburger')
            this.api.pause(300)
            this.click('#hb_n')
            this.api.pause(2000)
            this.click('#mectrl_headerPicture')
            this.api.pause(300)
            this.click('#mectrl_body_signOut')
            return this
    }
}

var signInFunctions = {
    signIn: function (username, password) {
        this.click('#id_s')
        this.waitForElementPresent('input[name="loginfmt"]', 7000)
        this.setValue('input[name="loginfmt"]', username)
        this.click('#idSIButton9')
        this.waitForElementPresent('input[name="passwd"]', 3000)
        this.api.pause(700)
        this.setValue('#i0118', password)
        this.click('input[type="submit"]')
        this.waitForElementPresent('@searchBar', 3000)
        return this
    }
}
var signInMobileFunction = {
    signInMobile: function (username, password) {
        this.click('#mHamburger')
        this.api.pause(300)
        this.click('#hb_s')
        this.api.pause(300)
        this.setValue('#i0116',username)
        this.click('#idSIButton9')
        this.api.pause(800)
        this.setValue('#i0118',password)
        this.click('#idSIButton9')
        this.api.pause(800)
        return this
    }
        
}
var bingSerchFunctions = {
    bingSearch: function (search) {
        this.setValue('@searchBar', search)
        this.click('@searchButton')
        this.api.pause(300)
        this.waitForElementPresent('@results',3000,'Seach Confirmed')
        return this
    }
}

module.exports = {
    url : 'https://www.bing.com/',
    commands : [signOutFunction, signInFunctions,signInMobileFunction,bingSerchFunctions],
    elements : {
        signedIn: '#id_n',
        searchBar: '#sb_form_q',
        searchButton: 'input[type="submit"]',
        results: '#b_results',
        card1: {
            selector: '(//div[@class="actionLink"])[1]',
            locateStrategy: 'xpath'
        },
        card2: {
            selector: '(//a[@class="ng-scope c-call-to-action c-glyph f-lightweight"])[3]',
            locateStrategy: 'xpath'
        },
    },

}