const flowConfig = {
  "id": "875c8499-a848-45b5-ac46-8f033ad2a1b2",
  "name": "Hot Carpenter",
  "edges": [
    {
      "id": "triggerNode_1-fullTextSearchNode_275",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "fullTextSearchNode_275",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "fullTextSearchNode_275-codeNode_845",
      "type": "defaultEdge",
      "source": "fullTextSearchNode_275",
      "target": "codeNode_845",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_845-searchResponseNode_494",
      "type": "defaultEdge",
      "source": "codeNode_845",
      "target": "searchResponseNode_494",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-searchResponseNode_494",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "searchResponseNode_494",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2025-06-12T12:58:29.899164+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "fullTextSearchNode_275",
      "data": {
        "nodeId": "fullTextSearchNode",
        "values": {
          "id": "fullTextSearchNode_275",
          "limit": 10,
          "autocut": "0",
          "filters": "",
          "nodeName": "Keyword Search",
          "vectorDB": "VectorDB4250",
          "searchQuery": "{{triggerNode_1.output.searchQuery}}",
          "boostProperties": false
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 150
      },
      "selected": true,
      "draggable": false
    },
    {
      "id": "codeNode_845",
      "data": {
        "nodeId": "codeNode",
        "values": {
          "id": "codeNode_845",
          "code": "\r\nconst passageResults = {{ fullTextSearchNode_275.output.searchResults }}\r\n\r\nconst tabs = [\"Hacking\", \"Testing\", \"Pentesting\", \"Hacking\", \"Testing\", \"Pentesting\", \"Hacking\", \"Testing\", \"Pentesting\", \"Hacking\", \"Testing\", \"Pentesting\", \"Hacking\", \"Testing\", \"Pentesting\", \"Hacking\", \"Testing\", \"Pentesting\", \"Hacking\", \"Testing\", \"Pentesting\", \"Hacking\", \"Testing\", \"Pentesting\", \"Hacking\", \"Testing\", \"Pentesting\"]\r\n\r\nconst breadcrump= [[\"Dora\",\"The\",\"Explorer\"],[\"Hacking\",\"Testing\"],[\"Lamatic\",\"Docs\"],[\"Naitik\",\"Testing\"],[\"Dora\",\"The\",\"Explorer\"],[\"Hacking\",\"Testing\"],[\"Lamatic\",\"Docs\"],[\"Naitik\",\"Testing\"],[\"Dora\",\"The\",\"Explorer\"],[\"Hacking\",\"Testing\"],[\"Lamatic\",\"Docs\"],[\"Naitik\",\"Testing\"],[\"Dora\",\"The\",\"Explorer\"],[\"Hacking\",\"Testing\"],[\"Lamatic\",\"Docs\"],[\"Naitik\",\"Testing\"]]\r\n\r\n\r\nconst updatedTitlesResults = passageResults.map(doc => ({\r\n  title: doc.file_name,       \r\n  subtitle:`This is dummy subtitle for element`,\r\n  content: doc.content,\r\n  toh: \"https://example.com/\",\r\n  type: \"titles\",\r\n  breadcrumps: breadcrump[passageResults.indexOf(doc)],\r\n  tab: tabs[passageResults.indexOf(doc)],\r\n  customLink:`https://example.com/${tabs[passageResults.indexOf(doc)]}`\r\n}));\r\n\r\nconst finalresults= updatedTitlesResults\r\n\r\noutput = {\"results\":finalresults}",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 300
      },
      "draggable": false
    },
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "searchTriggerNode",
        "values": {
          "id": "triggerNode_1",
          "search": "",
          "domains": [
            "*"
          ],
          "nodeName": "Search Widget",
          "searchConfig": {
            "linkTarget": "_blank",
            "showAllTab": true,
            "staticTabs": [
              {
                "id": "Hacking",
                "label": "Hacking"
              },
              {
                "id": "Testing",
                "label": "Testing"
              }
            ],
            "hideBranding": true,
            "primaryColor": "#2c00cc",
            "enableGrouping": true,
            "searchDebounce": 200,
            "secondaryColor": "#000000",
            "showLamaticBanner": false,
            "showNavHelperText": true,
            "initialSearchQuery": "hack",
            "showEscapeHelperText": false,
            "searchPlaceholderText": "Search anything related to hacking"
          }
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "searchResponseNode_494",
      "data": {
        "nodeId": "searchResponseNode",
        "values": {
          "id": "searchResponseNode_494",
          "tab": "{{codeNode_845.output.results[:].tab}}",
          "link": "{{codeNode_845.output.results[:].toh}}",
          "group": "{{codeNode_845.output.results[:].title}}",
          "title": "{{codeNode_845.output.results[:].title}}",
          "content": "",
          "nodeName": "Search Response",
          "subtitle": "{{codeNode_845.output.results[:].subtitle}}",
          "referenceLink": "{{codeNode_845.output.results[:].customLink}}",
          "referenceText": "{{codeNode_845.output.results[:].content}}",
          "breadcrumpsField": "{{codeNode_845.output.results[:].breadcrumps}}"
        }
      },
      "type": "responseNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 450
      },
      "selected": false
    }
  ]
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}