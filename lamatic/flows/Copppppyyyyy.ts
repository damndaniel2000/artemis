const flowConfig = {
  "id": "cb95f7f6-2616-47be-8018-c0aa8fbc7570",
  "name": "Copppppyyyyy",
  "edges": [
    {
      "id": "triggerNode_1-LLMNode_226-506",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "LLMNode_226",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_226-branchNode_654",
      "type": "defaultEdge",
      "source": "LLMNode_226",
      "target": "branchNode_654",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "branchNode_654-addNode_890",
      "data": {
        "condition": "Branch 1",
        "branchName": "Branch 1"
      },
      "type": "branchEdge",
      "source": "branchNode_654",
      "target": "addNode_890",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "addNode_890-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "addNode_890",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "branchNode_654-codeNode_644-626",
      "data": {
        "condition": "Branch 2",
        "branchName": "Branch 2"
      },
      "type": "branchEdge",
      "source": "branchNode_654",
      "target": "codeNode_644",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_644-branchNode_608",
      "type": "defaultEdge",
      "source": "codeNode_644",
      "target": "branchNode_608",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "branchNode_608-addNode_516",
      "data": {
        "condition": "Branch 1",
        "branchName": "Branch 1"
      },
      "type": "branchEdge",
      "source": "branchNode_608",
      "target": "addNode_516",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "branchNode_608-addNode_685",
      "data": {
        "condition": "Branch 2",
        "branchName": "Branch 2"
      },
      "type": "branchEdge",
      "source": "branchNode_608",
      "target": "addNode_685",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "addNode_516-addNode_699",
      "type": "defaultEdge",
      "source": "addNode_516",
      "target": "addNode_699",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "addNode_685-addNode_699",
      "type": "defaultEdge",
      "source": "addNode_685",
      "target": "addNode_699",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "addNode_699-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "addNode_699",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-trigger_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2026-02-04T05:29:27.123253+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\"sampleInput\":\"string\"}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 342.5,
        "y": 0
      },
      "selected": false
    },
    {
      "id": "LLMNode_226",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "LLMNode",
        "values": {
          "id": "LLMNode_226",
          "tools": [],
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are an AI Assistant"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "Write your prompt here {{forLoopEndNode_438.output.loopOutput[2].codeNode_853.output}}"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Generate Text",
          "attachments": "",
          "credentials": "",
          "generativeModelName": [
            {
              "type": "generator/text",
              "params": {},
              "configName": "configA",
              "model_name": "gemini/gemini-2.0-flash",
              "credentialId": "afb9b952-26b2-4d15-9ae5-b7bf75739bbd",
              "provider_name": "gemini",
              "credential_name": "Gemini"
            }
          ]
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 342.5,
        "y": 130
      },
      "selected": false
    },
    {
      "id": "addNode_890",
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
        "y": 780
      }
    },
    {
      "id": "branchNode_654",
      "data": {
        "label": "Branch",
        "modes": [],
        "nodeId": "branchNode",
        "values": {
          "branches": [
            {
              "label": "Branch 1",
              "value": "branchNode_654-addNode_890"
            },
            {
              "label": "Branch 2",
              "value": "branchNode_654-addNode_812"
            }
          ],
          "nodeName": "Branching"
        }
      },
      "type": "branchNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 342.5,
        "y": 260
      }
    },
    {
      "id": "codeNode_644",
      "data": {
        "label": "New",
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "// Assign the value you want to return from this code node to `output`. \n// The `output` variable is already declared.",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 567.5,
        "y": 390
      },
      "selected": true
    },
    {
      "id": "addNode_699",
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
        "x": 567.5,
        "y": 780
      }
    },
    {
      "id": "addNode_685",
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
        "x": 792.5,
        "y": 650
      }
    },
    {
      "id": "addNode_516",
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
        "x": 342.5,
        "y": 650
      }
    },
    {
      "id": "branchNode_608",
      "data": {
        "label": "Branch",
        "modes": [],
        "nodeId": "branchNode",
        "values": {
          "branches": [
            {
              "label": "Branch 1",
              "value": "branchNode_608-addNode_516"
            },
            {
              "label": "Branch 2",
              "value": "branchNode_608-addNode_685"
            }
          ],
          "nodeName": "Branching"
        }
      },
      "type": "branchNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 567.5,
        "y": 520
      }
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "label": "Response",
        "nodeId": "graphqlResponseNode",
        "values": {
          "id": "responseNode_triggerNode_1",
          "headers": "{\"content-type\":\"application/json\"}",
          "retries": "0",
          "nodeName": "API Response",
          "webhookUrl": "",
          "retry_delay": "0",
          "outputMapping": "{\n  \"output\": \"{{LLMNode_226.output.generatedResponse}}\"\n}"
        },
        "isResponseNode": true
      },
      "type": "responseNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 342.5,
        "y": 910
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