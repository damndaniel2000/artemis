const flowConfig = {
  "id": "bdf43bb6-8d92-417a-bd60-b73a7c15231e",
  "name": "Purring Rain",
  "edges": [
    {
      "id": "triggerNode_1-codeNode_229",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "codeNode_229",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_229-agentClassifierNode_488",
      "type": "defaultEdge",
      "source": "codeNode_229",
      "target": "agentClassifierNode_488",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "agentClassifierNode_488-addNode_423",
      "data": {
        "condition": "ene1",
        "branchName": "Classifier 1"
      },
      "type": "agentClassifierEdge",
      "source": "agentClassifierNode_488",
      "target": "addNode_423",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "agentClassifierNode_488-addNode_985",
      "data": {
        "condition": "en22",
        "branchName": "Classifier 2"
      },
      "type": "agentClassifierEdge",
      "source": "agentClassifierNode_488",
      "target": "addNode_985",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "addNode_423-agentClassifierNode_684-885",
      "data": {},
      "type": "defaultEdge",
      "source": "addNode_423",
      "target": "agentClassifierNode_684",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "addNode_985-agentClassifierNode_684-669",
      "data": {},
      "type": "defaultEdge",
      "source": "addNode_985",
      "target": "agentClassifierNode_684",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "agentClassifierNode_684-addNode_783-422",
      "data": {
        "condition": "Classifier 1",
        "branchName": "Classifier 1"
      },
      "type": "agentClassifierEdge",
      "source": "agentClassifierNode_684",
      "target": "addNode_783",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "agentClassifierNode_684-addNode_840-740",
      "data": {
        "condition": "Classifier 2",
        "branchName": "Classifier 2"
      },
      "type": "agentClassifierEdge",
      "source": "agentClassifierNode_684",
      "target": "addNode_840",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "addNode_783-graphqlResponseNode_763-168",
      "type": "defaultEdge",
      "source": "addNode_783",
      "target": "graphqlResponseNode_763",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "addNode_840-graphqlResponseNode_763-433",
      "type": "defaultEdge",
      "source": "addNode_840",
      "target": "graphqlResponseNode_763",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-graphqlResponseNode_763",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "graphqlResponseNode_763",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2025-06-12T12:56:34.921745+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "nodeId": "graphqlNode",
        "values": {
          "id": "triggerNode_1",
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\n  \"history\": \"string\",\n  \"requirement_gathering_attempt\": \"string\",\n  \"previous_step\": \"string\",\n  \"scam_step\": \"string\"\n}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 0
      },
      "selected": false
    },
    {
      "id": "codeNode_229",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "console.log(\"HELLO WORLD\")",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 130
      },
      "selected": false
    },
    {
      "id": "agentClassifierNode_488",
      "data": {
        "label": "Agent Classifier",
        "modes": [],
        "nodeId": "agentClassifierNode",
        "values": {
          "id": "agentClassifierNode_488",
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are an AI Assistant"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "Write your prompt here"
            }
          ],
          "nodeName": "basss",
          "classifier": [
            {
              "label": "ene1",
              "value": "agentClassifierNode_488-addNode_423"
            },
            {
              "label": "en22",
              "value": "agentClassifierNode_488-addNode_985"
            }
          ],
          "generativeModelName": [
            {
              "type": "generator/text",
              "configName": "configA"
            }
          ]
        }
      },
      "type": "agentClassifierNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 260
      },
      "selected": true
    },
    {
      "id": "addNode_985",
      "data": {
        "label": "addNode node",
        "modes": {},
        "nodeId": "addNode",
        "values": {},
        "condition": "en22"
      },
      "type": "addNode",
      "measured": {
        "width": 216,
        "height": 100
      },
      "position": {
        "x": 450,
        "y": 390
      }
    },
    {
      "id": "addNode_423",
      "data": {
        "label": "addNode node",
        "modes": {},
        "nodeId": "addNode",
        "values": {},
        "condition": "ene1"
      },
      "type": "addNode",
      "measured": {
        "width": 216,
        "height": 100
      },
      "position": {
        "x": 0,
        "y": 390
      }
    },
    {
      "id": "agentClassifierNode_684",
      "data": {
        "label": "agentClassifierNode node",
        "modes": {},
        "nodeId": "agentClassifierNode",
        "values": {
          "id": "agentClassifierNode_684",
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are an AI Assistant"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "Write your prompt here"
            }
          ],
          "nodeName": "Classifier",
          "classifier": [
            {
              "label": "Classifier 1",
              "value": "agentClassifierNode_684-addNode_783"
            },
            {
              "label": "Classifier 2",
              "value": "agentClassifierNode_684-addNode_840",
              "description": ""
            }
          ],
          "generativeModelName": [
            {
              "type": "generator/text",
              "configName": "configA"
            }
          ]
        }
      },
      "type": "agentClassifierNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 520
      },
      "selected": false
    },
    {
      "id": "addNode_840",
      "data": {
        "label": "addNode node",
        "modes": {},
        "nodeId": "addNode",
        "values": {}
      },
      "type": "addNode",
      "measured": {
        "width": 216,
        "height": 100
      },
      "position": {
        "x": 450,
        "y": 650
      }
    },
    {
      "id": "addNode_783",
      "data": {
        "label": "addNode node",
        "modes": {},
        "nodeId": "addNode",
        "values": {}
      },
      "type": "addNode",
      "measured": {
        "width": 216,
        "height": 100
      },
      "position": {
        "x": 0,
        "y": 650
      }
    },
    {
      "id": "graphqlResponseNode_763",
      "data": {
        "nodeId": "graphqlResponseNode",
        "values": {
          "id": "graphqlResponseNode_763",
          "nodeName": "API Response",
          "outputMapping": "{\n  \"demo\": \"{{triggerNode_1.output.hello}}\"\n}"
        },
        "condition": "en22"
      },
      "type": "responseNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 225,
        "y": 780
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