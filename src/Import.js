import { Amplify } from "aws-amplify/";
import awsconfig from "./aws-exports";
import { Ingabo } from "./models";
import { DataStore } from "@aws-amplify/datastore";
import { Heading } from "@aws-amplify/ui-react";
import Papa from "papaparse";


Amplify.configure(awsconfig);


function Import () {

    const handleUpload = (e) => {

        const file = e.target.files[0];

        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results, parser) => {
                console.log(results.data);
            },
        })

    }


    return (
        
        <div className="import-container">

        <input
        
        type= "file"
        accept=".csv"
        name = "file"
        onChange={handleUpload}

        ></input>

        </div>
        
    )

}

export default Import

/*

PAPA PARSE:

- header: true

- transformHeader: 

- dynamicTyping: true

- complete: (results, parser) => {
    console.log(results.data);
}

- 

*/