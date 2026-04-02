const flowConfig = {
  "id": "c72da15c-8e75-4ba9-9604-e1f9aa72b02d",
  "name": "Abundant Bed",
  "edges": [
    {
      "id": "triggerNode_1-plus-node-addNode_triggerNode_1576",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "plus-node-addNode_triggerNode_1576",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "inactive",
  "created_at": "2025-10-22T03:03:53.397943+00:00",
  "trigger_id": 14,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "airtableNode",
        "values": {
          "nodeName": "Airtable"
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
      "selected": true
    },
    {
      "id": "plus-node-addNode_triggerNode_1576",
      "data": {
        "label": "+",
        "nodeId": "addNode",
        "values": {}
      },
      "type": "addNode",
      "measured": {
        "width": 218,
        "height": 100
      },
      "position": {
        "x": 0,
        "y": 150
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