$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/books.feature");
formatter.feature({
  "line": 1,
  "name": "Books Functionality",
  "description": "As a user\nI want to visit nop commerce website to buy books",
  "id": "books-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16303540800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to books page successfully",
  "description": "",
  "id": "books-functionality;verify-user-should-navigate-to-books-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Books feature",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be in Books page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 153365500,
  "status": "passed"
});
formatter.match({
  "location": "BooksTest.iClickOnBooksFeature()"
});
formatter.result({
  "duration": 1597486700,
  "status": "passed"
});
formatter.match({
  "location": "BooksTest.iShouldBeInBooksPageSuccessfully()"
});
formatter.result({
  "duration": 87336200,
  "status": "passed"
});
formatter.after({
  "duration": 107600,
  "status": "passed"
});
formatter.before({
  "duration": 11204920100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify user should find books in ascending order A to Z",
  "description": "",
  "id": "books-functionality;verify-user-should-find-books-in-ascending-order-a-to-z",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Books feature",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sort by position button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I select Name A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see below books displayed in A to Z order",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 40600,
  "status": "passed"
});
formatter.match({
  "location": "BooksTest.iClickOnBooksFeature()"
});
formatter.result({
  "duration": 4825700300,
  "status": "passed"
});
formatter.match({
  "location": "BooksTest.iClickOnSortByPositionButton()"
});
formatter.result({
  "duration": 1037209600,
  "status": "passed"
});
formatter.match({
  "location": "BooksTest.iSelectNameAToZ()"
});
formatter.result({
  "duration": 1345762900,
  "status": "passed"
});
formatter.match({
  "location": "BooksTest.iShouldSeeBelowBooksDisplayedInAToZOrder()"
});
formatter.result({
  "duration": 122094800,
  "status": "passed"
});
formatter.after({
  "duration": 61400,
  "status": "passed"
});
formatter.before({
  "duration": 11498737800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify user should find books price in Low To High order",
  "description": "",
  "id": "books-functionality;verify-user-should-find-books-price-in-low-to-high-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on Books feature",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on sort by position button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I select Price Low to High",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see below books displayed in Low to High order",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 49500,
  "status": "passed"
});
formatter.match({
  "location": "BooksTest.iClickOnBooksFeature()"
});
formatter.result({
  "duration": 944072500,
  "status": "passed"
});
formatter.match({
  "location": "BooksTest.iClickOnSortByPositionButton()"
});
formatter.result({
  "duration": 137017000,
  "status": "passed"
});
formatter.match({
  "location": "BooksTest.iSelectPriceLowToHigh()"
});
formatter.result({
  "duration": 4420594500,
  "status": "passed"
});
formatter.match({
  "location": "BooksTest.iShouldSeeBelowBooksDisplayedInLowToHighOrder()"
});
formatter.result({
  "duration": 79697400,
  "status": "passed"
});
formatter.after({
  "duration": 23400,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer page functionality",
  "description": "As a user\nI want to visit computer page on nop commerce website",
  "id": "computer-page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12640005700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to computer page",
  "description": "",
  "id": "computer-page-functionality;verify-user-should-navigate-to-computer-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer feature",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be on computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerFeature()"
});
formatter.result({
  "duration": 876386200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iShouldBeOnComputerPageSuccessfully()"
});
formatter.result({
  "duration": 73778100,
  "status": "passed"
});
formatter.after({
  "duration": 44900,
  "status": "passed"
});
formatter.before({
  "duration": 11656223800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify user should add product to cart successfully",
  "description": "",
  "id": "computer-page-functionality;verify-user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on computer feature",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on desktop feature",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on position field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I sort item by A to Z button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on build computer button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on radio button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see product added successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 86500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnComputerFeature()"
});
formatter.result({
  "duration": 1520533700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnDesktopFeature()"
});
formatter.result({
  "duration": 146038000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerTest.iClickOnPositionField()"
});
formatter.result({
  "duration": 60198632700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@id\u003d\u0027products-orderby\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-C1H7GVRS\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\shrad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51580}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 63b7f65ab84989d5084acf4106874ae5\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027products-orderby\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.clickOnElement(Utility.java:45)\r\n\tat com.demo.nopcommerce.pages.DesktopPage.clickOnPosition(DesktopPage.java:29)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.ComputerTest.iClickOnPositionField(ComputerTest.java:37)\r\n\tat ✽.And I click on position field(src/test/java/com/demo/nopcommerce/resources/featurefile/computer.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerTest.iSortItemByAToZButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerTest.iClickOnBuildComputerButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerTest.iClickOnRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerTest.iShouldSeeProductAddedSuccessfulMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1237623400,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a user\nI want to login on nop commerce website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13974057800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to login page",
  "description": "",
  "id": "login-functionality;verify-user-should-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1378117900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldBeInLoginPage()"
});
formatter.result({
  "duration": 103856800,
  "status": "passed"
});
formatter.after({
  "duration": 32100,
  "status": "passed"
});
formatter.before({
  "duration": 11595424900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify user should login with valid credentials successfully",
  "description": "",
  "id": "login-functionality;verify-user-should-login-with-valid-credentials-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter email id \"jiyapandya@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"Rahi0804\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 52300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1551766600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jiyapandya@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterEmailId(String)"
});
formatter.result({
  "duration": 209551800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahi0804",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 200844600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginTab()"
});
formatter.result({
  "duration": 146133000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldBeLoginSuccessfully()"
});
formatter.result({
  "duration": 90100958700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027Welcome to our store\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-C1H7GVRS\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\shrad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51707}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 895b1520e67a951ca2caf157432bb680\n*** Element info: {Using\u003dxpath, value\u003d//h2[contains(text(),\u0027Welcome to our store\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.demo.nopcommerce.utility.Utility.getTextFromElement(Utility.java:56)\r\n\tat com.demo.nopcommerce.pages.LoginPage.welcomeToStore(LoginPage.java:68)\r\n\tat com.demo.nopcommerce.cucumber.stepdefs.LoginTest.iShouldBeLoginSuccessfully(LoginTest.java:44)\r\n\tat ✽.Then I should be login successfully(src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1280682700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify user should not login without email Id credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter email id \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be not login system throws \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 26,
      "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;1"
    },
    {
      "cells": [
        "",
        "45678@",
        "Please enter your email"
      ],
      "line": 27,
      "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;2"
    },
    {
      "cells": [
        "",
        "456fghem@",
        "Please enter your email"
      ],
      "line": 28,
      "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;3"
    },
    {
      "cells": [
        "",
        "sdfvgg45678@",
        "Please enter your email"
      ],
      "line": 29,
      "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;4"
    },
    {
      "cells": [
        "",
        "45678wedsc@",
        "Please enter your email"
      ],
      "line": 30,
      "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;5"
    },
    {
      "cells": [
        "",
        "45678wedsc@",
        "Please enter your email"
      ],
      "line": 31,
      "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13599934000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user should not login without email Id credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter email id \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"45678@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be not login system throws \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1264534800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterEmailId(String)"
});
formatter.result({
  "duration": 114950600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45678@",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 148072400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginTab()"
});
formatter.result({
  "duration": 191947400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 37
    }
  ],
  "location": "LoginTest.iShouldBeNotLoginSystemThrows(String)"
});
formatter.result({
  "duration": 79484900,
  "status": "passed"
});
formatter.after({
  "duration": 39200,
  "status": "passed"
});
formatter.before({
  "duration": 11259207300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify user should not login without email Id credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter email id \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"456fghem@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be not login system throws \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 166400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1333022000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterEmailId(String)"
});
formatter.result({
  "duration": 117206400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456fghem@",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 154374600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginTab()"
});
formatter.result({
  "duration": 174571000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 37
    }
  ],
  "location": "LoginTest.iShouldBeNotLoginSystemThrows(String)"
});
formatter.result({
  "duration": 71173000,
  "status": "passed"
});
formatter.after({
  "duration": 32400,
  "status": "passed"
});
formatter.before({
  "duration": 14028582300,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify user should not login without email Id credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter email id \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"sdfvgg45678@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be not login system throws \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1403365100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterEmailId(String)"
});
formatter.result({
  "duration": 123909900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdfvgg45678@",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 247928100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginTab()"
});
formatter.result({
  "duration": 167883700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 37
    }
  ],
  "location": "LoginTest.iShouldBeNotLoginSystemThrows(String)"
});
formatter.result({
  "duration": 78168700,
  "status": "passed"
});
formatter.after({
  "duration": 30400,
  "status": "passed"
});
formatter.before({
  "duration": 10793044200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify user should not login without email Id credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter email id \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"45678wedsc@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be not login system throws \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 782817200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterEmailId(String)"
});
formatter.result({
  "duration": 142613400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45678wedsc@",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 179293100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginTab()"
});
formatter.result({
  "duration": 207753300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 37
    }
  ],
  "location": "LoginTest.iShouldBeNotLoginSystemThrows(String)"
});
formatter.result({
  "duration": 76104300,
  "status": "passed"
});
formatter.after({
  "duration": 29000,
  "status": "passed"
});
formatter.before({
  "duration": 15254470100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify user should not login without email Id credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-without-email-id-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter email id \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"45678wedsc@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be not login system throws \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 23100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1175925000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterEmailId(String)"
});
formatter.result({
  "duration": 132737400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45678wedsc@",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 210403100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iClickOnLoginTab()"
});
formatter.result({
  "duration": 155329900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 37
    }
  ],
  "location": "LoginTest.iShouldBeNotLoginSystemThrows(String)"
});
formatter.result({
  "duration": 71741800,
  "status": "passed"
});
formatter.after({
  "duration": 27000,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Functionality",
  "description": "As a user\nI want to register on nop commerce website",
  "id": "register-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11399442500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to register page successfully",
  "description": "",
  "id": "register-functionality;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register feature",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be on register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterFeature()"
});
formatter.result({
  "duration": 1540296200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldBeOnRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 90658200,
  "status": "passed"
});
formatter.after({
  "duration": 22100,
  "status": "passed"
});
formatter.before({
  "duration": 15799119700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify user should register successfully with valid credentials",
  "description": "",
  "id": "register-functionality;verify-user-should-register-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on register feature",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select gender",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter user first name \"Jiya\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter last name \"Pandya\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select day of birth \"8\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select date of birth month \"april\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select date of birth year \"2010\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"email\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter company name \"Jiya limited\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on check box of news letter",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"Rahi0804\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter confirm password \"Rahi0804\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterFeature()"
});
formatter.result({
  "duration": 2896671100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iSelectGender()"
});
formatter.result({
  "duration": 116900700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jiya",
      "offset": 25
    }
  ],
  "location": "RegisterTest.iEnterUserFirstName(String)"
});
formatter.result({
  "duration": 187885000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pandya",
      "offset": 19
    }
  ],
  "location": "RegisterTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 173865100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 23
    }
  ],
  "location": "RegisterTest.iSelectDayOfBirth(String)"
});
formatter.result({
  "duration": 198894700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "april",
      "offset": 30
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthMonth(String)"
});
formatter.result({
  "duration": 134541000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010",
      "offset": 29
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthYear(String)"
});
formatter.result({
  "duration": 181526000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 9
    }
  ],
  "location": "RegisterTest.iEnter(String)"
});
formatter.result({
  "duration": 241083500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jiya limited",
      "offset": 22
    }
  ],
  "location": "RegisterTest.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 216250100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnCheckBoxOfNewsLetter()"
});
formatter.result({
  "duration": 112497000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahi0804",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 189696100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahi0804",
      "offset": 26
    }
  ],
  "location": "RegisterTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 163178300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 35715963700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iShouldRegisterSuccessfully()"
});
formatter.result({
  "duration": 67404600,
  "status": "passed"
});
formatter.after({
  "duration": 44900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Verify user should not register without last name",
  "description": "",
  "id": "register-functionality;verify-user-should-not-register-without-last-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on register feature",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select gender",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter user first name \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select day of birth \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select date of birth month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select date of birth year \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"\u003cemailId\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter company name \"\u003ccompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on check box of news letter",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should not register successfully \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "register-functionality;verify-user-should-not-register-without-last-name;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "day",
        "month",
        "year",
        "emailId",
        "companyName",
        "password",
        "confirmPassword",
        "errorMessage"
      ],
      "line": 45,
      "id": "register-functionality;verify-user-should-not-register-without-last-name;;1"
    },
    {
      "cells": [
        "bhavesh",
        "",
        "1",
        "1",
        "1985",
        "nirooshan@gmail.com",
        "abc limited",
        "coral12345@@",
        "coral12345@@",
        "Last name is required."
      ],
      "line": 46,
      "id": "register-functionality;verify-user-should-not-register-without-last-name;;2"
    },
    {
      "cells": [
        "lamee",
        "",
        "2",
        "2",
        "1975",
        "niron@gmail.com",
        "abd limited",
        "coral123@@",
        "coral123@@",
        "Last name is required."
      ],
      "line": 47,
      "id": "register-functionality;verify-user-should-not-register-without-last-name;;3"
    },
    {
      "cells": [
        "brijesh",
        "",
        "3",
        "3",
        "1995",
        "practice@gmail.com",
        "abs limited",
        "coral345@@",
        "coral345@@",
        "Last name is required."
      ],
      "line": 48,
      "id": "register-functionality;verify-user-should-not-register-without-last-name;;4"
    },
    {
      "cells": [
        "ankita",
        "",
        "4",
        "4",
        "1965",
        "return@gmail.com",
        "abq limited",
        "coral12345@@",
        "coral12345@@",
        "Last name is required."
      ],
      "line": 49,
      "id": "register-functionality;verify-user-should-not-register-without-last-name;;5"
    },
    {
      "cells": [
        "mey",
        "",
        "5",
        "5",
        "1970",
        "anusk@gmail.com",
        "abr limited",
        "coral1345@@",
        "coral1345@@",
        "Last name is required."
      ],
      "line": 50,
      "id": "register-functionality;verify-user-should-not-register-without-last-name;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11648392800,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify user should not register without last name",
  "description": "",
  "id": "register-functionality;verify-user-should-not-register-without-last-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on register feature",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select gender",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter user first name \"bhavesh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter last name \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select day of birth \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select date of birth month \"1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select date of birth year \"1985\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"nirooshan@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter company name \"abc limited\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on check box of news letter",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter password \"coral12345@@\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter confirm password \"coral12345@@\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should not register successfully \"Last name is required.\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 71700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterFeature()"
});
formatter.result({
  "duration": 1524782900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iSelectGender()"
});
formatter.result({
  "duration": 137349500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhavesh",
      "offset": 25
    }
  ],
  "location": "RegisterTest.iEnterUserFirstName(String)"
});
formatter.result({
  "duration": 201426000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "RegisterTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 128066000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "RegisterTest.iSelectDayOfBirth(String)"
});
formatter.result({
  "duration": 208259600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthMonth(String)"
});
formatter.result({
  "duration": 123359200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1985",
      "offset": 29
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthYear(String)"
});
formatter.result({
  "duration": 184819200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nirooshan@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 254449000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc limited",
      "offset": 22
    }
  ],
  "location": "RegisterTest.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 189988200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnCheckBoxOfNewsLetter()"
});
formatter.result({
  "duration": 100813500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coral12345@@",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 215701100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coral12345@@",
      "offset": 26
    }
  ],
  "location": "RegisterTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 203535600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 152910000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 36
    }
  ],
  "location": "RegisterTest.iShouldNotRegisterSuccessfully(String)"
});
formatter.result({
  "duration": 83123800,
  "status": "passed"
});
formatter.after({
  "duration": 32400,
  "status": "passed"
});
formatter.before({
  "duration": 14261449400,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Verify user should not register without last name",
  "description": "",
  "id": "register-functionality;verify-user-should-not-register-without-last-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on register feature",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select gender",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter user first name \"lamee\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter last name \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select day of birth \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select date of birth month \"2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select date of birth year \"1975\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"niron@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter company name \"abd limited\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on check box of news letter",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter password \"coral123@@\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter confirm password \"coral123@@\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should not register successfully \"Last name is required.\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 815400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterFeature()"
});
formatter.result({
  "duration": 1379035800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iSelectGender()"
});
formatter.result({
  "duration": 122512600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lamee",
      "offset": 25
    }
  ],
  "location": "RegisterTest.iEnterUserFirstName(String)"
});
formatter.result({
  "duration": 187830000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "RegisterTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 131053800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "RegisterTest.iSelectDayOfBirth(String)"
});
formatter.result({
  "duration": 176445400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthMonth(String)"
});
formatter.result({
  "duration": 122962500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1975",
      "offset": 29
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthYear(String)"
});
formatter.result({
  "duration": 178930300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "niron@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 234117100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abd limited",
      "offset": 22
    }
  ],
  "location": "RegisterTest.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 197113800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnCheckBoxOfNewsLetter()"
});
formatter.result({
  "duration": 107290000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coral123@@",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 204657700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coral123@@",
      "offset": 26
    }
  ],
  "location": "RegisterTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 179094400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 148211200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 36
    }
  ],
  "location": "RegisterTest.iShouldNotRegisterSuccessfully(String)"
});
formatter.result({
  "duration": 66155500,
  "status": "passed"
});
formatter.after({
  "duration": 516000,
  "status": "passed"
});
formatter.before({
  "duration": 11800630700,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Verify user should not register without last name",
  "description": "",
  "id": "register-functionality;verify-user-should-not-register-without-last-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on register feature",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select gender",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter user first name \"brijesh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter last name \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select day of birth \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select date of birth month \"3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select date of birth year \"1995\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"practice@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter company name \"abs limited\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on check box of news letter",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter password \"coral345@@\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter confirm password \"coral345@@\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should not register successfully \"Last name is required.\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterFeature()"
});
formatter.result({
  "duration": 6334062500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iSelectGender()"
});
formatter.result({
  "duration": 158592800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "brijesh",
      "offset": 25
    }
  ],
  "location": "RegisterTest.iEnterUserFirstName(String)"
});
formatter.result({
  "duration": 221122500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "RegisterTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 133568900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "RegisterTest.iSelectDayOfBirth(String)"
});
formatter.result({
  "duration": 247642700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthMonth(String)"
});
formatter.result({
  "duration": 123294300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1995",
      "offset": 29
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthYear(String)"
});
formatter.result({
  "duration": 195134400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "practice@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 306204100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abs limited",
      "offset": 22
    }
  ],
  "location": "RegisterTest.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 205301400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnCheckBoxOfNewsLetter()"
});
formatter.result({
  "duration": 107240700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coral345@@",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 206626500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coral345@@",
      "offset": 26
    }
  ],
  "location": "RegisterTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 197693700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 171088500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 36
    }
  ],
  "location": "RegisterTest.iShouldNotRegisterSuccessfully(String)"
});
formatter.result({
  "duration": 77727300,
  "status": "passed"
});
formatter.after({
  "duration": 48400,
  "status": "passed"
});
formatter.before({
  "duration": 14759392000,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verify user should not register without last name",
  "description": "",
  "id": "register-functionality;verify-user-should-not-register-without-last-name;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on register feature",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select gender",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter user first name \"ankita\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter last name \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select day of birth \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select date of birth month \"4\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select date of birth year \"1965\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"return@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter company name \"abq limited\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on check box of news letter",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter password \"coral12345@@\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter confirm password \"coral12345@@\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should not register successfully \"Last name is required.\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 24500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterFeature()"
});
formatter.result({
  "duration": 1601577300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iSelectGender()"
});
formatter.result({
  "duration": 112603700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ankita",
      "offset": 25
    }
  ],
  "location": "RegisterTest.iEnterUserFirstName(String)"
});
formatter.result({
  "duration": 202137400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "RegisterTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 133711900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "RegisterTest.iSelectDayOfBirth(String)"
});
formatter.result({
  "duration": 195440000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthMonth(String)"
});
formatter.result({
  "duration": 110382600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1965",
      "offset": 29
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthYear(String)"
});
formatter.result({
  "duration": 225545900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "return@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 265891700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abq limited",
      "offset": 22
    }
  ],
  "location": "RegisterTest.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 250016000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnCheckBoxOfNewsLetter()"
});
formatter.result({
  "duration": 125330900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coral12345@@",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 208757600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coral12345@@",
      "offset": 26
    }
  ],
  "location": "RegisterTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 229462100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 168415200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 36
    }
  ],
  "location": "RegisterTest.iShouldNotRegisterSuccessfully(String)"
});
formatter.result({
  "duration": 75663000,
  "status": "passed"
});
formatter.after({
  "duration": 22600,
  "status": "passed"
});
formatter.before({
  "duration": 11518188300,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Verify user should not register without last name",
  "description": "",
  "id": "register-functionality;verify-user-should-not-register-without-last-name;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on nop commerce Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on register feature",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select gender",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter user first name \"mey\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter last name \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select day of birth \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select date of birth month \"5\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select date of birth year \"1970\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"anusk@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter company name \"abr limited\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on check box of news letter",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter password \"coral1345@@\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter confirm password \"coral1345@@\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should not register successfully \"Last name is required.\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerTest.iAmOnNopCommerceHomePage()"
});
formatter.result({
  "duration": 30100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterFeature()"
});
formatter.result({
  "duration": 974216700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iSelectGender()"
});
formatter.result({
  "duration": 141661800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mey",
      "offset": 25
    }
  ],
  "location": "RegisterTest.iEnterUserFirstName(String)"
});
formatter.result({
  "duration": 126939000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "RegisterTest.iEnterLastName(String)"
});
formatter.result({
  "duration": 141885500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 23
    }
  ],
  "location": "RegisterTest.iSelectDayOfBirth(String)"
});
formatter.result({
  "duration": 179972600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthMonth(String)"
});
formatter.result({
  "duration": 120499300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1970",
      "offset": 29
    }
  ],
  "location": "RegisterTest.iSelectDateOfBirthYear(String)"
});
formatter.result({
  "duration": 175417500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anusk@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 231614600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abr limited",
      "offset": 22
    }
  ],
  "location": "RegisterTest.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 189112200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnCheckBoxOfNewsLetter()"
});
formatter.result({
  "duration": 109412000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coral1345@@",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 213639800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coral1345@@",
      "offset": 26
    }
  ],
  "location": "RegisterTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 197202700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 174564200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 36
    }
  ],
  "location": "RegisterTest.iShouldNotRegisterSuccessfully(String)"
});
formatter.result({
  "duration": 76226400,
  "status": "passed"
});
formatter.after({
  "duration": 24000,
  "status": "passed"
});
});