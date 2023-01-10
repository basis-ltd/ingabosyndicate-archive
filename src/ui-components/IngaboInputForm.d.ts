/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngaboInputFormOverridesProps = {
    IngaboInputForm?: PrimitiveOverrideProps<ViewProps>;
    TextField34722994?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34723002?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34723009?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34723016?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34723023?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34723030?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34723037?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34723044?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34723051?: PrimitiveOverrideProps<TextFieldProps>;
    CheckboxField34723058?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField34723066?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField34723074?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField34723082?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField34723090?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField34723098?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField34723106?: PrimitiveOverrideProps<CheckboxFieldProps>;
    CheckboxField34723114?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Button34723125?: PrimitiveOverrideProps<FlexProps>;
    Button34723133?: PrimitiveOverrideProps<FlexProps>;
    ADDRESS?: PrimitiveOverrideProps<TextProps>;
    PROPERTIES?: PrimitiveOverrideProps<TextProps>;
    IDENTIFICATION?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type IngaboInputFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IngaboInputFormOverridesProps | undefined | null;
}>;
export default function IngaboInputForm(props: IngaboInputFormProps): React.ReactElement;
