const flowConfig = {
  "id": "c117c30d-76e6-4ac6-8056-25579d5c0851",
  "name": "Juicy Teacher",
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
  "created_at": "2025-05-13T16:14:08.078876+00:00",
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
              "id": "cd667aed-9b2e-4290-9e20-d4c789db8878",
              "role": "user",
              "content": "CURRENT USER QUERY : {{triggerNode_1.output.chatMessage}}"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are suppose to answer the given query by the user, given the relevant context. Remember, you have to just straight away give the answer and only reference it based on the context you are given. UNDERSTAND THE CURRENT USER QUERY CAREFULLY AND ANSWER BASED ON THE RELEVANT CONTEXT CHUNKS.\n\nYou are also given the chat history as a context so that you can have information on the current topic being discussed in this session. Make sure you answer only to the current query, the chat history is just for your understanding.\n\nIn the end, you have to give a short CTA to the user to refer to the document from which you are making your answer, which will be given to you with each reference as a 'file_name'."
            }
          ],
          "memories": "[]",
          "messages": "{{triggerNode_1.output.chatHistory}}",
          "nodeName": "RAG",
          "vectorDB": "VectorDB5700",
          "certainty": "0.3",
          "queryField": "{{triggerNode_1.output.chatMessage}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "model_name": "text-embedding-ada-002",
            "credentialId": "adc25c07-1a25-4fe1-8ea0-09c4e000bea7",
            "provider_name": "openai",
            "credential_name": "New"
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