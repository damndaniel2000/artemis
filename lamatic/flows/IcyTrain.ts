const flowConfig = {
  "id": "c01a7625-03db-421f-82c2-db6ad30179c4",
  "name": "Icy Train",
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
      "id": "RAGNode_128-plus-node-addNode_triggerNode_1934",
      "type": "defaultEdge",
      "source": "RAGNode_128",
      "target": "plus-node-addNode_triggerNode_1934",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2025-06-07T03:42:53.081209+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "webhookTriggerNode",
        "values": {
          "nodeName": "Webhook"
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
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 130
      }
    },
    {
      "id": "plus-node-addNode_triggerNode_1934",
      "data": {
        "label": "+",
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
        "y": 260
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