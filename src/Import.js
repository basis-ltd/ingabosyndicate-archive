import { Amplify } from "aws-amplify/";
import awsconfig from "./aws-exports";
import { Ingabo } from "./models";
import { DataStore } from "@aws-amplify/datastore";
import Papa from "papaparse";

Amplify.configure(awsconfig);

function Import() {
  const transformer = (row) => {
    const updatedRecord = {
      fullname: row.fullName,
      dateofbirth: row.dateofbirth,
      nationalID: String(row.nationalID),
      cooperative: row.cooperative,
      telephone: String(row.telephone),
      gender: row.gender,
      cell: row.cell,
      sector: row.sector,
      district: row.district,
      imyumbati: row.activity1 ? "Yego" : "Oya",
      umuceri: row.activity2 ? "Yego" : "Oya",
      ibigori: row.activity3 ? "Yego" : "Oya",
      ibinyamisogwe: row.activity4 ? "Yego" : "Oya",
      imboga_imbuto: row.activity5 ? "Yego" : "Oya",
      inkoko: row.activity6 ? "Yego" : "Oya",
      ingurube: row.activity7 ? "Yego" : "Oya",
      inka: row.activity8 ? "Yego" : "Oya",
      ibirayi: row.activity9 ? "Yego" : "Oya",
      ihene: row.activity10 ? "Yego" : "Oya",
      intama: row.activity11 ? "Yego" : "Oya",
      arahinga:
        row.activity1 ||
        row.activity2 ||
        row.activity3 ||
        row.activity4 ||
        row.activity5 ||
        row.activity9
          ? "Yego"
          : "Oya",
      aroroye:
        row.activity6 ||
        row.activity7 ||
        row.activity8 ||
        row.activity10 ||
        row.activity11
          ? "Yego"
          : "Oya",
          signature: row.signature,
    };

    return updatedRecord;
  };

  let transformedData = [];

  const handleUpload = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results, parser) => {
        console.log(results.data, file);
        transformedData = results.data.map(transformer);
      },
    });
  };

  const transformData = () => {
    console.log(transformedData);
  };

  return (
    <div className="import-container">
      <input
        type="file"
        accept=".csv"
        name="file"
        onChange={handleUpload}
      ></input>

      <input type="submit" value="Parse" onClick={transformData}></input>
    </div>
  );
}

export default Import;

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
