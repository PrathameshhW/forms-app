import React, { useState } from "react";

const App = () => {
  const [fullName, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const changeEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setfullName((preVal) => {
      // console.log(preVal);

      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Your form has been submitted");
  };
  return (
    <>
      <div className="forms">
        <form onSubmit={onSubmit}>
          <div className="form">
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email} </p>
            <input
              className="name"
              type="text"
              placeholder="Enter your Name"
              name="fname"
              onChange={changeEvent}
              value={fullName.fname}
            ></input>
            <input
              type="text"
              placeholder="Enter your LastName"
              name="lname"
              onChange={changeEvent}
              value={fullName.lname}
            ></input>
            <input
              className="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={changeEvent}
              value={fullName.email}
            ></input>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
