// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ingabo } = initSchema(schema);

export {
  Ingabo
};