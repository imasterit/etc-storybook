import React from "react";
import { storiesOf } from "@storybook/react";
import { CustomThemeTable } from "../components/table";
import { EnhancedTable } from "../components/materialUI/Table";

storiesOf("Grommet component lib", module).add(
  "Sample table",
  () => <CustomThemeTable />,
  {
    info: { inline: true }
  }
);

storiesOf("Material UI component lib", module).add(
  "Sample table",
  () => <EnhancedTable />,
  {
    info: { inline: true }
  }
);
