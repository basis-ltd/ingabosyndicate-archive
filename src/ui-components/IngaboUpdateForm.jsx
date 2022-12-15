/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Ingabo } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function IngaboUpdateForm(props) {
  const {
    id,
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
  const initialValues = {
    fullName: undefined,
    dateofbirth: undefined,
    nationalID: undefined,
    cooperative: undefined,
    telephone: undefined,
    gender: undefined,
    activity1: false,
    activity2: false,
    activity3: false,
    activity4: false,
    activity5: false,
    activity6: false,
    activity7: false,
    activity8: false,
    no: undefined,
  };
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [dateofbirth, setDateofbirth] = React.useState(
    initialValues.dateofbirth
  );
  const [nationalID, setNationalID] = React.useState(initialValues.nationalID);
  const [cooperative, setCooperative] = React.useState(
    initialValues.cooperative
  );
  const [telephone, setTelephone] = React.useState(initialValues.telephone);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [activity1, setActivity1] = React.useState(initialValues.activity1);
  const [activity2, setActivity2] = React.useState(initialValues.activity2);
  const [activity3, setActivity3] = React.useState(initialValues.activity3);
  const [activity4, setActivity4] = React.useState(initialValues.activity4);
  const [activity5, setActivity5] = React.useState(initialValues.activity5);
  const [activity6, setActivity6] = React.useState(initialValues.activity6);
  const [activity7, setActivity7] = React.useState(initialValues.activity7);
  const [activity8, setActivity8] = React.useState(initialValues.activity8);
  const [no, setNo] = React.useState(initialValues.no);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...ingaboRecord };
    setFullName(cleanValues.fullName);
    setDateofbirth(cleanValues.dateofbirth);
    setNationalID(cleanValues.nationalID);
    setCooperative(cleanValues.cooperative);
    setTelephone(cleanValues.telephone);
    setGender(cleanValues.gender);
    setActivity1(cleanValues.activity1);
    setActivity2(cleanValues.activity2);
    setActivity3(cleanValues.activity3);
    setActivity4(cleanValues.activity4);
    setActivity5(cleanValues.activity5);
    setActivity6(cleanValues.activity6);
    setActivity7(cleanValues.activity7);
    setActivity8(cleanValues.activity8);
    setNo(cleanValues.no);
    setErrors({});
  };
  const [ingaboRecord, setIngaboRecord] = React.useState(ingabo);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Ingabo, id) : ingabo;
      setIngaboRecord(record);
    };
    queryData();
  }, [id, ingabo]);
  React.useEffect(resetStateValues, [ingaboRecord]);
  const validations = {
    fullName: [],
    dateofbirth: [],
    nationalID: [],
    cooperative: [],
    telephone: [],
    gender: [],
    activity1: [],
    activity2: [],
    activity3: [],
    activity4: [],
    activity5: [],
    activity6: [],
    activity7: [],
    activity8: [],
    no: [],
  };
  const runValidationTasks = async (fieldName, value) => {
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
          fullName,
          dateofbirth,
          nationalID,
          cooperative,
          telephone,
          gender,
          activity1,
          activity2,
          activity3,
          activity4,
          activity5,
          activity6,
          activity7,
          activity8,
          no,
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
      {...rest}
      {...getOverrideProps(overrides, "IngaboUpdateForm")}
    >
      <TextField
        label="Full name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={fullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName: value,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8,
              no,
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
        label="Dateofbirth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={dateofbirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth: value,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8,
              no,
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
        defaultValue={nationalID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID: value,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8,
              no,
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
        defaultValue={cooperative}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative: value,
              telephone,
              gender,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8,
              no,
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
        defaultValue={telephone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone: value,
              gender,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8,
              no,
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
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        defaultValue={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender: value,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8,
              no,
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
      <SwitchField
        label="Activity1"
        defaultChecked={false}
        isDisabled={false}
        isChecked={activity1}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1: value,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8,
              no,
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
      ></SwitchField>
      <SwitchField
        label="Activity2"
        defaultChecked={false}
        isDisabled={false}
        isChecked={activity2}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2: value,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8,
              no,
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
      ></SwitchField>
      <SwitchField
        label="Activity3"
        defaultChecked={false}
        isDisabled={false}
        isChecked={activity3}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2,
              activity3: value,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8,
              no,
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
      ></SwitchField>
      <SwitchField
        label="Activity4"
        defaultChecked={false}
        isDisabled={false}
        isChecked={activity4}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2,
              activity3,
              activity4: value,
              activity5,
              activity6,
              activity7,
              activity8,
              no,
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
      ></SwitchField>
      <SwitchField
        label="Activity5"
        defaultChecked={false}
        isDisabled={false}
        isChecked={activity5}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5: value,
              activity6,
              activity7,
              activity8,
              no,
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
      ></SwitchField>
      <SwitchField
        label="Activity6"
        defaultChecked={false}
        isDisabled={false}
        isChecked={activity6}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6: value,
              activity7,
              activity8,
              no,
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
      ></SwitchField>
      <SwitchField
        label="Activity7"
        defaultChecked={false}
        isDisabled={false}
        isChecked={activity7}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7: value,
              activity8,
              no,
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
      ></SwitchField>
      <SwitchField
        label="Activity8"
        defaultChecked={false}
        isDisabled={false}
        isChecked={activity8}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8: value,
              no,
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
      ></SwitchField>
      <TextField
        label="No"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={no}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              no: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              fullName,
              dateofbirth,
              nationalID,
              cooperative,
              telephone,
              gender,
              activity1,
              activity2,
              activity3,
              activity4,
              activity5,
              activity6,
              activity7,
              activity8,
              no: value,
            };
            const result = onChange(modelFields);
            value = result?.no ?? value;
          }
          if (errors.no?.hasError) {
            runValidationTasks("no", value);
          }
          setNo(value);
        }}
        onBlur={() => runValidationTasks("no", no)}
        errorMessage={errors.no?.errorMessage}
        hasError={errors.no?.hasError}
        {...getOverrideProps(overrides, "no")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
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
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
