import {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda';

import { fibonacci } from './fibonacci';

class BadRequestError extends Error {}
class NotFoundError extends Error {}

function getPath(event: APIGatewayProxyEventV2) {
  return event.rawPath;
}

function getHttpMethod(event: APIGatewayProxyEventV2) {
  return event.requestContext.http.method;
}

function getLastPathParam(event: APIGatewayProxyEventV2): string | undefined {
  return getPath(event).match(/\/([^/]+)\/?$/)?.[1] ?? undefined;
}

function handleRequestFibonacci(
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> {
  const n = Number(getLastPathParam(event));
  if (!(n >= 0)) {
    throw new BadRequestError();
  }
  return Promise.resolve({
    statusCode: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      fibonacciNumber: fibonacci(n),
    }),
  });
}

function route(event: APIGatewayProxyEventV2) {
  const path = getPath(event);
  const method = getHttpMethod(event);

  if (path.match(/^\/fibonacci\/[^/]+/) && method === 'GET') {
    return handleRequestFibonacci(event);
  }

  throw new NotFoundError();
}

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  try {
    return route(event);
  } catch (e) {
    if (e instanceof BadRequestError) {
      return { statusCode: 400 };
    }
    if (e instanceof NotFoundError) {
      return { statusCode: 404 };
    }
    return { statusCode: 500 };
  }
};
