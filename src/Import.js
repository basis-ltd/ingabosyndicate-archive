import { Amplify } from "aws-amplify/";
import awsconfig from "./aws-exports";
import { Ingabo } from "./models";
import { DataStore } from "@aws-amplify/datastore";
import Papa from "papaparse";

Amplify.configure(awsconfig);

function Import() {

    const formatDate = (date) => {
       return date.split("/").reverse().join("-")
    }

  const transformer = (row) => {
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
      complete: async(results, parser) => {
        transformedData = results.data.map(transformer);
        await DataStore.save(
            new Ingabo({
                fullname: transformedData[0].fullname,
                dateofbirth: transformedData[0].dateofbirth,
                nationalID: transformedData[0].nationalID,
                cooperative: transformedData[0].cooperative,
                telephone: transformedData[0].telephone,
                cell: transformedData[0].cell,
                sector: transformedData[0].sector,
                district: transformedData[0].district,
                gender: transformedData[0].gender,
                signature: transformedData[0].signature,
                aroroye: transformedData[0].aroroye,
                arahinga: transformedData[0].arahinga,
                imyumbati: transformedData[0].imyumbati,
                umuceri: transformedData[0].umuceri,
                ibigori: transformedData[0].ibigori,
                ibinyamisogwe: transformedData[0].ibinyamisogwe,
                imboga_imbuto: transformedData[0].imboga_imbuto,
                inkoko: transformedData[0].inkoko,
                ingurube: transformedData[0].ingurube,
                inka: transformedData[0].inka,
                ibirayi: transformedData[0].ibirayi,
                ihene: transformedData[0].ihene,
                intama: transformedData[0].intama,
            })
        )
        console.log(transformedData[0]);
      },
    });
  };



  return (
    <div className="import-container">
      <input
        type="file"
        accept=".csv"
        name="file"
        onChange={handleUpload}
      ></input>

      <input type="submit" value="Parse"></input>
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
