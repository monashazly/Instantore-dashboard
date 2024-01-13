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
    </div>
  );
};

export default Kanban;
