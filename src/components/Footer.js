import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>About LetterLift</h2>
      <p>
        LetterLift provides editing services for those in the sciences who seek
        scientific positions, fellowships, or admission to graduate programs.
        We work with those in all levels, whether you have a bachelors, masters,
        or doctoral degree.
      </p>
      <ul className="actions">
        <li>
          <Link to="/" className="button">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="button">
            About us
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact us</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          <a href="mailto:letterlift@proton.me">letterlift@proton.me</a>
        </dd>
        <dt>LinkedIn</dt>
        <dd><a href="https://www.linkedin.com/company/letterlift">linkedin.com/company/letterlift</a></dd>
        <dt>Location</dt>
        <dd>Los Angeles metropolitan area, CA &bull; USA</dd>
      </dl>
    </section>
    <p className="copyright">
      &copy; LetterLift. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
