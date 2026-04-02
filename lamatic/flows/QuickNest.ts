const flowConfig = {
  "id": "ab2e186f-25e8-4d8e-9caa-ce419b427ff2",
  "name": "Quick Nest",
  "edges": [],
  "status": "active",
  "created_at": "2026-02-03T12:03:41.25905+00:00",
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