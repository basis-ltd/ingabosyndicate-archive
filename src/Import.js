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

    const formatObject = (obj) => {

        let updatedObj = {}

        for (let [key, value] of Object.entries(obj)) {
          if (value === "null") value = "";
          if ((key == "telephone") && value.length > 5) value = '0' + value;
            updatedObj[key] = value
        }

        return updatedObj

    }

    const transformerDatabase = (row) => {

      const updatedRecord = {
        // fullname: row["Amazina Yombi"],
        // dateofbirth: row["Igihe Yavukiye"],
        nationalID: String(row["Indangamuntu"]),
        // cooperative: row["Cooperative"],
        // telephone: String(row["Telephone"]),
        // gender: row["Igitsina"],
        // district: row["Aho Atuye"],
        // imyumbati: row["Imyumbati"],
        // umuceri: row["Umuceri"],
        // ibigori: row["Ibigori"],
        // ibinyamisogwe: row["Ibinyamisogwe"],
        // imboga_imbuto: row["Imboga n' Imbuto"],
        // inkoko: row["Inkoko"],
        // ingurube: row["Ingurube"],
        // inka: row["Inka"],
        // ibirayi: row["Ibirayi"],
        // ihene: row["Ihene"],
        // intama: row["Intama"],
        // arahinga: row["Arahinga"],
        // aroroye: row["Aroroye"],
        // signature: row["Signature"],
      }

      let modifiedRecord = formatObject(updatedRecord)

      return modifiedRecord;

    }

  const transformerCSV = (row) => {

    const updatedRecord = {
      fullname: row.fullName,
      dateofbirth: row.dateOfBirth,
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

    let modifiedRecord = formatObject(updatedRecord);

    return modifiedRecord;
  };

  let transformedData = [];

  const handleUpload = (e) => {
    const backup = e.target.files[0];
    const downloads = e.target.files[1];

    console.log(backup, downloads);

    Papa.parse(downloads, {
      header: true,
      complete: async(results, parser) => {
        let transformedDatabase = [];
        let filteredRecords = results.data.filter((record) => record.fullName !== "null");
        transformedDatabase = filteredRecords.map(transformerDatabase);
        console.log(results.data);
      },
    });

    Papa.parse(backup, {
      header: true,
      dynamicTyping: true,
      complete: async(results, parser) => {
        let filteredRecords = results.data.filter((record) => record.fullName !== "null");
        transformedData = filteredRecords.map(transformerCSV);
        console.log(transformedData)
      },
    });
  };

  function transformer(arr1, arr2) {

    let transformedArray = [];

    let updatedObj = {};

    arr1.forEach((record, index) => {

      updatedObj = {
        fullname: record.fullName,
        dateofbirth: record.dateOfBirth,
        nationalID: String(arr2[index].Indangamuntu),
        cooperative: record.cooperative,
        telephone: String(record.telephone),
        gender: record.gender,
        cell: record.cell,
        sector: record.sector,
        district: record.district,
        imyumbati: record.activity1 ? "Yego" : "Oya",
        umuceri: record.activity2 ? "Yego" : "Oya",
        ibigori: record.activity3 ? "Yego" : "Oya",
        ibinyamisogwe: record.activity4 ? "Yego" : "Oya",
        imboga_imbuto: record.activity5 ? "Yego" : "Oya",
        inkoko: record.activity6 ? "Yego" : "Oya",
        ingurube: record.activity7 ? "Yego" : "Oya",
        inka: record.activity8 ? "Yego" : "Oya",
        ibirayi: record.activity9 ? "Yego" : "Oya",
        ihene: record.activity10 ? "Yego" : "Oya",
        intama: record.activity11 ? "Yego" : "Oya",
        arahinga:
          record.activity1 ||
          record.activity2 ||
          record.activity3 ||
          record.activity4 ||
          record.activity5 ||
          record.activity9
            ? "Yego"
            : "Oya",
        aroroye:
          record.activity6 ||
          record.activity7 ||
          record.activity8 ||
          record.activity10 ||
          record.activity11
            ? "Yego"
            : "Oya",
            signature: record.signature,
      };

      transformedArray.push(updatedObj);

    });

    console.log(transformedArray);
    return transformedArray;
    
  }

  const saveData = async () => {
    
    transformedData.forEach(async (record, index) => {
    //   await DataStore.save(
    //     new Ingabo({
    //         fullname: record.fullname,
    //         dateofbirth: record.dateofbirth,
    //         nationalID: record.nationalID,
    //         cooperative: record.cooperative,
    //         telephone: record.telephone,
    //         cell: record.cell,
    //         sector: record.sector,
    //         district: record.district,
    //         gender: record.gender,
    //         signature: record.signature,
    //         aroroye: record.aroroye,
    //         arahinga: record.arahinga,
    //         imyumbati: record.imyumbati,
    //         umuceri: record.umuceri,
    //         ibigori: record.ibigori,
    //         ibinyamisogwe: record.ibinyamisogwe,
    //         imboga_imbuto: record.imboga_imbuto,
    //         inkoko: record.inkoko,
    //         ingurube: record.ingurube,
    //         inka: record.inka,
    //         ibirayi: record.ibirayi,
    //         ihene: record.ihene,
    //         intama: record.intama,
    //     })
    // )
    console.log(record);
    });

  }



  return (
    <div className="import-container">
      <input
        type="file"
        accept=".csv"
        name="file"
        onChange={handleUpload}
        multiple={true}
      ></input>

      <input type="submit" value="Parse" onClick={() => saveData()}></input>
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
