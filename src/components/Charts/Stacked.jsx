import React from 'react'
import { ChartComponent , SeriesCollectionDirective , SeriesDirective , Legend , Category , StackingColumnSeries , Tooltip , Inject} from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries , stackedPrimaryXAxis , stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({width , height}) => {
  const data = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
const tooltip = { enable: true, shared: false };
const legendSettings = { visible: true };

  return <ChartComponent 
      id="charts" 
      primaryXAxis={stackedPrimaryXAxis} 
      legendSettings={legendSettings} 
      primaryYAxis={stackedPrimaryYAxis} 
      tooltip={tooltip}
      width={width}
      height={height}
      chartArea={{border : {width : 0}}}>
    <Inject services={[ Tooltip, Legend, Category , StackingColumnSeries]}/>
    <SeriesCollectionDirective>
     { stackedCustomSeries.map((item , index)=> <SeriesDirective key={index} {...item} />)}
    </SeriesCollectionDirective>
  </ChartComponent>;

}

export default Stacked
