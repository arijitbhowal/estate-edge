import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="highlightText">Get in Touch</span>
          <span className="primaryText">We're Here to Help</span>
          <span className="secondaryText">
            Whether you need assistance or have questions, our team is here for you. Reach out to us through any of the following methods:
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexCenter icon icon-phone">
                  <MdCall size={30} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText cardHeading">Phone</span>
                  <span className="secondaryText cardText">+1 234 567 890</span>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexCenter icon icon-chat">
                  <BsFillChatDotsFill size={30} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText cardHeading">Chat</span>
                  <span className="secondaryText cardText">Chat with us online</span>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexCenter icon icon-video">
                  <HiChatBubbleBottomCenter size={30} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText cardHeading">Video Call</span>
                  <span className="secondaryText cardText">Set up a video meeting</span>
                </div>
                <div className="flexCenter button">Video Call</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexCenter icon icon-message">
                  <BsFillChatDotsFill size={30} />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText cardHeading">Message</span>
                  <span className="secondaryText cardText">Send us a message</span>
                </div>
                <div className="flexCenter button">Send Message</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-frame">
            <img className="hero-image" src="./hero-image.png" alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
