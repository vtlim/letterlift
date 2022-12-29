import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderAbout from '../components/HeaderAbout'
import about_img from '../assets/images/aboutus.png'

class About extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="About Us - LetterLift" />
        <HeaderAbout />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={about_img} alt="" /></span>
            <p>Victoria Lim is a Senior Technical Writer at Imply Data. She completed her PhD in Chemistry at the University of California, Irvine, where she was awarded a Graduate Research Fellowship by the National Science Foundation (NSF GRFP). During her PhD, she volunteered annually as a peer reviewer for the UCI Department of Chemistry for other applicants to the NSF GRFP. Victoria also successfully applied to the NSF Graduate Research Opportunities Worldwide (NSF GROW) award to conduct research abroad in Sweden.</p>
            <p>She provides editing services for students and researchers in the sciences. She has worked with clients applying for the following:
            <ul>
              <li>Full-time industry positions</li>
              <li>Postdoctoral appointments</li>
              <li>Industry and national lab internships</li>
              <li>Fellowships (NSF GRFP, Hertz, AAAS STPF)</li>
              <li>Graduate school admissions (masters and doctoral)</li>
              <li>Medical school and residency admissions</li>
            </ul>
            </p>
            <p>Victoria was an application reviewer for the National Center for Women & Information Technology Award for Aspirations in Computing (high school level) and NCWIT Collegiate Award (undergraduate and graduate level).</p>
            <p>Her areas of expertise include chemistry, biology, physics, and software development. For these areas, she offers more extensive editing services for scientific manuscripts, theses, and grant applications.</p>
            <p>Read some of the feedback from her editing in the <a href="/testimonials">Testimonials</a>.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
