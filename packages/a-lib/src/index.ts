import { add, MySharedInterface } from "shared-types";
import { MySharedInterfaceBringsAllTheBoysToTheYard } from "shared-type-def";

class MyImplementation
  implements MySharedInterface, MySharedInterfaceBringsAllTheBoysToTheYard {
  preTS31: true;
  inYard: boolean;
  shared: boolean;
  items: number[];

  add() {
    return add(1, 2);
  }
}
