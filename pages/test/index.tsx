import React from 'react'

import type { NextPage } from 'next'
import EmployeeLayout from '../../components/layouts/employeeLayout/employeeLayout'
import EventsDisplay from '../../components/employeeEvent/eventsDisplay'
import EmpEvents from '../empEvents'
import AdminEvents from '../adminEvents'
import AdminLayout from '../../components/layouts/adminLayout/adminLayout'

const Test: NextPage = () => {
  return <AdminLayout middleContent>Admin</AdminLayout>
}

export default Test
