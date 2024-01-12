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
    </div>
  );
};

export default Orders;
