/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
    cooperative?: string;
    telephone?: string;
    addressCell?: string;
    addressSector?: string;
    addressDistrict?: string;
    activity1?: boolean;
    activity2?: boolean;
    activity4?: boolean;
    activity5?: boolean;
    activity6?: boolean;
    activity3?: boolean;
};
export declare type IngaboCreateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    dateofbirth?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    nationalID?: ValidationFunction<string>;
    cooperative?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    addressCell?: ValidationFunction<string>;
    addressSector?: ValidationFunction<string>;
    addressDistrict?: ValidationFunction<string>;
    activity1?: ValidationFunction<boolean>;
    activity2?: ValidationFunction<boolean>;
    activity4?: ValidationFunction<boolean>;
    activity5?: ValidationFunction<boolean>;
    activity6?: ValidationFunction<boolean>;
    activity3?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngaboCreateFormOverridesProps = {
    IngaboCreateFormGrid?: FormProps<GridProps>;
    RowGrid0?: FormProps<GridProps>;
    fullName?: FormProps<TextFieldProps>;
    dateofbirth?: FormProps<TextFieldProps>;
    gender?: FormProps<TextFieldProps>;
    nationalID?: FormProps<TextFieldProps>;
    cooperative?: FormProps<TextFieldProps>;
    telephone?: FormProps<TextFieldProps>;
    RowGrid4?: FormProps<GridProps>;
    addressCell?: FormProps<TextFieldProps>;
    addressSector?: FormProps<TextFieldProps>;
    addressDistrict?: FormProps<TextFieldProps>;
    RowGrid5?: FormProps<GridProps>;
    activity1?: FormProps<CheckboxFieldProps>;
    activity2?: FormProps<CheckboxFieldProps>;
    activity4?: FormProps<CheckboxFieldProps>;
    RowGrid6?: FormProps<GridProps>;
    activity5?: FormProps<CheckboxFieldProps>;
    activity6?: FormProps<CheckboxFieldProps>;
    activity3?: FormProps<CheckboxFieldProps>;
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
}>;
export default function IngaboCreateForm(props: IngaboCreateFormProps): React.ReactElement;
