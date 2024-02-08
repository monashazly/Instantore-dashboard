import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Search,
  Inject,
  Toolbar
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { employeesGrid, employeesData } from "../data/dummy";

const Employees = () => {
  return (
    <div className="mx-2 my-20 md:m-10 p-2 md:p-5 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent 
      width="auto"
      dataSource={employeesData}
      allowPaging
      toolbar={['Search']}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page , Search , Toolbar]} />
      </GridComponent>
      <div className="mt-20 text-center">
      © 2023 All rights reserved by <a href="https://github.com/monashazly/Instantore-dashboard">Mona shazly</a>
      </div>
    </div>
  );
};

export default Employees;
