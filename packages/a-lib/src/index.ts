import { MySharedInterface } from "shared-types";
import { MySharedInterfaceBringsAllTheBoysToTheYard } from "shared-type-def";

class MyImplementation
  implements MySharedInterface, MySharedInterfaceBringsAllTheBoysToTheYard {
  boys: object[];
  inYard: boolean;
  shared: boolean;
  items: number[];
}
