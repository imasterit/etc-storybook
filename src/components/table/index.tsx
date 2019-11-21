import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  Text
} from "grommet";
import { data, columns } from "./data";
import styled from "styled-components";

const TH = styled(TableHeader)`
  border-top: 1px solid ${({ theme }) => theme.global.colors["light-4"]};
  border-bottom: 1px solid ${({ theme }) => theme.global.colors["light-4"]};
`;

const TRH = styled(TableRow)`
  > th {
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
  }
`;

const TR = styled(TableRow)`
  border-bottom: 1px solid ${({ theme }) => theme.global.colors["light-3"]};
  > th {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const CustomThemeTable = () => (
  <Table>
    <TH>
      <TRH>
        <TableCell plain key="checkbox" scope="col" size="xxsmall"></TableCell>
        {columns.map(c => (
          <TableCell
            plain
            key={c.property}
            scope="col"
            align={c.align}
            size={c.size}
          >
            <Text weight="bold" color="dark-4">
              {c.label}
            </Text>
          </TableCell>
        ))}
      </TRH>
    </TH>
    <TableBody>
      {data.map(datum => (
        <TR key={datum.id}>
          <TableCell size="xxsmall">
            <input type="checkbox" />
          </TableCell>
          {columns.map(c => (
            <TableCell
              plain
              key={c.property}
              scope={c.dataScope}
              align={c.align}
            >
              <Text>{c.format ? c.format(datum) : datum[c.property]}</Text>
            </TableCell>
          ))}
        </TR>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell size="xxsmall"></TableCell>
        {columns.map(c => (
          <TableCell key={c.property} align={c.align}>
            <Text>{c.footer}</Text>
          </TableCell>
        ))}
      </TableRow>
    </TableFooter>
  </Table>
);
