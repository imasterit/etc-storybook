import * as React from "react";
import { GatewayNodeModel } from "./GatewayNodeModel";
import { GatewayNodeWidget } from "./GatewayNodeWidget";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { DiagramEngine } from "@projectstorm/react-diagrams-core";

export class GatewayNodeFactory extends AbstractReactFactory<
  GatewayNodeModel,
  DiagramEngine
> {
  constructor() {
    super("gateway-node");
  }

  generateModel(initialConfig: any) {
    return new GatewayNodeModel({ name: "Gateway 1" });
  }

  generateReactWidget(Gateway: any): JSX.Element {
    return (
      <GatewayNodeWidget
        engine={this.engine as DiagramEngine}
        node={Gateway.model}
      />
    );
  }
}
