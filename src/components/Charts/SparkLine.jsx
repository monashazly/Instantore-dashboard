import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

export default class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;
    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        dataSource={data}
        xName="xval"
        yName="yval"
        type={type}
        fill={color}
        valueType="Numeric"
        lineWidth={1}
        border={{ color : currentColor , width : 2}}
        tooltipSettings={{
          visible : true ,
          // eslint-disable-next-line no-template-curly-in-string
          format : '${xval} : data ${yval}' ,
          trackLineSettings : {
            visible : true
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

