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
formatter.match({
  "location": "AddCustomerSteps.user_launches_demo_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Customer validation by using 2 dim map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@2DMap"
    },
    {
      "name": "@reg"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters all the fields by two dim map concept",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "mail",
        "addr",
        "phno"
      ]
    },
    {
      "cells": [
        "karthi",
        "rajan",
        "rajan@gmail.com",
        "tanjore",
        "767665453"
      ]
    },
    {
      "cells": [
        "java",
        "rajan",
        "rajan@gmail.com",
        "tanjore",
        "867665453"
      ]
    },
    {
      "cells": [
        "selenium",
        "rajan",
        "rajan@gmail.com",
        "tanjore",
        "967665453"
      ]
    },
    {
      "cells": [
        "project",
        "rajan",
        "rajan@gmail.com",
        "tanjore",
        "667665453"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.user_enters_all_the_fields_by_two_dim_map_concept(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.user_verify_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/AddTariffPlan.feature");
formatter.feature({
  "name": "Add Tariff Plan",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.scenario({
  "name": "AddTarficplan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch demo telecom webpages",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_launch_demo_telecom_webpages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on addtarficplan button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_on_addtarficplan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the all fileds by using one dim map",
  "rows": [
    {
      "cells": [
        "rental",
        "1"
      ]
    },
    {
      "cells": [
        "local_minutes",
        "2"
      ]
    },
    {
      "cells": [
        "inter_minutes",
        "3"
      ]
    },
    {
      "cells": [
        "sms_pac",
        "4"
      ]
    },
    {
      "cells": [
        "minutes_charges",
        "5"
      ]
    },
    {
      "cells": [
        "inter_charges",
        "6"
      ]
    },
    {
      "cells": [
        "sms_charges",
        "2"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_the_all_fileds_by_using_one_dim_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the submit butto",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_click_the_submit_butto()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});