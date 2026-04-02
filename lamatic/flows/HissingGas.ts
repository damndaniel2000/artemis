const flowConfig = {
  "id": "f5439ec9-1517-4ca9-96c7-680abc17c716",
  "name": "Google Drive File Ingest Vector Indexing",
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
      "id": "codeNode_777-IndexNode_674",
      "type": "defaultEdge",
      "source": "codeNode_777",
      "target": "IndexNode_674",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "IndexNode_674-addNode_609",
      "type": "defaultEdge",
      "source": "IndexNode_674",
      "target": "addNode_609",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2025-07-16T13:24:40.586683+00:00",
  "trigger_id": 2,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {
          "folderUrl": "list"
        },
        "nodeId": "googleDriveNode",
        "values": {
          "nodeName": "Google Drive",
          "syncMode": "incremental_append",
          "folderUrl": "https://drive.google.com/drive/folders/1LxoM3IlNHaAj3iPJueP_jKCIVSZsBdp-",
          "credentials": "Ian's Demo",
          "cronExpression": "0 0 00 1/1 * ? * UTC"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "chunkNode_836",
      "data": {
        "nodeId": "chunkNode",
        "values": {
          "nodeName": "chunking",
          "chunkField": "{{triggerNode_1.output.content}}",
          "numOfChars": 1500,
          "separators": [
            "\\n\\n",
            "\\n",
            " "
          ],
          "chunkingType": "recursiveCharacterTextSplitter",
          "overlapChars": 150
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
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
      "position": {
        "x": 0,
        "y": 0
      }
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
            "credentialId": "4700a180-3eb5-4066-b87d-d9da315ae7a4",
            "provider_name": "openai",
            "credential_name": "demo"
          },
          "generativeModelName": {}
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
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
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "IndexNode_674",
      "data": {
        "nodeId": "IndexNode",
        "values": {
          "nodeName": "Index to DB",
          "vectorDB": "VectorDB2718",
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
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "addNode_609",
      "data": {
        "nodeId": "addNode",
        "values": {
          "nodeName": ""
        }
      },
      "type": "addNode",
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