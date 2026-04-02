const flowConfig = {
  "id": "b4a6bfc7-b284-4da4-b674-d3a8276e69ba",
  "name": "Webhook testing",
  "edges": [
    {
      "id": "triggerNode_1-plus-node-addNode_triggerNode_1522",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "plus-node-addNode_triggerNode_1522",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2026-04-02T11:10:58.582579+00:00",
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
      "selected": true
    },
    {
      "id": "plus-node-addNode_triggerNode_1522",
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
        "y": 130
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