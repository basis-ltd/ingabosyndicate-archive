import { Amplify, API, graphqlOperation, GraphQLQuery } from 'aws-amplify/';
import awsconfig from './aws-exports';
import { Ingabo } from './models';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import Papa from 'papaparse';
import React from 'react';
import * as mutations from './graphql/mutations';
import { getIngabo, listIngabos } from './graphql/queries';

Amplify.configure(awsconfig);

const Import = () => {

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    Papa.parse(file, {
      complete: function(results) {
        console.log(results?.data);
        try {
          results.data.forEach(async (item) => {
            const newRecord = await API.graphql(graphqlOperation(mutations.createIngabo, {input: item}));
            console.log(newRecord);
          }); 
        } catch (error) {
          console.log(error)
        }
      },
      header: true,
    });
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <form>
        <label className="flex flex-col items-center gap-4">
          <input
            type="file"
            onChange={(e) => {
              handleUpload(e);
            }}
          />
          <input
            className="px-4 py-2 rounded-sm border-none flex items-center cursor-pointer bg-black text-white ease-in-out duration-300 hover:scale-[.98]"
            type="submit"
            value="Submit"
          />
        </label>
      </form>
    </main>
  );
}

export default Import