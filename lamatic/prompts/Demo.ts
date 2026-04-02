const promptConfig = {
  "id": "f97f2ca1-28e4-4de2-84be-50659cb4ab7f",
  "name": "Demo",
  "config": {
    "tools": [],
    "values": {
      "prompts": [
        {
          "id": "ad7c8d3f-480d-4837-8b00-a0ba2b77079e",
          "role": "system",
          "content": ""
        }
      ],
      "generativeModelName": [
        {
          "type": "generator/text",
          "configName": "configA"
        }
      ]
    },
    "prompts": [
      {
        "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
        "role": "system",
        "content": "You are an AI Assistant"
      }
    ],
    "memories": "[]",
    "messages": "[]",
    "nodeName": "Demo",
    "attachments": "",
    "generativeModelName": ""
  },
  "type": "LLMNode",
  "status": "inactive",
  "created_at": "2025-04-22T00:10:34.004932+00:00"
};

export async function getPromptConfig(): Promise<Record<string, any>> {
    return promptConfig;
}