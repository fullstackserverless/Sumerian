// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profile, English, JavaScript, ReactNative, TypeScript, Amplify } = initSchema(schema);

export {
  Profile,
  English,
  JavaScript,
  ReactNative,
  TypeScript,
  Amplify
};