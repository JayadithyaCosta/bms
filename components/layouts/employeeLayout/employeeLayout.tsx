import React, { useState } from 'react'
import styles from './EmployeeLayout.module.scss'
import { useRouter } from 'next/router'

type loginLayoutProps = {
  children: React.ReactNode
  middleContent?: boolean
  dark?: boolean
}

const headerBtnTypes: { text: string; value: string; color?: 'selected' }[] = [
  {
    text: 'Home',
    value: 'home'
  },
  {
    text: 'Leadership',
    value: 'leadership'
  },
  {
    text: 'Events',
    value: 'events',
    color: 'selected'
  },
  {
    text: 'News',
    value: 'news'
  },
  {
    text: 'Resources',
    value: 'resources'
  }
]

const EmployeeLayout = ({
  children,
  middleContent,
  dark
}: loginLayoutProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(false)

  const handleSelected = (type: string) => {
    switch (type) {
      case 'home':
        break
      case 'leadership':
        break
      case 'events':
        setSelected(true)
        router.push('/empEvents')
        break
      case 'news':
        break
      case 'resources':
        break
    }
  }

  return (
    <div className={styles.pageBody}>
      <div className={styles.darkHeader}>
        <div className={`d-flex flex-row justify-content-around mt-1`}>
          <h1 className={styles.headerFont}>eight25Media</h1>
        </div>
        <div className={styles.headerButtonContainer}>
          {headerBtnTypes.map((types, index) => (
            <div key={`header-btn-${index}`}>
              <button
                type="button"
                className={
                  types.color == 'selected'
                    ? styles.selectedBtn
                    : styles.headerBtn
                }
                onClick={() => {
                  handleSelected(types.value)
                }}
              >
                {types.text}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div
        className={[
          middleContent ? styles.middleContent : styles.middleBox,
          dark ? styles.darkContent : ''
        ].join(' ')}
      >
        {children}
      </div>
      <footer className={dark ? styles.darkContent : ''}>
        <div className={styles.footer}>
          <div className="d-flex flex-column justify-content-start mt-3">
            <div style={{ margin: '1px 5px' }}>
              <h1 className={`text-white ${styles.footerMainContent}`}>
                What We Do
              </h1>
              <div style={{ marginTop: '10px', marginLeft: '15px' }}>
                <p className={`text-black mt-2 ${styles.footerSubContent}`}>
                  Web Design & Development
                </p>
                <p className={`text-black mt-2 ${styles.footerSubContent}`}>
                  Mobile Application Development
                </p>
                <p className={`text-black mt-2 ${styles.footerSubContent}`}>
                  Digital Marketing
                </p>
                <p className={`text-black mt-2 ${styles.footerSubContent}`}>
                  Web Application Development
                </p>
              </div>
            </div>
          </div>
          <div style={{ margin: '1px 5px' }} className="mt-3">
            <h1 className={`text-white ${styles.footerMainContent}`}>
              CONTACT US
            </h1>
            <div style={{ marginTop: '10px', marginLeft: '15px' }}>
              <p className={`text-black ${styles.footerSubContent}`}>
                2055 Gateway Place - Ste500 <br />
                San Jose, CA 95110
              </p>
              <p className={`text-black mt-3 ${styles.footerSubContent}`}>
                info@eight25Media.com
              </p>
              <p className={`text-black mt-3 ${styles.footerSubContent}`}>
                +1 (408) 728 9555
              </p>
            </div>
          </div>
          <div style={{ margin: '1px 5px' }} className="mt-5">
            <h1 className={`text-white ${styles.footerMainContent}`}>
              <a className={styles.footerLinks} href={'#CUSTOMERS'}>
                CUSTOMERS
              </a>
            </h1>
            <div className="mt-3">
              <p className={`text-white ${styles.footerMainContent}`}>
                <a className={styles.footerLinks} href={'#ABOUT_US'}>
                  ABOUT US
                </a>
              </p>
              <p className={`text-white ${styles.footerMainContent} mt-3`}>
                <a className={styles.footerLinks} href={'#CONTACT_US'}>
                  CONTACT US
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EmployeeLayout
