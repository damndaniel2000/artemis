const flowConfig = {
  "id": "c15a90ea-479b-4916-ba8a-2ba3e0ab9ccc",
  "name": "Agitated Airport",
  "edges": [
    {
      "id": "triggerNode_1-RAGNode_128",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "RAGNode_128",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "RAGNode_128-chatResponseNode_322",
      "type": "defaultEdge",
      "source": "RAGNode_128",
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
  "created_at": "2025-06-07T03:44:53.320598+00:00",
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
            "botName": "Lamatic Bot",
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
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "RAGNode_128",
      "data": {
        "nodeId": "RAGNode",
        "values": {
          "limit": 10,
          "filters": "",
          "prompts": [
            {
              "id": "42e6d3ec-a6b4-45e8-a607-381f8ae67b20",
              "role": "user",
              "content": "USER QUERY : {{triggerNode_1.output.chatMessage}}"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are a helpful chat assistant who is trained on the webpage(s) as defined by the builder. In the context, you will be given the most relevant contents from the webpage from which you have to reference and answer. In the end, you will be giving reference(s) as a CTA to the user to read more on your answer. Remember, you have to just straight away give the answer and only reference it based on the context you are given. You are also given the chat history to maintain context of the conversation you are having with the user."
            }
          ],
          "memories": "[]",
          "messages": "{{triggerNode_1.output.chatHistory}}",
          "nodeName": "RAG",
          "vectorDB": "VectorDB8303",
          "certainty": "0.5",
          "queryField": "{{triggerNode_1.output.chatMessage}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "model_name": "text-embedding-ada-002",
            "credentialId": "a8b4d2a6-b228-461e-884d-43c366322fba",
            "provider_name": "openai",
            "credential_name": "Testing"
          },
          "generativeModelName": {
            "type": "generator/text",
            "model_name": "gpt-4-turbo",
            "credentialId": "adc25c07-1a25-4fe1-8ea0-09c4e000bea7",
            "provider_name": "openai",
            "credential_name": "New"
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
      "id": "chatResponseNode_322",
      "data": {
        "nodeId": "chatResponseNode",
        "values": {
          "content": "{{RAGNode_128.output.modelResponse}}",
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