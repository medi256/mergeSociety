import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    category: "HTML",
    title: "Introduction to HTML",
    content: "HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a webpage using markup. HTML elements are the building blocks of webpages...",
    fullContent: "HTML elements are represented by tags such as <div>, <p>, <a>, and more. These tags define the content structure and layout. HTML5 introduced many new elements like <header>, <section>, and <article> to improve semantics."
  },
  {
    category: "CSS",
    title: "Understanding CSS Basics",
    content: "CSS (Cascading Style Sheets) is used to style and layout web pages. It allows us to apply colors, fonts, spacing, and positioning to HTML elements...",
    fullContent: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore ut atque nesciunt quidem unde, impedit quibusdam ipsam dolorum voluptatum praesentium commodi harum voluptate id dicta veniam minus numquam perferendis labore veritatis quo blanditiis autem. Accusamus architecto fuga commodi ipsam reiciendis modi beatae enim temporibus, adipisci non quaerat soluta dolorem eaque facilis fugit quo optio mollitia, officia labore veniam? Debitis et laudantium qui sint cumque accusamus necessitatibus laboriosam fuga saepe ad cupiditate, vel consectetur enim possimus quae ab dolor sit quia illo dicta praesentium voluptas autem? Eum earum, blanditiis soluta fuga asperiores minima laboriosam quis labore, at dicta exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat itaque perferendis fugit perspiciatis incidunt, dolorem tempore dolor! Omnis inventore nisi aliquam reprehenderit perferendis quidem quo illo a totam facere eveniet, praesentium nihil perspiciatis provident! Distinctio illum alias ipsam exercitationem repudiandae dolores, veritatis dolorum cum, laborum debitis explicabo facilis ab consectetur architecto commodi autem sunt fugiat! Sed quod consequuntur illum iusto sapiente. Commodi unde adipisci optio qui distinctio temporibus eum quis vero perferendis quo est blanditiis quaerat, repudiandae ipsum repellat, impedit tempora officia facere veritatis dolorem. Nobis, in perspiciatis dignissimos aspernatur accusamus, inventore molestiae ratione, incidunt veritatis voluptatibus tempore.  CSS works by selecting HTML elements and applying styles using properties like color, font-size, margin, padding, and more. There are different ways to apply CSS: Inline, Internal, and External stylesheets. CSS3 introduced features like Flexbox and Grid for better layout control."
  },
  {
    category: "JavaScript",
    title: "Getting Started with JavaScript",
    content: "JavaScript is a versatile programming language that enables interactive and dynamic content on web pages. It is widely used for web development...",
   
    fullContent: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore ut atque nesciunt quidem unde, impedit quibusdam ipsam dolorum voluptatum praesentium commodi harum voluptate id dicta veniam minus numquam perferendis labore veritatis quo blanditiis autem. Accusamus architecto fuga commodi ipsam reiciendis modi beatae enim temporibus, adipisci non quaerat soluta dolorem eaque facilis fugit quo optio mollitia, officia labore veniam? Debitis et laudantium qui sint cumque accusamus necessitatibus laboriosam fuga saepe ad cupiditate, vel consectetur enim possimus quae ab dolor sit quia illo dicta praesentium voluptas autem? Eum earum, blanditiis soluta fuga asperiores minima laboriosam quis labore, at dicta exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat itaque perferendis fugit perspiciatis incidunt, dolorem tempore dolor! Omnis inventore nisi aliquam reprehenderit perferendis quidem quo illo a totam facere eveniet, praesentium nihil perspiciatis provident! Distinctio illum alias ipsam exercitationem repudiandae dolores, veritatis dolorum cum, laborum debitis explicabo facilis ab consectetur architecto commodi autem sunt fugiat! Sed quod consequuntur illum iusto sapiente. Commodi unde adipisci optio qui distinctio temporibus eum quis vero perferendis quo est blanditiis quaerat, repudiandae ipsum repellat, impedit tempora officia facere veritatis dolorem. Nobis, in perspiciatis dignissimos aspernatur accusamus, inventore molestiae ratione, incidunt veritatis voluptatibus tempore.  CSS works by selecting HTML elements and applying styles using properties like color, font-size, margin, padding, and more. There are different ways to apply CSS: Inline, Internal, and External stylesheets. CSS3 introduced features like Flexbox and Grid for better layout control."
  },
  {
    category: "React",
    title: "React JS - The Modern UI Library",
    content: "React is a JavaScript library for building fast and interactive user interfaces. It is component-based and declarative...",
   
    fullContent: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore ut atque nesciunt quidem unde, impedit quibusdam ipsam dolorum voluptatum praesentium commodi harum voluptate id dicta veniam minus numquam perferendis labore veritatis quo blanditiis autem. Accusamus architecto fuga commodi ipsam reiciendis modi beatae enim temporibus, adipisci non quaerat soluta dolorem eaque facilis fugit quo optio mollitia, officia labore veniam? Debitis et laudantium qui sint cumque accusamus necessitatibus laboriosam fuga saepe ad cupiditate, vel consectetur enim possimus quae ab dolor sit quia illo dicta praesentium voluptas autem? Eum earum, blanditiis soluta fuga asperiores minima laboriosam quis labore, at dicta exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat itaque perferendis fugit perspiciatis incidunt, dolorem tempore dolor! Omnis inventore nisi aliquam reprehenderit perferendis quidem quo illo a totam facere eveniet, praesentium nihil perspiciatis provident! Distinctio illum alias ipsam exercitationem repudiandae dolores, veritatis dolorum cum, laborum debitis explicabo facilis ab consectetur architecto commodi autem sunt fugiat! Sed quod consequuntur illum iusto sapiente. Commodi unde adipisci optio qui distinctio temporibus eum quis vero perferendis quo est blanditiis quaerat, repudiandae ipsum repellat, impedit tempora officia facere veritatis dolorem. Nobis, in perspiciatis dignissimos aspernatur accusamus, inventore molestiae ratione, incidunt veritatis voluptatibus tempore.  CSS works by selecting HTML elements and applying styles using properties like color, font-size, margin, padding, and more. There are different ways to apply CSS: Inline, Internal, and External stylesheets. CSS3 introduced features like Flexbox and Grid for better layout control."
  }
];

