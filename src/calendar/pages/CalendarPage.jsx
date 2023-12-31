/* eslint-disable no-unused-vars */
import { Calendar} from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, NavBar } from "../"
import { addHours } from 'date-fns';
import { localizer, getMessagesES } from '../../helpers';

const events = [{
  title: 'Cumpleaños de marce',
  notes: 'comprar la torta',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Fabricio'
  } 
}]

export const CalendarPage = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    // console.log({ event, start, end, isSelected})

    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  return (
    <>
        <NavBar />

        <Calendar
          culture='es'
          localizer={ localizer }
          events={ events }
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          messages={getMessagesES()}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CalendarEvent
          }}
        />
    </>
  )
}
