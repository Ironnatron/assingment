import React from 'react'
import "./Dates.css"
import Accordion from "./Accordion";

const Dates = () => {

  const cards = [
    { title: "Card 1", description: "Description of Card 1" },
    { title: "Card 2", description: "Description of Card 2" },
    { title: "Card 3", description: "Description of Card 3" }
  ];

  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Odisha Election',
      content:
        <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

  return (
    <div className="parties-container">
      <h2>Upcoming Elections</h2>

      {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
    </div>
  )
}

export default Dates