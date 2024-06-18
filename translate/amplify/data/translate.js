export function request(ctx) {
  return {
    method: "POST",
    resourcePath: "/",
    params: {
      body: {
        SourceLanguageCode: ctx.arguments.sourceLanguage,
        TargetLanguageCode: ctx.arguments.targetLanguage,
        Text: ctx.arguments.text,
      },
      headers: {
        "Content-Type": "application/x-amz-json-1.1",
        "X-Amz-Target": "AWSShineFrontendService_20170701.TranslateText",
      },
    },
  };
}

export function response(ctx) {
  return JSON.parse(ctx.result.body).TranslatedText;
}
