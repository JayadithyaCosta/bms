import React from "react";
import styles from "./PageLayout.module.scss";
import headerImage from "../../../public/images/eightHeader.png";
import HeaderCarousal from "../../headerCarousal/headerCarousal";
import CommunityCarousal from "../../communityCarousal/CommunityCarousal";
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";
import ControlledCarousel from "../../communityCarousal/CommunityCarousal";

type loginLayoutProps = {
  children: React.ReactNode;
  middleContent?: boolean;
  dark?: boolean;
};



const LoginLayout = ({ children, middleContent, dark }: loginLayoutProps) => {
  return (
    <div className={styles.pageBody}>
      <div className={styles.darkHeader}>
        <ControlledCarousel />
      </div>
      <div
        className={[
          middleContent ? styles.middleContent : styles.middleBox,
          dark ? styles.darkContent : "",
        ].join(" ")}
      >
        {children}
      </div>
      <footer className={dark ? styles.darkContent : ""}>
        <div className={styles.footer}>
          <div className="d-flex flex-column justify-content-start mt-3">
            <div style={{ margin: "1px 5px" }}>
              <h1 className={`text-white ${styles.footerMainContent}`}>
                What We Do
              </h1>
              <div style={{ marginTop: "10px", marginLeft: "15px" }}>
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
          <div style={{ margin: "1px 5px" }} className="mt-3">
            <h1 className={`text-white ${styles.footerMainContent}`}>
              CONTACT US
            </h1>
            <div style={{ marginTop: "10px", marginLeft: "15px" }}>
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
          <div style={{ margin: "1px 5px" }} className="mt-5">
            <h1 className={`text-white ${styles.footerMainContent}`}>
              <a className={styles.footerLinks} href={"#CUSTOMERS"}>
                CUSTOMERS
              </a>
            </h1>
            <div className="mt-3">
              <p className={`text-white ${styles.footerMainContent}`}>
                <a className={styles.footerLinks} href={"#ABOUT_US"}>
                  ABOUT US
                </a>
              </p>
              <p className={`text-white ${styles.footerMainContent} mt-3`}>
                <a className={styles.footerLinks} href={"#CONTACT_US"}>
                  CONTACT US
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginLayout;
