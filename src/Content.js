// ̥import React from 'react'
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  /* const [name, setName] = useState("Sohail");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ["Alex", "Jared", "Andrews"];
    const int = Math.floor(Math.random() * names.length);
    // console.log(names.length);
    setName(names[int]);
  };

  const handleClick = () => {
    // console.log("You clicked it");
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (eventObj) => {
    console.log(eventObj);
    console.log(eventObj.target);
    console.log(eventObj.target.innerText);
  }; */

  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
      {/* if there are paranthesis when a function is called its called immediately */}
      {/* <p onDoubleClick={handleClick}>Hello, {name}</p>
      <button onClick={handleNameChange}>Change Name</button> */}
      {/* <button onClick={handleClick}>Click It</button> */}
      {/* <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClick2("Sohail")}>Click It</button>
        <button onClick={(eventObj) => handleClick3(eventObj)}>Click It</button> */}
    </main>
  );
};

export default Content;
