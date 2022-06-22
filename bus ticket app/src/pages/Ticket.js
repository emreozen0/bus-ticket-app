import React, { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";

function Ticket() {
  const { travelData } = useContext(AppContext);
  let navigate = useNavigate();
  const params = useParams();
  //diğer ekrandan gelen filtreleme yapacağımız bilgiler alttadır
  const { from, to, date } = params;
 
  const [company, setCompany] = useState("");


  // bize parametre olarak gelen nereden nereye ne zaman bilgilerini kullanarak filtreleme işlemi yaptık
  const applyFilter = (data) => {
    return data.filter(
      (x) =>
        (company === "" ? true : x.company === company) &&
        x.from === from &&
        x.to === to &&
        x.date === date
    );
  };

  const data = [
    { value: "", name: "Tümü" },
    { value: "Metro", name: "Metro" },
    { value: "Pamukkale", name: "Pamukkale" },
    { value: "Kamilkoç", name: "Kamilkoç" },
  ];
  
  // filtreleme sonucu çıkan yolculukların bilgilerinin detaylarınnı görmek için bu verileri o ekrana parametre olarak gönderdik
  const onClick = (trip) => {
    navigate("/detail/" + trip.price +"/" + trip.to + "/" + trip.from+ "/"+trip.date +"/"+ trip.company+"/"+ trip.seat+"/"+ trip.hour);
  };


  return (
    <div className="ticket-screen-div">

      {/* firmalara göre filtreleme yaptığımız alan */}
        <select
        className="travel-select"
        name="from"
        placeholder="Nereden"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        {data.map((x, index) => (
          <option value={x.value} key={index}>
            {x.name}
          </option>
        ))}
      </select>

      
    
      {applyFilter(travelData).length == 0 ? (
        <h2>Sefer Bulunamadı!</h2>
      ) : (

        <div>
          {applyFilter(travelData).map((trip, index) => {
            return <Card style={{ margin: "4%" }}>
              <Card.Header as="h5">  {trip.company} Turizm - {trip.price}₺</Card.Header>
              <Card.Body> 
                <Card.Title>{trip.date}</Card.Title>
                <Card.Text>
                  {trip.from} - {trip.to}
                </Card.Text>

                <Button onClick={()=>{onClick(trip)}} style={{ backgroundColor: "red" }} variant="primary">Otobüsü Görüntüle</Button>
              </Card.Body>
            </Card>;
          })}
        </div>

      )}
    </div>
  )
}
export default Ticket
