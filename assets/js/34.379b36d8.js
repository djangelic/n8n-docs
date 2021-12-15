(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1549:function(e,t,a){"use strict";a.r(t);var r=a(26),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_2-inserting-data-into-airtable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-inserting-data-into-airtable"}},[e._v("#")]),e._v(" 2. Inserting Data into Airtable")]),e._v(" "),r("p",[e._v("In this step of the workflow you will learn how to insert the data received via the HTTP Request node into Airtable using the "),r("em",[e._v("Airtable")]),e._v(" node.")]),e._v(" "),r("p",[e._v("At this point, your workflow should look like this:")]),e._v(" "),r("figure",[r("img",{staticStyle:{width:"100%"},attrs:{src:a(414),alt:"Workflow with the Airtable node"}}),r("figcaption",{attrs:{align:"center"}},[r("i",[e._v("Workflow with the Airtable node")])])]),e._v(" "),r("p",[e._v("If we are going to insert data into Airtable, we first need to set up a table there. To do this:")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://airtable.com/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create an Airtable account"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("In your Airtable workspace add a new base from scratch and name it, for example, "),r("em",[e._v("beginner course")]),e._v(".")])]),e._v(" "),r("figure",[r("img",{staticStyle:{width:"100%"},attrs:{src:a(415),alt:"Create an Airtable base"}}),r("figcaption",{attrs:{align:"center"}},[r("i",[e._v("Create an Airtable base")])])]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("In the beginner course base you have by default a "),r("em",[e._v("Table 1")]),e._v(" with four fields: "),r("em",[e._v("Name, Notes, Attachment, and Status")]),e._v(".\nThese fields are not relevant for us since they are not in our orders data set. This brings us to the next point: the names of the fields in Airtable have to match the names of the columns in the node result.\n"),r("ul",[r("li",[e._v("Replace the four default table fields with the five column names from the data set, selecting "),r("code",[e._v("Number")]),e._v(" field type for orderID, customerID, and orderPrice, and "),r("code",[e._v("Single line text")]),e._v(" for employeeName and orderStatus.")]),e._v(" "),r("li",[e._v("Delete the 3 blank rows created by default.")]),e._v(" "),r("li",[e._v("Also, rename the table from "),r("em",[e._v("Table 1")]),e._v(" to "),r("em",[e._v("orders")]),e._v(" to make it easier to identify.")])])])]),e._v(" "),r("p",[e._v("Now your table should look like this:")]),e._v(" "),r("figure",[r("img",{staticStyle:{width:"100%"},attrs:{src:a(416),alt:"Orders table in Airtable"}}),r("figcaption",{attrs:{align:"center"}},[r("i",[e._v("Orders table in Airtable")])])]),e._v(" "),r("p",[e._v("Now that the table is prepared let’s return to the workflow in the Editor UI.")]),e._v(" "),r("p",[e._v("Add an "),r("em",[r("strong",[e._v("Airtable node")])]),e._v(" connected to the HTTP Request node.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Spreadsheet nodes")]),e._v(" "),r("p",[e._v("You can replace the "),r("em",[e._v("Airtable")]),e._v(" node with another spreadsheet app/service. For example, n8n also has nodes for "),r("a",{attrs:{href:"https://docs.n8n.io/nodes/n8n-nodes-base.googleSheets/",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("Google Sheets")]),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://docs.n8n.io/nodes/n8n-nodes-base.spreadsheetFile/",target:"_blank",rel:"noopener noreferrer"}},[r("em",[e._v("Spreadsheet File")]),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("In the "),r("em",[e._v("Airtable node")]),e._v(" window, configure the following parameters:")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("Airtable API:")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("Name:")]),e._v(" The name of your credentials (e.g. airtable_api)")]),e._v(" "),r("li",[r("em",[e._v("API Key:")]),e._v(" Your "),r("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("API key")]),e._v(".\nAdding credentials for Airtable is similar to the HTTP Request node you configured in the previous chapter. However, the process of obtaining an API key for Airtable (and other apps/services) is different.")],1)])]),e._v(" "),r("li",[r("em",[e._v("Operation:")]),e._v(" Append\nThis operation will append the new data to the table.")]),e._v(" "),r("li",[r("em",[e._v("Base ID:")]),e._v(" The ID of the beginner_course base.\nTo get the base Base ID, go to "),r("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airtable's API page"),r("OutboundLink")],1),e._v(" and click on the base you want to use. The Base ID will be listed in the introduction.")]),e._v(" "),r("li",[r("em",[e._v("Table:")]),e._v(" orders")])]),e._v(" "),r("p",[e._v("Now execute the "),r("em",[e._v("Airtable")]),e._v(" node and you should get the following result:")]),e._v(" "),r("figure",[r("img",{staticStyle:{width:"100%"},attrs:{src:a(417),alt:"Airtable node results"}}),r("figcaption",{attrs:{align:"center"}},[r("i",[e._v("Airtable node results")])])]),e._v(" "),r("p",[e._v("All 30 data records will now appear in the orders table:")]),e._v(" "),r("figure",[r("img",{staticStyle:{width:"100%"},attrs:{src:a(418),alt:"Imported records in the orders table"}}),r("figcaption",{attrs:{align:"center"}},[r("i",[e._v("Imported records in the orders table")])])]),e._v(" "),r("h2",{attrs:{id:"what-s-next"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),r("p",[r("strong",[e._v("Nathan 🙋")]),e._v(": Wow, this automation is really useful! But this inserts all collected data from the HTTP Request node into Airtable. Remember that I actually need to insert only processing orders in the table and calculate the price of booked orders?")]),e._v(" "),r("p",[r("strong",[e._v("You 👩‍🔧")]),e._v(": Sure, no problem. As a next step, I'll use a new node to filter the orders based on their status.")])])}),[],!1,null,null,null);t.default=o.exports},414:function(e,t,a){e.exports=a.p+"assets/img/Workflow-with-Airtable-node.d6840b58.png"},415:function(e,t,a){e.exports=a.p+"assets/img/Create-airtable-base.3dc68151.png"},416:function(e,t,a){e.exports=a.p+"assets/img/Orders-table.5d45ad73.png"},417:function(e,t,a){e.exports=a.p+"assets/img/Airtable-node.1a99b3b0.png"},418:function(e,t,a){e.exports=a.p+"assets/img/Airtable-records.a200f77c.png"}}]);