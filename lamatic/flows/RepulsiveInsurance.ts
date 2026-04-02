const flowConfig = {
  "id": "3719b8e4-51bf-4910-bc28-358b87bf67a8",
  "name": "mi9 testing",
  "edges": [
    {
      "id": "triggerNode_1-chunkNode_836",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "chunkNode_836",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "chunkNode_836-codeNode_344",
      "type": "defaultEdge",
      "source": "chunkNode_836",
      "target": "codeNode_344",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_344-vectorizeNode_777",
      "type": "defaultEdge",
      "source": "codeNode_344",
      "target": "vectorizeNode_777",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorizeNode_777-codeNode_777",
      "type": "defaultEdge",
      "source": "vectorizeNode_777",
      "target": "codeNode_777",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_777-apiNode_828",
      "type": "defaultEdge",
      "source": "codeNode_777",
      "target": "apiNode_828",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "apiNode_828-IndexNode_674",
      "type": "defaultEdge",
      "source": "apiNode_828",
      "target": "IndexNode_674",
      "selected": false,
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "IndexNode_674-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "IndexNode_674",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-trigger_triggerNode_1",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "responseNode_triggerNode_1",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2025-07-04T00:37:04.355564+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "headers": "",
          "retries": "0",
          "nodeName": "API Request",
          "webhookUrl": "",
          "responeType": "realtime",
          "retry_deplay": "0",
          "advance_schema": "{\n  \"content\": \"string\",\n  \"document_key\": \"string\"\n}"
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
      "id": "chunkNode_836",
      "data": {
        "nodeId": "chunkNode",
        "values": {
          "nodeName": "chunking",
          "chunkField": "{{triggerNode_1.output.content}}",
          "numOfChars": 500,
          "separators": [
            "\\n\\n",
            "\\n",
            " "
          ],
          "chunkingType": "recursiveCharacterTextSplitter",
          "overlapChars": 50
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
    },
    {
      "id": "codeNode_344",
      "data": {
        "nodeId": "codeNode",
        "values": {
          "code": "let docs =  {{chunkNode_836.output.chunks}};\n\nlet outputDocs = docs.map(doc => doc.pageContent);\n\noutput = outputDocs;",
          "nodeName": "Extract Chunked Text"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 300
      },
      "selected": false
    },
    {
      "id": "vectorizeNode_777",
      "data": {
        "nodeId": "vectorizeNode",
        "values": {
          "nodeName": "Get Vectors",
          "inputText": "{{codeNode_344.output}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "model_name": "text-embedding-ada-002",
            "credentialId": "a8b4d2a6-b228-461e-884d-43c366322fba",
            "provider_name": "openai",
            "credential_name": "Testing"
          },
          "generativeModelName": {}
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
      "selected": false
    },
    {
      "id": "codeNode_777",
      "data": {
        "nodeId": "codeNode",
        "values": {
          "code": "let vectors = {{vectorizeNode_777.output.vectors}};\nlet metadataProps = [];\nlet texts = {{codeNode_344.output}};\n\nfor (const idx in vectors) {\n    let metadata = {}\n    metadata[\"content\"] = texts[idx];\n    metadata[\"file_name\"] = {{triggerNode_1.output.document_key}};\n    metadataProps.push(metadata)\n}\nconsole.log(\"finaldata:\", {\"metadata\": metadataProps, \"vectors\": vectors});\noutput = {\"metadata\": metadataProps, \"vectors\": vectors}",
          "nodeName": "Transform Metadata"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 600
      },
      "selected": false
    },
    {
      "id": "IndexNode_674",
      "data": {
        "nodeId": "IndexNode",
        "values": {
          "nodeName": "Index to DB",
          "vectorDB": "VectorDB7221",
          "webhookURL": "https://webhook.site/685a66e7-b4d3-40a4-9801-99e3460414f9",
          "primaryKeys": [
            "file_name"
          ],
          "vectorsField": "{{codeNode_777.output.vectors}}",
          "metadataField": "{{codeNode_777.output.metadata}}",
          "duplicateOperation": "overwrite",
          "embeddingModelName": {},
          "generativeModelName": {
            "nodeId": "IndexNode"
          }
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 900
      }
    },
    {
      "id": "apiNode_828",
      "data": {
        "label": "dynamicNode node",
        "modes": {},
        "nodeId": "apiNode",
        "values": {
          "url": "https://webhook.site/6b8c363d-3594-4a68-bc82-046b3c2abfa7",
          "body": "{\r\n    \"content\": {{codeNode_777.output}}\r\n}",
          "method": "POST",
          "headers": "",
          "retries": "0",
          "nodeName": "API",
          "retry_deplay": "0"
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 750
      },
      "selected": false
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "label": "Response",
        "nodeId": "graphqlResponseNode",
        "values": {
          "nodeName": "API Response",
          "outputMapping": "{}"
        },
        "isResponseNode": true
      },
      "type": "responseNode",
      "measured": {
        "width": 218,
        "height": 95
      },
      "position": {
        "x": 0,
        "y": 1050
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