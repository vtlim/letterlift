import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import front from '../assets/images/front.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import { FaBolt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="LetterLift - Professional Editing Services" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Ready to face the competition?</h2>
                </header>
                <p>
                  Facelift your resumes and cover letters! Get past job screens
                  and land your first interview. With LetterLift editing services,
                  you get one-on-one attention with a professional writer to give
                  your application materials the extra boost it needs to stand out.
                  <br />
                  <br />
                  We focus on (but are not limited to) those with science degrees
                  (BS, MS, or PhD) who seek full-time employment, internships,
                  fellowships, or graduate programs.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button special">
                      Sign up
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonials" className="button">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={front} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>What to expect</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style3 fa-copy"><FaBolt size={80} /></span>
                <h3>Quick turnaround time</h3>
                <p>
                  Our average time to review is less than one week.
                </p>
              </li>
              <li>
                <span className="icon major style1"><FaUserShield size={80} /></span>
                <h3>Complete confidentiality</h3>
                <p>
                  We never release any information you provide to us.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"><FaSmileBeam size={80} /></span>
                <h3>Guaranteed satisfaction</h3>
                <p>
                  We provide a complete refund if you are not satisfied
                  with your service.
                </p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>How it works</h2>
              <p>
                Scheduling services with LetterLift is quick and easy.
                <br />
                You could have polished application materials by next week!
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon"><strong><FaWpforms size={50} /></strong></span>
                <strong>Submit request</strong>
              </li>
              <li className="style2">
                <span className="icon"><FaCalendar size={50} /></span>
                <strong>Schedule meeting</strong>
              </li>
              <li className="style3">
                <span className="icon"><FaUserFriends size={50} /></span>
                <strong>Meet for editing</strong>
              </li>
              <li className="style4">
                <span className="icon"><FaRegCheckCircle size={50} /></span>
                <strong>Address feedback</strong>
              </li>
            </ul>
            <p className="content">
              To book editing services:
              <ol>
                <li>
                  Complete the form of interest. You will hear from us within
                  two (2) business days.
                </li>
                <li>
                  Schedule a time to meet for live edits, or request edits asynchronously (required for longer form documents like manuscripts).
                </li>
                <li>
                  Submit materials for editing, and meet with us to go over your documents.
                </li>
                <li>
                  Address comments left by your reviewer. You can request
                  clarification or a second quick pass at no additional cost
                  within one (1) week from the initial review.
                </li>
              </ol>
              Some frequently asked questions:
              <ul>
                <li>
                  <b>What kind of documents do you edit?</b> Résumés/CVs, cover letters,
                  and personal statements are most common.
                  We also edit scientific manuscripts, theses, and personal statements.
                </li>
                <li>
                  <b>What is your rate?</b> We charge a flat rate of $55. Discounts are available for students.
                </li>
                <li>
                  <b>How are edits made?</b> We use the suggestion mode in Google Docs,
                  Microsoft Word, or Overleaf (for LaTeX format).
                </li>
                <li>
                  <b>Can you provide edits ASAP?</b> We have an expedited service available for
                  24-hour turnaround subject to editor availability.
                </li>
              </ul>
            </p>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Get started</h2>
              <p>
                Fill out the form linked below to get started.
                No commitment required.
                <br />
                Curious to hear how others have benefited?
                Check out the <a href="/testimonials">Testimonials</a>!
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Sign up
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
