import { container } from "tsyringe";

import { Controller} from "./controller";
import { RealService, MockService } from "./service";

describe("Tests with mocked service", () => {

  beforeAll(() => {
    container.clearInstances();
    container.register<RealService>(RealService, MockService);
  });

  test("Testing the real controller using a mock service", () => {
    const controller = container.resolve(Controller);

    expect(controller.getValue()).toStrictEqual('Mock service');
  });

  afterAll(() => {
    container.clearInstances();
  });
});

describe("Tests with real service", () => {

  beforeAll(() => {
    container.clearInstances();
    container.register<RealService>(RealService, RealService);
  });

  test("Testing the real controller using the real service", () => {
    const controller = container.resolve(Controller);

    expect(controller.getValue()).toStrictEqual('Real service');
  });

  afterAll(() => {
    container.clearInstances();
  });
});
