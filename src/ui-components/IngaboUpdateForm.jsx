/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  CheckboxField,
  Flex,
  Grid,
  Heading,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Ingabo } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function IngaboUpdateForm(props) {
  const {
    id: idProp,
    ingabo,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    fullName: "",
    dateofbirth: "",
    gender: "",
    telephone: "",
    nationalID: "",
    cooperative: "",
    cell: "",
    sector: "",
    district: "",
    activity1: false,
    activity2: false,
    activity3: false,
    activity4: false,
    activity5: false,
    activity6: false,
    activity7: false,
    activity8: false,
    activity9: false,
    activity10: false,
    activity11: false,
  };
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [dateofbirth, setDateofbirth] = React.useState(
    initialValues.dateofbirth
  );
  const [gender, setGender] = React.useState(initialValues.gender);
  const [telephone, setTelephone] = React.useState(initialValues.telephone);
  const [nationalID, setNationalID] = React.useState(initialValues.nationalID);
  const [cooperative, setCooperative] = React.useState(
    initialValues.cooperative
  );
  const [cell, setCell] = React.useState(initialValues.cell);
  const [sector, setSector] = React.useState(initialValues.sector);
  const [district, setDistrict] = React.useState(initialValues.district);
  const [activity1, setActivity1] = React.useState(initialValues.activity1);
  const [activity2, setActivity2] = React.useState(initialValues.activity2);
  const [activity3, setActivity3] = React.useState(initialValues.activity3);
  const [activity4, setActivity4] = React.useState(initialValues.activity4);
  const [activity5, setActivity5] = React.useState(initialValues.activity5);
  const [activity6, setActivity6] = React.useState(initialValues.activity6);
  const [activity7, setActivity7] = React.useState(initialValues.activity7);
  const [activity8, setActivity8] = React.useState(initialValues.activity8);
  const [activity9, setActivity9] = React.useState(initialValues.activity9);
  const [activity10, setActivity10] = React.useState(initialValues.activity10);
  const [activity11, setActivity11] = React.useState(initialValues.activity11);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ingaboRecord
      ? { ...initialValues, ...ingaboRecord }
      : initialValues;
    setFullName(cleanValues.fullName);
    setDateofbirth(cleanValues.dateofbirth);
    setGender(cleanValues.gender);
    setTelephone(cleanValues.telephone);
    setNationalID(cleanValues.nationalID);
    setCooperative(cleanValues.cooperative);
    setCell(cleanValues.cell);
    setSector(cleanValues.sector);
    setDistrict(cleanValues.district);
    setActivity1(cleanValues.activity1);
    setActivity2(cleanValues.activity2);
    setActivity3(cleanValues.activity3);
    setActivity4(cleanValues.activity4);
    setActivity5(cleanValues.activity5);
    setActivity6(cleanValues.activity6);
    setActivity7(cleanValues.activity7);
    setActivity8(cleanValues.activity8);
    setActivity9(cleanValues.activity9);
    setActivity10(cleanValues.activity10);
    setActivity11(cleanValues.activity11);
    setErrors({});
  };
  const [ingaboRecord, setIngaboRecord] = React.useState(ingabo);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Ingabo, idProp) : ingabo;
      setIngaboRecord(record);
    };
    queryData();
  }, [idProp, ingabo]);
  React.useEffect(resetStateValues, [ingaboRecord]);
  const validations = {
    fullName: [],
    dateofbirth: [],
    gender: [],
    telephone: [],
    nationalID: [],
    cooperative: [],
    cell: [],
    sector: [],
    district: [],
    activity1: [],
    activity2: [],
    activity3: [],
    activity4: [],
    activity5: [],
    activity6: [],
    activity7: [],
    activity8: [],
    activity9: [],
    activity10: [],
    activity11: [],
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
      rowGap={tokens.space.medium.value}
      columnGap={tokens.space.medium.value}
      padding={tokens.space.medium.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fullName,
          dateofbirth,
          gender,
          telephone,
          nationalID,
          cooperative,
          cell,
          sector,
          district,
          activity1,
          activity2,
          activity3,
          activity4,
          activity5,
          activity6,
          activity7,
          activity8,
          activity9,
          activity10,
          activity11,
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
            Ingabo.copyOf(ingaboRecord, (updated) => {
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
      {...getOverrideProps(overrides, "IngaboUpdateForm")}
      {...rest}
    >
      <Heading
        children="IDENTIFICATION"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid1")}
      >
        <TextField
          label="Full name"
          isRequired={false}
          isReadOnly={false}
          value={fullName}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                fullName: value,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.fullName ?? value;
            }
            if (errors.fullName?.hasError) {
              runValidationTasks("fullName", value);
            }
            setFullName(value);
          }}
          onBlur={() => runValidationTasks("fullName", fullName)}
          errorMessage={errors.fullName?.errorMessage}
          hasError={errors.fullName?.hasError}
          {...getOverrideProps(overrides, "fullName")}
        ></TextField>
        <TextField
          label="Date of Birth"
          isRequired={false}
          isReadOnly={false}
          type="date"
          value={dateofbirth}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth: value,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
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
          label="Gender"
          isRequired={false}
          isReadOnly={false}
          placeholder="M/F"
          value={gender}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender: value,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <TextField
          label="Telephone"
          isRequired={false}
          isReadOnly={false}
          value={telephone}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone: value,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
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
          label="National ID"
          isRequired={false}
          isReadOnly={false}
          value={nationalID}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID: value,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
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
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative: value,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
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
      </Grid>
      <Heading
        children="RESIDENCE"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid4")}
      >
        <TextField
          label="Cell"
          isRequired={false}
          isReadOnly={false}
          value={cell}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell: value,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
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
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector: value,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
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
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district: value,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <CheckboxField
          label="Imyumbati"
          name="activity1"
          value="activity1"
          isDisabled={false}
          checked={activity1}
          defaultValue={activity1}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1: value,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.activity1 ?? value;
            }
            if (errors.activity1?.hasError) {
              runValidationTasks("activity1", value);
            }
            setActivity1(value);
          }}
          onBlur={() => runValidationTasks("activity1", activity1)}
          errorMessage={errors.activity1?.errorMessage}
          hasError={errors.activity1?.hasError}
          {...getOverrideProps(overrides, "activity1")}
        ></CheckboxField>
        <CheckboxField
          label="Umuceri"
          name="activity2"
          value="activity2"
          isDisabled={false}
          checked={activity2}
          defaultValue={activity2}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2: value,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.activity2 ?? value;
            }
            if (errors.activity2?.hasError) {
              runValidationTasks("activity2", value);
            }
            setActivity2(value);
          }}
          onBlur={() => runValidationTasks("activity2", activity2)}
          errorMessage={errors.activity2?.errorMessage}
          hasError={errors.activity2?.hasError}
          {...getOverrideProps(overrides, "activity2")}
        ></CheckboxField>
        <CheckboxField
          label="Ibigori"
          name="activity3"
          value="activity3"
          isDisabled={false}
          checked={activity3}
          defaultValue={activity3}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3: value,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.activity3 ?? value;
            }
            if (errors.activity3?.hasError) {
              runValidationTasks("activity3", value);
            }
            setActivity3(value);
          }}
          onBlur={() => runValidationTasks("activity3", activity3)}
          errorMessage={errors.activity3?.errorMessage}
          hasError={errors.activity3?.hasError}
          {...getOverrideProps(overrides, "activity3")}
        ></CheckboxField>
        <CheckboxField
          label="Ibinyamisogwe"
          name="activity4"
          value="activity4"
          isDisabled={false}
          checked={activity4}
          defaultValue={activity4}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4: value,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.activity4 ?? value;
            }
            if (errors.activity4?.hasError) {
              runValidationTasks("activity4", value);
            }
            setActivity4(value);
          }}
          onBlur={() => runValidationTasks("activity4", activity4)}
          errorMessage={errors.activity4?.errorMessage}
          hasError={errors.activity4?.hasError}
          {...getOverrideProps(overrides, "activity4")}
        ></CheckboxField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid6")}
      >
        <CheckboxField
          label="Imboga n'Imbuto"
          name="activity5"
          value="activity5"
          isDisabled={false}
          checked={activity5}
          defaultValue={activity5}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5: value,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.activity5 ?? value;
            }
            if (errors.activity5?.hasError) {
              runValidationTasks("activity5", value);
            }
            setActivity5(value);
          }}
          onBlur={() => runValidationTasks("activity5", activity5)}
          errorMessage={errors.activity5?.errorMessage}
          hasError={errors.activity5?.hasError}
          {...getOverrideProps(overrides, "activity5")}
        ></CheckboxField>
        <CheckboxField
          label="Inkoko"
          name="activity6"
          value="activity6"
          isDisabled={false}
          checked={activity6}
          defaultValue={activity6}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6: value,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.activity6 ?? value;
            }
            if (errors.activity6?.hasError) {
              runValidationTasks("activity6", value);
            }
            setActivity6(value);
          }}
          onBlur={() => runValidationTasks("activity6", activity6)}
          errorMessage={errors.activity6?.errorMessage}
          hasError={errors.activity6?.hasError}
          {...getOverrideProps(overrides, "activity6")}
        ></CheckboxField>
        <CheckboxField
          label="Ingurube"
          name="activity7"
          value="activity7"
          isDisabled={false}
          checked={activity7}
          defaultValue={activity7}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7: value,
                activity8,
                activity9,
                activity10,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.activity7 ?? value;
            }
            if (errors.activity7?.hasError) {
              runValidationTasks("activity7", value);
            }
            setActivity7(value);
          }}
          onBlur={() => runValidationTasks("activity7", activity7)}
          errorMessage={errors.activity7?.errorMessage}
          hasError={errors.activity7?.hasError}
          {...getOverrideProps(overrides, "activity7")}
        ></CheckboxField>
        <CheckboxField
          label="Inka"
          name="activity8"
          value="activity8"
          isDisabled={false}
          checked={activity8}
          defaultValue={activity8}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8: value,
                activity9,
                activity10,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.activity8 ?? value;
            }
            if (errors.activity8?.hasError) {
              runValidationTasks("activity8", value);
            }
            setActivity8(value);
          }}
          onBlur={() => runValidationTasks("activity8", activity8)}
          errorMessage={errors.activity8?.errorMessage}
          hasError={errors.activity8?.hasError}
          {...getOverrideProps(overrides, "activity8")}
        ></CheckboxField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid7")}
      >
        <CheckboxField
          label="Ibirayi"
          name="activity9"
          value="activity9"
          isDisabled={false}
          checked={activity9}
          defaultValue={activity9}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9: value,
                activity10,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.activity9 ?? value;
            }
            if (errors.activity9?.hasError) {
              runValidationTasks("activity9", value);
            }
            setActivity9(value);
          }}
          onBlur={() => runValidationTasks("activity9", activity9)}
          errorMessage={errors.activity9?.errorMessage}
          hasError={errors.activity9?.hasError}
          {...getOverrideProps(overrides, "activity9")}
        ></CheckboxField>
        <CheckboxField
          label="Ihene"
          name="activity10"
          value="activity10"
          isDisabled={false}
          checked={activity10}
          defaultValue={activity10}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10: value,
                activity11,
              };
              const result = onChange(modelFields);
              value = result?.activity10 ?? value;
            }
            if (errors.activity10?.hasError) {
              runValidationTasks("activity10", value);
            }
            setActivity10(value);
          }}
          onBlur={() => runValidationTasks("activity10", activity10)}
          errorMessage={errors.activity10?.errorMessage}
          hasError={errors.activity10?.hasError}
          {...getOverrideProps(overrides, "activity10")}
        ></CheckboxField>
        <CheckboxField
          label="Intama"
          name="activity11"
          value="activity11"
          isDisabled={false}
          checked={activity11}
          defaultValue={activity11}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                gender,
                telephone,
                nationalID,
                cooperative,
                cell,
                sector,
                district,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
                activity7,
                activity8,
                activity9,
                activity10,
                activity11: value,
              };
              const result = onChange(modelFields);
              value = result?.activity11 ?? value;
            }
            if (errors.activity11?.hasError) {
              runValidationTasks("activity11", value);
            }
            setActivity11(value);
          }}
          onBlur={() => runValidationTasks("activity11", activity11)}
          errorMessage={errors.activity11?.errorMessage}
          hasError={errors.activity11?.hasError}
          {...getOverrideProps(overrides, "activity11")}
        ></CheckboxField>
      </Grid>
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
          isDisabled={!(idProp || ingabo)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap={tokens.space.medium.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ingabo) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
