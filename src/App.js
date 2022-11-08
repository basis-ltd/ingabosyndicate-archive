import logo from './logo.svg';
import './App.css';
import Table from './Table'
import { Amplify, API, graphqlOperation } from 'aws-amplify/';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { Button } from './Button'


function App({ signOut, user }) {


  return (
    <div className="App">
     
     <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">INGABO SYNDICATE</h1>
        </div>
        <div className="mt-4">
            <Table />
        </div>
      </main>
      </div>
      </div>
  );
}

export default withAuthenticator(App);
