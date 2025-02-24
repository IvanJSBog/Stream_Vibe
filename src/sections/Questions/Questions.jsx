import Section from "@/layouts/Section"
import Button from "@/components/Button"
import { useState } from "react"
import AccordionGroup from "@/components/AccordionGroup"
import Accordion from "@/components/Accordion"

const Questions = () => {
  const questionItems = [
    "What is StreamVibe?",
    "How much does StreamVibe cost?",
    "What content is available on StreamVibe?",
    "How can I watch StreamVibe?",
    "How do I sign up for StreamVibe?",
    "What is the StreamVibe free trial?",
    "How do I contact StreamVibe customer support?",
    "What are the StreamVibe payment methods?",
  ]

  return (
    <Section
      title="Frequently Asked Questions"
      titleId=""
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions={<Button label="Ask a Question" href="/support" />}
    >
      <AccordionGroup columns={2}>
        {questionItems.map((question, i) => (
          <Accordion
            title={question}
            id={`question-${i}`}
            name="questions"
            isOpen={i === 0}
            key={i}
          >
            <p>
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

export default Questions
