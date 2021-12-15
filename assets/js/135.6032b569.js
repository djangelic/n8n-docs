(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1336:function(e,t,o){e.exports=o.p+"assets/img/workflow.b27155a8.png"},1337:function(e,t,o){e.exports=o.p+"assets/img/Webflow_node.64abd059.png"},1338:function(e,t,o){e.exports=o.p+"assets/img/Webflow1_node.58e98fd8.png"},1339:function(e,t,o){e.exports=o.p+"assets/img/Webflow2_node.7233b56b.png"},2055:function(e,t,o){"use strict";o.r(t);var n=o(26),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"webflow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webflow"}},[e._v("#")]),e._v(" Webflow")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://webflow.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webflow"),n("OutboundLink")],1),e._v(" is an application that allows you to build responsive websites with browser-based visual editing software.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Webflow/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.webflow"}}),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create, update, and get an item from Webflow. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/1048",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Webflow")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1336),alt:"A workflow with the Webflow node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-webflow-node-create-item"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-webflow-node-create-item"}},[e._v("#")]),e._v(" 2. Webflow node (create: item)")]),e._v(" "),n("p",[e._v("This node will create a new collection of the type "),n("code",[e._v("Team Members")]),e._v(" in Webflow. If you want to create a collection with a different type, use that type instead.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Webflow node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Webflow/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Create' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select your site from the "),n("em",[n("strong",[e._v("Site ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Team Members' from the "),n("em",[n("strong",[e._v("Collection ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Name (PlainText) (required)' from the "),n("em",[n("strong",[e._v("Field ID")])]),e._v(" dropdown list. If you're using a different collection type, select the field present in that collection.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("n8n")]),e._v(" in the "),n("em",[n("strong",[e._v("Field Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Slug (PlainText) (required)' from the "),n("em",[n("strong",[e._v("Field ID")])]),e._v(" dropdown list. If you're using a different collection type, select the field present in that collection.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("n8n")]),e._v(" in the "),n("em",[n("strong",[e._v("Field Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Archived (Bool) (required)' from the "),n("em",[n("strong",[e._v("Field ID")])]),e._v(" dropdown list. If you're using a different collection type, select the field present in that collection.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("false")]),e._v(" in the "),n("em",[n("strong",[e._v("Field Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Draft (Bool) (required)' from the "),n("em",[n("strong",[e._v("Field ID")])]),e._v(" dropdown list. If you're using a different collection type, select the field present in that collection.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("false")]),e._v(" in the "),n("em",[n("strong",[e._v("Field Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a new item for the collection type "),n("code",[e._v("Team Members")]),e._v(" in Webflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1337),alt:"Using the Webflow node to create a new item"}})]),e._v(" "),n("h3",{attrs:{id:"_3-webflow1-node-update-item"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-webflow1-node-update-item"}},[e._v("#")]),e._v(" 3. Webflow1 node (update: item)")]),e._v(" "),n("p",[e._v("This node will update the item that we created using the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous Webflow node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select your site from the "),n("em",[n("strong",[e._v("Site ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Team Members' from the "),n("em",[n("strong",[e._v("Collection ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Item ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Property")])]),e._v(" button.\nClick on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Name (PlainText) (required)' from the "),n("em",[n("strong",[e._v("Field ID")])]),e._v(" dropdown list. If you're using a different collection type, select the field present in that collection.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Field Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > name. You can also add the following expression: "),n("code",[e._v('{{$json["name"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Slug (PlainText) (required)' from the "),n("em",[n("strong",[e._v("Field ID")])]),e._v(" dropdown list. If you're using a different collection type, select the field present in that collection.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Field Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > slug. You can also add the following expression: "),n("code",[e._v('{{$json["slug"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Archived (Bool) (required)' from the "),n("em",[n("strong",[e._v("Field ID")])]),e._v(" dropdown list. If you're using a different collection type, select the field present in that collection.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Field Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > _archived. You can also add the following expression: "),n("code",[e._v('{{$json["_archived"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Draft (Bool) (required)' from the "),n("em",[n("strong",[e._v("Field ID")])]),e._v(" dropdown list. If you're using a different collection type, select the field present in that collection.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Field Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > _draft. You can also add the following expression: "),n("code",[e._v('{{$json["_draft"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Select 'Avatar (ImageRef)' from the "),n("em",[n("strong",[e._v("Field ID")])]),e._v(" dropdown list. If you're using a different collection type, select the field present in that collection.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("https://n8n.io/n8n-logo.png")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node updates the item that got created previously.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1338),alt:"Using the Webflow node to update an item"}})]),e._v(" "),n("h3",{attrs:{id:"_4-webflow2-node-get-item"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-webflow2-node-get-item"}},[e._v("#")]),e._v(" 4. Webflow2 node (get: item)")]),e._v(" "),n("p",[e._v("This node will retrieve the information about the item that we created earlier.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous Webflow node.")]),e._v(" "),n("li",[e._v("Select your site from the "),n("em",[n("strong",[e._v("Site ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Team Members' from the "),n("em",[n("strong",[e._v("Collection ID")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Item ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > _id. You can also add the following expression: "),n("code",[e._v('{{$json["_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node retrieves the information of the item that we created earlier.")]),e._v(" "),n("p",[n("img",{pre:!0,attrs:{src:o(1339),alt:"Using the Webflow node to retrieve the information of an item"}})])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);