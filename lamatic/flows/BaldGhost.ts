const flowConfig = {
  "id": "24b09f7e-d858-4429-a49b-ddf2a52441be",
  "name": "Bald Ghost",
  "edges": [
    {
      "id": "triggerNode_1-LLMNode_226-396",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "LLMNode_226",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_226-InstructorLLMNode_366",
      "type": "defaultEdge",
      "source": "LLMNode_226",
      "target": "InstructorLLMNode_366",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "InstructorLLMNode_366-mcpNode_854",
      "type": "defaultEdge",
      "source": "InstructorLLMNode_366",
      "target": "mcpNode_854",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "mcpNode_854-ImageGenNode_749",
      "type": "defaultEdge",
      "source": "mcpNode_854",
      "target": "ImageGenNode_749",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "ImageGenNode_749-multiModalLLMNode_312",
      "type": "defaultEdge",
      "source": "ImageGenNode_749",
      "target": "multiModalLLMNode_312",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "multiModalLLMNode_312-RAGNode_610",
      "type": "defaultEdge",
      "source": "multiModalLLMNode_312",
      "target": "RAGNode_610",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "RAGNode_610-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "RAGNode_610",
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
  "created_at": "2025-11-13T18:47:13.74537+00:00",
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
        "x": 0,
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
          "tools": [
            "dd907757-0396-4e74-ad4c-3d58d212e906",
            "63b8106a-c2ff-41fc-9bf6-5f998f1a0327",
            "0f3aa312-22f5-41b6-ba13-574a4b452db0"
          ],
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
        "x": 0,
        "y": 130
      },
      "selected": false
    },
    {
      "id": "InstructorLLMNode_366",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "InstructorLLMNode",
        "values": {
          "id": "InstructorLLMNode_366",
          "tools": [],
          "schema": "",
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
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Generate JSON",
          "attachments": "",
          "generativeModelName": [
            {
              "type": "generator/text",
              "configName": "configA"
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
        "y": 260
      },
      "selected": false
    },
    {
      "id": "mcpNode_854",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "mcpNode",
        "values": {
          "memories": "[]",
          "messages": "[]",
          "nodeName": "MCP",
          "attachments": "",
          "credentials": "",
          "selectedTools": [],
          "promptTemplate": ""
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
      },
      "selected": false
    },
    {
      "id": "ImageGenNode_749",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "ImageGenNode",
        "values": {
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are an Image Generation Assistant"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "Write your prompt here"
            }
          ],
          "nodeName": "Generate Image"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 520
      },
      "selected": false
    },
    {
      "id": "multiModalLLMNode_312",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "multiModalLLMNode",
        "values": {
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
              "content": "Write your prompt here"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Multi Modal",
          "attachments": ""
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 650
      },
      "selected": false
    },
    {
      "id": "RAGNode_610",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "RAGNode",
        "values": {
          "limit": "3",
          "filters": "",
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are a helpful AI assistant. Always communicate in a clear, concise, and informative manner.\nWhen citing any reference, follow **this exact format**:\n* Enclose the reference number in square brackets.\n* Immediately follow the number with the URL in parentheses.\n* There should be **no space** between the closing square bracket and the opening parenthesis.\n* Place the reference at the **end of the sentence** where the information is used.\n* Only include the reference if a valid URL is available.\n**Example format:**\nHere is an example of how to onboard new sources [1](https://lamatic.ai/docs/nodes/crawler-node).\n\n**Reference Rules:**\nDo not invent references. Only cite references when a valid, relevant URL is available.\n\nDo not include any text before or after the reference—place it cleanly at the end of the sentence.\n\nIf multiple sentences require different citations, each must end with its own correctly formatted reference.\n\nAlways use numbered references in sequential order (e.g., [1], [2], [3]…).\n\nIf the same reference is cited again, reuse the original number.\n\nApply this format only when referencing factual claims or external sources.\n\n**General URL Usage (non-reference purposes):**\nYou may provide URLs for tools, downloads, websites, examples, or navigation purposes without using the numbered reference format.\n\nIn such cases, you may introduce the URL naturally in the sentence (e.g., “You can try this tool at https://example.com”)."
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "Write your prompt here"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "RAG",
          "vectorDB": "",
          "certainty": "0.7",
          "queryField": ""
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 780
      },
      "selected": false
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
        "x": 0,
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