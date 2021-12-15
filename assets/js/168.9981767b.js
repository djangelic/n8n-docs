(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1174:function(e,t,o){e.exports=o.p+"assets/img/workflow.fef2d4d7.png"},1175:function(e,t,o){e.exports=o.p+"assets/img/Webhook_node.2bebda46.png"},1176:function(e,t,o){e.exports=o.p+"assets/img/PostHog_node.44a58937.png"},2e3:function(e,t,o){"use strict";o.r(t);var s=o(26),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"posthog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#posthog"}},[e._v("#")]),e._v(" PostHog")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://posthog.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostHog"),s("OutboundLink")],1),e._v(" is an open-source product analytics platform. It provides tools to improve your product, such as session recording, heatmaps, and feature flags.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/PostHog/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("Resource",{attrs:{node:"n8n-nodes-base.postHog"}}),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to create an event in PostHog when a request is made to a webhook URL. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/968",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Webhook/"}},[e._v("Webhook")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("PostHog")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1174),alt:"A workflow with the PostHog node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-webhook-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-webhook-node"}},[e._v("#")]),e._v(" 1. Webhook node")]),e._v(" "),s("p",[e._v("This node will trigger the workflow. We will make a GET request to the test webhook URL and pass on a query parameter called  "),s("code",[e._v("event")]),e._v(".")]),e._v(" "),s("ol",[s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Webhook URLs")])]),e._v(" and select the 'Test' tab.")]),e._v(" "),s("li",[e._v("Copy the displayed URL. We will make a GET request to this URL later on.")]),e._v(" "),s("li",[e._v("Save the workflow to register the webhook.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")]),e._v(" "),s("li",[e._v("In a new browser tab, paste the URL that you copied in the previous step and append "),s("code",[e._v("?event=login")]),e._v(" to it. Your URL should look similar to the following URL:"),s("code",[e._v("https://your-n8n.url/webhook/path?event=login")]),e._v(". Here, we are passing a query parameter called "),s("code",[e._v("event")]),e._v(" and assigning the value "),s("code",[e._v("login")]),e._v(" to it.")]),e._v(" "),s("li",[e._v("Press Enter (or Return) to make a request to the test webhook URL.")])]),e._v(" "),s("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow and receives a query parameter. We will use the value of the query parameter in the next node in the workflow.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1175),alt:"Using the Webhook node to trigger the workflow"}})]),e._v(" "),s("h3",{attrs:{id:"_2-posthog-node-create-customer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-posthog-node-create-customer"}},[e._v("#")]),e._v(" 2. PostHog node (create:customer)")]),e._v(" "),s("p",[e._v("This node will create a new event in PostHog.")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the PostHog node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/PostHog/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("Event")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),s("div",{pre:!0},[s("ol",{pre:!0,attrs:{start:"3"}},[s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > query > event. You can also add the following expression: "),s("code",[e._v('{{$json["query"]["event"]}}')]),e._v(".")])])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("Enter a distinct id in the "),s("em",[s("strong",[e._v("Distinct ID")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[e._v("In the screenshot below, you will notice that the node creates a new event in PostHog.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1176),alt:"Using the PostHog node to create a new event"}})]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),s("p",[e._v("This example workflow uses the Webhook node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered every time a GET request is sent to the "),s("em",[s("strong",[e._v("Production")])]),e._v(" webhook URL.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);