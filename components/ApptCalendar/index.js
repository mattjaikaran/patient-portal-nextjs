import { Calendar, Badge } from 'antd';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'Waitlist available' },
        { type: 'success', content: 'Check up available.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'Waitlist available' },
        { type: 'success', content: 'Check up available.' },
        { type: 'error', content: 'Booked timeslot' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'Waitlist available' },
        { type: 'success', content: 'Follow up available' },
        { type: 'error', content: 'Booked timeslot' },
        { type: 'error', content: 'Booked timeslot' },
        { type: 'error', content: 'Booked timeslot' },
        { type: 'error', content: 'Booked timeslot' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

//make calendar reusable to have multiple doctors calendars
const ApptCalendar = () => {
  return (
    <Calendar 
      dateCellRender={dateCellRender} 
      monthCellRender={monthCellRender} />
  )
}


export default ApptCalendar