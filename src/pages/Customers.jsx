import { GridComponent , ColumnDirective , ColumnsDirective , Page , Selection , Inject , Edit , Toolbar , Sort } from "@syncfusion/ej2-react-grids";
import { Header} from '../components';
import { customersData , customersGrid } from "../data/dummy";

const Customers = () => {
  return (
    <div className="mx-2 mt-20 md:m-10 p-2 md:p-5 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent 
      width="auto"
      dataSource={customersData}
      allowPaging
      allowSorting
      editSettings={{ allowDeleting : true , allowEditing :true}}
      toolbar={['Delete']}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page , Toolbar , Selection , Edit , Sort , Edit]} />
      </GridComponent>
      <div className="mt-20 text-center">
      © 2023 All rights reserved by <a href="https://github.com/monashazly/Instantore-dashboard">Mona shazly</a>
      </div>
    </div>
  )
}

export default Customers
