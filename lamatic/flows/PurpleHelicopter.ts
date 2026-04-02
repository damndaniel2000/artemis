const flowConfig = {
  "id": "72f7ba97-0b13-438e-bbce-cb3cc6242153",
  "name": "Purple Helicopter",
  "edges": [
    {
      "id": "triggerNode_1-codeNode_466",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "codeNode_466",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_466-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "codeNode_466",
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
  "created_at": "2025-08-12T03:07:47.018372+00:00",
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
            "botName": "Lamatic Bot",
            "imageUrl": "https://img.freepik.com/premium-vector/robot-android-super-hero_111928-7.jpg?w=826",
            "position": "right",
            "policyUrl": "https://lamatic.ai/docs/legal/privacy-policy",
            "displayMode": "popup",
            "placeholder": "Compose your message",
            "suggestions": [
              "What is lamatic?",
              "How do I add data to my chatbot?",
              "Explain this product to me"
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
      "id": "codeNode_466",
      "data": {
        "label": "dynamicNode node",
        "logic": [],
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "id": "codeNode_466",
          "code": "let chatHistory = {{ triggerNode_1.output.history }};\nlet requirementGatheringAttempt = {{ triggerNode_1.output.requirement_gathering_attempt }};\nlet previousStep = {{ triggerNode_1.output.previous_step }};\nlet scamState = {{ triggerNode_1.output.scam_state }};\n\nif ({{ InstructorLLMNode_521.output.new_conversation_started }}) {\n  chatHistory = [chatHistory.pop()];\n  requirementGatheringAttempt = 0;\n  previousStep = 'gather_requirements';\n  scamState = {};\n}\n\nlet new_conversation_started = {{ InstructorLLMNode_521.output.new_conversation_started }} || false;\n\nreturn {\n  history: chatHistory,\n  requirement_gathering_attempt: requirementGatheringAttempt,\n  previous_step: previousStep,\n  scam_state: scamState,\n  new_conversation_started: new_conversation_started\n};",
          "nodeName": "Code"
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
      "selected": true
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "label": "Response",
        "nodeId": "chatResponseNode",
        "values": {
          "id": "responseNode_triggerNode_1",
          "content": "{{LLMNode_458.output.generatedResponse}}",
          "nodeName": "Chat Response",
          "references": "",
          "webhookUrl": "",
          "webhookHeaders": ""
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