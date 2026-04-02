const flowConfig = {
  "id": "62ef3848-3cf7-466a-8403-770d8a78abb1",
  "name": "Rancid Battery",
  "edges": [
    {
      "id": "triggerNode_1-codeNode_704",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "codeNode_704",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_704-graphqlResponseNode_412",
      "type": "defaultEdge",
      "source": "codeNode_704",
      "target": "graphqlResponseNode_412",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-graphqlResponseNode_412",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "graphqlResponseNode_412",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "inactive",
  "created_at": "2025-05-05T00:09:31.300739+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "nodeId": "graphqlNode",
        "values": {
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\n  \"url\": \"string\"\n}"
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
      "id": "graphqlResponseNode_412",
      "data": {
        "nodeId": "graphqlResponseNode",
        "values": {
          "nodeName": "API Response",
          "outputMapping": "{\n  \"status\": \"{{crawlerNode_476.output.success}}\"\n}"
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
      }
    },
    {
      "id": "codeNode_704",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "output = {\n  demo: {{triggerNode_1.output.url}}\n}",
          "nodeName": "Code"
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