import { NextPage } from 'next'
import React from 'react'
import EventsDisplay from '../../components/employeeEvent/eventsDisplay'

import EmployeeLayout from '../../components/layouts/employeeLayout/employeeLayout'

const EmpEvents: NextPage = () => {
  return (
    <EmployeeLayout>
      <EventsDisplay />
    </EmployeeLayout>
  )
}

export default EmpEvents
