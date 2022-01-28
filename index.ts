import "reflect-metadata";
import { container } from "tsyringe";

import { Controller } from "./controller";

const controller = container.resolve(Controller);

const serviceValue = controller.getValue();

console.log(serviceValue);
