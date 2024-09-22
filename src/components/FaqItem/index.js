import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onClickFaq = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {faq} = this.props
    const {answerText, questionText} = faq
    const renderIcon = !isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const renderAltText = !isActive ? 'plus' : 'minus'

    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.onClickFaq}>
            <img src={renderIcon} alt={renderAltText} />
          </button>
        </div>
        {isActive && (
          <>
            <hr className="separator" />
            <p className="answer">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}

export default FaqItem