const ArticlesSection = () => {
  const [expanded, setExpanded] = useState({});
//   const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <SectionContainer>
      {/* <Heading>Latest <span>Articles</span></Heading> */}
      <Header>
      <h2 style={{color:"#ffc107"}}>Latest Articles</h2>
        <ViewAllButton onClick={() => navigate("/ArticlesPage")}>View All</ViewAllButton>
      </Header>
      <ArticlesGrid>
        {articles.map((article, index) => (
          <ArticleCard key={index}>
            <Category>{article.category}</Category>
            <Title>{article.title}</Title>
            <Content>{article.content}</Content>
            {expanded[index] && <FullContent>{article.fullContent}</FullContent>}
            <ReadMoreButton onClick={() => toggleReadMore(index)}>
              {expanded[index] ? "Read Less" : "Read More"}
            </ReadMoreButton>
          </ArticleCard>
        ))}
      </ArticlesGrid>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 20px;
  background-color: #191B21;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #f1c40f;
  text-transform: uppercase;
  margin-bottom: 20px;

 
`;

const ArticlesGrid = styled.div`
    gap: 20px;
    justify-content: center;
    display: flex
;
    flex-direction: column;
    width: 60%;
    margin: auto;

`;

const ArticleCard = styled.div`
  background:#191B21;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Category = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #f39c12;
  text-transform: uppercase;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin: 10px 0;
`;

const Content = styled.p`
  color: #bbb;
`;

const FullContent = styled.p`
  color: #ddd;
  margin-top: 10px;
`;

const ReadMoreButton = styled.button`
  margin-top: 10px;
  padding: 8px 15px;
  border: none;
  background-color: #f1c40f;
  color: #121212;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

`;
const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
`;

const ViewAllButton = styled.button`
  padding: 10px 15px;
  background: #ffc107;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

`;
export default ArticlesSection;




