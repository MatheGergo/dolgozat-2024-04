import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <h1 className="mt-5">Balatoni kilátók</h1>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav d-flex flex-row justify-content-between w-100">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Kezdőlap
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/oldal1" className="nav-link">
              Kilátók
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/oldal2" className="nav-link">
              Képek
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary py-4 sticky-bottom fixed-bottom">
      <div className="container text-center">
        <p className="text-light">Készítette: Te</p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="container">
      <h2 className="mt-5">
        <p>
          A Balaton környékén az utóbbi időben gombamódra szaporodnak az épített
          balatoni kilátók, amelyeket ha megmászunk, csodás kilátás nyílik a
          tóra és a part menti térségre.
        </p>
        <p>
          A kilátók többsége csak gyalog közelíthető meg, de szinte mindegyikhez
          feltolhatjuk a bringánkat.
        </p>
        <p>
          Ezeken túl természetesen rengeteg olyan hely is található, mely kilátó
          nélkül is nagyszerű panorámát kínál.
        </p>
      </h2>
    </div>
  );
}

function Page2() {
  return (
    <div className="container">
      <h2 className="mt-5">Képek</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <img
            src="/kepek/1_bokkhegy.jpg"
            className="img-fluid"
            alt="1_bokkhegy.jpg"
          />
        </div>
        <div className="col">
          <img
            src="/kepek/2_cserehegy.jpg"
            className="img-fluid"
            alt="2_cserehegy.jpg"
          />
        </div>
        <div className="col">
          <img
            src="/kepek/3_somlyohegy.jpg"
            className="img-fluid"
            alt="3_somlyohegy.jpg"
          />
        </div>
        <div className="col">
          <img
            src="/kepek/4_kisfaludy.jpg"
            className="img-fluid"
            alt="4_kisfaludy.jpg"
          />
        </div>
        <div className="col">
          <img
            src="/kepek/5_folly.jpg"
            className="img-fluid"
            alt="5_folly.jpg"
          />
        </div>
        <div className="col">
          <img
            src="/kepek/6_ovari.jpg"
            className="img-fluid"
            alt="6_ovari.jpg"
          />
        </div>
      </div>
    </div>
  );
}

function Page1() {
  return (
    <div className="container">
      <h2 className="mt-5">Kilátók</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Város</th>
            <th>Kilátó</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alsóörs</td>
            <td>Csere-hegyi kilátó</td>
          </tr>
          <tr>
            <td>Alsóörs</td>
            <td>Somlyó-hegyi kilátó</td>
          </tr>
          <tr>
            <td>Ábrahámhegy</td>
            <td>Bökk-hegyi kilátó</td>
          </tr>
          <tr>
            <td>Badacsony</td>
            <td>Kisfaludy kilátó</td>
          </tr>
          <tr>
            <td>Badacsonyörs</td>
            <td>Folly Arborétum kilátója</td>
          </tr>
          <tr>
            <td>Balatonalmádi</td>
            <td>Óvári Messzelátó</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oldal1" element={<Page1 />} />
          <Route path="/oldal2" element={<Page2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
