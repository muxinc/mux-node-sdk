const { expect } = require('chai');
const path = require('path');
const { JWT } = require('../../../cjs/utils/jwt');

const TEST_ID = '01XNj9qIpoW3eU1sED8EqrFRy01J3VTZ01x';
const TEST_SECRET =
  ' LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBNGdoaERZN25QTzFhMmxibHN0T3JTcmt3VUdkdzVaT0tjR0h5U2NkWXpoc1FudHNnCkw4VWxHcURScVhuZFZ2Ky9rMEI2MnZxbzJGT1gvYkdVK2srT2lRang4UCswNVJKOWEyL1lpSzJjQm56MG15WEEKOS9CajRVNis1d3dCUk15Z2xCd2VaeWt1ZVNsZ1dYYnZRRm50bE1LcXptYU5XcnJvSDNpVEJZUU9xeFF5dHdkZApaSXlVeTYwNDJUMXJaQm5WOVN3RzA0UEhjaVJ3TjJ3Ly83YVhMY2FGRnJTOUVxZ29SNGszcjllblN1YWM3STRvCmV5NVJwMmFaVXlzK3U1VnMwUzluMzIzWVViMWZtRU1kZzEyWU1yMHIyL2Q5ZjMrdVZXQVVUTkQ1MitSREsvZ00KOEt6dW5FZ2w5eWFacit6VlFpa0RhOFoyOE9yOUxrN0xNNk5TNlFJREFRQUJBb0lCQURPbXRvYmlvUFRMU0hlYwpZK0Q1ZmFzVnBuUzVMcE5IbzlzS2h0TlZPblhldVcyVHBVZEZSYlZRQ3BrdnYrU2hqS1dabG5senppR2crSnFBCmVncTVJMWt0TWh4Z1VuWUdRNkxKYkRIUGVsZ0JOZVErUEZwc0ZHYm9GN2UwaHBXeUxQK3JiVWNsb2ZrTiszWjIKTnpYOVZzMG5ydUI3anRHczVGNU1yMHdUWVVhMmFNSHU2dnNNZFNYY00rZTVZS3FCQ3Z3dS9MZ0ZvVFE1YXh0RQo0ZzJYbU91YUQrSFBPU0o1T0Mwc3grK1RkbXBNL1lMK3RjVjZZNVBWbUFMUURMcmFJdU9UM01lcUlicElvRlZQCmcxeldSOTBqb3BKWVpLSVFoNEY4WE4xODR1bmZ6bjVJbW1JdktOWE9QSU1YMk1oekw2YU5rSXZ5YmdpWUIvVGwKMm5vdVNBRUNnWUVBNHlzZmVZL0h3Rkl4Vy9MZ2R3UHJubDR4aGkwRkFWeE1QK1k0alhYUHU1bklXS3dvUk1xbgplTEd6UnhESnlhQmN5NXgzVjFhTmYwblV1YzJqRUM2Yi9XUUo2VWJMUzJvK2J1NmdJR1NsbmxLWS9uSlJGTnpwClE0d0F1c1J3M2dTVi9FNW12QVJiYk1vQ3Rha3FxdXhhWlMzODQ1MEFaQkxqcm1kZDU1VlFPUVVDZ1lFQS9yaGIKRm9oVmdxZzY0QjFpU0FCc3dYdTdLNzZHQUN4ZEg0MmxoVjQvNktiUVRVNnFwRWxVZURwbWlVeUkxeVBxZ1MwbApLYS9XMGg5VDI5S0Z1bVlFOWdlUG02b0ZaZjIvQ0RnaWtTWHdQTk5kRWp2SmtrMXdnb3dLbDNNbUhuWGtTYUlZCmpYVG9Td2tmN2RJREhVRXQ3RnRVd1VsQXROM3N4TFcvWlVKSEI1VUNnWUFMOXkyRlBhbUwyOGgxeTJrL1c1bUIKa2Z5UjBMVSt5Um5MRTlsT3VqSGk4OHExd1B1dUErNm1VTlhjbkduRWtRblNQNytaZmhtZDVzbXByOGN6QndGNAphMWlLVFF4UVFKeGhRM2h6dkZsczZYVGRraS9ySldlMEF4L1d0cG9yVjVwKzI3SlZuUFVqMmRBaXVYSmg1bWtzCmd5dWE0WjR2cHo4TzVLcnhrOC9SOFFLQmdRQ1BJbE4xTHZrMktZaWtCWDhEek5GUVRGSWFPNzZhL0ZMNzl5R3EKOXhKY2p0aUFpSk1WTEd1OS83czhyZmc3Uk9CeTVFWjh6V1dldjZIazVjRGx4SXhISUdxUFk1UVRBdXJGR0o0OApDQ0NlWFh0d1VvNXJtdjU5TFdxS1BsZU9TRnNYRVhKUWt3QXhvaGdDRU1CVlFSb29OZzVEYXdGa1lVeTZJUk5ECk9HSW5uUUtCZ1FDeWo1UVU3YjcycktVaWlhTisxaExrVEJFQUFab01jRjY4Ukp5Mlh5VXo5bVJQK1hLMkthbHoKbVdXNFh2RHZoVlB1T25tNjJ1RkxURCsybG1mNjdwUlY3bHlSVWlycVFabzNUVmsweE8yS3JJV21uRm1EZzBSRQp6YnB6MVJsZy9ZVjhQU3E4alE3ZUFsRUs0RHRSdlVoQW5RRU52NlVyVjltRnRjR1k0ZFhSUmc9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQo=';

