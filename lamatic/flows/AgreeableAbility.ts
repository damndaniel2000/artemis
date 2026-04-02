const flowConfig = {
  "id": "8392efd3-7856-4582-8d3b-c81fbb3ce34e",
  "name": "Agreeable Abilitys",
  "edges": [],
  "status": "inactive",
  "created_at": "2025-06-19T03:57:02.129768+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {},
      "type": "triggerNode",
      "measured": {
        "width": 218,
        "height": 71
      },
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