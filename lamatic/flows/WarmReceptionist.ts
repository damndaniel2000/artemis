const flowConfig = {
  "id": "f72dbc82-5d4d-4bda-9d0c-03cc5c7fad5f",
  "name": "Warm Receptionist",
  "edges": [
    {
      "id": "triggerNode_1-variablesNode_999",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "variablesNode_999",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "variablesNode_999-branchNode_936",
      "type": "defaultEdge",
      "source": "variablesNode_999",
      "target": "branchNode_936",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "branchNode_936-apiNode_708-269",
      "data": {
        "condition": "Branch 1",
        "branchName": "Branch 1"
      },
      "type": "branchEdge",
      "source": "branchNode_936",
      "target": "apiNode_708",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "branchNode_936-extractFromFileNode_623-898",
      "data": {
        "condition": "Branch 2",
        "branchName": "Branch 2"
      },
      "type": "branchEdge",
      "source": "branchNode_936",
      "target": "extractFromFileNode_623",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "apiNode_708-responseNode_triggerNode_1-168",
      "type": "defaultEdge",
      "source": "apiNode_708",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "extractFromFileNode_623-responseNode_triggerNode_1-692",
      "type": "defaultEdge",
      "source": "extractFromFileNode_623",
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
  "created_at": "2025-06-20T05:08:28.375308+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "retries": "0",
          "nodeName": "API Request",
          "webhookUrl": "",
          "responeType": "realtime",
          "retry_deplay": "0",
          "advance_schema": "{\n  \"url\": \"string\"\n}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 225,
        "y": 0
      }
    },
    {
      "id": "variablesNode_999",
      "data": {
        "modes": {},
        "nodeId": "variablesNode",
        "values": {
          "mapping": "{\n  \"language\": {\n    \"type\": \"string\",\n    \"value\": \"English\"\n  },\n  \"platform\": {\n    \"type\": \"string\",\n    \"value\": \"Instagram\"\n  }\n}",
          "nodeName": "Platform and Language"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 225,
        "y": 150
      },
      "selected": false
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "nodeId": "graphqlResponseNode",
        "values": {
          "nodeName": "API Response",
          "outputMapping": "{\n  \"api\": \"{{apiNode_708.output}}\",\n  \"extract\": \"{{extractFromFileNode_623.output.files}}\"\n}"
        }
      },
      "type": "responseNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 225,
        "y": 600
      },
      "selected": false
    },
    {
      "id": "branchNode_936",
      "data": {
        "label": "Branch",
        "modes": [],
        "nodeId": "branchNode",
        "values": {
          "branches": [
            {
              "label": "Branch 1",
              "value": "branchNode_936-addNode_686"
            },
            {
              "label": "Branch 2",
              "value": "branchNode_936-addNode_854"
            }
          ],
          "nodeName": "Branching"
        }
      },
      "type": "branchNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 225,
        "y": 300
      }
    },
    {
      "id": "apiNode_708",
      "data": {
        "label": "New",
        "modes": {},
        "nodeId": "apiNode",
        "values": {
          "url": "https://catfact.ninja/fact",
          "body": "",
          "method": "GET",
          "headers": "",
          "retries": "0",
          "nodeName": "API",
          "retry_deplay": "0"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 450
      },
      "selected": false
    },
    {
      "id": "extractFromFileNode_623",
      "data": {
        "label": "New",
        "modes": {},
        "nodeId": "extractFromFileNode",
        "values": {
          "trim": false,
          "ltrim": false,
          "quote": "\"",
          "rtrim": false,
          "format": "pdf",
          "comment": "null",
          "fileUrl": "https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf",
          "headers": true,
          "maxRows": "0",
          "encoding": "utf8",
          "nodeName": "Extract from File",
          "password": "",
          "skipRows": "0",
          "delimiter": ",",
          "joinPages": false,
          "ignoreEmpty": false,
          "returnRawText": false,
          "encodeAsBase64": false,
          "discardUnmappedColumns": false
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 450,
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