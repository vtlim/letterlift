import React from 'react'
import Helmet from 'react-helmet'
import { FaLinkedin } from "react-icons/fa";
import Layout from '../components/layout'
import HeaderTestimonials from '../components/HeaderTestimonials'
import headshot_alex from '../assets/images/headshot_alex.jpg'

import pic04 from '../assets/images/pic04.jpg'
import overlay from '../assets/images/overlay.png'

class Testimonials extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Testimonials - LetterLift" />
        <HeaderTestimonials />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
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
                <div><b>Alex W. </b>
                <a href="https://www.linkedin.com/in/alex-willenbrink-707856104">
                <FaLinkedin size={13} />
              </a>
                <br />Software Engineer II at Illumina<br /><i>Applied to masters programs in bioinformatics</i></div>
              </div>
            </div>
            <hr />
            <div class="right_testimonial">
              <div class="praise">
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.</p>
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.</p>
              </div>
              <div class="headshot">
                <span className="image">
                  <img src={overlay} alt="" />
                </span>
              </div>
              <div class="title">
                <div><a href="https://www.linkedin.com/in/alex-willenbrink-707856104/"><b>Alex W.</b></a>
                <br />Software Engineer II at Illumina<br /><i>Applied to masters programs in bioinformatics</i></div>
              </div>
            </div>
            <hr />
            <div class="left_testimonial">
              <div class="praise">
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.</p>
              </div>
              <div class="headshot">
                <span className="image">
                  <img src={overlay} alt="" />
                </span>
              </div>
              <div class="title">
                <div><a href="https://www.linkedin.com/in/alex-willenbrink-707856104/"><b>Justin S.</b></a>
                <br />Software Engineer II at Illumina<br /><i>Applied to masters programs in bioinformatics</i></div>
              </div>
            </div>
            <hr />
            <div class="right_testimonial">
              <div class="praise">
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus.</p>
              </div>
              <div class="headshot">
                <span className="image">
                  <img src={overlay} alt="" />
                </span>
              </div>
              <div class="title">
                <div><a href="https://www.linkedin.com/in/alex-willenbrink-707856104/"><b>Alex W.</b></a>
                <br />Software Engineer II at Illumina<br /><i>Applied to masters programs in bioinformatics</i></div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Testimonials
