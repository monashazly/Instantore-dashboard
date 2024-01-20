import { ScheduleComponent  , Day , Week , WorkWeek , Month , Agenda , Inject , Resize , DragAndDrop} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import { Header} from "../components"

const Calendar = () => {
  return (
    <div className="mx-2 mt-20 md:m-10 p-2 md:p-5 bg-white rounded-3xl">
      <Header category='App' title='Calendar' />
      <ScheduleComponent 
      height="650px"
      eventSettings={{ dataSource : scheduleData}}>
        <Inject services={[Day , Week , WorkWeek , Month , Agenda , Resize , DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar
