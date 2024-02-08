import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";

const Kanban = () => {
  return (
    <div className="mx-2 mt-20 md:m-10 p-2 md:p-5 bg-white rounded-3xl">
      <Header category="App" title="kanban" />
      <KanbanComponent 
      id="kanban"
      dataSource={kanbanData}
      cardSettings={{ contentField : 'Summary' , headerField : 'Id' }}
      keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
      <div className="mt-20 text-center">
      © 2023 All rights reserved by <a href="https://github.com/monashazly/Instantore-dashboard">Mona shazly</a>
      </div>
    </div>
  );
};

export default Kanban;
