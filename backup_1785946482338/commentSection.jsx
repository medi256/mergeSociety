"use client";

import React, { useEffect, useState } from "react";

const api = "https://merge-society-backend.vercel.app";

const CommentSection = () => {
  const [textareas, setTextAreas] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState([]);
  // const [route, setRoute] = useState("");

  function handleTextArea(e) {
    const values = e.target.value;
    if (!values) {
      alert("Fill in something");
      return;
    } else {
      setTextAreas(values);
    }
  }
  function handleName(e) {
    const values = e.target.value;
    if (!values) {
      alert("Fill in something");
      return;
    } else {
      setName(values);
    }
  }

  async function submitData() {
    try {
      if (!name || !textareas) {
        alert("Fill those inputs with some text");
        return;
      }

      const sendDataToDataBase = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          routes: window.location.pathname,
          names: name,
          comment: textareas,
        }),
      });

      if (sendDataToDataBase.ok) {
        alert("Thanks for commenting! Always come back");
        setName("");
        setTextAreas("");
        fetchData();
      }
    } catch (error) {
      console.log(error);
      alert("Something wrong happened");
    }
  }

  // fetching data  from  the server  so    i can  display  my   comments

  async function fetchData() {
    try {
      const getData = await fetch(`${api}/?routes=${window.location.pathname}`);

      const serverResponse = await getData.json();

      if (getData.ok) {
        // console.log(serverResponse);
        setValue(serverResponse);
      } else {
        console.log("Something wrong happened");
      }
    } catch (error) {
      alert("Refresh  and try  again cause something wrong just  happened");
      // console.log(error);
    }
  }

  let displayData = value.map((display) => {
    return (
      <section key={display._id} className="display-data">
        <p>
          <strong>{display.names}</strong>
        </p>
        <span>{display.createdAt}</span>
        <p>{display.comment}</p>
        <hr />
      </section>
    );
  });

  useEffect(() => {
    // setRoute(window.location.pathname);
    fetchData();
  }, []);

  return (
    <>
      <h3>
        Hey there! This is <strong>Merge Society</strong>. We'd love to hear
        your thoughts - leave a comment below to support and share the love for
        this blog ❤️
      </h3>
      {displayData}
      <div className="commentSection">
        <textarea
          placeholder="Comment"
          value={textareas}
          className="comment-text"
          onChange={handleTextArea}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Type your Name"
          className="comment-input"
          value={name}
          onChange={handleName}
          required
        />
        <button className="comment-input" onClick={submitData}>
          ADD
        </button>
      </div>
    </>
  );
};

export default CommentSection;
