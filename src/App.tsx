import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import { data } from "./mock/data";

function App() {
  return (
    <div className="App">
      {data.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;
