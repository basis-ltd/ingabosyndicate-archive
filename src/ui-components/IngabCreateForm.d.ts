/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IngabCreateFormInputValues = {
    fullname?: string;
    dateofbirth?: string;
    nationalID?: string;
    cooperative?: string;
    telephone?: string;
    cell?: string;
    sector?: string;
    district?: string;
    gender?: string;
    signature?: string;
    aroroye?: string;
    arahinga?: string;
    imyumbati?: string;
    umuceri?: string;
    ibigori?: string;
    ibinyamisogwe?: string;
    imboga_imbuto?: string;
    inkoko?: string;
    ingurube?: string;
    inka?: string;
    ibirayi?: string;
    ihene?: string;
    intama?: string;
};
export declare type IngabCreateFormValidationValues = {
    fullname?: ValidationFunction<string>;
    dateofbirth?: ValidationFunction<string>;
    nationalID?: ValidationFunction<string>;
    cooperative?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    cell?: ValidationFunction<string>;
    sector?: ValidationFunction<string>;
    district?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    signature?: ValidationFunction<string>;
    aroroye?: ValidationFunction<string>;
    arahinga?: ValidationFunction<string>;
    imyumbati?: ValidationFunction<string>;
    umuceri?: ValidationFunction<string>;
    ibigori?: ValidationFunction<string>;
    ibinyamisogwe?: ValidationFunction<string>;
    imboga_imbuto?: ValidationFunction<string>;
    inkoko?: ValidationFunction<string>;
    ingurube?: ValidationFunction<string>;
    inka?: ValidationFunction<string>;
    ibirayi?: ValidationFunction<string>;
    ihene?: ValidationFunction<string>;
    intama?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngabCreateFormOverridesProps = {
    IngabCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullname?: PrimitiveOverrideProps<TextFieldProps>;
    dateofbirth?: PrimitiveOverrideProps<TextFieldProps>;
    nationalID?: PrimitiveOverrideProps<TextFieldProps>;
    cooperative?: PrimitiveOverrideProps<TextFieldProps>;
    telephone?: PrimitiveOverrideProps<TextFieldProps>;
    cell?: PrimitiveOverrideProps<TextFieldProps>;
    sector?: PrimitiveOverrideProps<TextFieldProps>;
    district?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    signature?: PrimitiveOverrideProps<TextFieldProps>;
    aroroye?: PrimitiveOverrideProps<TextFieldProps>;
    arahinga?: PrimitiveOverrideProps<TextFieldProps>;
    imyumbati?: PrimitiveOverrideProps<TextFieldProps>;
    umuceri?: PrimitiveOverrideProps<TextFieldProps>;
    ibigori?: PrimitiveOverrideProps<TextFieldProps>;
    ibinyamisogwe?: PrimitiveOverrideProps<TextFieldProps>;
    imboga_imbuto?: PrimitiveOverrideProps<TextFieldProps>;
    inkoko?: PrimitiveOverrideProps<TextFieldProps>;
    ingurube?: PrimitiveOverrideProps<TextFieldProps>;
    inka?: PrimitiveOverrideProps<TextFieldProps>;
    ibirayi?: PrimitiveOverrideProps<TextFieldProps>;
    ihene?: PrimitiveOverrideProps<TextFieldProps>;
    intama?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IngabCreateFormProps = React.PropsWithChildren<{
    overrides?: IngabCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IngabCreateFormInputValues) => IngabCreateFormInputValues;
    onSuccess?: (fields: IngabCreateFormInputValues) => void;
    onError?: (fields: IngabCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IngabCreateFormInputValues) => IngabCreateFormInputValues;
    onValidate?: IngabCreateFormValidationValues;
} & React.CSSProperties>;
export default function IngabCreateForm(props: IngabCreateFormProps): React.ReactElement;
