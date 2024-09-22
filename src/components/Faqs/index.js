import {Component} from 'react'

import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faqs-container ">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} faq={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
