/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Ingabo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IngaboUpdateFormInputValues = {
    fullname?: string;
    dateofbirth?: string;
    gender?: string;
    nationalID?: string;
    cooperative?: string;
    telephone?: string;
    cell?: string;
    sector?: string;
    district?: string;
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
export declare type IngaboUpdateFormValidationValues = {
    fullname?: ValidationFunction<string>;
    dateofbirth?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    nationalID?: ValidationFunction<string>;
    cooperative?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    cell?: ValidationFunction<string>;
    sector?: ValidationFunction<string>;
    district?: ValidationFunction<string>;
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
export declare type IngaboUpdateFormOverridesProps = {
    IngaboUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    fullname?: PrimitiveOverrideProps<TextFieldProps>;
    dateofbirth?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    nationalID?: PrimitiveOverrideProps<TextFieldProps>;
    cooperative?: PrimitiveOverrideProps<TextFieldProps>;
    telephone?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    cell?: PrimitiveOverrideProps<TextFieldProps>;
    sector?: PrimitiveOverrideProps<TextFieldProps>;
    district?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid3?: PrimitiveOverrideProps<GridProps>;
    imyumbati?: PrimitiveOverrideProps<TextFieldProps>;
    umuceri?: PrimitiveOverrideProps<TextFieldProps>;
    ibigori?: PrimitiveOverrideProps<TextFieldProps>;
    ibinyamisogwe?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid4?: PrimitiveOverrideProps<GridProps>;
    imboga_imbuto?: PrimitiveOverrideProps<TextFieldProps>;
    inkoko?: PrimitiveOverrideProps<TextFieldProps>;
    ingurube?: PrimitiveOverrideProps<TextFieldProps>;
    inka?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    ibirayi?: PrimitiveOverrideProps<TextFieldProps>;
    ihene?: PrimitiveOverrideProps<TextFieldProps>;
    intama?: PrimitiveOverrideProps<TextFieldProps>;
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
