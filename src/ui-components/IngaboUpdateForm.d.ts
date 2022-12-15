/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ingabo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IngaboUpdateFormInputValues = {
    fullName?: string;
    dateofbirth?: string;
    igitsina?: string;
    telephone?: string;
    nationalID?: string;
    cooperative?: string;
    addressCell?: string;
    addressSector?: string;
    addressDistrict?: string;
    activity1?: boolean;
    activity2?: boolean;
    activity3?: boolean;
    activity4?: boolean;
    activity5?: boolean;
    activity6?: boolean;
    activity7?: boolean;
    activity8?: boolean;
    cell?: string;
    sector?: string;
    district?: string;
};
export declare type IngaboUpdateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    dateofbirth?: ValidationFunction<string>;
    igitsina?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    nationalID?: ValidationFunction<string>;
    cooperative?: ValidationFunction<string>;
    addressCell?: ValidationFunction<string>;
    addressSector?: ValidationFunction<string>;
    addressDistrict?: ValidationFunction<string>;
    activity1?: ValidationFunction<boolean>;
    activity2?: ValidationFunction<boolean>;
    activity3?: ValidationFunction<boolean>;
    activity4?: ValidationFunction<boolean>;
    activity5?: ValidationFunction<boolean>;
    activity6?: ValidationFunction<boolean>;
    activity7?: ValidationFunction<boolean>;
    activity8?: ValidationFunction<boolean>;
    cell?: ValidationFunction<string>;
    sector?: ValidationFunction<string>;
    district?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngaboUpdateFormOverridesProps = {
    IngaboUpdateFormGrid?: FormProps<GridProps>;
    SectionalElement0?: FormProps<HeadingProps>;
    RowGrid1?: FormProps<GridProps>;
    fullName?: FormProps<TextFieldProps>;
    dateofbirth?: FormProps<TextFieldProps>;
    igitsina?: FormProps<SelectFieldProps>;
    RowGrid2?: FormProps<GridProps>;
    telephone?: FormProps<TextFieldProps>;
    nationalID?: FormProps<TextFieldProps>;
    cooperative?: FormProps<TextFieldProps>;
    SectionalElement1?: FormProps<HeadingProps>;
    RowGrid4?: FormProps<GridProps>;
    addressCell?: FormProps<TextFieldProps>;
    addressSector?: FormProps<TextFieldProps>;
    addressDistrict?: FormProps<TextFieldProps>;
    RowGrid5?: FormProps<GridProps>;
    activity1?: FormProps<CheckboxFieldProps>;
    activity2?: FormProps<CheckboxFieldProps>;
    activity3?: FormProps<CheckboxFieldProps>;
    activity4?: FormProps<CheckboxFieldProps>;
    RowGrid6?: FormProps<GridProps>;
    activity5?: FormProps<CheckboxFieldProps>;
    activity6?: FormProps<CheckboxFieldProps>;
    activity7?: FormProps<CheckboxFieldProps>;
    activity8?: FormProps<CheckboxFieldProps>;
    cell?: FormProps<TextFieldProps>;
    sector?: FormProps<TextFieldProps>;
    district?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IngaboUpdateFormProps = React.PropsWithChildren<{
    overrides?: IngaboUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ingabo?: Ingabo;
    onSubmit?: (fields: IngaboUpdateFormInputValues) => IngaboUpdateFormInputValues;
    onSuccess?: (fields: IngaboUpdateFormInputValues) => void;
    onError?: (fields: IngaboUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: IngaboUpdateFormInputValues) => IngaboUpdateFormInputValues;
    onValidate?: IngaboUpdateFormValidationValues;
} & React.CSSProperties>;
export default function IngaboUpdateForm(props: IngaboUpdateFormProps): React.ReactElement;
