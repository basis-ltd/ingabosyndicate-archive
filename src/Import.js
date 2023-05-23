import { Amplify, API, graphqlOperation, GraphQLQuery } from 'aws-amplify/';
import awsconfig from './aws-exports';
import { Ingabo } from './models';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import Papa from 'papaparse';
import React from 'react';
import * as mutations from './graphql/mutations';
import { getIngabo, listIngabos } from './graphql/queries';

Amplify.configure(awsconfig);

function Import() {
  let newData = [];

  const formatDate = (date) => {
    return date.split('/').reverse().join('-');
  };

  const formatObject = (obj) => {
    let updatedObj = {};

    for (let [key, value] of Object.entries(obj)) {
      if (value === 'null') value = '';
      if (key == 'telephone' && value.length > 5) value = '0' + value;
      updatedObj[key] = value;
    }

    return updatedObj;
  };

  const transformerCSV = (row) => {
    const updatedRecord = {
      fullname: row.fullName,
      dateofbirth: formatDate(row.dateofbirth),
      nationalID: String(row.nationalID),
      cooperative: row.cooperative,
      telephone: String(row.telephone),
      gender: row.gender,
      cell: row.cell,
      sector: row.sector,
      district: row.district,
      imyumbati: row.activity1 == 'TRUE' ? 'Yego' : 'Oya',
      umuceri: row.activity2 == 'TRUE' ? 'Yego' : 'Oya',
      ibigori: row.activity3 == 'TRUE' ? 'Yego' : 'Oya',
      ibinyamisogwe: row.activity4 == 'TRUE' ? 'Yego' : 'Oya',
      imboga_imbuto: row.activity5 == 'TRUE' ? 'Yego' : 'Oya',
      inkoko: row.activity6 == 'TRUE' ? 'Yego' : 'Oya',
      ingurube: row.activity7 == 'TRUE' ? 'Yego' : 'Oya',
      inka: row.activity8 == 'TRUE' ? 'Yego' : 'Oya',
      ibirayi: row.activity9 == 'TRUE' ? 'Yego' : 'Oya',
      ihene: row.activity10 == 'TRUE' ? 'Yego' : 'Oya',
      intama: row.activity11 == 'TRUE' ? 'Yego' : 'Oya',
      arahinga:
        row.activity1 ||
        row.activity2 ||
        row.activity3 ||
        row.activity4 ||
        row.activity5 ||
        row.activity9
          ? 'Yego'
          : 'Oya',
      aroroye:
        row.activity6 ||
        row.activity7 ||
        row.activity8 ||
        row.activity10 ||
        row.activity11
          ? 'Yego'
          : 'Oya',
      signature: row.signature,
    };

    let modifiedRecord = formatObject(updatedRecord);

    return modifiedRecord;
  };

  let ingabobackup = [];
  let ingaboexported = [];

  let recordsToSubmit = [];

  const handleUpload = (e) => {
    const backup = e.target.files[1];
    const exported = e.target.files[0];

    Papa.parse(exported, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const records = results.data;

        records.forEach((record) => {
          const nationalids = {
            nationalID: String(record['Indangamuntu']),
            fullname: record['Amazina Yombi'],
            cooperative: record['Cooperative'],
            district: record['Aho Atuye'],
          };
          ingaboexported.push(nationalids);
        });
      },
    });

    Papa.parse(backup, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const records = results.data;
        // FORMAT BACKUP DATA TO REMOVE NULL VALUES AND FORMAT PHONE
        ingabobackup = records.map((element, index) => {
          return transformerCSV(element);
        });
      },
    });
  };

  /**
   * 
   * @description This function is used to migrate data from the exported file to the backup file to include the nationalID
   * @returns Number of records added in the backup file
   * 
   */

  const migrate = async (exported, backup) => {
    let counter = 0;
    const duplicates = [];

    for (let i = 0; i < exported.length; i++) {
      for (let j = 0; j < backup.length; j++) {
        if (
          exported[i].fullname == backup[j].fullname &&
          exported[i].cooperative == backup[j].cooperative &&
          exported[i].district == backup[j].district &&
          backup[i].fullname != 'null'
        ) {
          backup[j].nationalID = exported[i].nationalID
          counter++;
          duplicates.push(backup[j]);
          // CREATE A NEW RECORD IN THE GRAPHQL API
          try {
            const newRecord = await API.graphql(graphqlOperation(mutations.createIngabo, {input: backup[j]}))
            return newRecord
          } catch (error) {
            return error
          }
        }
      }
    }
  };

  /**
   * 
   * @description This function is used to check for duplicates in the backup file
   * @returns Number of duplicates and the duplicates
   */
  const checkDuplicates = (arr) => {
    let counter = 0;
    let duplicates = [];

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (
          arr[i].nationalID == arr[j].nationalID &&
          arr[i].fullname == arr[j].fullname &&
          arr[i].cooperative == arr[j].cooperative &&
          arr[i].district == arr[j].district
        ) {
          counter++;
          duplicates.push(arr[j]);
        }
      }
    }

  };

  return (
    <div className="import-container">
      <input
        type="file"
        accept=".csv"
        name="file"
        multiple={true}
        onChange={handleUpload}
      ></input>

      {/* <input
        type="submit"
        value="Migrate"
        onClick={() => migrate(ingaboexported, ingabobackup)}
      ></input> */}

      <input
        type="submit"
        value="Clear Ingabo"
        onClick={async () => migrate(ingaboexported, ingabobackup)}
      ></input>


      <input
        type="submit"
        value="Check Duplicates"
        onClick={checkDuplicates(ingabobackup)}
      ></input>
    </div>
  );
}
export default Import;

/**

PAPA PARSE:

- header: true

- transformHeader: 

- dynamicTyping: true

- complete: (results, parser) => {
}

- 

*/
