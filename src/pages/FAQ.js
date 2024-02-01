import React from 'react'
import { useLockBodyScroll } from '../App'

function FAQ ({faq, index, toggleFAQ}) {

	useLockBodyScroll();
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
				{faq.question}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
		</div>
	)
}

export default FAQ
