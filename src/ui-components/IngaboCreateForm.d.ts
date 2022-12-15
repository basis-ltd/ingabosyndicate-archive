/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IngaboCreateFormInputValues = {
    fullName?: string;
    dateofbirth?: string;
    gender?: string;
    nationalID?: string;
    telephone?: string;
    cooperative?: string;
    cell?: string;
    sector?: string;
    district?: string;
    activity1?: boolean;
    activity2?: boolean;
    activity3?: boolean;
    activity4?: boolean;
    activity5?: boolean;
    activity6?: boolean;
    activity7?: boolean;
    activity8?: boolean;
};
export declare type IngaboCreateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    dateofbirth?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    nationalID?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    cooperative?: ValidationFunction<string>;
    cell?: ValidationFunction<string>;
    sector?: ValidationFunction<string>;
    district?: ValidationFunction<string>;
    activity1?: ValidationFunction<boolean>;
    activity2?: ValidationFunction<boolean>;
    activity3?: ValidationFunction<boolean>;
    activity4?: ValidationFunction<boolean>;
    activity5?: ValidationFunction<boolean>;
    activity6?: ValidationFunction<boolean>;
    activity7?: ValidationFunction<boolean>;
    activity8?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngaboCreateFormOverridesProps = {
    IngaboCreateFormGrid?: FormProps<GridProps>;
    SectionalElement0?: FormProps<HeadingProps>;
    RowGrid1?: FormProps<GridProps>;
    fullName?: FormProps<TextFieldProps>;
    dateofbirth?: FormProps<TextFieldProps>;
    gender?: FormProps<TextFieldProps>;
    RowGrid2?: FormProps<GridProps>;
    nationalID?: FormProps<TextFieldProps>;
    telephone?: FormProps<TextFieldProps>;
    cooperative?: FormProps<TextFieldProps>;
    SectionalElement1?: FormProps<HeadingProps>;
    RowGrid4?: FormProps<GridProps>;
    cell?: FormProps<TextFieldProps>;
    sector?: FormProps<TextFieldProps>;
    district?: FormProps<TextFieldProps>;
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
} & EscapeHatchProps;
export declare type IngaboCreateFormProps = React.PropsWithChildren<{
    overrides?: IngaboCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IngaboCreateFormInputValues) => IngaboCreateFormInputValues;
    onSuccess?: (fields: IngaboCreateFormInputValues) => void;
    onError?: (fields: IngaboCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: IngaboCreateFormInputValues) => IngaboCreateFormInputValues;
    onValidate?: IngaboCreateFormValidationValues;
} & React.CSSProperties>;
export default function IngaboCreateForm(props: IngaboCreateFormProps): React.ReactElement;
