const flowConfig = {
  "id": "78604386-201a-49af-a58c-80b0a205eaa8",
  "name": "Pitiful Exabyte",
  "edges": [],
  "status": "inactive",
  "created_at": "2025-06-12T13:55:22.528505+00:00",
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