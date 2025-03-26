import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Ali Khan",
    text: "Great service! My car looks brand new. Highly recommended.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    text: "Professional and friendly staff. Very satisfied with the detailing.",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "John Doe",
    text: "They did an excellent job! My car has never been this shiny.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "Ayesha Siddiqui",
    text: "Affordable and high-quality service. Will visit again!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    name: "Hassan Khan",
    text: "High-quality service. Will visit again!",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const CustomerReview = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <Section>
      <h1>Ratings & <span>Reviews</span></h1>

      <Container>
        <ArrowButton left onClick={prevReview}>
          <FaChevronLeft />
        </ArrowButton>

        <Card>
          <FaQuoteLeft className="quote-icon" />
          <p>{reviews[index].text}</p>
          <h3>{reviews[index].name}</h3>
          <span>{reviews[index].rating}</span>
        </Card>

        <ArrowButton right onClick={nextReview}>
          <FaChevronRight />
        </ArrowButton>
      </Container>

      {/* Pagination Dots */}
      <Dots>
        {reviews.map((_, i) => (
          <Dot key={i} active={i === index} onClick={() => setIndex(i)} />
        ))}
      </Dots>
    </Section>
  );
};

// ✅ Styled Components
const Section = styled.div`
  text-align: center;
  padding: 3rem 1rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ffc107;
  }

  
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 700px;
  margin: auto;
`;

const Card = styled.div`
  background: #343A45;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  color: #fff;

  .quote-icon {
    font-size: 2rem;
    color: #FFC107;
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  h3 {
    margin: 0.5rem 0;
    color: #fff;
  }

  span {
    color: #ffcc00;
    font-size: 1.2rem;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #FFC107;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 10;

  ${({ left }) => left && `left: -50px;`}
  ${({ right }) => right && `right: -50px;`}

  &:hover {
    background: #c89600;
  }

  @media (max-width: 768px) {
    ${({ left }) => left && `left: -30px;`}
    ${({ right }) => right && `right: -30px;`}
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background: ${({ active }) => (active ? "#ffc107" : "#ccc")};
  border-radius: 50%;
  cursor: pointer;
`;

export default CustomerReview;
