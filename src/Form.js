import AmplifyForm from 'amplify-form';
import { FormTheme } from 'amplify-form';

// Path to the JSON representation of the GraphQL Schema
import { schema } from '../models/schema.json';

// Path to the GraphQL queries

// Import AmplifyForm
import AmplifyForm from 'amplify-form';

// Path to the JSON representation of the GraphQL Schema
import schema from '../graphql/schema.json';

// Import function to process the Form values (see below for example code)
import DataEntryForm from './Input';

export default Home = () => {
  return (
    <div>
      <h1>Create a new To do</h1>
      <AmplifyForm
        entity='Ingabo'
        graphQLJSONSchema={schema}
        onSubmit={DataEntryForm}
      />
    </div>
  );
};