import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class English {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly img: string;
  readonly uri: string;
  readonly owner?: string;
  constructor(init: ModelInit<English>);
  static copyOf(source: English, mutator: (draft: MutableModel<English>) => MutableModel<English> | void): English;
}