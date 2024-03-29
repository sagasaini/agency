import React, { useState } from 'react';
import './Faqs.css'; // Link to the CSS file for styling

const FAQEntry = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-entry ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={toggle}>
        {question}
        <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: 'What is web application development?',
      answer: 'A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.'
    },
    {
        question: 'What is web application development?',
        answer: 'A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.'
      },
      {
        question: 'What is web application development?',
        answer: 'A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.'
      },
      {
        question: 'What is web application development?',
        answer: 'A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.'
      },
      {
        question: 'What is web application development?',
        answer: 'A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.'
      },
      {
        question: 'What is web application development?',
        answer: 'A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.'
      },
      {
        question: 'What is web application development?',
        answer: 'A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.'
      },
      {
        question: 'What is web application development?',
        answer: 'A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.'
      },
    // ... Add other FAQ data here
  ];

  return (
    <div className="faqs-container">
      <h2>FAQs</h2>
      {faqData.map(faq => (
        <FAQEntry key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQs;
