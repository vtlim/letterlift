import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderPricing from '../components/HeaderPricing'
import pic04 from '../assets/images/pic04.jpg'

class Pricing extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Pricing - LetterLift" />
        <HeaderPricing />
        <div id="main">
          <section id="content" className="main">
            <p>The best investment you can make is in yourself!
            A small investment in your application can reap material benefits.
            Our pricing philosophy is twofold:
            <ol>
              <li>
                <b>Cost should not be a barrier.</b> If you are strongly driven to
                take the next step of your career but cannot afford editing,
                let us know. We can discuss other options.
              </li>
              <li>
                <b>Satisfaction is guaranteed.</b> You
                should come away from our services with satisfaction
                in your improved application materials. Editing can
                involve matters of opinion, but we try to raise questions and
                offer suggestions and not just impose our viewpoints
                onto you. If you are disappointed with the edits you receive,
                we will provide you a complete refund.
              </li>
            </ol>
            Our pricing model is detailed in the following chart.</p>
            <table>
              <tr>
                <th>Document</th>
                <th>Price (USD)</th>
              </tr>
              <tr>
                <td>CV/resume and cover letter</td>
                <td>65</td>
              </tr>
              <tr>
                <td>Cover letter only</td>
                <td>65</td>
              </tr>
              <tr>
                <td>CV/resume only</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Personal statement</td>
                <td>65</td>
              </tr>
              <tr>
                <td>Manuscripts and theses</td>
                <td>Contact for pricing</td>
              </tr>
            </table>
            <p>Students receive a 15% discount.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Pricing
