import React from "react";

import {
  ChartComponent,
  SplineAreaSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate In Percentage" />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[Legend, SplineAreaSeries, DateTime]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
      <div className="mt-20 text-center">
      © 2023 All rights reserved by <a href="https://github.com/monashazly/Instantore-dashboard">Mona shazly</a>
      </div>
    </div>
  );
};

export default Area;
