/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngaboCreateFormOverridesProps = {
    IngaboCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    dateofbirth?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    nationalID?: PrimitiveOverrideProps<TextFieldProps>;
    telephone?: PrimitiveOverrideProps<TextFieldProps>;
    cooperative?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid4?: PrimitiveOverrideProps<GridProps>;
    cell?: PrimitiveOverrideProps<TextFieldProps>;
    sector?: PrimitiveOverrideProps<TextFieldProps>;
    district?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    activity1?: PrimitiveOverrideProps<CheckboxFieldProps>;
    activity2?: PrimitiveOverrideProps<CheckboxFieldProps>;
    activity3?: PrimitiveOverrideProps<CheckboxFieldProps>;
    activity4?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid6?: PrimitiveOverrideProps<GridProps>;
    activity5?: PrimitiveOverrideProps<CheckboxFieldProps>;
    activity6?: PrimitiveOverrideProps<CheckboxFieldProps>;
    activity7?: PrimitiveOverrideProps<CheckboxFieldProps>;
    activity8?: PrimitiveOverrideProps<CheckboxFieldProps>;
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
