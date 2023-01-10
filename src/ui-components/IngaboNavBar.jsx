/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, View } from "@aws-amplify/ui-react";
export default function IngaboNavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1571px"
      height="155px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "IngaboNavBar")}
      {...rest}
    >
      <Button
        position="absolute"
        top="63px"
        left="1231px"
        backgroundColor="rgba(65,143,59,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Sign Out"
        {...getOverrideProps(overrides, "Button35142888")}
      ></Button>
      <Button
        width="167px"
        height="47px"
        position="absolute"
        top="60px"
        left="318px"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={false}
        variation="link"
        children="Home"
        {...getOverrideProps(overrides, "Button35142892")}
      ></Button>
      <Button
        width="167px"
        height="47px"
        position="absolute"
        top="60px"
        left="830px"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={false}
        variation="link"
        children="Shop"
        {...getOverrideProps(overrides, "Button35142901")}
      ></Button>
      <Button
        width="167px"
        height="47px"
        position="absolute"
        top="60px"
        left="574px"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={false}
        variation="link"
        children="Insert Record"
        {...getOverrideProps(overrides, "Button35142917")}
      ></Button>
    </View>
  );
}
