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
  CheckboxField,
  Flex,
  Grid,
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
    igitsina: undefined,
    nationalID: undefined,
    cooperative: undefined,
    telephone: undefined,
    addressCell: undefined,
    addressSector: undefined,
    addressDistrict: undefined,
    activity1: false,
    activity2: false,
    activity3: false,
    activity4: false,
    activity5: false,
    activity6: false,
  };
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [dateofbirth, setDateofbirth] = React.useState(
    initialValues.dateofbirth
  );
  const [igitsina, setIgitsina] = React.useState(initialValues.igitsina);
  const [nationalID, setNationalID] = React.useState(initialValues.nationalID);
  const [cooperative, setCooperative] = React.useState(
    initialValues.cooperative
  );
  const [telephone, setTelephone] = React.useState(initialValues.telephone);
  const [addressCell, setAddressCell] = React.useState(
    initialValues.addressCell
  );
  const [addressSector, setAddressSector] = React.useState(
    initialValues.addressSector
  );
  const [addressDistrict, setAddressDistrict] = React.useState(
    initialValues.addressDistrict
  );
  const [activity1, setActivity1] = React.useState(initialValues.activity1);
  const [activity2, setActivity2] = React.useState(initialValues.activity2);
  const [activity3, setActivity3] = React.useState(initialValues.activity3);
  const [activity4, setActivity4] = React.useState(initialValues.activity4);
  const [activity5, setActivity5] = React.useState(initialValues.activity5);
  const [activity6, setActivity6] = React.useState(initialValues.activity6);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...ingaboRecord };
    setFullName(cleanValues.fullName);
    setDateofbirth(cleanValues.dateofbirth);
    setIgitsina(cleanValues.igitsina);
    setNationalID(cleanValues.nationalID);
    setCooperative(cleanValues.cooperative);
    setTelephone(cleanValues.telephone);
    setAddressCell(cleanValues.addressCell);
    setAddressSector(cleanValues.addressSector);
    setAddressDistrict(cleanValues.addressDistrict);
    setActivity1(cleanValues.activity1);
    setActivity2(cleanValues.activity2);
    setActivity3(cleanValues.activity3);
    setActivity4(cleanValues.activity4);
    setActivity5(cleanValues.activity5);
    setActivity6(cleanValues.activity6);
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
    igitsina: [],
    nationalID: [],
    cooperative: [],
    telephone: [],
    addressCell: [],
    addressSector: [],
    addressDistrict: [],
    activity1: [],
    activity2: [],
    activity3: [],
    activity4: [],
    activity5: [],
    activity6: [],
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
          igitsina,
          nationalID,
          cooperative,
          telephone,
          addressCell,
          addressSector,
          addressDistrict,
          activity1,
          activity2,
          activity3,
          activity4,
          activity5,
          activity6,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid0")}
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
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
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
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
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
          label="Igitsina"
          isRequired={false}
          isReadOnly={false}
          defaultValue={igitsina}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                igitsina: value,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
              };
              const result = onChange(modelFields);
              value = result?.igitsina ?? value;
            }
            if (errors.igitsina?.hasError) {
              runValidationTasks("igitsina", value);
            }
            setIgitsina(value);
          }}
          onBlur={() => runValidationTasks("igitsina", igitsina)}
          errorMessage={errors.igitsina?.errorMessage}
          hasError={errors.igitsina?.hasError}
          {...getOverrideProps(overrides, "igitsina")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid1")}
      >
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
                igitsina,
                nationalID: value,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
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
                igitsina,
                nationalID,
                cooperative: value,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
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
                igitsina,
                nationalID,
                cooperative,
                telephone: value,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <TextField
          label="Address cell"
          isRequired={false}
          isReadOnly={false}
          defaultValue={addressCell}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell: value,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
              };
              const result = onChange(modelFields);
              value = result?.addressCell ?? value;
            }
            if (errors.addressCell?.hasError) {
              runValidationTasks("addressCell", value);
            }
            setAddressCell(value);
          }}
          onBlur={() => runValidationTasks("addressCell", addressCell)}
          errorMessage={errors.addressCell?.errorMessage}
          hasError={errors.addressCell?.hasError}
          {...getOverrideProps(overrides, "addressCell")}
        ></TextField>
        <TextField
          label="Address sector"
          isRequired={false}
          isReadOnly={false}
          defaultValue={addressSector}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector: value,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
              };
              const result = onChange(modelFields);
              value = result?.addressSector ?? value;
            }
            if (errors.addressSector?.hasError) {
              runValidationTasks("addressSector", value);
            }
            setAddressSector(value);
          }}
          onBlur={() => runValidationTasks("addressSector", addressSector)}
          errorMessage={errors.addressSector?.errorMessage}
          hasError={errors.addressSector?.hasError}
          {...getOverrideProps(overrides, "addressSector")}
        ></TextField>
        <TextField
          label="Address district"
          isRequired={false}
          isReadOnly={false}
          defaultValue={addressDistrict}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                fullName,
                dateofbirth,
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict: value,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
              };
              const result = onChange(modelFields);
              value = result?.addressDistrict ?? value;
            }
            if (errors.addressDistrict?.hasError) {
              runValidationTasks("addressDistrict", value);
            }
            setAddressDistrict(value);
          }}
          onBlur={() => runValidationTasks("addressDistrict", addressDistrict)}
          errorMessage={errors.addressDistrict?.errorMessage}
          hasError={errors.addressDistrict?.hasError}
          {...getOverrideProps(overrides, "addressDistrict")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid3")}
      >
        <CheckboxField
          label="Umuceri"
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
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1: value,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6,
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
          label="Imyumbati"
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
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2: value,
                activity3,
                activity4,
                activity5,
                activity6,
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
          label="Inka"
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
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3: value,
                activity4,
                activity5,
                activity6,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid4")}
      >
        <CheckboxField
          label="Ingurube"
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
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4: value,
                activity5,
                activity6,
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
        <CheckboxField
          label="Inkoko"
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
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5: value,
                activity6,
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
          label="Ibinyampeke"
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
                igitsina,
                nationalID,
                cooperative,
                telephone,
                addressCell,
                addressSector,
                addressDistrict,
                activity1,
                activity2,
                activity3,
                activity4,
                activity5,
                activity6: value,
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
      </Grid>
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
