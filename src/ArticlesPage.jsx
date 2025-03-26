import React, { useState } from "react";
import styled from "styled-components";

const articles = [
  { id: 1, title: "Introduction to HTML", content: "HTML is the backbone of the web. It provides structure to web pages by using tags such as <h1>, <p>, <a>, and more. Understanding HTML is the first step toward becoming a web developer." },
  { id: 2, title: "Understanding CSS Basics", content: "CSS (Cascading Style Sheets) is used to style HTML content. It allows you to change colors, fonts, layouts, and even create animations. Learning CSS helps in designing visually appealing web pages." },
  { id: 3, title: "JavaScript Fundamentals", content: "JavaScript is a programming language that makes web pages interactive. You can create dynamic content, handle events, and interact with APIs. It's an essential language for front-end and back-end development." },
  { id: 4, title: "Responsive Web Design", content: "Responsive Web Design ensures your website looks great on all devices. Using CSS media queries, flexbox, and grid, you can make your site mobile-friendly and adaptable to different screen sizes." },
  { id: 5, title: "React JS Basics", content: "React is a JavaScript library for building user interfaces. It uses components to create reusable UI elements. Learning React helps in building modern, fast, and scalable web applications." },
  { id: 6, title: "Advanced JavaScript Concepts", content: "Understanding closures, promises, and async/await is crucial for writing efficient JavaScript code. Mastering these concepts will enhance your problem-solving skills as a developer." }
];

const ArticlesPage = () => {
  return (
    <MainContainer>
      <Heading>All Articles</Heading>
      {articles.map((article) => (
        <Article key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </Article>
      ))}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Article = styled.div`
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  text-align: left;
`;

export default ArticlesPage;

























