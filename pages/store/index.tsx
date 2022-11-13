import { Formik, Form } from 'formik'
import React, { useMemo, useState, useEffect } from 'react'
import styles from './EventsDisplay.module.scss'
import { getEvents } from '../../lib/helper'
import LoginLayout from '../../components/layouts/loginLayout/loginLayout'
import { useRouter } from 'next/router'
import EventForm from '../../components/eventForm/eventForm'

type SearchInitials = {
  searchText: string
}

const EventsDisplay = () => {
  const router = useRouter()
  const [insertItem, setInsertItem] = useState(false)
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
    <LoginLayout middleContent>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        <div className={styles.container}>
          <div className="d-flex justify-content-end">
            <Form className={'d-flex justify-content-end'}>
              <button className={styles.searchBtn} type="submit" onClick={() => {
                setInsertItem((s) => !s) 
              }}>
                {!insertItem ? 'Add Book' : 'Go Back'}
              </button>
            </Form>
          </div>
            {insertItem ? (<EventForm />) : (
              <div className={`${styles.tileContainer}`}>
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
            )}
          
        </div>
      </Formik>
      </LoginLayout>
    </>
  )
}

export default EventsDisplay
