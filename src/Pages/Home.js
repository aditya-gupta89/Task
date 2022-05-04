import React from "react";
import { useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import { Fragment } from "react";
import Information from "../components/Information/Information";
const Home = () => {
  const [type, setType] = useState("React");
  const filterTypeHandler = (type) => {
    setType(type);
  };
  let content = "";
  if (type == "React")
    content =
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.";
  if (type === "Angular")
    content =
      "Angular (commonly referred to as Angular 2+ or Angular CLI)[4][5] is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.Angular is used as the frontend of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, Angular itself (or AngularJS), and Node.js server runtime environmen.";
  if (type === "Vue")
    content =
      "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.";
  return (
    <Fragment>
      <Dropdown onChangeFilter={filterTypeHandler} />
      <Information content={content} />
    </Fragment>
  );
};

export default Home;
