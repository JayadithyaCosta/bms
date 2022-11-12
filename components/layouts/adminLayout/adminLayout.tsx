import { NextPage } from 'next'
import React from 'react'
import { Sidebar, Menu, MenuItem, ProSidebarProvider } from 'react-pro-sidebar'
import styles from './AdminLayout.module.scss'

type adminLayoutProps = {
  children: React.ReactNode
  middleContent?: boolean
  dark?: boolean
}

const AdminLayout = ({ children, middleContent, dark }: adminLayoutProps) => {
  return (
    <>
      <div className={styles.pageBody}>
        <div className={styles.darkHeader}>
          <div className={`text-black`}>
            <h1 className={styles.headerFont}>eight25Media</h1>
          </div>
        </div>
        <div>
          <ProSidebarProvider>
            <Sidebar className={styles.sidebarColor}>
              {/* <h1 className={styles.sidebarTitleImage}>Title</h1> */}
              <Menu className={styles.sidebarMenu}>
                <h1 style={{ marginTop: '3rem', marginBottom: '10rem' }}>
                  Title
                </h1>
                <MenuItem style={{ borderTop: 'solid 2px' }}>
                  <i
                    className={`bi bi-person-fill ${styles.menuContentSidebar}`}
                  >
                    Leadership
                  </i>
                </MenuItem>
                <MenuItem className={`${styles.menuItem}`}>
                  <i
                    className={`bi bi-calendar-event-fill ${styles.menuContentSidebar}`}
                  >
                    {' '}
                    Events
                  </i>
                </MenuItem>
                <MenuItem
                  className={styles.menuItem}
                  style={{ borderBottom: 'solid 2px' }}
                >
                  <i className={`bi bi-journals ${styles.menuContentSidebar}`}>
                    {' '}
                    Resources
                  </i>
                </MenuItem>
                <MenuItem style={{ borderBottom: 'solid 2px' }}>
                  <i className={`bi bi-newspaper ${styles.menuContentSidebar}`}>
                    {' '}
                    News
                  </i>
                </MenuItem>
                <h1 style={{ marginTop: '3rem' }}>Bootom</h1>
              </Menu>
            </Sidebar>
          </ProSidebarProvider>
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
    </>
  )
}

export default AdminLayout
