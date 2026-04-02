const flowConfig = {
  "id": "4a3accab-502e-403a-8be8-2592b3d890e0",
  "name": "Social Media Image Caption",
  "edges": [
    {
      "id": "variablesNode_999-InstructorLLMNode_882",
      "type": "defaultEdge",
      "source": "variablesNode_999",
      "target": "InstructorLLMNode_882",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "triggerNode_1-variablesNode_999",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "variablesNode_999",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "InstructorLLMNode_882-responseNode_triggerNode_1",
      "type": "defaultEdge",
      "source": "InstructorLLMNode_882",
      "target": "responseNode_triggerNode_1",
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
  "created_at": "2025-06-20T05:11:49.606762+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "graphqlNode",
        "values": {
          "retries": "0",
          "nodeName": "API Request",
          "webhookUrl": "",
          "responeType": "realtime",
          "retry_deplay": "0",
          "advance_schema": "{\n  \"url\": \"string\"\n}"
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
      "id": "InstructorLLMNode_882",
      "data": {
        "modes": {},
        "nodeId": "InstructorLLMNode",
        "values": {
          "tools": [],
          "schema": "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"caption\": {\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"This defines the caption for this instagram post\"\n    },\n    \"positives\": {\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"This implies the positive insights about this image for the user's feed\"\n    },\n    \"improvements\": {\n      \"type\": \"string\",\n      \"required\": true,\n      \"description\": \"This implies the improvements and criticisms of the post for the user\"\n    }\n  }\n}",
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are an AI model that generates captions for an image based on the provided **language** and **platform**.\n\n---\n\n### 🧠 **Your Task Is To:**\n\n1. **Analyze** the image content thoroughly.\n2. **Generate a caption** that is:  \n   * Relevant and accurate to the image.  \n   * Creative and engaging.  \n   * Written in the specified `{{variablesNode_999.output.language}}`.  \n         * If the language is unclear or unspecified, default to English.\n3. **Adapt the tone and style** of the caption based on the specified `{{variablesNode_999.output.platform}}`:\n\n---\n\n### 🎯 **Platform-Specific Guidelines:**\n\n* **Instagram**  \nStyle: Visual, emotive, casual, lifestyle-oriented.  \n✔ Use emojis, hashtags, short phrases, trendy language.  \n📌 Example: _Golden hour magic ✨ #sunsetvibes #wanderlust_\n* **Reddit**  \nStyle: Honest, clever, contextual (can be humorous or serious depending on subreddit).  \n✔ Engage with the community tone (e.g., r/pics, r/funny, r/aww).  \n📌 Example: _When your dog realizes it’s Monday again..._\n* **LinkedIn**  \nStyle: Professional, motivational, reflective.  \n✔ Use formal language, insights, industry relevance.  \n📌 Example: _A reminder that teamwork and dedication drive real impact._\n* **Twitter / X**  \nStyle: Witty, bold, timely.  \n✔ Maximize character impact. Use trending hashtags or pithy observations.  \n📌 Example: _Just dropped: the future of coffee ☕️ #MondayMotivation_\n* **Facebook**  \nStyle: Friendly, community-driven, narrative.  \n✔ Slightly longer captions, storytelling, family-oriented.  \n📌 Example: _Can’t believe how fast they grow up! First day of school vibes._\n* **Pinterest**  \nStyle: Aesthetic, aspirational, instructional.  \n✔ Focus on inspiration, DIY, beauty, fashion, home decor.  \n📌 Example: _Minimalist kitchen inspo you’ll want to pin ASAP._\n* **YouTube (for thumbnails or community posts)**  \nStyle: Punchy, curiosity-driven, often with a call to action.  \n📌 Example: _This camera changed how I shoot forever — here’s why 📸_\n* **TikTok**  \nStyle: Gen Z-centric, playful, edgy.  \n✔ Use slang, humor, or challenges.  \n📌 Example: _POV: you try ONE dance move and go viral 💀_\n* **Tumblr**  \nStyle: Poetic, niche, fandom-aware.  \n✔ Use tags, aesthetic language, or layered humor.  \n📌 Example: _soft light. quiet breath. sunday stillness. #mood_\n* **Default / Unknown Platform**  \nStyle: Neutral, clear, and adaptable.  \n📌 Example: _A serene landscape with morning fog rolling over the hills._\n\n---\n\n### 🌍 **Language Handling:**\n\n* Write in `{{variablesNode_999.output.language}}` with idiomatic, natural phrasing.\n* If language is not provided or unsupported, default to clear English."
            },
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
              "role": "user",
              "content": "\n\nContent Platform : {{variablesNode_999.output.platform}}\n\nCaption Langauge : {{variablesNode_999.output.language}}  "
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "Generate JSON",
          "attachments": "{{triggerNode_1.output.url}}",
          "generativeModelName": {
            "type": "generator/text",
            "model_name": "gpt-4o-mini",
            "credentialId": "adc25c07-1a25-4fe1-8ea0-09c4e000bea7",
            "provider_name": "openai",
            "credential_name": "New"
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
      "id": "variablesNode_999",
      "data": {
        "modes": {},
        "nodeId": "variablesNode",
        "values": {
          "mapping": "{\n  \"language\": {\n    \"type\": \"string\",\n    \"value\": \"English\"\n  },\n  \"platform\": {\n    \"type\": \"string\",\n    \"value\": \"Instagram\"\n  }\n}",
          "nodeName": "Platform and Language"
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "responseNode_triggerNode_1",
      "data": {
        "nodeId": "graphqlResponseNode",
        "values": {
          "nodeName": "API Response",
          "outputMapping": "{\n  \"caption\": \"{{InstructorLLMNode_882.output.caption}}\",\n  \"positives\": \"{{InstructorLLMNode_882.output.positives}}\",\n  \"improvements\": \"{{InstructorLLMNode_882.output.improvements}}\"\n}"
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