const flowConfig = {
  "id": "7ed17a33-ba88-4baa-9a85-a0c45dcabe16",
  "name": "My First Flow",
  "edges": [
    {
      "id": "triggerNode_1-multiModalLLMNode_392",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "multiModalLLMNode_392",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "multiModalLLMNode_392-ImageGenNode_223",
      "type": "defaultEdge",
      "source": "multiModalLLMNode_392",
      "target": "ImageGenNode_223",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "ImageGenNode_223-graphqlResponseNode_868",
      "type": "defaultEdge",
      "source": "ImageGenNode_223",
      "target": "graphqlResponseNode_868",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-graphqlResponseNode_868",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "graphqlResponseNode_868",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2026-03-02T20:01:08.747081+00:00",
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
          "advance_schema": "{\n  \"imageURL\": \"string\"\n}"
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
      "id": "multiModalLLMNode_392",
      "data": {
        "modes": {},
        "nodeId": "multiModalLLMNode",
        "values": {
          "tools": [],
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "Flesh out as many concepts as possible from this whiteboard/notes session that could be used within a display ad. (In addition to hooks, please also come up with CTA text/design, promotional copy, and key selling points.)\n\nRemember that a display ad should use only a minimal amount of text. You are given the file as an attachment. Let there be no leading statements, just your final answer."
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Multi Modal",
          "attachments": "{{triggerNode_1.output.imageURL}}",
          "generativeModelName": {}
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "ImageGenNode_223",
      "data": {
        "modes": {},
        "nodeId": "ImageGenNode",
        "values": {
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "user",
              "content": "You will be given these notes and understanding from which you have to create a display an advertisement, using the classic problem-solution. Clearly show the pain point and our product as the ideal solution, incorporating as many elements from these notes. Make an attractive and CTA advertisements.\n\n{{multiModalLLMNode_910.output.generatedResponse}}"
            }
          ],
          "nodeName": "Generate Image",
          "imageGenModelName": ""
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "graphqlResponseNode_868",
      "data": {
        "nodeId": "graphqlResponseNode",
        "values": {
          "nodeName": "API Response",
          "outputMapping": "{\n  \"insights\": \"{{multiModalLLMNode_392.output.generatedResponse}}\",\n  \"image\": \"{{ImageGenNode_223.output.imageUrl}}\"\n}"
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