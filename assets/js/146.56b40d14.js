(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1798:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"activation-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#activation-trigger"}},[e._v("#")]),e._v(" Activation Trigger")]),e._v(" "),r("p",[e._v("The Activation Trigger node gets triggered when an event gets fired by n8n or a workflow.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("The Activation Trigger node has been deprecated. It has been replaced by two new nodes - the "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/n8nTrigger/"}},[e._v("n8n Trigger")]),e._v(" and the "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/WorkflowTrigger/"}},[e._v("Workflow Trigger")]),e._v(" node. For more details, check out the entry in the "),r("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01170",target:"_blank",rel:"noopener noreferrer"}},[e._v("breaking changes"),r("OutboundLink")],1),e._v(" page.")],1)]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),r("p",[e._v("If you want to use the Activation Trigger node for a workflow, add the node to the workflow. You don't have to create a separate workflow.")])]),e._v(" "),r("p",[e._v("The Activation Trigger node gets triggered for the workflow that it gets added to. The Activation Trigger node can be used to trigger a workflow to notify the state of the workflow.")]),e._v(" "),r("h2",{attrs:{id:"node-reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),r("ul",[r("li",[e._v("Events\n"),r("ul",[r("li",[r("em",[r("strong",[e._v("Activation:")])]),e._v(" Run when the workflow gets activated")]),e._v(" "),r("li",[r("em",[r("strong",[e._v("Start:")])]),e._v(" Run when n8n starts or restarts")]),e._v(" "),r("li",[r("em",[r("strong",[e._v("Update:")])]),e._v(" Run when the workflow gets saved while it is active")])])])]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to receive a message on Mattermost when a workflow is updated. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/1033",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:""}},[e._v("Activation Trigger")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mattermost/"}},[e._v("Mattermost")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(649),alt:"A workflow with the Webhook node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-activation-trigger-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-activation-trigger-node"}},[e._v("#")]),e._v(" 1. Activation Trigger node")]),e._v(" "),r("p",[e._v("Open the workflow where you want to add the activation workflow. Add the Activation Trigger node to the workflow.")]),e._v(" "),r("p",[e._v("The Activation Trigger node will trigger the workflow when the workflow gets updated.")]),e._v(" "),r("ol",[r("li",[e._v("Select 'Update' from the "),r("em",[r("strong",[e._v("Events")])]),e._v(" dropdown list.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow when the workflow gets updated.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(650),alt:"Using the Activation Trigger node to trigger the workflow"}})]),e._v(" "),r("h3",{attrs:{id:"_2-mattermost-node-post-message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-mattermost-node-post-message"}},[e._v("#")]),e._v(" 2. Mattermost node (post: message)")]),e._v(" "),r("p",[e._v("This node will send a message in the "),r("code",[e._v("workflow")]),e._v(" channel on Mattermost.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to enter credentials for this node "),r("RouterLink",{pre:!0,attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select a channel from the "),r("em",[r("strong",[e._v("Channel ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Message")])]),e._v(" field click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),r("div",{pre:!0,attrs:{"v-pre":""}},[r("ol",{pre:!0,attrs:{start:"4"}},[r("li",[e._v("Enter the following message in the "),r("em",[r("strong",[e._v("Expression")])]),e._v(" field: "),r("code",[e._v("The workflow {{$workflow.name}}, was updated.")]),e._v(". "),r("code",[e._v("$workflow.name")]),e._v(" returns the name of the workflow.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])])])]),r("p",[e._v("In the screenshot below, you will notice that the node sends a message to Mattermost.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(651),alt:"Using the Mattermost node to send a message to a channel"}})])])}),[],!1,null,null,null);t.default=n.exports},649:function(e,t,o){e.exports=o.p+"assets/img/workflow.640e86da.png"},650:function(e,t,o){e.exports=o.p+"assets/img/ActivationTrigger_node.7149e2cf.png"},651:function(e,t,o){e.exports=o.p+"assets/img/Mattermost_node.2b4d931b.png"}}]);