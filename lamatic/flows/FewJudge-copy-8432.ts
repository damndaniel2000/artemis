const flowConfig = {
  "id": "953c5856-e40f-4be1-b4d9-f720efac3d6a",
  "name": "Few Judge Copy",
  "edges": [
    {
      "id": "triggerNode_1-LLMNode_669",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "LLMNode_669",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_669-chatResponseNode_322",
      "type": "defaultEdge",
      "source": "LLMNode_669",
      "target": "chatResponseNode_322",
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
  "created_at": "2025-07-01T13:00:01.29739+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "nodeId": "chatTriggerNode",
        "values": {
          "id": "triggerNode_1",
          "chat": "",
          "domains": [
            "*"
          ],
          "nodeName": "Chat Widget",
          "chatConfig": {
            "botName": "Lamatic Bot",
            "imageUrl": "https://api.lamatic.ai/storage/v1/object/public/widget-avatar/LamaticShowcase/UrlScraperChatbot866/2bf0df6e-04b0-4392-8100-4c8a4d5eeb09/1749111185167.png",
            "position": "right",
            "policyUrl": "https://lamatic.ai/docs/legal/privacy-policy",
            "displayMode": "embedded",
            "placeholder": "Compose your message",
            "suggestions": [
              "How do projects work in Lamatic?",
              "Describe the architecture of your product?",
              "Can I give role based access to my team?"
            ],
            "errorMessage": "Oops! Something went wrong. Please try again.",
            "hideBranding": false,
            "primaryColor": "#ef4444",
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
          "id": "chatResponseNode_322",
          "content": "{{LLMNode_669.output.generatedResponse}}",
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
      "id": "LLMNode_669",
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
              "content": "give a joke about thias {{triggerNode_1.output.chatMessage}}"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Generate Text",
          "attachments": "",
          "credentials": "",
          "generativeModelName": {
            "type": "generator/text",
            "model_name": "gpt-4o-mini",
            "credentialId": "4700a180-3eb5-4066-b87d-d9da315ae7a4",
            "provider_name": "openai",
            "credential_name": "demo"
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
      "selected": true
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