const flowConfig = {
  "id": "2a53bea4-91d6-4d90-a7a7-6e58a7fe1ac1",
  "name": "Best Library",
  "edges": [
    {
      "id": "triggerNode_1-scraperNode_823",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "scraperNode_823",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "scraperNode_823-chunkNode_770",
      "type": "defaultEdge",
      "source": "scraperNode_823",
      "target": "chunkNode_770",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "chunkNode_770-codeNode_158",
      "type": "defaultEdge",
      "source": "chunkNode_770",
      "target": "codeNode_158",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_158-vectorizeNode_295",
      "type": "defaultEdge",
      "source": "codeNode_158",
      "target": "vectorizeNode_295",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "codeNode_512-IndexNode_824",
      "type": "defaultEdge",
      "source": "codeNode_512",
      "target": "IndexNode_824",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "vectorizeNode_295-codeNode_512",
      "type": "defaultEdge",
      "source": "vectorizeNode_295",
      "target": "codeNode_512",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "IndexNode_824-graphqlResponseNode_532",
      "type": "defaultEdge",
      "source": "IndexNode_824",
      "target": "graphqlResponseNode_532",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-graphqlResponseNode_532",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "graphqlResponseNode_532",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2025-06-17T14:31:23.511813+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "nodeId": "graphqlNode",
        "values": {
          "nodeName": "API Request",
          "responeType": "realtime",
          "advance_schema": "{\n  \"start\": \"string\"\n}"
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
      "id": "scraperNode_823",
      "data": {
        "nodeId": "scraperNode",
        "values": {
          "url": "https://lamatic.ai/docs",
          "mobile": false,
          "waitFor": "1000",
          "nodeName": "Scraper",
          "credentials": "TESTING",
          "excludeTags": [],
          "includeTags": [],
          "onlyMainContent": true,
          "skipTLsVerification": false
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "chunkNode_770",
      "data": {
        "nodeId": "chunkNode",
        "values": {
          "nodeName": "Chunking",
          "chunkField": "{{scraperNode_823.output.markdown}}",
          "numOfChars": 500,
          "separators": [
            "\n\n",
            "\n",
            " "
          ],
          "chunkingType": "recursiveCharacterTextSplitter",
          "overlapChars": 50
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "codeNode_158",
      "data": {
        "nodeId": "codeNode",
        "values": {
          "code": "let docs = {{chunkNode_770.output.chunks}}\n\nlet outputDocs = docs.map((doc) => doc.pageContent)\n\nreturn outputDocs",
          "nodeName": "Extract Chunks"
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "vectorizeNode_295",
      "data": {
        "nodeId": "vectorizeNode",
        "values": {
          "nodeName": "Vectorize",
          "inputText": "{{codeNode_158.output}}",
          "embeddingModelName": {
            "type": "embedder/text",
            "model_name": "text-embedding-ada-002",
            "credentialId": "adc25c07-1a25-4fe1-8ea0-09c4e000bea7",
            "provider_name": "openai",
            "credential_name": "New"
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
      "id": "IndexNode_824",
      "data": {
        "nodeId": "IndexNode",
        "values": {
          "nodeName": "Index",
          "vectorDB": "VectorDB6449",
          "primaryKeys": [
            "title"
          ],
          "vectorsField": "{{codeNode_512.output.vectors}}",
          "metadataField": "{{codeNode_512.output.metadata}}",
          "duplicateOperation": "overwrite"
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "codeNode_512",
      "data": {
        "nodeId": "codeNode",
        "values": {
          "code": "let vectors = {{vectorizeNode_295.output.vectors}}\nlet metadataProps = [];\nlet texts = {{codeNode_158.output}}\n\nfor (const idx in vectors) {\n  let metadata = {}\n  metadata[\"content\"] = texts[idx];\n  metadata[\"title\"] = {{scraperNode_823.output.title}}\n  metadata[\"url\"] = {{ scraperNode_823.output.sourceURL }};\n  metadata[\"description\"] = {{scraperNode_823.output.description}}\n  metadataProps.push(metadata)\n};\n\noutput = { \"metadata\": metadataProps, \"vectors\": vectors }",
          "nodeName": "Transform MetaData"
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "graphqlResponseNode_532",
      "data": {
        "nodeId": "graphqlResponseNode",
        "values": {
          "nodeName": "API Response",
          "outputMapping": "{\n  \"message\": \"{{IndexNode_824.output.message}}\",\n  \"records\": \"{{IndexNode_824.output.recordsIndexed}}\"\n}"
        }
      },
      "type": "dynamicNode",
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