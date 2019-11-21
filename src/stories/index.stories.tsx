import React from "react";
import { storiesOf } from "@storybook/react";
// import { Diagram } from "../components/flowDiagram";
// import {
//   ActivityNode,
//   ActivityNodePort
// } from "../components/flowDiagram/Nodes/Activity/ActivityNode";
// import { oldTheme as theme } from "../components/flowDiagram/theme";
// import { GrayLabel } from "../components/GrayLabel";
// import {
//   EventNodePort,
//   EventNode
// } from "../components/flowDiagram/Nodes/Event/EventNode";
// import {
//   GatewayPort,
//   GatewayNode,
//   Spacer
// } from "../components/flowDiagram/Nodes/Gateway/GatewayNode";
import { CustomThemeTable } from "../components/table";

storiesOf("Grommet component lib", module).add(
  "Sample table",
  () => <CustomThemeTable />,
  {
    info: { inline: true }
  }
);
