import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { themeDecorator } from "../src/stories/themeDecorator";

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /.stories.tsx$/);

function loadStories() {
  addDecorator(withInfo);
  addDecorator(themeDecorator);
  req.keys().forEach(req);
}

configure(loadStories, module);
