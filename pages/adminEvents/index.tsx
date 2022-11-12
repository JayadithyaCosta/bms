import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useCallback } from 'react'
import EventForm from '../../components/eventForm/eventForm'
import CollapseIcon from '../../public/icons/Collapse.icon'
import EventIcon from '../../public/icons/Event.icon'
import LeadershipIcon from '../../public/icons/Leadership.icon'
import NewsIcon from '../../public/icons/News.icon'
import ResourcesIcon from '../../public/icons/Resources.icon'
import HeaderImage from '../../public/images/images.jpg'
import { getEvents, deleteEventById } from '../../lib/helper'

import styles from './AdminDashboard.module.scss'
import HomeIcon from '../../public/icons/Home.icon'

const navButtons = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    linkTo: '',
    disability: false,
    displayOnMobile: true
  },
  {
    label: 'Leadership',
    icon: <LeadershipIcon />,
    linkTo: '',
    disability: true,
    displayOnMobile: true
  },
  {
    label: 'Events',
    icon: <EventIcon />,
    disability: false,
    linkTo: '',
    displayOnMobile: true
  },
  {
    label: 'News',
    icon: <NewsIcon />,
    disability: true,
    linkTo: '',
    displayOnMobile: true
  },
  {
    label: 'Resources',
    icon: <ResourcesIcon />,
    disability: true,
    linkTo: '',
    displayOnMobile: true
  },
  {
    label: 'lineBreak',
    icon: '',
    linkTo: '',
    displayOnMobile: false
  },
  {
    label: 'Collapse',
    icon: <CollapseIcon />,
    linkTo: '',
    displayOnMobile: false
  }
]

const AdminDashboard: NextPage = () => {
  const router = useRouter()

  const [activeButton] = useState('Events')
  const [navCollapsed, setNavCollapsed] = useState(false)
  const [addEvent, setAddEvent] = useState(false)
  const [eventData, setEventData] = useState([
    {
      _id: '',
      AboutEvent: '',
      EventDate: '',
      EventName: '',
      EventOrganizer: ''
    }
  ])

  const handleDelete = (eventId: string) => {
    console.log(eventId)

    eventData.map(async (event) => {
      if (event._id == eventId) {
        console.log('TRUE')
        let text = `Do you want to delete ${event.EventOrganizer}?`
        if (confirm(text) == true) {
          await deleteEventById(eventId)
          window.location.reload()
        } else {
          text = 'You canceled!'
        }
      }

      return 'Invalid Row ID!'
    })
  }

  const getEventData = async () => {
    const data = await getEvents()
    setEventData(data)
  }

  useEffect(() => {
    getEventData()
  }, [])

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
      </Head>

      <div className={styles.container}>
        <div
          className={`${styles.sideMenu} ${
            navCollapsed ? styles.sideMenuCollapsed : styles.sideMenuNormal
          }`}
        >
          <div className="d-none d-xl-flex w-100 justify-content-center">
            {navCollapsed ? (
              <div
                className={styles.collapsedLogo}
                onClick={() => router.push('/')}
              ></div>
            ) : (
              <div
                className={`d-block position-relative w-100 ${styles.cursorPoint}`}
                onClick={() => router.push('/')}
              ></div>
            )}
          </div>

          <nav className={styles.navigation}>
            {navButtons.map(
              ({ label, icon, displayOnMobile, disability }, index) =>
                label === 'lineBreak' ? (
                  <div key={`${label}-${index}`} className={styles.lineBreak} />
                ) : (
                  <button
                    key={`nav-button-${label}`}
                    type="button"
                    disabled={disability}
                    className={`${styles.navButton} ${
                      activeButton === label ? styles.navButtonActive : null
                    } ${displayOnMobile ? 'd-flex' : 'd-none d-xl-flex'} ${
                      disability == true ? styles.disability : ''
                    }`}
                    onClick={() => {
                      switch (label) {
                        case 'Collapse':
                          setNavCollapsed(!navCollapsed)
                          break

                        case 'Home':
                          router.push('/empEvents')
                          break
                      }
                    }}
                  >
                    <div
                      className={`${styles.navButtonIcon} ${
                        disability == true ? styles.disableIcon : ''
                      } ${navCollapsed ? 'me-0' : null}`}
                    >
                      {icon}
                    </div>
                    {!navCollapsed && label}
                  </button>
                )
            )}
          </nav>
        </div>
        <div className={styles.contentBox}>
          <Image
            alt='header-image'
            src={HeaderImage}
            width={1600}
            height={250}
            style={{ marginLeft: '5px !important' }}
          />
        </div>
        <div className={styles.contentBox}>
          <div className={styles.tableContainer}>
            <div className={styles.addBtnContainer}>
              <button
                className={styles.addBtn}
                onClick={() => setAddEvent((a) => !a)}
              >
                {!addEvent ? 'Add Event' : 'Events'}
              </button>
            </div>
            {!addEvent ? (
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Event Name</th>
                    <th scope="col">Event Organizer</th>
                    <th scope="col">About Event</th>
                    <th scope="col">Event Date</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {eventData?.map((event, index) => (
                    <tr key={`event-admin-table-${index}`}>
                      {/* <th scope="row">1</th> */}
                      <td id="rowId" hidden>
                        {event._id}
                      </td>
                      <td>{event.EventName}</td>
                      <td className="fw-bold">{event.EventOrganizer}</td>
                      <td>{event.AboutEvent}</td>
                      <td className="fw-bold">
                        {new Date(event.EventDate).toLocaleDateString()}
                      </td>
                      <td>
                        <button
                          className={` bi bi-pencil-fill ${styles.updateBtn}`}
                        />
                      </td>
                      <td>
                        <button
                          className={` bi bi-x-octagon-fill ${styles.deleteBtn}`}
                          onClick={() => handleDelete(event._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <>
                <EventForm />
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.gridContainer}>Here</div>
    </>
  )
}

export default AdminDashboard