/** @test {Mux.Utils.JWT} */
describe('Utils::JWT', () => {
  /** @test {Mux.Utils.JWT.sign} */
  describe('sign', () => {
    /** @test {Mux.Utils.JWT.sign} */
    it('defaults to video and includes an expiration', () => {
      const options = {
        keyId: TEST_ID,
        keySecret: TEST_SECRET,
      };

      const token = JWT.sign('some-playback-id', options);
      expect(token).to.be.a('string');
      const decoded = JWT.decode(token);
      expect(decoded.aud).to.eq('v');
      expect(decoded.exp).to.be.greaterThan(new Date().getTime() / 1000);
    });

    it('maps type video to v', () => {
      const options = {
        keyId: TEST_ID,
        keySecret: TEST_SECRET,
        type: 'video',
      };
      const token = JWT.sign('some-playback-id', options);
      expect(token).to.be.a('string');
      const decoded = JWT.decode(token);
      expect(decoded.aud).to.eq('v');
    });

    it('maps type thumbnail to t', () => {
      const options = {
        keyId: TEST_ID,
        keySecret: TEST_SECRET,
        type: 'thumbnail',
      };
      const token = JWT.sign('some-playback-id', options);
      expect(token).to.be.a('string');
      const decoded = JWT.decode(token);
      expect(decoded.aud).to.eq('t');
    });

    it('maps type gif to g', () => {
      const options = {
        keyId: TEST_ID,
        keySecret: TEST_SECRET,
        type: 'gif',
      };
      const token = JWT.sign('some-playback-id', options);
      expect(token).to.be.a('string');
      const decoded = JWT.decode(token);
      expect(decoded.aud).to.eq('g');
    });

    it('maps type storyboard to s', () => {
      const options = {
        keyId: TEST_ID,
        keySecret: TEST_SECRET,
        type: 'storyboard',
      };
      const token = JWT.sign('some-playback-id', options);
      expect(token).to.be.a('string');
      const decoded = JWT.decode(token);
      expect(decoded.aud).to.eq('s');
    });

    it('takes a file path for a secret', () => {
      const options = {
        keyId: TEST_ID,
        keyFilePath: path.join(__dirname, 'example-private-key.pem'),
        type: 'gif',
      };

      const token = JWT.sign('some-playback-id', options);
      expect(token).to.be.a('string');
      const decoded = JWT.decode(token);
      expect(decoded.aud).to.eq('g');
    });

    it('falls back to using environment variables for the key and secret', () => {
      process.env.MUX_SIGNING_KEY = TEST_ID;
      process.env.MUX_PRIVATE_KEY = TEST_SECRET;
      const options = {
        type: 'gif',
      };

      const token = JWT.sign('some-playback-id', options);
      expect(token).to.be.a('string');
      const decoded = JWT.decode(token);
      expect(decoded.aud).to.eq('g');
    });

    it('accepts a timestamp or time shorthand', () => {
      const options1 = {
        keyId: TEST_ID,
        keySecret: TEST_SECRET,
        expiration: '3h',
      };

      const options2 = {
        ...options1,
        expiration: 60 * 60 * 3,
      };

      const token1 = JWT.sign('some-playback-id', options1);
      const token2 = JWT.sign('some-playback-id', options2);
      expect(token1).to.be.a('string');
      expect(token2).to.be.a('string');

      const decoded1 = JWT.decode(token1);
      const decoded2 = JWT.decode(token2);
      expect(decoded1.exp).to.be.closeTo(decoded2.exp, 2);
    });
  });
});
