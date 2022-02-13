import { useState, useEffect } from "react";
import axios from "axios";

function ApartmentsPage() {
  const [appartments, setApartments] = useState([]);

  useEffect(() => {
    axios
      .get("https://ironbnb-m3.herokuapp.com/apartments")
      .then((response) => {
        console.log('responde.data ->', response.data)
        setApartments(response.data)
      });
  },[]); //-> [] means: Run the effect only once, after initial render

  return (
    <div>
      <h3> List of apartments </h3>

      {appartments.map((apartment) => {
        return (
        <div key={apartment._id} className="card"> 
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div> 
        )
      })}
    </div>
  );
}

export default ApartmentsPage

