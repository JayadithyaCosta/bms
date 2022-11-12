import { Form, Formik, FormikBag, FormikValues } from 'formik'
import React, { useMemo } from 'react'
import InputField from '../shared/inputField/InputField'
import styles from './style.module.scss'
import * as Yup from 'yup'
import { postEvent } from '../../lib/helper'
import Router, { useRouter } from 'next/router'

export type EventInitials = {
  EventDate: string
  EventOrganizer: string
  EventName: string
  AboutEvent: string
}

const EventForm = () => {
  const router = useRouter()

  const initialValues = useMemo<EventInitials>(() => {
    return {
      EventDate: '',
      EventOrganizer: '',
      EventName: '',
      AboutEvent: ''
    }
  }, [])

  const validationSchema = Yup.object().shape({
    EventDate: Yup.date().required('Event Date is required!'),

    EventOrganizer: Yup.string().required('Organizer Name is required!'),

    EventName: Yup.string().required('Event Name is required!'),

    AboutEvent: Yup.string().required('About Event is required!')
  })

  const handleSubmit = async (values: EventInitials) => {
    await postEvent(values)
    window.location.reload()
    // router.push('/adminEvents')
    // console.log(res)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <div
            className={'d-flex justify-content-center w-50'}
            style={{ marginLeft: '23%' }}
          >
            <Form className={'d-flex flex-column justify-content-center w-100'}>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <InputField
                      placeholder={'Event Organizer'}
                      name="EventOrganizer"
                    />
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                {/* <label className="form-label">Event Name</label> */}
                <InputField placeholder={'Event Name'} name="EventName" />
              </div>

              <div className="form-outline mb-4">
                {/* <label className="form-label" htmlFor="form6Example4">
                About Event
              </label> */}
                <InputField
                  type="text"
                  placeholder={'About Event....'}
                  name="AboutEvent"
                />
              </div>

              <div className="form-outline mb-4">
                <InputField type="date" name="EventDate" />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                onClick={(event) => {
                  event.preventDefault()
                  handleSubmit(values)
                }}
              >
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}

export default EventForm
