import { handler } from '../src/index';
import { APIGatewayProxyEventV2 } from 'aws-lambda';

describe('testing index', () => {
  const request = (): APIGatewayProxyEventV2 => {
    return {
      version: '',
      routeKey: '',
      rawPath: '',
      headers: {},
      rawQueryString: '',
      requestContext: {
        accountId: '',
        apiId: '',
        domainName: '',
        domainPrefix: '',
        http: {
          method: 'GET',
          path: '',
          protocol: '',
          sourceIp: '',
          userAgent: '',
        },
        requestId: '',
        routeKey: '',
        stage: '',
        time: '',
        timeEpoch: 0,
      },
      isBase64Encoded: false,
    };
  };

  describe('testing fibonacci handler', () => {
    it('returns fibonacci number 0, if /fibonacci/0 is called', async () => {
      // Setup
      const req = request();
      req.rawPath = '/fibonacci/0';

      // Exercise
      const actual = await handler(req);

      // Verify
      expect(actual.statusCode).toBe(200);
      expect(JSON.parse(actual.body ?? '')).toStrictEqual({
        fibonacciNumber: 0,
      });
    });

    it('returns fibonacci number 1, if /fibonacci/1 is called', async () => {
      // Setup
      const req = request();
      req.rawPath = '/fibonacci/1';

      // Exercise
      const actual = await handler(req);

      // Verify
      expect(actual.statusCode).toBe(200);
      expect(JSON.parse(actual.body ?? '')).toStrictEqual({
        fibonacciNumber: 1,
      });
    });

    it('returns fibonacci number 34, if /fibonacci/9 is called', async () => {
      // Setup
      const req = request();
      req.rawPath = '/fibonacci/9';

      // Exercise
      const actual = await handler(req);

      // Verify
      expect(actual.statusCode).toBe(200);
      expect(JSON.parse(actual.body ?? '')).toStrictEqual({
        fibonacciNumber: 34,
      });
    });

    it('returns 400, if /fibonacci is called with invalid param', async () => {
      // Setup
      const req = request();
      req.rawPath = '/fibonacci/invalid';

      // Exercise
      const actual = await handler(req);

      // Verify
      expect(actual.statusCode).toBe(400);
    });

    it('returns 404, if /fibonacci is called by HTTP method other than GET', async () => {
      // Setup
      const req = request();
      req.rawPath = '/fibonacci/0';
      req.requestContext.http.method = 'POST';

      // Exercise
      const actual = await handler(req);

      // Verify
      expect(actual.statusCode).toBe(404);
    });

    it('returns 404, if unknown endpoint is called', async () => {
      // Setup
      const req = request();
      req.rawPath = '/unknown';

      // Exercise
      const actual = await handler(req);

      // Verify
      expect(actual.statusCode).toBe(404);
    });
  });
});
