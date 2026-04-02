const flowConfig = {
  "id": "1c3d1099-0032-464c-b226-96dcbc577894",
  "name": "Lamatic Prompt Enhancer",
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
      "id": "LLMNode_467-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "LLMNode_467",
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
  "created_at": "2025-07-30T05:44:26.699192+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "headers": "",
          "retries": "0",
          "nodeName": "API Request",
          "webhookUrl": "",
          "responeType": "realtime",
          "retry_deplay": "0",
          "advance_schema": "{\n  \"context\": \"string\",\n  \"prompt\": \"string\"\n}"
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
      "id": "LLMNode_467",
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
              "content": "You are an expert prompt engineer and assistant, helping users refine or generate prompts for generative AI systems (like GPT-4 or Claude).\n\nThe user will provide:\n\n* A prompt (this may be partial or complete)\n* Optionally, a **context** (e.g., information about a product, document, or use-case)\n\nYour job is to:\n\n* Understand what the prompt is trying to achieve\n* Use the provided context if present\n* Improve the prompt’s clarity, structure, tone, and precision\n* Ensure it aligns with the intended task (e.g., summarization, Q&A, chatbot, etc.)\n* Only directly give the prompt. Nothing else.\n* You can use markdown too\n\nThis is the prompt - {{triggerNode_1.output.prompt}} \n\nThis is the context - {{triggerNode_1.output.context}}"
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