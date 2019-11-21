import React from "react";

import { Text, Box } from "grommet";
import styled from "styled-components";

type TableItem = {
  id: number;
  name: string;
  email: string;
  amount: number;
  img?: string;
};

type TableColumn = {
  property: keyof TableItem;
  label: string;
  dataScope?: "row" | "col";
  format?: (datum: TableItem) => React.ReactNode | string;
  align?: "center";
  footer?: string;
  size: "large" | "small" | "medium";
};

const Img = styled.img`
  border-radius: 50%;
  width: 25px;
  height: 25px;
`;

// Always should store amount in cents to avoid precision errors
export const data: TableItem[] = [
  {
    id: 1,
    name: "Eric",
    email: "eric@local",
    amount: 3775,
    img: "https://picsum.photos/20/20"
  },
  {
    id: 2,
    name: "Chris",
    email: "chris@local",
    amount: 5825,
    img: "https://picsum.photos/20/20"
  },
  {
    id: 3,
    name: "Alan",
    email: "alan@local",
    amount: 4300,
    img: "https://picsum.photos/20/20"
  },
  {
    id: 4,
    name: "Shimi",
    email: "shimisun@local",
    amount: 5752,
    img: "https://picsum.photos/20/20"
  }
];

let TOTAL = 0;
data.forEach(datum => {
  TOTAL += datum.amount;
});

const amountFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

export const columns: TableColumn[] = [
  {
    property: "name",
    label: "Name",
    dataScope: "row",
    format: (datum: TableItem) => (
      <Box direction="row" gap="small">
        {datum.img && <Img src={datum.img} alt="Avatar" />}
        <Text>{datum.name}</Text>
      </Box>
    ),
    size: "large"
  },
  {
    property: "email",
    label: "Email",
    size: "large"
  },
  {
    property: "amount",
    label: "Amount",
    align: "center",
    footer: amountFormatter.format(TOTAL / 100),
    format: (datum: TableItem) => amountFormatter.format(datum.amount / 100),
    size: "small"
  }
];
