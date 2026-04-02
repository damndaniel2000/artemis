const flowConfig = {
  "id": "d6e9f1d3-da5d-4738-8076-3219dd1a24aa",
  "name": "Semantic Search",
  "edges": [
    {
      "id": "triggerNode_1-searchNode_443",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "searchNode_443",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "searchNode_443-codeNode_913",
      "type": "defaultEdge",
      "source": "searchNode_443",
      "target": "codeNode_913",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_913-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "codeNode_913",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-responseNode_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2026-01-27T11:51:52.022365+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "searchTriggerNode",
        "values": {
          "search": "",
          "domains": [
            "*"
          ],
          "nodeName": "Search Widget",
          "searchConfig": {
            "linkTarget": "_blank",
            "showAllTab": true,
            "staticTabs": [],
            "hideBranding": false,
            "primaryColor": "#007bff",
            "enableGrouping": false,
            "searchDebounce": 200,
            "secondaryColor": "#666",
            "showNavHelperText": true,
            "showEscapeHelperText": true,
            "searchPlaceholderText": "Search our knowledge base..."
          }
        },
        "trigger": true
      },
      "type": "triggerNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "searchNode_443",
      "data": {
        "modes": {},
        "nodeId": "searchNode",
        "values": {
          "limit": 10,
          "filters": "[]",
          "nodeName": "Vector Search",
          "vectorDB": "VectorDB6806",
          "certainty": "0.5",
          "searchQuery": "{{triggerNode_1.output.searchQuery}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "params": {},
            "model_name": "text-embedding-ada-002",
            "credentialId": "4700a180-3eb5-4066-b87d-d9da315ae7a4",
            "provider_name": "openai",
            "credential_name": "demo"
          }
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "codeNode_913",
      "data": {
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "function truncateContent(content) {\n  if (content.length <= 100) {\n    return content;\n  }\n  return content.substring(0, 100) + \"...\";\n}\n\nconst searchResults = {{ searchNode_443.output.searchResults }};\n\nconst updatedResults = searchResults.map(doc => ({\n  title: doc.title,       \n  content: truncateContent(doc.content),\n  source: doc.source,\n  type: \"Document\"\n}));\n\noutput = {\"results\": updatedResults};",
          "nodeName": "Collate Results"
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "nodeId": "searchResponseNode",
        "values": {
          "tab": "{{codeNode_913.output.results[:].type}}",
          "group": "",
          "title": "{{codeNode_913.output.results[:].title}}",
          "content": "{{codeNode_913.output.results[:].content}}",
          "nodeName": "Search Response"
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
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