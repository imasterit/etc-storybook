import * as React from "react";
import { ToolItem } from "./ToolsItem";
import styled from "styled-components";
import { oldTheme } from "./theme";

export interface TrayWidgetProps {}

const StyledUl = styled.ul`
  padding: 10px 10px 5px 10px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: center;
  overflow: visible;
  background: ${({ theme }) => theme.global.colors.transparentGray};
  margin: 0px;
  border-radius: 5px;
`;

export const Tools: React.SFC<TrayWidgetProps> = () => (
  <StyledUl>
    <ToolItem
      model={{ type: "event" }}
      name="Event"
      color={oldTheme.COLORS.green}
    />
    <ToolItem
      model={{ type: "in" }}
      name="Avtivity"
      color={oldTheme.COLORS.blue}
    />
    <ToolItem
      model={{ type: "gateway" }}
      name="Gateway"
      color={oldTheme.COLORS.purple}
    />
  </StyledUl>
);
