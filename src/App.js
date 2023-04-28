import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import WeatherCard from "./components/WeatherCard";
import getFormattedWeatherData from "./services/weatherService";
import StockMarketCard from "./components/StockMarketCard";
import Signup from "./components/More/credentials/Signup";
import Login from "./components/More/credentials/Login";
import Article from "./components/More/article/Article";
import Livearticlelist from "./components/More/article/Livearticlelist";
import Chatbot from "./components/More/chatbot/Chatbot";
import Loginn from "./components/More/credentials/Loginn";
import Alert from "./components/More/credentials/Alert";

function App() {
  document.body.style = "background:#ffff;";
  // const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("*");
  const [alert, setAlert] = useState(null);
  //here alert is an object
  const [weather, setWeather] = useState({
    details: "Trying to Fetch Latest Weather Update",
    icon: "L",
    temp: 273,
    temp_min: 273,
    temp_max: 273,
    sunrise: 0,
    sunset: 0,
    speed: 0,
    humidity: 0,
    feels_like: 273,
    timezone: 1000,
    dt: 1669793656,
    name: "- ",
    country: "-",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          // setWeather({details:'Featching Latest Weather Update', icon:'L'});
          fetchWeather(lat, lon);
        },
        function errorHandler(err) {
          // eslint-disable-next-line
          if (err.code == 1) {
            alert(
              "Weather update not available : Access to geolocation is denied!"
            );
            setWeather({
              details:
                "Weather update not available : Access to geolocation is denied!",
              icon: "E",
            });
            // eslint-disable-next-line
          } else if (err.code == 2) {
            alert("Weather update not available : Position is unavailable!");
            setWeather({
              details:
                "Weather update not available : Access to geolocation is denied!",
              icon: "E",
            });
          }
        }
      );
    }

    const fetchWeather = async (lat, lon) => {
      await getFormattedWeatherData({ lat, lon }).then((data) => {
        console.log(
          `App.js - Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };
  }, []);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  return (
    <div className="App">
      <Router>
        <NavBar setSearchQuery={setSearchQuery} />
        <Alert alert={alert} />
        <div className="container-fluid" style={{ marginBottom: "-5%" }}>
          <div className="row">
            <div
              className="col-md-10"
              style={{
                fontSize: "180%",
                fontWeight: "600",
                fontFamily: "Playfair Display",
                wordSpacing: "5px",
              }}
            >
              Don't have time to read newspaper. Read it here Anywhere
              anytime!!!!
            </div>

            <div className="col-md-2" style={{ float: "right" }}>
              <Chatbot />
            </div>
          </div>
        </div>
        <LoadingBar
          height={3}
          color="#f11946"
          // progress={progress}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container">
                  <div
                    className="card-group"
                    style={{
                      margin: "35px 0px -60px",
                      marginTop: "90px",
                      padding: "10px",
                    }}
                  >
                    <WeatherCard weather={weather}></WeatherCard>
                    <StockMarketCard />
                  </div>
                </div>
                <News
                  key="general"
                  country="IN"
                  language="en"
                  query={searchQuery}
                  category="news"
                />
              </>
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                country="IN"
                language="en"
                query={searchQuery}
                category="business"
              />
            }
          />
          <Route
            path="/economics"
            element={
              <News
                key="economics"
                country="IN"
                language="en"
                query={searchQuery}
                category="economics"
              />
            }
          />
          <Route
            path="/politics"
            element={
              <News
                key="politics"
                country="IN"
                language="en"
                query={searchQuery}
                category="politics"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                country="IN"
                language="en"
                query={searchQuery}
                category="entertainment"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                country="IN"
                language="en"
                query={searchQuery}
                category="science"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                country="IN"
                language="en"
                query={searchQuery}
                category="tech"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                key="sports"
                country="IN"
                language="en"
                query={searchQuery}
                category="sport"
              />
            }
          />
          <Route
            path="/travel"
            element={
              <News
                key="travel"
                country="IN"
                language="en"
                query={searchQuery}
                category="travel"
              />
            }
          />
          <Route
            path="/music"
            element={
              <News
                key="music"
                country="IN"
                language="en"
                query={searchQuery}
                category="music"
              />
            }
          />
          <Route
            path="/food"
            element={
              <News
                key="food"
                country="IN"
                language="en"
                query={searchQuery}
                category="food"
              />
            }
          />
          <Route
            path="/gaming"
            element={
              <News
                key="gaming"
                country="IN"
                language="en"
                query={searchQuery}
                category="gaming"
              />
            }
          />
          <Route
            path="/search"
            element={
              <News
                key="search"
                country="IN"
                language="en"
                query={searchQuery}
                category="Search Results"
              />
            }
          />
          <Route path="/sign-list" element={<Signup showAlert="In form" />} />
          <Route path="/login" element={<Login />} />
          <Route path="loginn" element={<Loginn />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article-list" element={<Livearticlelist />} />
        </Routes>
      </Router>
    </div>
  );
}
{
  /* <Route  path="/search" element={<News setProgress={setProgress} key="search" pageSize={pageSize} country="IN" language="en" query={searchQuery} category="Search Results"/>} /> */
}
export default App;
