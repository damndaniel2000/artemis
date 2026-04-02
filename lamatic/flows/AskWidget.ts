const flowConfig = {
  "id": "4567df61-7a2d-4660-80f6-c8761e290d4d",
  "name": "Ask Widget",
  "edges": [
    {
      "id": "triggerNode_1-LLMNode_364",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "LLMNode_364",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "LLMNode_364-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "LLMNode_364",
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
  "created_at": "2026-03-02T09:10:12.022765+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "askTriggerNode",
        "values": {
          "id": "triggerNode_1",
          "chat": "",
          "domains": [
            "*"
          ],
          "nodeName": "Ask Trigger",
          "askConfig": {
            "policyUrl": "https://lamatic.ai/docs/legal/privacy-policy",
            "suggestions": [
              "How do I get started with Lamatic.ai?",
              "How do I create my first AI flow?",
              "How do I use the Studio interface?",
              "How do I use the VectorDB feature?",
              "How do I add custom context to my agents?",
              "How do I integrate with external APIs?"
            ],
            "errorMessage": "Oops! Something went wrong. Please try again.",
            "hideBranding": false,
            "primaryColor": "#ef4444",
            "showCopyButton": true,
            "showNavHelperText": true,
            "initialPlaceholder": "Ask your message",
            "followUpPlaceholder": "Follow up on your message",
            "showFeedbackButtons": true,
            "showEscapeHelperText": true
          }
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
      "selected": true
    },
    {
      "id": "LLMNode_364",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "LLMNode",
        "values": {
          "id": "LLMNode_364",
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
              "content": "tell a nice joke"
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
      "id": "responseNode_triggerNode_1",
      "data": {
        "label": "Response",
        "nodeId": "askResponseNode",
        "values": {
          "id": "responseNode_triggerNode_1",
          "content": "{{LLMNode_364.output.generatedResponse}}",
          "nodeName": "Ask Response",
          "references": ""
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
        "y": 260
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