const flowConfig = {
  "id": "e863d1fe-117f-47e3-92ab-51fa3597f2b5",
  "name": "Kind Teenager",
  "edges": [
    {
      "id": "triggerNode_1-agentNode_614",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "agentNode_614",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "agentLoopEndNode_572-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "agentLoopEndNode_572",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "agentNode_614-codeNode_794-439",
      "data": {
        "condition": "Agent1"
      },
      "type": "conditionEdge",
      "source": "agentNode_614",
      "target": "codeNode_794",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "agentNode_614-codeNode_277-606",
      "data": {
        "condition": "Agent2"
      },
      "type": "conditionEdge",
      "source": "agentNode_614",
      "target": "codeNode_277",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_794-agentLoopEndNode_572-759",
      "type": "defaultEdge",
      "source": "codeNode_794",
      "target": "agentLoopEndNode_572",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_277-agentLoopEndNode_572-901",
      "type": "defaultEdge",
      "source": "codeNode_277",
      "target": "agentLoopEndNode_572",
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
    },
    {
      "id": "agentNode_614-agentLoopEndNode_572-555",
      "data": {
        "condition": "Agent Loop End",
        "invisible": true
      },
      "type": "agentLoopEdge",
      "source": "agentNode_614",
      "target": "agentLoopEndNode_572",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "agentLoopEndNode_572-agentNode_614-870",
      "data": {
        "condition": "Agent Loop End"
      },
      "type": "agentLoopEdge",
      "source": "agentLoopEndNode_572",
      "target": "agentNode_614",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "inactive",
  "created_at": "2025-06-18T03:44:47.380712+00:00",
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
          "advance_schema": "{\"sampleInput\":\"string\"}"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 225,
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
          "outputMapping": "{\n  \"display\": \"{{agentLoopEndNode_572.output.agentOutput}}\"\n}"
        },
        "isResponseNode": true
      },
      "type": "responseNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 225,
        "y": 600
      },
      "selected": false
    },
    {
      "id": "agentNode_614",
      "data": {
        "label": "Agent Supervisor",
        "nodeId": "agentNode",
        "values": {
          "tools": [],
          "agents": [
            {
              "name": "Agent1",
              "schema": "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"superheroName\": {\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"describe the hero\"\n    }\n  }\n}",
              "description": "Go here if i take a super hero name"
            },
            {
              "name": "Agent2",
              "schema": "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"countryName\": {\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"Name the capital of the country\"\n    }\n  }\n}",
              "description": "Run this if i name a country"
            }
          ],
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are an AI Assistant who will process this {{triggerNode_1.output.sampleInput}}"
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "Find all info about {{triggerNode_1.output.sampleInput}}. Execute both the agents in a random order 3 times"
            }
          ],
          "messages": "[]",
          "nodeName": "Supervisor",
          "stopWord": "",
          "connectedTo": "agentLoopEndNode_572",
          "maxIterations": 5,
          "generativeModelName": {
            "type": "generator/text",
            "model_name": "gpt-4o-mini",
            "credentialId": "adc25c07-1a25-4fe1-8ea0-09c4e000bea7",
            "provider_name": "openai",
            "credential_name": "New"
          }
        }
      },
      "type": "agentNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 225,
        "y": 150
      },
      "selected": false
    },
    {
      "id": "agentLoopEndNode_572",
      "data": {
        "label": "agentLoopEndNode node",
        "modes": {},
        "nodeId": "agentLoopEndNode",
        "values": {
          "nodeName": "Agent Loop End",
          "connectedTo": "agentNode_614"
        }
      },
      "type": "agentLoopEndNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 225,
        "y": 450
      },
      "selected": false
    },
    {
      "id": "codeNode_794",
      "data": {
        "label": "New",
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "console.log(\"SUPERHERO\")\noutput = {\n  demo: \"hello\"\n}",
          "nodeName": "Part 1"
        }
      },
      "type": "dynamicNode",
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
      "id": "codeNode_277",
      "data": {
        "label": "New",
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "console.log(\"COUNTRY\")\noutput = {\n  demo: \"hehehe\"\n}",
          "nodeName": "Part 2"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 450,
        "y": 300
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