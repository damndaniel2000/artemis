const flowConfig = {
  "id": "633b514f-163d-4cae-a884-6c3edecb80cd",
  "name": "Crashing Camera",
  "edges": [
    {
      "id": "LLMNode_734-chatResponseNode_322",
      "type": "defaultEdge",
      "source": "LLMNode_734",
      "target": "chatResponseNode_322",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "triggerNode_1-LLMNode_734-273",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "LLMNode_734",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-chatResponseNode_322",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "chatResponseNode_322",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2025-06-07T11:37:56.990649+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "nodeId": "chatTriggerNode",
        "values": {
          "chat": "",
          "domains": [
            "*"
          ],
          "nodeName": "Chat Widget",
          "chatConfig": {
            "botName": "reassss",
            "imageUrl": "https://api.lamatic.ai/storage/v1/object/public/widget-avatar/LamaticShowcase/UrlScraperChatbot866/2bf0df6e-04b0-4392-8100-4c8a4d5eeb09/1749111185167.png",
            "position": "right",
            "policyUrl": "https://lamatic.ai/docs/legal/privacy-policy",
            "displayMode": "popup",
            "placeholder": "Compose your message",
            "suggestions": [
              "How do projects work in Lamatic?",
              "Describe the architecture of your product?",
              "Can I give role based access to my team?"
            ],
            "errorMessage": "Oops! Something went wrong. Please try again.",
            "hideBranding": false,
            "primaryColor": "#13aa5c",
            "headerBgColor": "#000000",
            "greetingMessage": "Hi, I am Lamatic Bot. Ask me anything about Lamatic",
            "headerTextColor": "#FFFFFF",
            "showEmojiButton": true,
            "suggestionBgColor": "#f1f5f9",
            "userMessageBgColor": "#FEF2F2",
            "agentMessageBgColor": "#f1f5f9",
            "suggestionTextColor": "#334155",
            "userMessageTextColor": "#d12323",
            "agentMessageTextColor": "#334155"
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
      },
      "selected": false
    },
    {
      "id": "chatResponseNode_322",
      "data": {
        "nodeId": "chatResponseNode",
        "values": {
          "content": "{{LLMNode_734.output.generatedResponse}}",
          "nodeName": "Chat Response"
        }
      },
      "type": "responseNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 300
      },
      "selected": false
    },
    {
      "id": "LLMNode_734",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "LLMNode",
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
              "content": "Answer this query {{triggerNode_1.output.chatMessage}}"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Generate Text",
          "attachments": "",
          "generativeModelName": {
            "type": "generator/text",
            "model_name": "groq/llama3-8b-8192",
            "credentialId": "defbaac0-3085-4b0a-835e-48d8b7e0c9ea",
            "provider_name": "groq",
            "credential_name": "Demo"
          }
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