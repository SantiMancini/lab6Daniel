import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  render() {
    return (

      <BigCalendar
        events={[
          {
            'title': 'Evento 1',
            'start': new Date(2017, 5, 12, 14, 30),
            'end': new Date(2017, 5, 12, 15, 30)
          },
          {
            'title': 'Evento 2',
            'start': new Date(2017, 5, 13, 14, 30),
            'end': new Date(2017, 5, 13, 15, 30)
          }
        ]}
        min={new Date(2017, 4, 29, 8, 0)}
        max={new Date(2017, 4, 29, 22, 0)}
        onSelectEvent={(event) => alert(JSON.stringify(event))}
        toolbar={false}
        step={30}
        timeslots={2}
        defaultView='week'
      />
    );
  }
}

export default Calendar;
