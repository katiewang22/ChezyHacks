import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { createEventId } from '../event-utils'
// import { Calendar } from '@fullcalendar/core'

export default class CalendarScreen extends React.Component {
  render() {
    return (
      // Creates the calendar and show its properties
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'today'
        }}   
        initialView="dayGridWeek"
        editable={true}
        selectable={true}
        select={handleDateSelect}
      />
    )
  }
}

// Creates an event showing what the user rated how they feel
function handleDateSelect(selectInfo) {
  let title = prompt('How do you feel from a scale of 1 to 10?')
  let calendarApi = selectInfo.view.calendar
  
  calendarApi.unselect()

  if(title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    })
  }
}
