import React from "react";
import { storiesOf } from "@storybook/react";
import { CustomThemeTable } from "../components/table";

storiesOf("Grommet component lib", module).add(
  "Sample table",
  () => <CustomThemeTable />,
  {
    info: { inline: true }
  }
);
