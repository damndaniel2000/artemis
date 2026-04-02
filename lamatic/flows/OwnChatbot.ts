const flowConfig = {
  "id": "9219336e-202e-4c36-a5e7-20a5cca3f32b",
  "name": "Own Chatbot",
  "edges": [
    {
      "id": "triggerNode_1-extractFromFileNode_126",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "extractFromFileNode_126",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "extractFromFileNode_126-codeNode_140",
      "type": "defaultEdge",
      "source": "extractFromFileNode_126",
      "target": "codeNode_140",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_140-LLMNode_919",
      "type": "defaultEdge",
      "source": "codeNode_140",
      "target": "LLMNode_919",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_919-chatResponseNode_414",
      "type": "defaultEdge",
      "source": "LLMNode_919",
      "target": "chatResponseNode_414",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-chatResponseNode_414",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "chatResponseNode_414",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2026-02-04T05:10:35.606248+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "nodeId": "chatTriggerNode",
        "values": {
          "chat": "",
          "domains": [],
          "nodeName": "Chat Widget"
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
      "id": "extractFromFileNode_126",
      "data": {
        "nodeId": "extractFromFileNode",
        "values": {
          "trim": false,
          "ltrim": false,
          "quote": "\"",
          "rtrim": false,
          "format": "pdf",
          "comment": "null",
          "fileUrl": "https://www.nielit.gov.in/sites/default/files/ccc_syllabus_0.pdf",
          "headers": true,
          "maxRows": "0",
          "encoding": "utf8",
          "nodeName": "Extract from File",
          "password": "",
          "skipRows": "0",
          "delimiter": ",",
          "joinPages": true,
          "ignoreEmpty": false,
          "returnRawText": false,
          "encodeAsBase64": false,
          "discardUnmappedColumns": false
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "codeNode_140",
      "data": {
        "nodeId": "codeNode",
        "values": {
          "code": "output = {{extractFromFileNode_126.output.files}}[0][\"data\"][0]",
          "nodeName": "Text Extraction"
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "LLMNode_919",
      "data": {
        "nodeId": "LLMNode",
        "values": {
          "tools": [],
          "prompts": [
            {
              "id": "9cd25ecf-58ad-45b0-8ca3-4412bd0f0f54",
              "role": "user",
              "content": "QUESTION : {{triggerNode_1.output.chatMessage}}\n\nCONTEXT : {{codeNode_543.output}}"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are a document chatbot, who is suppose to answer the questions asked in chat given the context documents. Make sure you give answers based only on the documents you are given."
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Generate Text",
          "generativeModelName": {}
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "chatResponseNode_414",
      "data": {
        "nodeId": "chatResponseNode",
        "values": {
          "content": "{{LLMNode_919.output.generatedResponse}}",
          "nodeName": "Chat Response"
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