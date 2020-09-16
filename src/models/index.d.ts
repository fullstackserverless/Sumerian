import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class minimalVersion {
  readonly id: string;
  readonly version: string;
  constructor(init: ModelInit<minimalVersion>);
}

export declare class Profile {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly avatar?: S3Object;
  readonly owner?: string;
  constructor(init: ModelInit<Profile>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

export declare class Exam {
  readonly id: string;
  readonly english: boolean;
  readonly javaScript: boolean;
  readonly reactNative: boolean;
  readonly typeScript: boolean;
  readonly amplify: boolean;
  readonly owner?: string;
  constructor(init: ModelInit<Exam>);
  static copyOf(source: Exam, mutator: (draft: MutableModel<Exam>) => MutableModel<Exam> | void): Exam;
}

export declare class English {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly img: string;
  readonly uri: string;
  readonly json?: string;
  readonly owner?: string;
  constructor(init: ModelInit<English>);
  static copyOf(source: English, mutator: (draft: MutableModel<English>) => MutableModel<English> | void): English;
}

export declare class JavaScript {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly img: string;
  readonly uri: string;
  readonly json?: string;
  readonly owner?: string;
  constructor(init: ModelInit<JavaScript>);
  static copyOf(source: JavaScript, mutator: (draft: MutableModel<JavaScript>) => MutableModel<JavaScript> | void): JavaScript;
}

export declare class ReactNative {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly img: string;
  readonly uri: string;
  readonly json?: string;
  readonly owner?: string;
  constructor(init: ModelInit<ReactNative>);
  static copyOf(source: ReactNative, mutator: (draft: MutableModel<ReactNative>) => MutableModel<ReactNative> | void): ReactNative;
}

export declare class TypeScript {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly img: string;
  readonly uri: string;
  readonly json?: string;
  readonly owner?: string;
  constructor(init: ModelInit<TypeScript>);
  static copyOf(source: TypeScript, mutator: (draft: MutableModel<TypeScript>) => MutableModel<TypeScript> | void): TypeScript;
}

export declare class Amplify {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly img: string;
  readonly uri: string;
  readonly json?: string;
  readonly owner?: string;
  constructor(init: ModelInit<Amplify>);
  static copyOf(source: Amplify, mutator: (draft: MutableModel<Amplify>) => MutableModel<Amplify> | void): Amplify;
}

export declare class EnglishProg {
  readonly id: string;
  readonly doneId: string;
  readonly owner?: string;
  constructor(init: ModelInit<EnglishProg>);
  static copyOf(source: EnglishProg, mutator: (draft: MutableModel<EnglishProg>) => MutableModel<EnglishProg> | void): EnglishProg;
}

export declare class JavaScriptProg {
  readonly id: string;
  readonly doneId: string;
  readonly owner?: string;
  constructor(init: ModelInit<JavaScriptProg>);
  static copyOf(source: JavaScriptProg, mutator: (draft: MutableModel<JavaScriptProg>) => MutableModel<JavaScriptProg> | void): JavaScriptProg;
}

export declare class ReactNativeProg {
  readonly id: string;
  readonly doneId: string;
  readonly owner?: string;
  constructor(init: ModelInit<ReactNativeProg>);
  static copyOf(source: ReactNativeProg, mutator: (draft: MutableModel<ReactNativeProg>) => MutableModel<ReactNativeProg> | void): ReactNativeProg;
}

export declare class TypeScriptProg {
  readonly id: string;
  readonly doneId: string;
  readonly owner?: string;
  constructor(init: ModelInit<TypeScriptProg>);
  static copyOf(source: TypeScriptProg, mutator: (draft: MutableModel<TypeScriptProg>) => MutableModel<TypeScriptProg> | void): TypeScriptProg;
}

export declare class AmplifyProg {
  readonly id: string;
  readonly doneId: string;
  readonly owner?: string;
  constructor(init: ModelInit<AmplifyProg>);
  static copyOf(source: AmplifyProg, mutator: (draft: MutableModel<AmplifyProg>) => MutableModel<AmplifyProg> | void): AmplifyProg;
}