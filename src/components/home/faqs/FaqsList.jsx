import React from "react";
import FaqsListItem from "./FaqsListItem";

const faqs = [
  {
    question: "What is the return policy?",
    answer:
      "Our return policy allows returns within 30 days of purchase with a receipt."
  },
  {
    question: "How can I track my order?",
    answer:
      "You can track your order using the tracking link sent to your email upon shipment."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to selected countries."
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept credit cards, debit cards, PayPal, and other electronic payment methods."
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support via email at support@example.com or call us at 123-456-7890."
  }
];

function FaqsList() {
  return (
    <div>
      {faqs.map((element, index) => {
        return (
          <FaqsListItem
            key={index}
            question={element.question}
            answer={element.answer}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default FaqsList;
