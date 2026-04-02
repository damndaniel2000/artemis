const flowConfig = {
  "id": "b6a81abd-ed69-48e2-871a-45e667345bfc",
  "name": "Howling Lighter",
  "edges": [],
  "status": "inactive",
  "created_at": "2025-06-10T08:28:36.169679+00:00",
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