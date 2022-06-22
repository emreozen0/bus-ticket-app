import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import AddTravel from './pages/AddTravel';
import Login from './pages/Login';
import TicketDetail from './pages/TicketDetail';
import { AppContext } from './AppContext/AppContext';
import Header from './components/Header';

function App() {


  const cities = [
    { value: "İstanbul", name: "İstanbul (İstanbul Otobüs Terminali)" },
    { value: "Ankara", name: "Ankara (Ankara Otobüs Terminali)" },
    { value: "İzmir", name: "İzmir (İzmir Otobüs Terminali)" },
    { value: "Edirne", name: "Edirne (Edirne Otobüs Terminali)" },
    { value: "Bursa", name: "Bursa (Bursa Otogari)" },
    { value: "Istanbul-Silivri", name: "İstanbul (Silivri Otobüs Terminali)" },
    { value: "Istanbul-Ataşehir", name: "İstanbul (Dudullu Otobüs Terminali)" },
  ];

  // sabitteki yolculuk listesi

  const [travelData, setTravelData] = useState(
    [
      {
        id: 1,
        busType: "2",
        company: "Metro",
        price: 250,
        from: "Edirne",
        to: "Canakkale",
        date: "2022-06-27",
        hour: "15.00",
        duration: "2 saat",
      },
      {
        id: 2,
        busType: "1",
        company: "Nilüfer",
        price: 250,
        from: "Edirne",
        plate: "22 AT 28",
        to: "Ankara",
        date: "2022-06-27",
        hour: "15.00",
        duration: "2 saat",
      },
      {
        id: 3,
        busType: "2",
        company: "Varan",
        price: 250,
        from: "Edirne",
        plate: "22 AT 28",
        to: "İzmir",
        date: "2022-06-28",
        hour: "15.00",
        duration: "2 saat",
      },
      {
        id: 4,
        busType: "1",
        company: "Metro",
        price: 250,
        from: "Edirne",
        plate: "22 AT 28",
        to: "Adana",
        date: "2022-06-28",
        hour: "15.00",
        duration: "2 saat",
      }
    ]

  );


  const [user, setUser] = useState({})
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser}></Header>
      <AppContext.Provider value={{
        user, setUser, cities, travelData, setTravelData
      }} >


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Ticket />}>
            <Route path=":from/:to/:date" element={<Ticket />} />
          </Route>
          <Route path="/addtravel" element={<AddTravel />} />
          <Route path="/login" element={<Login />}></Route>

          <Route path="/detail" element={<TicketDetail />}>
            <Route path=":price/:to/:from/:date/:company/:busType/:hour" element={<TicketDetail />} />
          </Route>

        </Routes>
      </AppContext.Provider>

    </BrowserRouter>



  );
}

export default App;
