import React, { useState } from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import 'react-calendar/dist/Calendar.css';


// const [value, onChange] = useState(new Date());

export const ProjectCalendar = () => (
    <>
        <div className="flex justify-center">
            <CalendarComponent id="calendar" />
        </div>
    </>

)