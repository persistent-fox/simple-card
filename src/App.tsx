import React from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card />
      <Card title="Очень длинный заголовок, который уходит куда-то вдаль" />
      <Card />
      <Card />
    </div>
  );
}

export default App;
