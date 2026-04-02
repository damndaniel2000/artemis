const flowConfig = {
  "id": "e7987d5b-2d0a-4190-a94a-e388bdf4d0d6",
  "name": "Faint Fireman",
  "edges": [],
  "status": "inactive",
  "created_at": "2025-06-16T08:38:35.247208+00:00",
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