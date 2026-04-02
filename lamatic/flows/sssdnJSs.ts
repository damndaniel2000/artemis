const flowConfig = {
  "id": "d23254a7-6c7f-46e7-aacf-3d7d8aeea2c4",
  "name": "sssdnJSs",
  "edges": [],
  "status": "active",
  "created_at": "2026-02-03T12:09:40.31489+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {},
      "type": "triggerNode",
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