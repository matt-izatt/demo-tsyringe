import { singleton } from "tsyringe";

import { RealService } from "./service";

@singleton()
export class Controller {
  constructor(private service: RealService) {
      console.log('Constructed');
  }

  getValue(): string {
   return this.service.value;
  }
}