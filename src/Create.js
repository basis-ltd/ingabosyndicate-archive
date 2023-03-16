import { Amplify } from "aws-amplify/";
import awsconfig from "./aws-exports";
import { Ingabo } from "./models";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import React, { useState, useEffect } from "react";
import "./Create.css";
import { useHistory, useNavigate } from "react-router-dom";

Amplify.configure(awsconfig);

const Create = () => {

  const navigate = useNavigate();

  // FORM FEEDBACK
  const form_success = document.getElementById("form-success");
  const form_error = document.getElementById("form-error");


  // MEMBER IDENTIFICATION -- ROW 1
  const [fullname, setFullname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("2023-01-01");
  const [gender, setGender] = useState("M");

  // MEMBER CONTACT DETAILS -- ROW 2
  const [nationalID, setNationalID] = useState("");
  const [cooperative, setCooperative] = useState("");
  const [telephone, setTelephone] = useState("");

  // MEMBER ADDRESSES -- ROW 3
  const [cell, setCell] = useState("");
  const [sector, setSector] = useState("");
  const [district, setDistrict] = useState("");

  // MEMBER ACTIVITIES -- ROW 4
  const [imyumbati, setImyumbati] = useState("Oya");
  const [umuceri, setUmuceri] = useState("Oya");
  const [ibigori, setIbigori] = useState("Oya");
  const [ibinyamisogwe, setIbinyamisogwe] = useState("Oya");
  const [imboga_imbuto, setImboga_imbuto] = useState("Oya");
  const [inkoko, setInkoko] = useState("Oya");
  const [ingurube, setIngurube] = useState("Oya");
  const [inka, setInka] = useState("Oya");
  const [ibirayi, setIbirayi] = useState("Oya");
  const [ihene, setIhene] = useState("Oya");
  const [intama, setIntama] = useState("Oya");
  const [arahinga, setArahinga] = useState("Oya");
  const [arorora, setArorora] = useState("Oya");

  const handleCheckbox = (e) => {
    const checked = e.target.checked ? "Yego" : "Oya";
    console.log(checked);
    return checked;
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "fullname":
        setFullname(e.target.value);
        break;
      case "dateofbirth":
        setDateofbirth(e.target.value);
        console.log(e.target.value);
        break;
      case "gender":
        setGender(e.target.value);
        console.log(e.target.value);
        break;
      case "nationalID":
        setNationalID(e.target.value);
        break;
      case "cooperative":
        setCooperative(e.target.value);
        break;
      case "telephone":
        setTelephone(e.target.value);
        break;
      case "cell":
        setCell(e.target.value);
        break;
      case "sector":
        setSector(e.target.value);
        break;
      case "district":
        setDistrict(e.target.value);
        break;
      case "imyumbati":
        setImyumbati(handleCheckbox(e));
        break;
      case "umuceri":
        setUmuceri(handleCheckbox(e));
        break;
      case "ibigori":
        setIbigori(handleCheckbox(e));
        break;
      case "ibinyamisogwe":
        setIbinyamisogwe(handleCheckbox(e));
        break;
      case "imboga_imbuto":
        setImboga_imbuto(handleCheckbox(e));
        break;
      case "inkoko":
        setInkoko(handleCheckbox(e));
        break;
      case "ingurube":
        setIngurube(handleCheckbox(e));
        break;
      case "inka":
        setInka(handleCheckbox(e));
        break;
      case "ibirayi":
        setIbirayi(handleCheckbox(e));
        break;
      case "ihene":
        setIhene(handleCheckbox(e));
        break;
      case "intama":
        setIntama(handleCheckbox(e));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullnameRegex = /(?!^$)([^\s])/;

    let arahinga = "",
      arorora = "";

    if (
      (imyumbati ||
        umuceri ||
        ibigori ||
        ibinyamisogwe ||
        imboga_imbuto ||
        ibirayi) == "Yego"
    ) {
      setArahinga("Yego");
    } else {
      setArahinga("Oya");
    }

    if ((inkoko || ingurube || inka || ihene || intama) == "Yego") {
      setArorora("Yego");
    } else {
      setArorora("Oya");
    }

    const Record = new Ingabo({
      fullname: fullname,
      dateofbirth: dateofbirth,
      gender: gender,
      nationalID: nationalID,
      cooperative: cooperative,
      telephone: telephone,
      cell: cell,
      sector: sector,
      district: district,
      imyumbati: imyumbati,
      umuceri: umuceri,
      ibigori: ibigori,
      ibinyamisogwe: ibinyamisogwe,
      imboga_imbuto: imboga_imbuto,
      inkoko: inkoko,
      ingurube: ingurube,
      inka: inka,
      ibirayi: ibirayi,
      ihene: ihene,
      intama: intama,
      arahinga: arahinga,
      arorora: arorora,
    });

    if (fullnameRegex.test(fullname)) {
      await DataStore.save(Record).then((record) => console.log(record));

      form_success.style.display = "block";
      form_error.style.display = "none";

      setTimeout(() => {
        navigate("/home")
      }, 1500);
    } else {
      console.log("Test failed");
      form_error.style.display = "block";
      form_success.style.display = "none";
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="create-ingabo">
          {/* MEMBER IDENTIFICATION -- ROW 1 */}
          <div className="member-identification row">
            <span className="input-container">
              <label htmlFor="name">Amazina Yombi</label>
              <input
                type="text"
                name="name"
                id="fullname"
                onChange={handleChange}
              />
            </span>
            <span className="input-container">
              <label htmlFor="date">Igihe Yavukiye</label>
              <input
                type="date"
                name="date"
                id="dateofbirth"
                onChange={handleChange}
              />
            </span>
            <span className="input-container">
              <label htmlFor="gender">Igitsina</label>
              <select name="gender" id="gender" onChange={handleChange}>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </span>
          </div>

          {/* MEMBER CONTACT DETAILS -- ROW 2 */}
          <div className="member-contacts row">
            <span className="input-container">
              <label htmlFor="id">Indangamuntu</label>
              <input
                type="text"
                name="id"
                id="nationalID"
                onChange={handleChange}
              />
            </span>
            <span className="input-container">
              <label htmlFor="cooperative">Cooperative</label>
              <input
                type="text"
                name="cooperative"
                id="cooperative"
                onChange={handleChange}
              />
            </span>
            <span className="input-container">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="tel"
                name="telephone"
                id="telephone"
                onChange={handleChange}
              />
            </span>
          </div>

          {/* MEMBER ADDRESSes -- ROW 3 */}
          <div className="member-addresses row">
            <span className="input-container">
              <label htmlFor="cell">Akagari</label>
              <input
                type="text"
                name="cell"
                id="cell"
                onChange={handleChange}
              />
            </span>
            <span className="input-container">
              <label htmlFor="sector">Umurenge</label>
              <input
                type="text"
                name="sector"
                id="sector"
                onChange={handleChange}
              />
            </span>
            <span className="input-container">
              <label htmlFor="district">Akarere</label>
              <input
                type="text"
                name="district"
                id="district"
                onChange={handleChange}
              />
            </span>
          </div>

          {/* MEMBER ACTIVITIES -- ROW 4 */}
          <div className="member-activities row">
            <span className="checkbox-container">
              <label htmlFor="imyumbati">Imyumbati</label>
              <input
                type="checkbox"
                name="imyumbati"
                id="imyumbati"
                onChange={handleChange}
              />
            </span>
            <span className="checkbox-container">
              <label htmlFor="umuceri">Umuceri</label>
              <input
                type="checkbox"
                name="umuceri"
                id="umuceri"
                onChange={handleChange}
              />
            </span>
            <span className="checkbox-container">
              <label htmlFor="ibigori">Ibigori</label>
              <input
                type="checkbox"
                name="ibigori"
                id="ibigori"
                onChange={handleChange}
              />
            </span>
            <span className="checkbox-container">
              <label htmlFor="ibinyamisogwe">Ibinyamisogwe</label>
              <input
                type="checkbox"
                name="ibinyamisogwe"
                id="ibinyamisogwe"
                onChange={handleChange}
              />
            </span>
            <span className="checkbox-container">
              <label htmlFor="imboga_imbuto">Imboga n' Imbuto</label>
              <input
                type="checkbox"
                name="imboga_imbuto"
                id="imboga_imbuto"
                onChange={handleChange}
              />
            </span>
            <span className="checkbox-container">
              <label htmlFor="inkoko">Inkoko</label>
              <input
                type="checkbox"
                name="inkoko"
                id="inkoko"
                onChange={handleChange}
              />
            </span>
            <span className="checkbox-container">
              <label htmlFor="ingurube">Ingurube</label>
              <input
                type="checkbox"
                name="ingurube"
                id="ingurube"
                onChange={handleChange}
              />
            </span>
            <span className="checkbox-container">
              <label htmlFor="inka">Inka</label>
              <input
                type="checkbox"
                name="inka"
                id="inka"
                onChange={handleChange}
              />
            </span>
            <span className="checkbox-container">
              <label htmlFor="ibirayi">Ibirayi</label>
              <input
                type="checkbox"
                name="ibirayi"
                id="ibirayi"
                onChange={handleChange}
              />
            </span>
            <span className="checkbox-container">
              <label htmlFor="ihene">Ihene</label>
              <input
                type="checkbox"
                name="ihene"
                id="ihene"
                onChange={handleChange}
              />
            </span>
            <span className="checkbox-container">
              <label htmlFor="intama">Intama</label>
              <input
                type="checkbox"
                name="intama"
                id="intama"
                onChange={handleChange}
              />
            </span>
          </div>

          {/* FORM FEEDBACK */}

          <div className="form-feedback">

        <p id="form-success">
          You have added a new member successfully!
        </p>

        <p id="form-error">
          There was an error adding a new member. Please try again.
        </p>

          </div>

          {/* FORM ACTION BUTTON -- ROW 5 */}

          <div className="form-action">
            <input
              type="reset"
              className="form-cta"
              value="Reset"
              id="form-reset"
            />
            <button
              className="form-cta"
              id="form-submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
