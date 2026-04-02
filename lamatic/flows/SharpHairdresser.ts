const flowConfig = {
  "id": "a7d2706e-c82d-452a-a86d-97f3e187b755",
  "name": "Loop nodes test",
  "edges": [
    {
      "id": "forLoopNode_974-codeNode_246",
      "data": {
        "condition": "Loop Start",
        "invisible": true
      },
      "type": "conditionEdge",
      "source": "forLoopNode_974",
      "target": "codeNode_246",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopEndNode_209-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "forLoopEndNode_209",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "triggerNode_1-codeNode_110",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "codeNode_110",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_110-forLoopNode_974",
      "type": "defaultEdge",
      "source": "codeNode_110",
      "target": "forLoopNode_974",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_246-forLoopEndNode_209-730",
      "type": "defaultEdge",
      "source": "codeNode_246",
      "target": "forLoopEndNode_209",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopNode_974-forLoopEndNode_209",
      "data": {
        "condition": "Loop",
        "invisible": false
      },
      "type": "loopEdge",
      "source": "forLoopNode_974",
      "target": "forLoopEndNode_209",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "forLoopEndNode_209-forLoopNode_974",
      "data": {
        "condition": "Loop",
        "invisible": true
      },
      "type": "loopEdge",
      "source": "forLoopEndNode_209",
      "target": "forLoopNode_974",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-responseNode_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2025-06-07T11:35:46.743192+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "forLoopNode_974",
      "data": {
        "nodeId": "forLoopNode",
        "values": {
          "id": "forLoopNode_974",
          "wait": 0,
          "endValue": "5",
          "nodeName": "Loop",
          "increment": "1",
          "connectedTo": "forLoopEndNode_209",
          "iterateOver": "range",
          "initialValue": "0",
          "iteratorValue": "[]"
        }
      },
      "type": "forLoopNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 300
      },
      "selected": false,
      "draggable": false
    },
    {
      "id": "forLoopEndNode_209",
      "data": {
        "nodeId": "forLoopEndNode",
        "values": {
          "id": "forLoopEndNode_209",
          "nodeName": "Loop End",
          "connectedTo": "forLoopNode_974"
        }
      },
      "type": "forLoopEndNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 600
      },
      "draggable": false
    },
    {
      "id": "codeNode_246",
      "data": {
        "nodeId": "codeNode",
        "values": {
          "id": "codeNode_246",
          "code": "const arr = [1, 2, 3, 4, 5];\nconst filteredArr = arr.filter(num => num % {{forLoopNode_974.output.currentValue}} + 1 === 0);\noutput = {\n  \"filteredArr\": filteredArr,\n  \"demo\": {{forLoopNode_974.output.currentValue}}\n}",
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
        "y": 450
      },
      "selected": false,
      "draggable": false
    },
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "id": "triggerNode_1",
          "headers": "",
          "retries": "0",
          "nodeName": "API Request",
          "webhookUrl": "",
          "responeType": "realtime",
          "retry_deplay": "0",
          "advance_schema": "{\n  \"deeee\": \"string\"\n}"
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
      "id": "responseNode_triggerNode_1",
      "data": {
        "nodeId": "graphqlResponseNode",
        "values": {
          "id": "responseNode_triggerNode_1",
          "nodeName": "API Response",
          "outputMapping": "{\n  \"deee\": \"{{forLoopEndNode_209.output.loopOutput[index].codeNode_246.output}}\",\n  \"defff\": \"{{forLoopEndNode_209.output.loopOutput[index].waitNode_468.output.success}}\"\n}"
        }
      },
      "type": "responseNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 750
      }
    },
    {
      "id": "codeNode_110",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "codeNode",
        "values": {
          "code": "console.log(\"DEMO\")\n\nconsole.log(\"DEMMOOO\")\n\noutput = {\n  demo: 'dem'\n}",
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