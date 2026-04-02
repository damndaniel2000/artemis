const flowConfig = {
  "id": "627329fe-2074-4b4c-9835-229bac35bf3e",
  "name": "RAG-Powered Chatbot",
  "edges": [
    {
      "id": "triggerNode_1-RAGNode_536",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "RAGNode_536",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "RAGNode_536-chatResponseNode_614",
      "type": "defaultEdge",
      "source": "RAGNode_536",
      "target": "chatResponseNode_614",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-chatResponseNode_614",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "chatResponseNode_614",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2025-07-16T13:26:59.225597+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "chatTriggerNode",
        "values": {
          "chat": "",
          "domains": [
            "*"
          ],
          "nodeName": "Chat Widget",
          "chatConfig": {
            "botName": "Lamatic Google Drive Bot",
            "imageUrl": "https://api.lamatic.ai/storage/v1/object/public/widget-avatar/LamaticShowcase/GoogleDriveChatbot533/120e7afc-9695-4f53-a883-8b4f1fafb3fb/1746695726489.png",
            "position": "right",
            "policyUrl": "https://lamatic.ai/docs/legal/privacy-policy",
            "placeholder": "Compose your message",
            "suggestions": [],
            "errorMessage": "Oops! Something went wrong. Please try again.",
            "primaryColor": "#ef4444",
            "headerBgColor": "#000000",
            "greetingMessage": "Hi, I am Lamatic Google Drive Bot. Ask me anything from these documents",
            "headerTextColor": "#FFFFFF",
            "suggestionBgColor": "#f1f5f9",
            "userMessageBgColor": "#FEF2F2",
            "agentMessageBgColor": "#f1f5f9",
            "suggestionTextColor": "#334155",
            "showPoweredByLamatic": true,
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
      "id": "RAGNode_536",
      "data": {
        "nodeId": "RAGNode",
        "values": {
          "limit": 5,
          "filters": "",
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are suppose to answer the given query by the user, given the\nrelevant context. Remember, you have to just straight away give the\nanswer and only reference it based on the context you are given.\nUNDERSTAND THE CURRENT USER QUERY CAREFULLY AND ANSWER BASED ON THE\nRELEVANT CONTEXT CHUNKS.\n\nYou are also given the chat history as a context so that you can\nhave information on the current topic being discussed in this\nsession. Make sure you answer only to the current query, the chat\nhistory is just for your understanding.\n\nIn the end, you have to give a short CTA to the user to refer to the\ndocument from which you are making your answer, which will be given\nto you with each reference as a 'file_name'"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7g",
              "role": "user",
              "content": "CURRENT USER QUERY : {{triggerNode_1.output.chatMessage}}"
            }
          ],
          "memories": "[]",
          "messages": "{{triggerNode_1.output.chatHistory}}",
          "nodeName": "RAG",
          "vectorDB": "VectorDB2718",
          "certainty": "0.3",
          "queryField": "{{triggerNode_1.output.chatMessage}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "model_name": "text-embedding-ada-002",
            "credentialId": "4700a180-3eb5-4066-b87d-d9da315ae7a4",
            "provider_name": "openai",
            "credential_name": "demo"
          },
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
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "chatResponseNode_614",
      "data": {
        "nodeId": "chatResponseNode",
        "values": {
          "content": "{{RAGNode_536.output.modelResponse}}",
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