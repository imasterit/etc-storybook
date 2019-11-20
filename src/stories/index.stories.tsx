import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { RoundedButton } from "../components/RoundedButton";
import { Diagram } from "../components/flowDiagram";
import {
  ActivityNode,
  ActivityNodePort
} from "../components/flowDiagram/Nodes/Activity/ActivityNode";
import { theme } from "../components/flowDiagram/theme";
import { GrayLabel } from "../components/GrayLabel";
import {
  EventNodePort,
  EventNode
} from "../components/flowDiagram/Nodes/Event/EventNode";

storiesOf("RoundedButton", module)
  .add(
    "with text",
    () => (
      <RoundedButton color="hotpink" onClick={action("clicked")}>
        Hello Button
      </RoundedButton>
    ),
    { info: { inline: true } }
  )
  .add(
    "with some emoji",
    () => (
      <RoundedButton color="papayawhip" onClick={action("clicked")}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </RoundedButton>
    ),
    { info: { inline: true } }
  );

storiesOf("Flow diagram", module)
  .add("Flow Diagram", () => <Diagram />, {
    info: { inline: false }
  })
  .add(
    "Activity Node",
    () => (
      <ActivityNode
        model={{
          name: "Sample activity",
          color: theme.COLORS.green,
          isSelected: () => false
        }}
      >
        <ActivityNodePort />
        <ActivityNodePort />
      </ActivityNode>
    ),
    { info: { inline: true } }
  )
  .add(
    "Event Node",
    () => (
      <EventNode
        model={{
          name: "Sample event",
          color: theme.COLORS.green,
          isSelected: () => false
        }}
      >
        <EventNodePort />
        <EventNodePort />
      </EventNode>
    ),
    { info: { inline: true } }
  )
  .add("Gray label", () => <GrayLabel>Text</GrayLabel>, {
    info: { inline: true }
  });
