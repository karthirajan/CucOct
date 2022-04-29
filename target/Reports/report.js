$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "Add Customer flow validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches demo telecom application",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Add Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@Data"
    }
  ]
});
formatter.step({
  "name": "user enters all the fields",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user verify customer id is generated",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});