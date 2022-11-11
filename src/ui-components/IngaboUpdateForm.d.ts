/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ingabo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IngaboUpdateFormInputValues = {
    fullName?: string;
    dateofbirth?: string;
    nationalID?: string;
    addressCell?: string;
    addressSector?: string;
    addressDistrict?: string;
    cooperative?: string;
    telephone?: string;
    activity1?: boolean;
    activity2?: boolean;
    activity3?: boolean;
    activity4?: boolean;
    activity5?: boolean;
    activity6?: boolean;
    activity7?: boolean;
    activity8?: boolean;
    no?: number;
    igitsina?: string;
};
export declare type IngaboUpdateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    dateofbirth?: ValidationFunction<string>;
    nationalID?: ValidationFunction<string>;
    addressCell?: ValidationFunction<string>;
    addressSector?: ValidationFunction<string>;
    addressDistrict?: ValidationFunction<string>;
    cooperative?: ValidationFunction<string>;
    telephone?: ValidationFunction<string>;
    activity1?: ValidationFunction<boolean>;
    activity2?: ValidationFunction<boolean>;
    activity3?: ValidationFunction<boolean>;
    activity4?: ValidationFunction<boolean>;
    activity5?: ValidationFunction<boolean>;
    activity6?: ValidationFunction<boolean>;
    activity7?: ValidationFunction<boolean>;
    activity8?: ValidationFunction<boolean>;
    no?: ValidationFunction<number>;
    igitsina?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngaboUpdateFormOverridesProps = {
    IngaboUpdateFormGrid?: FormProps<GridProps>;
    fullName?: FormProps<TextFieldProps>;
    dateofbirth?: FormProps<TextFieldProps>;
    nationalID?: FormProps<TextFieldProps>;
    addressCell?: FormProps<TextFieldProps>;
    addressSector?: FormProps<TextFieldProps>;
    addressDistrict?: FormProps<TextFieldProps>;
    cooperative?: FormProps<TextFieldProps>;
    telephone?: FormProps<TextFieldProps>;
    activity1?: FormProps<SwitchFieldProps>;
    activity2?: FormProps<SwitchFieldProps>;
    activity3?: FormProps<SwitchFieldProps>;
    activity4?: FormProps<SwitchFieldProps>;
    activity5?: FormProps<SwitchFieldProps>;
    activity6?: FormProps<SwitchFieldProps>;
    activity7?: FormProps<SwitchFieldProps>;
    activity8?: FormProps<SwitchFieldProps>;
    no?: FormProps<TextFieldProps>;
    igitsina?: FormProps<TextFieldProps>;
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
}>;
export default function IngaboUpdateForm(props: IngaboUpdateFormProps): React.ReactElement;
