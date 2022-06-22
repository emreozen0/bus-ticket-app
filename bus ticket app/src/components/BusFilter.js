import React, { useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext/AppContext";


const BusFilter = () => {
  let navigate = useNavigate();
  const { cities } = useContext(AppContext);
  const [travelData, setTravelData] = useState({
      //bu bilgileri anasayfadan buraya gönderdik kullanabilmek için

    from: "Edirne",
    to: "Canakkale",
    date: new Date().toISOString().split("T")[0],
  });

  // ekrandan aldığımız bilgileri kaydettik
  const onChangeHandler = (e) => {
    setTravelData((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  // ekrandan alınan  nereden nereye ne zaman bilgilerini filtreleme yapabilmek için ticket ekranına gönderdik
  const onClick = () => {
    console.log("data", travelData);
    navigate(
      "/ticket/" + travelData.from + "/" + travelData.to + "/" + travelData.date
    );
  };

  return (
    <div className="travel-div">
      <select
        className="travel-select"
        name="from"
        placeholder="Nereden"
        value={travelData.from}
        onChange={(e) => onChangeHandler(e)}
      >
        {cities
          .filter((x) => x.value !== travelData.to)
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
        value={travelData.to}
        onChange={(e) => onChangeHandler(e)}
      >
        {cities
          .filter((x) => x.value !== travelData.from)
          .map((x, index) => (
            <option value={x.value} key={index}>
              {x.name}
            </option>
          ))}
      </select>

      <input
        type="date"
        className="travel-select"
        name="date"
        placeholder="Tarih"
        value={travelData.date}
        onChange={(e) => onChangeHandler(e)}
      />
      <button className="travel-btn" onClick={() => onClick()}>
        Ara
      </button>
    </div>
  );
};

export default BusFilter;