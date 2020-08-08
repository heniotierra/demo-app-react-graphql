const { get } = require("axios");

const app = require("../src/app");

let server;

beforeEach(async () => {
  server = await app.listen(8000);
});

afterEach(async () => {
  await server.close();
});

describe("GET /", () => {
  it("should return 'It's alive'", async () => {
    const { data } = await get("http://localhost:8000/");
    expect(data.status).toBe("It's alive!");
  });
});