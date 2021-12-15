(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1054:function(t,e,o){t.exports=o.p+"assets/img/workflow.419e8d06.png"},1055:function(t,e,o){t.exports=o.p+"assets/img/HTTPRequest_node.b79ebef2.png"},1056:function(t,e,o){t.exports=o.p+"assets/img/LingvaNex_node.696ecd7a.png"},1949:function(t,e,o){"use strict";o.r(e);var n=o(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"lingvanex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lingvanex"}},[t._v("#")]),t._v(" LingvaNex")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://lingvanex.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("LingvaNex"),n("OutboundLink")],1),t._v(" is a service that translates text, web pages, text on images, documents between English and over 112 other languages.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),n("p",[t._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/LingvaNex/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),n("Resource",{attrs:{node:"n8n-nodes-base.lingvaNex"}}),t._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),n("p",[t._v("This workflow allows you to translate cocktail instructions to Italian. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/797",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),n("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow uses the following nodes.")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[t._v("HTTP Request")])],1),t._v(" "),n("li",[n("a",{attrs:{href:""}},[t._v("LingvaNex")])])]),t._v(" "),n("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1054),alt:"A workflow with the LingvaNex node"}})]),t._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),n("p",[t._v("The Start node exists by default when you create a new workflow.")]),t._v(" "),n("h3",{attrs:{id:"_2-http-request-node-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[t._v("#")]),t._v(" 2. HTTP Request node (GET)")]),t._v(" "),n("p",[t._v("This node will make a GET request to the API "),n("code",[t._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),t._v(" to fetch a random cocktail. This information gets passed on to the next node in the workflow.")]),t._v(" "),n("ol",[n("li",[t._v("Enter "),n("code",[t._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),t._v(" in the "),n("em",[n("strong",[t._v("URL")])]),t._v(" field.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),n("p",[t._v("In the screenshot below, you will notice that the node makes a GET request to the API and returns information about a random cocktail.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1055),alt:"Using the HTTP Request node to get the information about a random cocktail"}})]),t._v(" "),n("h3",{attrs:{id:"_3-lingvanex-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-lingvanex-node"}},[t._v("#")]),t._v(" 3. LingvaNex node")]),t._v(" "),n("p",[t._v("This node will translate the cocktail instructions that we got from the previous node to Italian. To translate the instructions in your language, select your language instead.")]),t._v(" "),n("ol",[n("li",[t._v("First of all, you'll have to enter credentials for the LingvaNex node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/LingvaNex/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"2"}},[n("li",[t._v("Click on the gears icon next to the "),n("em",[n("strong",[t._v("Text")])]),t._v(" field and click on "),n("em",[n("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),n("li",[t._v("Select the following in the "),n("em",[n("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > HTTP Request > Output Data > JSON > drinks > [item: 0] > strInstructions. You can also add the following expression: "),n("code",[t._v('{{$node["HTTP Request"].json["drinks"][0]["strInstructions"]}}')]),t._v(".")]),t._v(" "),n("li",[t._v("Select 'Italian' from the "),n("em",[n("strong",[t._v("Translate To")])]),t._v(" dropdown list.")]),t._v(" "),n("li",[t._v("Click on "),n("em",[n("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),n("p",[t._v("In the screenshot below, you will notice that the node translates the instructions of the cocktail to Italian.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1056),alt:"Using the LingvaNex node to translate the instructions to Italian"}})]),t._v(" "),n("h2",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),n("FurtherReadingBlog")],1)}),[],!1,null,null,null);e.default=a.exports}}]);