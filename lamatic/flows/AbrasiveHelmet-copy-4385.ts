const flowConfig = {
  "id": "7b0c9c15-ea0b-49e0-a871-0db0c12a2267",
  "name": "Lamatic Co",
  "edges": [
    {
      "id": "triggerNode_1-LLMNode_467",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "LLMNode_467",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_467-codeNode_599",
      "type": "defaultEdge",
      "source": "LLMNode_467",
      "target": "codeNode_599",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_599-extractFromFileNode_421",
      "type": "defaultEdge",
      "source": "codeNode_599",
      "target": "extractFromFileNode_421",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "extractFromFileNode_421-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "extractFromFileNode_421",
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
  "status": "inactive",
  "created_at": "2025-08-04T12:32:51.341184+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "id": "triggerNode_1",
          "headers": "",
          "retries": "0",
          "nodeName": "API Request",
          "webhookUrl": "",
          "responeType": "realtime",
          "retry_deplay": "0",
          "advance_schema": "{\n  \"context\": \"string\",\n  \"prompt\": \"string\",\n  \"sample\": {\n    \"gloassary\": \"string\",\n    \"denied\": \"string\",\n    \"hello\": {\n      \"wow\": \"string\"\n    }\n  }\n}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "selected": false
    },
    {
      "id": "LLMNode_467",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "LLMNode",
        "values": {
          "id": "LLMNode_467",
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
              "content": "You are a JS code AI assistant. When I provide a context and a prompt, respond with the JavaScript code that fulfills the request. You may include concise comments in the code to improve clarity. Do not include any explanations or additional text outside the code. Provide clean, well-structured, and functional JavaScript based on the given context and prompt. Only return the code\n\nThis is prompt - {{triggerNode_1.output.prompt}}\n\nThis is context - {{triggerNode_1.output.context}}"
            }
          ],
          "memories": "[]",
          "messages": "[{{triggerNode_1.output.context}}]",
          "nodeName": "Generate Text",
          "attachments": "",
          "credentials": "",
          "generativeModelName": [
            {
              "type": "generator/text",
              "configName": "configA",
              "model_name": "gpt-4o-mini",
              "credentialId": "4700a180-3eb5-4066-b87d-d9da315ae7a4",
              "provider_name": "openai",
              "credential_name": "demo"
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
        "x": 0,
        "y": 130
      },
      "selected": false
    },
    {
      "id": "codeNode_599",
      "data": {
        "label": "dynamicNode node",
        "logic": [
          {
            "type": "fallback",
            "config": "Config A",
            "timeout": 5000,
            "onTimeout": true,
            "fallbackConfig": "Config B"
          },
          {
            "type": "goback"
          },
          {
            "type": "abTest",
            "variants": [
              {
                "name": "Config A",
                "percentage": 60
              },
              {
                "name": "Config B",
                "percentage": 40
              }
            ]
          }
        ],
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "id": "codeNode_599",
          "code": "console.log({{LLMNode_467.output.generatedResponse}})",
          "nodeName": "Code"
        },
        "valuesB": {
          "id": "codeNode_599",
          "code": "",
          "nodeName": "Code"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 260
      },
      "selected": true
    },
    {
      "id": "extractFromFileNode_421",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "extractFromFileNode",
        "values": {
          "trim": false,
          "ltrim": false,
          "quote": "\"",
          "rtrim": false,
          "format": "csv",
          "comment": "null",
          "fileUrl": "",
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
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 390
      }
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "label": "Response",
        "nodeId": "graphqlResponseNode",
        "values": {
          "nodeName": "API Response",
          "outputMapping": "{\n  \"answer\": \"{{LLMNode_467.output.generatedResponse}}\"\n}"
        },
        "isResponseNode": true
      },
      "type": "responseNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 520
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