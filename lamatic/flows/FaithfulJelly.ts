const flowConfig = {
  "id": "2d33f5a4-92b1-4861-b81a-d095c488ceca",
  "name": "Faithful Jelly",
  "edges": [],
  "status": "active",
  "created_at": "2026-02-09T08:53:27.555129+00:00",
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