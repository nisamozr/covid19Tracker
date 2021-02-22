import { MenuItem, FormControl, Select, Card, CardContent, } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import InfoBox from "./component/infoBox"
import LineGraph from './component/LineGraph'
import Table from "./component/Table"
import './App.css';
import Map from "./component/Map";
import { sortData } from './component/Util'
import "leaflet/dist/leaflet.css"



function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('Worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({lat: 34.80745, lng: -40.4796});
  const [mapZoom, setMapZoom] = useState(3)

  // https://disease.sh/v3/covid-19/countries
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all").then((response) => response.json()).then((data) => {
      setCountryInfo(data)
    })
  }, [])
  useEffect(() => {
    const getCountryData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response) =>
        response.json()

      ).then((data) => {

        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2,
            id: country.countryInfo._id
          }
        ))
        const sortedData = sortData(data)
        setTableData(sortedData)
        setCountries(countries)
      })
    }
    getCountryData()

  }, [])
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode)
    const url = countryCode === 'Worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url).then((response) => response.json()).then((data) => {

      setCountry(countryCode)

      setCountryInfo(data)
      setMapCenter([data.countryInfo.lat,data.countryInfo.long])
      setMapZoom(4)
  


    })
  }
  console.log(mapCenter)
 
  return (
    <div className="App">
      <div className="app_left">
        <div className="app_header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app_dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange}>
              <MenuItem value="Worldwide">Worldwide</MenuItem>
              {
                countries.map((country) => (
                  <MenuItem value={country.value} key={country.id}>{country.name}</MenuItem>
                ))
              }

            </Select>
          </FormControl>


        </div>
        <div className="app_stats">
          <InfoBox title="Coronavirus cases" total={countryInfo.cases} cases={countryInfo.todayCases} />
          <InfoBox title="Recoverd" total={countryInfo.recovered} cases={countryInfo.todayRecovered} />
          <InfoBox title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths} />
          {/* info Boxes */}
          {/* info Boxes */}
          {/* info Boxes */}

        </div>
        {/* map */}
        <Map  center={mapCenter} zoom={mapZoom}/>



      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live Case by Country</h3>
          {/* table */}
          <Table countries={tableData} />

          <h3>Worldwide new cases</h3>
          {/* graph */}
          <LineGraph/>

        </CardContent>

        




      </Card>


    </div>
  );
}

export default App;
