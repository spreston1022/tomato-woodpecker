//module - ./modules/rate-limiter.ts


import {
  CustomRateLimitDetails,
  ZuploRequest,
  ZuploContext,
} from "@zuplo/runtime";


export function rateLimitKey(
  request: ZuploRequest,
  context: ZuploContext,
  policyName: string,
): CustomRateLimitDetails | undefined {

  const details: CustomRateLimitDetails = {
    key: new URL(request.url).pathname,
  };

  return details;
}