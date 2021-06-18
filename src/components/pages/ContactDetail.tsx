import React from "react";
import AlphabetList from "react-alphabet-list";
import randomWords from "random-words";

function App() {
  const data = randomWords(100).concat(["16", "$$$", "😀", "🤣"]);
  return (
    <div className="App">
      <h1> CONTACT DEATILS </h1>
      <AlphabetList
        className="alpha-list"
        data={data}
        style={{
          width: "350px",
          height: "400px",
          backgroundColor: "red",
          padding: "4px"
        }}
        generateFn={(item, index) => {
          return <div key={item + index}>{item}</div>;
        }}
      />
    </div>
  );
}

export default App;
