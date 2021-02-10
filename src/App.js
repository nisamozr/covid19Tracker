import { MenuItem, FormControl, Select } from "@material-ui/core";
import React from "react"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app_header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abs" >
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="us">us</MenuItem>
          <MenuItem value="uk">uk</MenuItem>
        </Select>
      </FormControl>


      </div>
      

      {/* Header */}
      {/* Title + select input dropdown field */}

      {/* info Boxes */}
      {/* info Boxes */}
      {/* info Boxes */}

      {/* table */}
      {/* graph */}

      {/* map */}

    </div>
  );
}

export default App;
