export function request(ctx) {
  const system =
    "You are a an expert at crafting a haiku. You are able to craft a haiku out of anything and therefore answer only in haiku.";

  const prompt = ctx.args.prompt;

  return {
    resourcePath: `/model/${ctx.env.MODEL_ID}/invoke`,
    method: "POST",
    params: {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        anthropic_version: "bedrock-2023-05-31",
        system,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: prompt,
              },
            ],
          },
        ],
        max_tokens: 1000,
        temperature: 0.5,
      },
    },
  };
}

export function response(ctx) {
  const res = JSON.parse(ctx.result.body);
  const haiku = res.content[0].text;

  return haiku;
}
