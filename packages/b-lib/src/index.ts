import { add, MySharedInterface } from "shared-types";
import {
  MySharedInterfaceBringsAllTheBoysToTheYard,
  TheyAreLike,
} from "shared-type-def";

class MyImplementation
  implements MySharedInterface, MySharedInterfaceBringsAllTheBoysToTheYard {
  ts35AndUp: true;
  boys: object[];
  andTheyAreLike: Pick<TheyAreLike, "better">;
  inYard: boolean;
  shared: boolean;
  items: number[];

  add() {
    return add(1, 2);
  }
}
