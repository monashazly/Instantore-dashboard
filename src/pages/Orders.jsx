import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  Edit,
  PdfExport,
  Inject
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { ordersGrid, ordersData } from "../data/dummy";

const Orders = () => {
  return (
    <div className="mx-2 my-20 md:m-10 p-2 md:p-5 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent 
      id="gridcomp" 
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize , Sort , ContextMenu ,Filter , Page , ExcelExport , Edit , PdfExport]} />
      </GridComponent>
      <div className="mt-20 text-center">
      © 2023 All rights reserved by <a href="https://github.com/monashazly/Instantore-dashboard">Mona shazly</a>
      </div>
    </div>
  );
};

export default Orders;
