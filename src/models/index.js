// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profile, Exam, English, JavaScript, ReactNative, TypeScript, Amplify, EnglishProg, JavaScriptProg, ReactNativeProg, TypeScriptProg, AmplifyProg, S3Object, minimalVersion } = initSchema(schema);

export {
  Profile,
  Exam,
  English,
  JavaScript,
  ReactNative,
  TypeScript,
  Amplify,
  EnglishProg,
  JavaScriptProg,
  ReactNativeProg,
  TypeScriptProg,
  AmplifyProg,
  S3Object,
  minimalVersion
};