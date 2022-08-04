import React from 'react';
import img1 from '../../assets/debate.jpg';
import SocialLinks from '../contact/SocialLinks';
import '../contact/Contact.css';
const Contact = () => {
  return (
    <div className="app__contact">
      <div className="app__contact-intro">
        <h2>Contact us </h2>
        <p>
          Feel free to contact us for any query will be responded as expected.
        </p>
      </div>
      <div className="app__contact-card">
        <div className="app__contact-left">
          <img src={img1} alt="" />
        </div>
        <div className="app__contact-right">
          <form className="app__contact-form">
            <div className="app__contact-form--control">
              <label htmlFor="fname">FirstName:</label>
              <input type="text" autoComplete="off" name="fname" id="fname" />
            </div>
            <div className="app__contact-form--control">
              <label htmlFor="lname">LastName:</label>
              <input type="text" autoComplete="off" name="lname" id="lname" />
            </div>
            <div className="app__contact-form--control">
              <label htmlFor="Uname">Username:</label>
              <input
                type="text"
                placeholder="Jonny(optional)"
                name="Uname"
                id="Uname"
                autoComplete="off"
              />
            </div>
            <div className="app__contact-form--control">
              <label htmlFor="Uname">Email:</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                id="email"
                autoComplete="off"
              />
            </div>
            <div className="app__contact-form--control">
              <label htmlFor="Uname">Message:</label>
              <textarea className=".app__contact-textarea" name="mes" id="mes">
                Message
              </textarea>
            </div>
            <input
              className="app__contact-btn"
              onClick={(e) => e.preventDefault()}
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
      <div className="contacts__socials">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Contact;
