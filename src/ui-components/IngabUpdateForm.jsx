/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Ingab } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function IngabUpdateForm(props) {
  const {
    id: idProp,
    ingab: ingabModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fullname: "",
    dateofbirth: "",
    nationalID: "",
    cooperative: "",
    telephone: "",
    cell: "",
    sector: "",
    district: "",
    gender: "",
    signature: "",
    aroroye: "",
    arahinga: "",
    imyumbati: "",
    umuceri: "",
    ibigori: "",
    ibinyamisogwe: "",
    imboga_imbuto: "",
    inkoko: "",
    ingurube: "",
    inka: "",
    ibirayi: "",
    ihene: "",
    intama: "",
  };
  const [fullname, setFullname] = React.useState(initialValues.fullname);
  const [dateofbirth, setDateofbirth] = React.useState(
    initialValues.dateofbirth
  );
  const [nationalID, setNationalID] = React.useState(initialValues.nationalID);
  const [cooperative, setCooperative] = React.useState(
    initialValues.cooperative
  );
  const [telephone, setTelephone] = React.useState(initialValues.telephone);
  const [cell, setCell] = React.useState(initialValues.cell);
  const [sector, setSector] = React.useState(initialValues.sector);
  const [district, setDistrict] = React.useState(initialValues.district);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [signature, setSignature] = React.useState(initialValues.signature);
  const [aroroye, setAroroye] = React.useState(initialValues.aroroye);
  const [arahinga, setArahinga] = React.useState(initialValues.arahinga);
  const [imyumbati, setImyumbati] = React.useState(initialValues.imyumbati);
  const [umuceri, setUmuceri] = React.useState(initialValues.umuceri);
  const [ibigori, setIbigori] = React.useState(initialValues.ibigori);
  const [ibinyamisogwe, setIbinyamisogwe] = React.useState(
    initialValues.ibinyamisogwe
  );
  const [imboga_imbuto, setImboga_imbuto] = React.useState(
    initialValues.imboga_imbuto
  );
  const [inkoko, setInkoko] = React.useState(initialValues.inkoko);
  const [ingurube, setIngurube] = React.useState(initialValues.ingurube);
  const [inka, setInka] = React.useState(initialValues.inka);
  const [ibirayi, setIbirayi] = React.useState(initialValues.ibirayi);
  const [ihene, setIhene] = React.useState(initialValues.ihene);
  const [intama, setIntama] = React.useState(initialValues.intama);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ingabRecord
      ? { ...initialValues, ...ingabRecord }
      : initialValues;
    setFullname(cleanValues.fullname);
    setDateofbirth(cleanValues.dateofbirth);
    setNationalID(cleanValues.nationalID);
    setCooperative(cleanValues.cooperative);
    setTelephone(cleanValues.telephone);
    setCell(cleanValues.cell);
    setSector(cleanValues.sector);
    setDistrict(cleanValues.district);
    setGender(cleanValues.gender);
    setSignature(cleanValues.signature);
    setAroroye(cleanValues.aroroye);
    setArahinga(cleanValues.arahinga);
    setImyumbati(cleanValues.imyumbati);
    setUmuceri(cleanValues.umuceri);
    setIbigori(cleanValues.ibigori);
    setIbinyamisogwe(cleanValues.ibinyamisogwe);
    setImboga_imbuto(cleanValues.imboga_imbuto);
    setInkoko(cleanValues.inkoko);
    setIngurube(cleanValues.ingurube);
    setInka(cleanValues.inka);
    setIbirayi(cleanValues.ibirayi);
    setIhene(cleanValues.ihene);
    setIntama(cleanValues.intama);
    setErrors({});
  };
  const [ingabRecord, setIngabRecord] = React.useState(ingabModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Ingab, idProp)
        : ingabModelProp;
      setIngabRecord(record);
    };
    queryData();
  }, [idProp, ingabModelProp]);
  React.useEffect(resetStateValues, [ingabRecord]);
  const validations = {
    fullname: [],
    dateofbirth: [],
    nationalID: [],
    cooperative: [],
    telephone: [],
    cell: [],
    sector: [],
    district: [],
    gender: [],
    signature: [],
    aroroye: [],
    arahinga: [],
    imyumbati: [],
    umuceri: [],
    ibigori: [],
    ibinyamisogwe: [],
    imboga_imbuto: [],
    inkoko: [],
    ingurube: [],
    inka: [],
    ibirayi: [],
    ihene: [],
    intama: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fullname,
          dateofbirth,
          nationalID,
          cooperative,
          telephone,
          cell,
          sector,
          district,
          gender,
          signature,
          aroroye,
          arahinga,
          imyumbati,
          umuceri,
          ibigori,
          ibinyamisogwe,
          imboga_imbuto,
          inkoko,
          ingurube,
          inka,
          ibirayi,
          ihene,
          intama,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Ingab.copyOf(ingabRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "IngabUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fullname"
        isRequired={false}
        isReadOnly={false}
        value={fullname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname: value,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.fullname ?? value;
          }
          if (errors.fullname?.hasError) {
            runValidationTasks("fullname", value);
          }
          setFullname(value);
        }}
        onBlur={() => runValidationTasks("fullname", fullname)}
        errorMessage={errors.fullname?.errorMessage}
        hasError={errors.fullname?.hasError}
        {...getOverrideProps(overrides, "fullname")}
      ></TextField>
      <TextField
        label="Dateofbirth"
        isRequired={false}
        isReadOnly={false}
        value={dateofbirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth: value,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.dateofbirth ?? value;
          }
          if (errors.dateofbirth?.hasError) {
            runValidationTasks("dateofbirth", value);
          }
          setDateofbirth(value);
        }}
        onBlur={() => runValidationTasks("dateofbirth", dateofbirth)}
        errorMessage={errors.dateofbirth?.errorMessage}
        hasError={errors.dateofbirth?.hasError}
        {...getOverrideProps(overrides, "dateofbirth")}
      ></TextField>
      <TextField
        label="National id"
        isRequired={false}
        isReadOnly={false}
        value={nationalID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID: value,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.nationalID ?? value;
          }
          if (errors.nationalID?.hasError) {
            runValidationTasks("nationalID", value);
          }
          setNationalID(value);
        }}
        onBlur={() => runValidationTasks("nationalID", nationalID)}
        errorMessage={errors.nationalID?.errorMessage}
        hasError={errors.nationalID?.hasError}
        {...getOverrideProps(overrides, "nationalID")}
      ></TextField>
      <TextField
        label="Cooperative"
        isRequired={false}
        isReadOnly={false}
        value={cooperative}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative: value,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.cooperative ?? value;
          }
          if (errors.cooperative?.hasError) {
            runValidationTasks("cooperative", value);
          }
          setCooperative(value);
        }}
        onBlur={() => runValidationTasks("cooperative", cooperative)}
        errorMessage={errors.cooperative?.errorMessage}
        hasError={errors.cooperative?.hasError}
        {...getOverrideProps(overrides, "cooperative")}
      ></TextField>
      <TextField
        label="Telephone"
        isRequired={false}
        isReadOnly={false}
        value={telephone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone: value,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.telephone ?? value;
          }
          if (errors.telephone?.hasError) {
            runValidationTasks("telephone", value);
          }
          setTelephone(value);
        }}
        onBlur={() => runValidationTasks("telephone", telephone)}
        errorMessage={errors.telephone?.errorMessage}
        hasError={errors.telephone?.hasError}
        {...getOverrideProps(overrides, "telephone")}
      ></TextField>
      <TextField
        label="Cell"
        isRequired={false}
        isReadOnly={false}
        value={cell}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell: value,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.cell ?? value;
          }
          if (errors.cell?.hasError) {
            runValidationTasks("cell", value);
          }
          setCell(value);
        }}
        onBlur={() => runValidationTasks("cell", cell)}
        errorMessage={errors.cell?.errorMessage}
        hasError={errors.cell?.hasError}
        {...getOverrideProps(overrides, "cell")}
      ></TextField>
      <TextField
        label="Sector"
        isRequired={false}
        isReadOnly={false}
        value={sector}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector: value,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.sector ?? value;
          }
          if (errors.sector?.hasError) {
            runValidationTasks("sector", value);
          }
          setSector(value);
        }}
        onBlur={() => runValidationTasks("sector", sector)}
        errorMessage={errors.sector?.errorMessage}
        hasError={errors.sector?.hasError}
        {...getOverrideProps(overrides, "sector")}
      ></TextField>
      <TextField
        label="District"
        isRequired={false}
        isReadOnly={false}
        value={district}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district: value,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.district ?? value;
          }
          if (errors.district?.hasError) {
            runValidationTasks("district", value);
          }
          setDistrict(value);
        }}
        onBlur={() => runValidationTasks("district", district)}
        errorMessage={errors.district?.errorMessage}
        hasError={errors.district?.hasError}
        {...getOverrideProps(overrides, "district")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender: value,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Signature"
        isRequired={false}
        isReadOnly={false}
        value={signature}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature: value,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.signature ?? value;
          }
          if (errors.signature?.hasError) {
            runValidationTasks("signature", value);
          }
          setSignature(value);
        }}
        onBlur={() => runValidationTasks("signature", signature)}
        errorMessage={errors.signature?.errorMessage}
        hasError={errors.signature?.hasError}
        {...getOverrideProps(overrides, "signature")}
      ></TextField>
      <TextField
        label="Aroroye"
        isRequired={false}
        isReadOnly={false}
        value={aroroye}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye: value,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.aroroye ?? value;
          }
          if (errors.aroroye?.hasError) {
            runValidationTasks("aroroye", value);
          }
          setAroroye(value);
        }}
        onBlur={() => runValidationTasks("aroroye", aroroye)}
        errorMessage={errors.aroroye?.errorMessage}
        hasError={errors.aroroye?.hasError}
        {...getOverrideProps(overrides, "aroroye")}
      ></TextField>
      <TextField
        label="Arahinga"
        isRequired={false}
        isReadOnly={false}
        value={arahinga}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga: value,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.arahinga ?? value;
          }
          if (errors.arahinga?.hasError) {
            runValidationTasks("arahinga", value);
          }
          setArahinga(value);
        }}
        onBlur={() => runValidationTasks("arahinga", arahinga)}
        errorMessage={errors.arahinga?.errorMessage}
        hasError={errors.arahinga?.hasError}
        {...getOverrideProps(overrides, "arahinga")}
      ></TextField>
      <TextField
        label="Imyumbati"
        isRequired={false}
        isReadOnly={false}
        value={imyumbati}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati: value,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.imyumbati ?? value;
          }
          if (errors.imyumbati?.hasError) {
            runValidationTasks("imyumbati", value);
          }
          setImyumbati(value);
        }}
        onBlur={() => runValidationTasks("imyumbati", imyumbati)}
        errorMessage={errors.imyumbati?.errorMessage}
        hasError={errors.imyumbati?.hasError}
        {...getOverrideProps(overrides, "imyumbati")}
      ></TextField>
      <TextField
        label="Umuceri"
        isRequired={false}
        isReadOnly={false}
        value={umuceri}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri: value,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.umuceri ?? value;
          }
          if (errors.umuceri?.hasError) {
            runValidationTasks("umuceri", value);
          }
          setUmuceri(value);
        }}
        onBlur={() => runValidationTasks("umuceri", umuceri)}
        errorMessage={errors.umuceri?.errorMessage}
        hasError={errors.umuceri?.hasError}
        {...getOverrideProps(overrides, "umuceri")}
      ></TextField>
      <TextField
        label="Ibigori"
        isRequired={false}
        isReadOnly={false}
        value={ibigori}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori: value,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.ibigori ?? value;
          }
          if (errors.ibigori?.hasError) {
            runValidationTasks("ibigori", value);
          }
          setIbigori(value);
        }}
        onBlur={() => runValidationTasks("ibigori", ibigori)}
        errorMessage={errors.ibigori?.errorMessage}
        hasError={errors.ibigori?.hasError}
        {...getOverrideProps(overrides, "ibigori")}
      ></TextField>
      <TextField
        label="Ibinyamisogwe"
        isRequired={false}
        isReadOnly={false}
        value={ibinyamisogwe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe: value,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.ibinyamisogwe ?? value;
          }
          if (errors.ibinyamisogwe?.hasError) {
            runValidationTasks("ibinyamisogwe", value);
          }
          setIbinyamisogwe(value);
        }}
        onBlur={() => runValidationTasks("ibinyamisogwe", ibinyamisogwe)}
        errorMessage={errors.ibinyamisogwe?.errorMessage}
        hasError={errors.ibinyamisogwe?.hasError}
        {...getOverrideProps(overrides, "ibinyamisogwe")}
      ></TextField>
      <TextField
        label="Imboga imbuto"
        isRequired={false}
        isReadOnly={false}
        value={imboga_imbuto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto: value,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.imboga_imbuto ?? value;
          }
          if (errors.imboga_imbuto?.hasError) {
            runValidationTasks("imboga_imbuto", value);
          }
          setImboga_imbuto(value);
        }}
        onBlur={() => runValidationTasks("imboga_imbuto", imboga_imbuto)}
        errorMessage={errors.imboga_imbuto?.errorMessage}
        hasError={errors.imboga_imbuto?.hasError}
        {...getOverrideProps(overrides, "imboga_imbuto")}
      ></TextField>
      <TextField
        label="Inkoko"
        isRequired={false}
        isReadOnly={false}
        value={inkoko}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko: value,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.inkoko ?? value;
          }
          if (errors.inkoko?.hasError) {
            runValidationTasks("inkoko", value);
          }
          setInkoko(value);
        }}
        onBlur={() => runValidationTasks("inkoko", inkoko)}
        errorMessage={errors.inkoko?.errorMessage}
        hasError={errors.inkoko?.hasError}
        {...getOverrideProps(overrides, "inkoko")}
      ></TextField>
      <TextField
        label="Ingurube"
        isRequired={false}
        isReadOnly={false}
        value={ingurube}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube: value,
              inka,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.ingurube ?? value;
          }
          if (errors.ingurube?.hasError) {
            runValidationTasks("ingurube", value);
          }
          setIngurube(value);
        }}
        onBlur={() => runValidationTasks("ingurube", ingurube)}
        errorMessage={errors.ingurube?.errorMessage}
        hasError={errors.ingurube?.hasError}
        {...getOverrideProps(overrides, "ingurube")}
      ></TextField>
      <TextField
        label="Inka"
        isRequired={false}
        isReadOnly={false}
        value={inka}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka: value,
              ibirayi,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.inka ?? value;
          }
          if (errors.inka?.hasError) {
            runValidationTasks("inka", value);
          }
          setInka(value);
        }}
        onBlur={() => runValidationTasks("inka", inka)}
        errorMessage={errors.inka?.errorMessage}
        hasError={errors.inka?.hasError}
        {...getOverrideProps(overrides, "inka")}
      ></TextField>
      <TextField
        label="Ibirayi"
        isRequired={false}
        isReadOnly={false}
        value={ibirayi}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi: value,
              ihene,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.ibirayi ?? value;
          }
          if (errors.ibirayi?.hasError) {
            runValidationTasks("ibirayi", value);
          }
          setIbirayi(value);
        }}
        onBlur={() => runValidationTasks("ibirayi", ibirayi)}
        errorMessage={errors.ibirayi?.errorMessage}
        hasError={errors.ibirayi?.hasError}
        {...getOverrideProps(overrides, "ibirayi")}
      ></TextField>
      <TextField
        label="Ihene"
        isRequired={false}
        isReadOnly={false}
        value={ihene}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene: value,
              intama,
            };
            const result = onChange(modelFields);
            value = result?.ihene ?? value;
          }
          if (errors.ihene?.hasError) {
            runValidationTasks("ihene", value);
          }
          setIhene(value);
        }}
        onBlur={() => runValidationTasks("ihene", ihene)}
        errorMessage={errors.ihene?.errorMessage}
        hasError={errors.ihene?.hasError}
        {...getOverrideProps(overrides, "ihene")}
      ></TextField>
      <TextField
        label="Intama"
        isRequired={false}
        isReadOnly={false}
        value={intama}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullname,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              cell,
              sector,
              district,
              gender,
              signature,
              aroroye,
              arahinga,
              imyumbati,
              umuceri,
              ibigori,
              ibinyamisogwe,
              imboga_imbuto,
              inkoko,
              ingurube,
              inka,
              ibirayi,
              ihene,
              intama: value,
            };
            const result = onChange(modelFields);
            value = result?.intama ?? value;
          }
          if (errors.intama?.hasError) {
            runValidationTasks("intama", value);
          }
          setIntama(value);
        }}
        onBlur={() => runValidationTasks("intama", intama)}
        errorMessage={errors.intama?.errorMessage}
        hasError={errors.intama?.hasError}
        {...getOverrideProps(overrides, "intama")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || ingabModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ingabModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
