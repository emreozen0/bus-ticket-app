import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";

const AddTravel = () => {
  const { travelData, setTravelData,  } = useContext(AppContext);
  const navigate = useNavigate();

  const cities = [
     { value: "İstanbul", name: "İstanbul (İstanbul Otobüs Terminali)" },
    { value: "Ankara", name: "Ankara (Ankara Otobüs Terminali)" },
    { value: "İzmir", name: "İzmir (İzmir Otobüs Terminali)" },
    { value: "Edirne", name: "Edirne (Edirne Otobüs Terminali)" },
    { value: "Bursa", name: "Bursa (Bursa Otogari)" },
    { value: "Istanbul-Silivri", name: "İstanbul (Silivri Otobüs Terminali)" },
    { value: "Istanbul-Ataşehir", name: "İstanbul (Dudullu Otobüs Terminali)" },
  ];

    // yeni yolculuk objesi

  const [travelDetail, setTravelDetail] = useState({
    id: Math.random(),
    busType: "",
    price: "",
    company: "",
    from: "",
    duration: "",
    hour: "",
    to: "",
    date: "",
   
  });

  const data = [
    { value: "Metro", name: "Metro" },
    { value: "Pamukkale", name: "Pamukkale" },
    { value: "Kamilkoç", name: "Kamilkoç" },
  ];


  // girilen bilgileri alıp yeni bir yolculuk oluşturup bunu yolculuk listesine kaydeden fonksiyon
  const Save = () => {
    if (travelDetail.price !=="" && travelDetail.busType !=="" &&travelDetail.company !=="" &&travelDetail.from !=="" 
    &&travelDetail.duration !=="" &&travelDetail.hour !=="" && travelDetail.to !=="" &&travelDetail.date !=="") {
     
      setTravelData([...travelData, travelDetail]);
      navigate('/')
    }
    else{
      alert("Boş Alanları Doldurunuz")
    console.log(travelData, "kayıtlarr")
    }


  };

  return (
    <div>

      <div>
       
        <div className="purchase-page-customer">
          <h3>Yeni Sefer Oluştur</h3>
          <input
            className="travel-select"
            type="number"
            name="price"
            placeholder="Fiyat"
            value={travelDetail.price}
            onChange={e => setTravelDetail({ ...travelDetail, price: e.target.value })}
          />
          <select
            className="travel-select"
            name="company"
            placeholder="Seyahat Şirketi"
            value={travelDetail.company}
            onChange={e => setTravelDetail({ ...travelDetail, company: e.target.value })}
          >
            {data.map((x, index) => (
              <option value={x.value} key={index}>
                {x.name}
              </option>
            ))}
          </select>
          <select
            className="travel-select"
            name="from"
            placeholder="Nereden"
            value={travelDetail.from}
            onChange={e => setTravelDetail({ ...travelDetail, from: e.target.value })}
          >
            {cities
              .filter((x) => x.value !== travelDetail.to)
              .map((x, index) => (
                <option value={x.value} key={index}>
                  {x.name}
                </option>
              ))}
          </select>

          <select
            name="to"
            className="travel-select"
            placeholder="Nereye"
            value={travelDetail.to}
            onChange={e => setTravelDetail({ ...travelDetail, to: e.target.value })}
          >
            {cities
              .filter((x) => x.value !== travelDetail.from)
              .map((x, index) => (
                <option value={x.value} key={index}>
                  {x.name}
                </option>
              ))}
          </select>

          <input
            type="text"
            className="travel-select"
            name="duration"
            placeholder="Süre"
            value={travelDetail.duration}
            onChange={e => setTravelDetail({ ...travelDetail, duration: e.target.value })}
          />
         
          <input
            type="text"
            className="travel-select"
            name="hour"
            placeholder="Yolculuk Başlangıç Saati"
            value={travelDetail.hour}
            onChange={e => setTravelDetail({ ...travelDetail, hour: e.target.value })}
          />

          <select
            className="travel-select"
            name="busType"
            value={travelDetail.busType}
            onChange={e => setTravelDetail({ ...travelDetail, busType: e.target.value })}
          >
            <option value={1}>30 Koltuk</option>
            <option value={2}>40 Koltuk</option>
          </select>
          <input
            type="date"
            className="travel-select"
            name="date"
            placeholder="Seyehat Tarihi"
            value={travelDetail.date}
            onChange={e => setTravelDetail({ ...travelDetail, date: e.target.value })}
          />
          <button onClick={Save} className="travel-btn" >
            Sefer Oluştur
          </button>
        </div>
      </div>


    </div>
  );
};

export default AddTravel;
