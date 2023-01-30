import React from 'react'
import Helmet from 'react-helmet'
import { FaLinkedin } from "react-icons/fa";
import Layout from '../components/layout'
import HeaderTestimonials from '../components/HeaderTestimonials'
import headshot_alex from '../assets/images/headshot_alex.jpg'
import headshot_blank from '../assets/images/headshot_blank.png'
import headshot_justin from '../assets/images/headshot_justin.jpg'

import overlay from '../assets/images/overlay.png'

class Testimonials extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Testimonials - LetterLift" />
        <HeaderTestimonials />
        <div id="main">
          <section id="content" className="main">
            <div class="left_testimonial">
              <div class="praise">
                <p>When I was writing my personal statement to apply to graduate schools for an MS in bioinformatics, I was <b>overwhelmed by the lack of structure</b> provided by the institutions I was applying to. I had a sense of the story I wanted to tell but was <b>struggling to synthesize the ideas in a way that was aligned with what the admissions officers were seeking</b>.</p>
                <p>Getting feedback on something deeply personal is uncomfortable and I don’t take criticism well. When we were working on my personal statement, I really got the sense that we were <b>working as a team</b>. She was always incredibly careful to make sure she understood what I was trying to communicate before she gave feedback which made the process strangely pleasant. She also has this otherworldly ability to <b>distill what the other side of the table is looking for</b> and restructure the document accordingly, which helped me enormously to alter the tone and craft bespoke personal statements for each institution.</p>
                <p>Working with Victoria was a game changer. In a little over an hour we were able to revise my personal statement in a way that I was able to tell my story but in a vastly more concise, targeted, and personalized manner.<b> In the end I was accepted into Master’s programs for Johns Hopkins, Northeastern, and NYU.</b></p>
              </div>
              <div class="headshot">
                <span className="image">
                  <img src={headshot_alex} alt="" />
                </span>
              </div>
              <div class="title">
                <div>
                  <b>Alex W. </b>
                  <a href="https://www.linkedin.com/in/alex-willenbrink-707856104">
                  <FaLinkedin size={13} />
                  </a>
                  <br />Software Engineer II at Illumina<br /><i>Applied to masters programs in bioinformatics</i>
                </div>
              </div>
            </div>
            <hr />

            <div class="right_testimonial">
              <div class="praise">
                <p>Victoria at LetterLift read over my technical writing portfolio as I transitioned from my PhD into technical writing. She provided useful suggestions on how to turn my scientific writing into a more general collection of writing samples. She especially helped with important technical writing concepts like Markdown and API documentation.</p>
                <p>Working with her was great. I felt totally unprepared for the job search after graduate school, but Victoria was really nonjudgmental and kind. I loved having a 1:1 connection with someone who understood where I was coming from and that was reflected in the way she provided feedback and suggestions. She really helped emphasize parts of my PhD into real hireable skills and I recommend LetterLift for anyone looking to take their writing to the next level!</p>
              </div>
              <div class="headshot">
                <span className="image">
                  <img src={headshot_blank} alt="" />
                </span>
              </div>
              <div class="title">
                <div>
                  <b>Ellie F. </b>
                  </a>
                  <br />Programmer Writer in FAANG<br /><i>Applied to full-time tech writing positions</i>
                </div>
              </div>
            </div>
            <hr />

            <div class="left_testimonial">
              <div class="praise">
                <p>Victoria at LetterLift changed my career! I was struggling to transition from the public to the private sector. She helped me craft both my resume and cover letter for industry data science positions.</p>
                <p>For the resume, she had both an eye for content as well as organization and structure. She was able to distill the salient parts of my past experience and helped make the resume visually appealing instead of a cluttered mess. Similarly for my cover letter, she was able to help me tell my own story and made my opening and conclusion significantly more compelling and impactful.</p>
                <p>Through the whole process Victoria helped me understand how to better talk about my career journey and how to emphasize the key parts hiring managers care about. I give her a lot of credit for helping me land a job in industry!</p>
              </div>
              <div class="headshot">
                <span className="image">
                  <img src={headshot_justin} alt="" />
                </span>
              </div>
              <div class="title">
                <div>
                  <b>Justin S. </b>
                  <a href="https://www.linkedin.com/in/justincliffordsmith">
                  <FaLinkedin size={13} />
                  </a>
                  <br />Lead Machine Learning Scientist at Caresyntax<br /><i>Applied to full-time data science positions</i>
                </div>
              </div>
            </div>
            <hr />
          </section>
        </div>
      </Layout>
    )
  }
}

export default Testimonials
