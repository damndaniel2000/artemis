const promptConfig = {
  "id": "8ff012d7-9f15-4cc8-b386-90a1a5372ce9",
  "name": "new",
  "config": {
    "values": {
      "tools": [],
      "prompts": [
        {
          "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
          "role": "system",
          "content": "You are an AI Assistant"
        },
        {
          "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
          "role": "user",
          "content": "Write your prompt here "
        }
      ],
      "memories": "[]",
      "messages": "[]",
      "nodeName": "new",
      "attachments": "",
      "credentials": "",
      "generativeModelName": [
        {
          "type": "generator/text",
          "params": {},
          "configName": "configA",
          "provider_name": "",
          "credential_name": ""
        }
      ]
    }
  },
  "type": "LLMNode",
  "status": "inactive",
  "created_at": "2025-11-14T03:57:18.976256+00:00"
};

export async function getPromptConfig(): Promise<Record<string, any>> {
    return promptConfig;
}