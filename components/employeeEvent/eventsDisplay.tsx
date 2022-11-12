import { Formik, Form } from 'formik'
import React, { useMemo, useState, useEffect } from 'react'
import styles from './EventsDisplay.module.scss'
import InputField from '../../components/shared/inputField/InputField'
import { getEvents } from '../../lib/helper'
import { string } from 'yup'

type SearchInitials = {
  searchText: string
}

const EventsDisplay = () => {
  const [eventData, setEventData] = useState([
    {
      _id: '',
      AboutEvent: '',
      EventDate: '',
      EventName: '',
      EventOrganizer: ''
    }
  ])

  const getEventData = async () => {
    const data = await getEvents()
    setEventData(data)
  }

  const initialValues = useMemo<SearchInitials>(() => {
    return {
      searchText: ''
    }
  }, [])

  useEffect(() => {
    // getEvents()
    //   .then((response) => response.json())
    //   .then((data) => setEventData(data.message))
    getEventData()
  }, [])

  console.log(eventData)

  const handleSubmit = () => {
    console.log('Clicked')
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        <div className={styles.container}>
          <div className="d-flex justify-content-end">
            <Form className={'d-flex justify-content-end'}>
              <InputField
                placeholder={'Search...'}
                className={styles.inputBox}
                name="searchText"
              />
              <button className={styles.searchBtn} type="submit">
                Search
              </button>
            </Form>
          </div>

          <div className={`${styles.tileContainer}`}>
            {/* <div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div> */}
            {eventData?.map((event, index) => (
              <div key={`event-${index}`} className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center text-decoration-underline">
                    {event.EventName}
                  </h5>
                  <p className="card-text mt-5">{event.AboutEvent}</p>
                  <div className="d-flex flex-row justify-content-between mt-5">
                    <h5>{event.EventOrganizer}</h5>
                    <p>{new Date(event.EventDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <a href="#" className="btn btn-primary">
                  Click to view
                </a>
              </div>
            ))}
          </div>
        </div>
      </Formik>
    </>
  )
}

export default EventsDisplay
