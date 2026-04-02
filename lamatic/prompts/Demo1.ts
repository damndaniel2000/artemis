const promptConfig = {
  "id": "e8faf86c-4007-4024-ad8b-bdf9fbb05bb2",
  "name": "Demo",
  "config": {
    "tools": [],
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
  "created_at": "2025-04-22T23:42:52.076574+00:00"
};

export async function getPromptConfig(): Promise<Record<string, any>> {
    return promptConfig;
}