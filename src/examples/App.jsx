import React from "react";
import { TextInput } from "../lib";
const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Your Favourite Input Field</h1>
    <TextInput label="Email Address" placeholder="name@example.com" />
  </div>
);

export default App;
