(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{1847:function(t,e,a){"use strict";a.r(e);var n=a(26),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"aws-dynamodb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aws-dynamodb"}},[t._v("#")]),t._v(" AWS DynamoDB")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://aws.amazon.com/DynamoDB/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS DynamoDB"),n("OutboundLink")],1),t._v(" is a key-value and document database provided by Amazon as a part of Amazon Web Services.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),n("p",[t._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/AWS/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic operations")]),t._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.awsDynamoDb"}}),t._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example usage")]),t._v(" "),n("p",[t._v("This workflow allows you to insert an item into your DynamoDB database. This example usage workflow would use the following two nodes.")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[t._v("Function")])],1),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("AWS DynamoDB")])])]),t._v(" "),n("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(775),alt:"A workflow with the AWS DynamoDB node"}})]),t._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),n("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),n("h3",{attrs:{id:"_2-function-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-function-node"}},[t._v("#")]),t._v(" 2. Function node")]),t._v(" "),n("p",[t._v("The function node will return the item to insert, "),n("a",{attrs:{href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("properly formatted"),n("OutboundLink")],1),t._v(" for our table structure "),n("code",[t._v("id: number")]),t._v(".")]),t._v(" "),n("ol",[n("li",[t._v("Enter the following snippet:"),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'N'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),n("h3",{attrs:{id:"_3-aws-dynamodb-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-aws-dynamodb-node"}},[t._v("#")]),t._v(" 3. AWS DynamoDB node")]),t._v(" "),n("ol",[n("li",[t._v("First enter credentials for the AWS DynamoDB node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/AWS/"}},[t._v("here")]),t._v(".")],1),t._v(" "),n("li",[t._v("The "),n("strong",[t._v("Item")]),t._v(" "),n("em",[n("strong",[t._v("Resource")])]),t._v(" is selected by default.")]),t._v(" "),n("li",[t._v("Select the "),n("strong",[t._v("Create or Update")]),t._v(" "),n("em",[n("strong",[t._v("Operation")])]),t._v(".")]),t._v(" "),n("li",[t._v("Enter the "),n("em",[n("strong",[t._v("Table Name")])]),t._v(" where you are inserting data.")]),t._v(" "),n("li",[t._v("In "),n("em",[n("strong",[t._v("Data to Send")])]),t._v(" select "),n("strong",[t._v("Define Below for Each Column")]),t._v(".")]),t._v(" "),n("li",[t._v("Click on "),n("em",[t._v("Execute Node")]),t._v(" to run the workflow.")])])],1)}),[],!1,null,null,null);e.default=o.exports},775:function(t,e,a){t.exports=a.p+"assets/img/workflow.5eb9cf96.png"}}]);