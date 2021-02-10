import { MenuItem, FormControl, Select, } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('Worldwide')

  // https://disease.sh/v3/covid-19/countries
  useEffect(()=>{
    const getCountryData = async()=>{
      await fetch("https://disease.sh/v3/covid-19/countries").then((response)=>
        response.json()
        
      ).then((data)=>{
       
        const countries = data.map((country)=>(
          {
            name:country.country,
            value: country.countryInfo.iso2,
            id:country.countryInfo._id
          }
        )) 
        setCountries(countries)       
      })
    }
    getCountryData()

  },[])
  const onCountryChange =(e)=>{
    const countryCode =e.target.value;
    setCountry(countryCode)
  }
    return (
    <div className="App">
      <div className="app_header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
         <MenuItem value="Worldwide">Worldwide</MenuItem>
          {       
            countries.map((country)=>(
              <MenuItem value={country.value} key={country.id}>{country.name}</MenuItem>
            ))           
          }
         
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
