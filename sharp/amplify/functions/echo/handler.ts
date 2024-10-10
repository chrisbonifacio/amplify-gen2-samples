//Next, define the Lambda function handler in functions.ts:
import type { AppSyncResolverHandler } from "aws-lambda";
// types imported from @types/aws-lambda
type ResolverArgs = { content: string };
type ResolverResult = { content: string; executionDuration: number };
export const handler: AppSyncResolverHandler<
  ResolverArgs,
  ResolverResult
> = async (event, context) => {
  const start = performance.now();
  return {
    content: `Echoing content: ${event.arguments.content}`,
    executionDuration: performance.now() - start,
  };
};
