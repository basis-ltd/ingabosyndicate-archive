/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngaboNavBarOverridesProps = {
    IngaboNavBar?: PrimitiveOverrideProps<ViewProps>;
    Button35142888?: PrimitiveOverrideProps<ButtonProps>;
    Button35142892?: PrimitiveOverrideProps<ButtonProps>;
    Button35142901?: PrimitiveOverrideProps<ButtonProps>;
    Button35142917?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type IngaboNavBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IngaboNavBarOverridesProps | undefined | null;
}>;
export default function IngaboNavBar(props: IngaboNavBarProps): React.ReactElement;
