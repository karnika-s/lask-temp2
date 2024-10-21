import React, { useState } from 'react';
import '../styles/Faq.css'; // Custom styles for the FAQ component

const FAQ = () => {
  // This array holds the FAQ data
  const faqData = [
    {
      question: "What is LASK.AI?",
      answer: "LASK.AI is an intelligent code assistant that helps developers by generating, refactoring, and fixing code in real-time."
    },
    {
      question: "How does the code generation feature work?",
      answer: "Our AI analyzes the code context and generates relevant code snippets, suggestions, or even complete functions based on your input."
    },
    {
      question: "Is there support for multiple programming languages?",
      answer: "Yes, LASK.AI supports multiple programming languages including JavaScript, Python, and more."
    },
    {
      question: "Can LASK.AI help with code documentation?",
      answer: "Absolutely! LASK.AI automatically generates comments and documentation for your code, helping you maintain readability and good practices."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Toggles the FAQ answer display
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={`arrow ${index === activeIndex ? 'up' : 'down'}`}></span>
              </button>
              {index === activeIndex && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
