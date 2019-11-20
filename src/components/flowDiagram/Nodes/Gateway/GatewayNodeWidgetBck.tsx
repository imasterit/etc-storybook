import React from "react";
import { DiagramEngine, PortWidget } from "@projectstorm/react-diagrams-core";
import { GatewayNodeModel } from "./GatewayNodeModel";
import { DefaultPortModel } from "@projectstorm/react-diagrams";
import styled from "styled-components";

export interface GatewayNodeWidgetProps {
  node: GatewayNodeModel;
  engine: DiagramEngine;
}

export interface GatewayNodeWidgetState {}

const Body = styled.div<{ color: string; isSelected: boolean }>`
  border: solid 2px
    ${({ isSelected, theme }) =>
      isSelected ? theme.COLORS.redOrange : theme.COLORS.gray};
  border-radius: 5px;
  width: 60px;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  align-content: space-between;
  background-color: ${props => props.color};
  pointer-events: all;
  cursor: crosshair;
  transform: rotate(45deg);
`;

const Port = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.COLORS.lightGray};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.COLORS.redOrange};
  }
`;

const Label = styled.div`
  pointer-events: all;
  font-size: 0.9em;
  padding: 2px;
  max-width: 140px
  background-color: ${({ theme }) => theme.COLORS.transparentGray};
  color: white;
  margin-top: 15px;
  cursor: crosshair;
`;

const Container = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Spacer = styled.div`
  flex-basis: 100%;
`;

export class GatewayNodeWidget extends React.Component<
  GatewayNodeWidgetProps,
  GatewayNodeWidgetState
> {
  constructor(props: GatewayNodeWidgetProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Body
          color={this.props.node.color}
          isSelected={this.props.node.isSelected()}
        >
          <PortWidget
            engine={this.props.engine}
            port={this.props.node.getPort("in") || new DefaultPortModel(true)}
          >
            <Port />
          </PortWidget>
          <PortWidget
            engine={this.props.engine}
            port={this.props.node.getPort("in") || new DefaultPortModel(false)}
          >
            <Port />
          </PortWidget>
          <Spacer />
          <PortWidget
            engine={this.props.engine}
            port={this.props.node.getPort("in") || new DefaultPortModel(false)}
          >
            <Port />
          </PortWidget>
          <PortWidget
            engine={this.props.engine}
            port={this.props.node.getPort("out") || new DefaultPortModel(false)}
          >
            <Port />
          </PortWidget>
        </Body>
        <Label>{this.props.node.name}</Label>
      </Container>
    );
  }
}
