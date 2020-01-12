$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Campaings.feature");
formatter.feature({
  "line": 1,
  "name": "Campaigns Page Validation",
  "description": "",
  "id": "campaigns-page-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Create new email content template",
  "description": "",
  "id": "campaigns-page-validation;create-new-email-content-template",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User navigates to campaings page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks template",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks new content template",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters name, subject, body in the field \"\u003cname\u003e\", \"\u003csubject\u003e\", \"\u003cbody\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be directed to the Content Templates Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "campaigns-page-validation;create-new-email-content-template;",
  "rows": [
    {
      "cells": [
        "name",
        "subject",
        "body"
      ],
      "line": 16,
      "id": "campaigns-page-validation;create-new-email-content-template;;1"
    },
    {
      "cells": [
        "Sanjay",
        "Batch 2",
        "Start date Feb 22, 2020"
      ],
      "line": 17,
      "id": "campaigns-page-validation;create-new-email-content-template;;2"
    },
    {
      "cells": [
        "Rajesh",
        "Batch 2",
        "Start date FEb 22, 2020"
      ],
      "line": 18,
      "id": "campaigns-page-validation;create-new-email-content-template;;3"
    },
    {
      "cells": [
        "Rajesh",
        "Batch 2",
        "Start date FEb 22, 2020"
      ],
      "line": 19,
      "id": "campaigns-page-validation;create-new-email-content-template;;4"
    },
    {
      "cells": [
        "Rajesh",
        "Batch 2",
        "Start date FEb 22, 2020"
      ],
      "line": 20,
      "id": "campaigns-page-validation;create-new-email-content-template;;5"
    },
    {
      "cells": [
        "Rajesh",
        "Batch 2",
        "Start date FEb 22, 2020"
      ],
      "line": 21,
      "id": "campaigns-page-validation;create-new-email-content-template;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7238626346,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 873686326,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Create new email content template",
  "description": "",
  "id": "campaigns-page-validation;create-new-email-content-template;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User navigates to campaings page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks template",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks new content template",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters name, subject, body in the field \"Sanjay\", \"Batch 2\", \"Start date Feb 22, 2020\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be directed to the Content Templates Page",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaingStepDefinition.navigateToPage()"
});
formatter.result({
  "duration": 2330056701,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.clickTemplate()"
});
formatter.result({
  "duration": 350737674,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.clickContent()"
});
formatter.result({
  "duration": 303851633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanjay",
      "offset": 46
    },
    {
      "val": "Batch 2",
      "offset": 56
    },
    {
      "val": "Start date Feb 22, 2020",
      "offset": 67
    }
  ],
  "location": "CampaingStepDefinition.enterEmailData(String,String,String)"
});
formatter.result({
  "duration": 1157168699,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.saveClick()"
});
formatter.result({
  "duration": 165215061,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.inContentTempPage()"
});
formatter.result({
  "duration": 111780,
  "status": "passed"
});
formatter.after({
  "duration": 944389867,
  "status": "passed"
});
formatter.before({
  "duration": 6112867338,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 558743838,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create new email content template",
  "description": "",
  "id": "campaigns-page-validation;create-new-email-content-template;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User navigates to campaings page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks template",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks new content template",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters name, subject, body in the field \"Rajesh\", \"Batch 2\", \"Start date FEb 22, 2020\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be directed to the Content Templates Page",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaingStepDefinition.navigateToPage()"
});
formatter.result({
  "duration": 4566742244,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.clickTemplate()"
});
formatter.result({
  "duration": 527987193,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.clickContent()"
});
formatter.result({
  "duration": 400565245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajesh",
      "offset": 46
    },
    {
      "val": "Batch 2",
      "offset": 56
    },
    {
      "val": "Start date FEb 22, 2020",
      "offset": 67
    }
  ],
  "location": "CampaingStepDefinition.enterEmailData(String,String,String)"
});
formatter.result({
  "duration": 1811157853,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.saveClick()"
});
formatter.result({
  "duration": 247209391,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.inContentTempPage()"
});
formatter.result({
  "duration": 46192,
  "status": "passed"
});
formatter.after({
  "duration": 1615422752,
  "status": "passed"
});
formatter.before({
  "duration": 7121479298,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 961135285,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create new email content template",
  "description": "",
  "id": "campaigns-page-validation;create-new-email-content-template;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User navigates to campaings page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks template",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks new content template",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters name, subject, body in the field \"Rajesh\", \"Batch 2\", \"Start date FEb 22, 2020\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be directed to the Content Templates Page",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaingStepDefinition.navigateToPage()"
});
formatter.result({
  "duration": 2927903623,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.clickTemplate()"
});
formatter.result({
  "duration": 587265950,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.clickContent()"
});
formatter.result({
  "duration": 359615507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajesh",
      "offset": 46
    },
    {
      "val": "Batch 2",
      "offset": 56
    },
    {
      "val": "Start date FEb 22, 2020",
      "offset": 67
    }
  ],
  "location": "CampaingStepDefinition.enterEmailData(String,String,String)"
});
formatter.result({
  "duration": 1137388662,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.saveClick()"
});
formatter.result({
  "duration": 167806794,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.inContentTempPage()"
});
formatter.result({
  "duration": 191118,
  "status": "passed"
});
formatter.after({
  "duration": 1008121116,
  "status": "passed"
});
formatter.before({
  "duration": 6048407230,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 713560230,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Create new email content template",
  "description": "",
  "id": "campaigns-page-validation;create-new-email-content-template;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User navigates to campaings page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks template",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks new content template",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters name, subject, body in the field \"Rajesh\", \"Batch 2\", \"Start date FEb 22, 2020\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be directed to the Content Templates Page",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaingStepDefinition.navigateToPage()"
});
formatter.result({
  "duration": 2188744826,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.clickTemplate()"
});
formatter.result({
  "duration": 242519941,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.clickContent()"
});
formatter.result({
  "duration": 263288716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajesh",
      "offset": 46
    },
    {
      "val": "Batch 2",
      "offset": 56
    },
    {
      "val": "Start date FEb 22, 2020",
      "offset": 67
    }
  ],
  "location": "CampaingStepDefinition.enterEmailData(String,String,String)"
});
formatter.result({
  "duration": 1095459707,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.saveClick()"
});
formatter.result({
  "duration": 164456582,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.inContentTempPage()"
});
formatter.result({
  "duration": 89565,
  "status": "passed"
});
formatter.after({
  "duration": 1045822901,
  "status": "passed"
});
formatter.before({
  "duration": 6973011065,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 611503769,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create new email content template",
  "description": "",
  "id": "campaigns-page-validation;create-new-email-content-template;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User navigates to campaings page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks template",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks new content template",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters name, subject, body in the field \"Rajesh\", \"Batch 2\", \"Start date FEb 22, 2020\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should be directed to the Content Templates Page",
  "keyword": "Then "
});
formatter.match({
  "location": "CampaingStepDefinition.navigateToPage()"
});
formatter.result({
  "duration": 2064442830,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.clickTemplate()"
});
formatter.result({
  "duration": 738887283,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.clickContent()"
});
formatter.result({
  "duration": 496925887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajesh",
      "offset": 46
    },
    {
      "val": "Batch 2",
      "offset": 56
    },
    {
      "val": "Start date FEb 22, 2020",
      "offset": 67
    }
  ],
  "location": "CampaingStepDefinition.enterEmailData(String,String,String)"
});
formatter.result({
  "duration": 1099676650,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.saveClick()"
});
formatter.result({
  "duration": 142033682,
  "status": "passed"
});
formatter.match({
  "location": "CampaingStepDefinition.inContentTempPage()"
});
formatter.result({
  "duration": 62413,
  "status": "passed"
});
formatter.after({
  "duration": 1283244004,
  "status": "passed"
});
formatter.uri("Forms.feature");
formatter.feature({
  "line": 1,
  "name": "Forms Page functionality Validation",
  "description": "",
  "id": "forms-page-functionality-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5828406454,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 559493854,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#this is not data driven, because we are not passing any data"
    }
  ],
  "line": 8,
  "name": "Delete first row from froms table",
  "description": "",
  "id": "forms-page-functionality-validation;delete-first-row-from-froms-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User navigates to forms page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click delete icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks delete button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be directed to Forms page",
  "keyword": "Then "
});
formatter.match({
  "location": "FormsStepDefinition.navtoPage()"
});
formatter.result({
  "duration": 2331170970,
  "status": "passed"
});
formatter.match({
  "location": "FormsStepDefinition.clickDelIcon()"
});
formatter.result({
  "duration": 3409041799,
  "status": "passed"
});
formatter.match({
  "location": "FormsStepDefinition.clicDelButton()"
});
formatter.result({
  "duration": 363139559,
  "status": "passed"
});
formatter.match({
  "location": "FormsStepDefinition.isFormPage()"
});
formatter.result({
  "duration": 75107,
  "status": "passed"
});
formatter.after({
  "duration": 1033477789,
  "status": "passed"
});
formatter.before({
  "duration": 6253422146,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 581158275,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#Cucumber Data Driven Approach type 2 using dataTables with Scenario"
    }
  ],
  "line": 28,
  "name": "Create new form",
  "description": "",
  "id": "forms-page-functionality-validation;create-new-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@SmokeTest"
    },
    {
      "line": 27,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User navigates to forms page",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User clicks New",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enters  form data",
  "rows": [
    {
      "cells": [
        "name",
        "introductionText",
        "completionText"
      ],
      "line": 32
    },
    {
      "cells": [
        "Mike",
        "Current Student",
        "Databale Approach 2"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User clicks save",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should be directed to Active page",
  "keyword": "Then "
});
formatter.match({
  "location": "FormsStepDefinition.navtoPage()"
});
formatter.result({
  "duration": 2416807125,
  "status": "passed"
});
formatter.match({
  "location": "TasksStepDefinition.clickNew()"
});
formatter.result({
  "duration": 379109219,
  "status": "passed"
});
formatter.match({
  "location": "FormsStepDefinition.enterData(DataTable)"
});
formatter.result({
  "duration": 852719380,
  "status": "passed"
});
formatter.match({
  "location": "FormsStepDefinition.clickSave()"
});
formatter.result({
  "duration": 101136131,
  "status": "passed"
});
formatter.match({
  "location": "FormsStepDefinition.toActivePage()"
});
formatter.result({
  "duration": 69113,
  "status": "passed"
});
formatter.after({
  "duration": 1009656057,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 38,
      "value": "#Cucumber Data Driven Approach type 3 using Scenario Outline"
    }
  ],
  "line": 40,
  "name": "Create new form",
  "description": "",
  "id": "forms-page-functionality-validation;create-new-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User navigates to forms page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User clicks New",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User enters form field data \"\u003cname\u003e\",\"\u003cintroductionText\u003e\",\"\u003ccompletionText\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User clicks save",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User should be directed to Active page",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "forms-page-functionality-validation;create-new-form;",
  "rows": [
    {
      "cells": [
        "name",
        "introductionText",
        "completionText"
      ],
      "line": 48,
      "id": "forms-page-functionality-validation;create-new-form;;1"
    },
    {
      "cells": [
        "Tim",
        "Developer",
        "works from home"
      ],
      "line": 49,
      "id": "forms-page-functionality-validation;create-new-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6401335359,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 793286882,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Create new form",
  "description": "",
  "id": "forms-page-functionality-validation;create-new-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User navigates to forms page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User clicks New",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User enters form field data \"Tim\",\"Developer\",\"works from home\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User clicks save",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User should be directed to Active page",
  "keyword": "Then "
});
formatter.match({
  "location": "FormsStepDefinition.navtoPage()"
});
formatter.result({
  "duration": 2798089170,
  "status": "passed"
});
formatter.match({
  "location": "TasksStepDefinition.clickNew()"
});
formatter.result({
  "duration": 480188226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tim",
      "offset": 29
    },
    {
      "val": "Developer",
      "offset": 35
    },
    {
      "val": "works from home",
      "offset": 47
    }
  ],
  "location": "FormsStepDefinition.enterFormFieldData(String,String,String)"
});
formatter.result({
  "duration": 891579511,
  "status": "passed"
});
formatter.match({
  "location": "FormsStepDefinition.clickSave()"
});
formatter.result({
  "duration": 132066616,
  "status": "passed"
});
formatter.match({
  "location": "FormsStepDefinition.toActivePage()"
});
formatter.result({
  "duration": 40550,
  "status": "passed"
});
formatter.after({
  "duration": 1021082956,
  "status": "passed"
});
formatter.uri("Tasks.feature");
formatter.feature({
  "line": 1,
  "name": "Tasks Page functionality Validation",
  "description": "",
  "id": "tasks-page-functionality-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6130479136,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 776319316,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Create tasks without providing any data",
  "description": "",
  "id": "tasks-page-functionality-validation;create-tasks-without-providing-any-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@SmokeTest"
    },
    {
      "line": 6,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User navigates to tasks page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks New",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User saves the task",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "it should display error \"SHould Fail\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.navToTask()"
});
formatter.result({
  "duration": 2173951142,
  "status": "passed"
});
formatter.match({
  "location": "TasksStepDefinition.clickNew()"
});
formatter.result({
  "duration": 827114466,
  "status": "passed"
});
formatter.match({
  "location": "TasksStepDefinition.saveTask()"
});
formatter.result({
  "duration": 197411088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SHould Fail",
      "offset": 25
    }
  ],
  "location": "TasksStepDefinition.expectedError(String)"
});
formatter.result({
  "duration": 100827592,
  "error_message": "java.lang.AssertionError: expected [The field Title is required] but found [SHould Fail]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat com.noorteck.qa.steps.TasksStepDefinition.expectedError(TasksStepDefinition.java:30)\r\n\tat ✽.Then it should display error \"SHould Fail\"(Tasks.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 985565985,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Create tasks with only required field data",
  "description": "",
  "id": "tasks-page-functionality-validation;create-tasks-with-only-required-field-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User navigates to tasks page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User clicks New",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters task title \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User saves the task",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the title of task should be displayed \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "tasks-page-functionality-validation;create-tasks-with-only-required-field-data;",
  "rows": [
    {
      "cells": [
        "title"
      ],
      "line": 22,
      "id": "tasks-page-functionality-validation;create-tasks-with-only-required-field-data;;1"
    },
    {
      "cells": [
        "Java Programming"
      ],
      "line": 23,
      "id": "tasks-page-functionality-validation;create-tasks-with-only-required-field-data;;2"
    },
    {
      "cells": [
        "Selenium"
      ],
      "line": 24,
      "id": "tasks-page-functionality-validation;create-tasks-with-only-required-field-data;;3"
    },
    {
      "cells": [
        "Cucumber"
      ],
      "line": 25,
      "id": "tasks-page-functionality-validation;create-tasks-with-only-required-field-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5772126703,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 641318575,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Create tasks with only required field data",
  "description": "",
  "id": "tasks-page-functionality-validation;create-tasks-with-only-required-field-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User navigates to tasks page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User clicks New",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters task title \"Java Programming\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User saves the task",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the title of task should be displayed \"Java Programming\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.navToTask()"
});
formatter.result({
  "duration": 2165231987,
  "status": "passed"
});
formatter.match({
  "location": "TasksStepDefinition.clickNew()"
});
formatter.result({
  "duration": 1109945908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java Programming",
      "offset": 24
    }
  ],
  "location": "TasksStepDefinition.taskData(String)"
});
formatter.result({
  "duration": 831298265,
  "status": "passed"
});
formatter.match({
  "location": "TasksStepDefinition.saveTask()"
});
formatter.result({
  "duration": 148953786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java Programming",
      "offset": 39
    }
  ],
  "location": "TasksStepDefinition.expectedTitle(String)"
});
formatter.result({
  "duration": 430052822,
  "status": "passed"
});
formatter.after({
  "duration": 1605966981,
  "status": "passed"
});
formatter.before({
  "duration": 6193899729,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 619638639,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Create tasks with only required field data",
  "description": "",
  "id": "tasks-page-functionality-validation;create-tasks-with-only-required-field-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User navigates to tasks page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User clicks New",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters task title \"Selenium\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User saves the task",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the title of task should be displayed \"Selenium\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.navToTask()"
});
formatter.result({
  "duration": 2607941635,
  "status": "passed"
});
formatter.match({
  "location": "TasksStepDefinition.clickNew()"
});
formatter.result({
  "duration": 452710212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 24
    }
  ],
  "location": "TasksStepDefinition.taskData(String)"
});
formatter.result({
  "duration": 379247445,
  "status": "passed"
});
formatter.match({
  "location": "TasksStepDefinition.saveTask()"
});
formatter.result({
  "duration": 136359021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 39
    }
  ],
  "location": "TasksStepDefinition.expectedTitle(String)"
});
formatter.result({
  "duration": 441124989,
  "status": "passed"
});
formatter.after({
  "duration": 1035929885,
  "status": "passed"
});
formatter.before({
  "duration": 6143028414,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is logged in and in CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Hooks.login()"
});
formatter.result({
  "duration": 615983766,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create tasks with only required field data",
  "description": "",
  "id": "tasks-page-functionality-validation;create-tasks-with-only-required-field-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User navigates to tasks page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User clicks New",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters task title \"Cucumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User saves the task",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the title of task should be displayed \"Cucumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TasksStepDefinition.navToTask()"
});
formatter.result({
  "duration": 2753547677,
  "status": "passed"
});
formatter.match({
  "location": "TasksStepDefinition.clickNew()"
});
formatter.result({
  "duration": 693564039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 24
    }
  ],
  "location": "TasksStepDefinition.taskData(String)"
});
formatter.result({
  "duration": 563761574,
  "status": "passed"
});
formatter.match({
  "location": "TasksStepDefinition.saveTask()"
});
formatter.result({
  "duration": 164161442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 39
    }
  ],
  "location": "TasksStepDefinition.expectedTitle(String)"
});
formatter.result({
  "duration": 954355875,
  "status": "passed"
});
formatter.after({
  "duration": 1269912974,
  "status": "passed"
});
});