import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddApartmentPage() {
    const [headline, setHeadline] = useState("");
    const [price, setPrice] = useState(1);

    const navigate = useNavigate();

    const handleSubmit = (e) => { // <= Handler Function (para o botão do Formulário!)

        // prevent page reload on submit
        e.preventDefault();

        // create the body for the POST request
        const body = { title: headline, pricePerDay: price }

        axios
            // to request and sent the input data stored in the state
            .post("https://ironbnb-m3.herokuapp.com/apartments", body)
            .then((response) => {
                //reset the state
                setHeadline("");
                setPrice(1);
                navigate('/'); // Navigate to the `/` page
            })
    }


    return (
      <div className="AddApartmentPage">
        <h3>Add New Apartment</h3>

        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
                type="text"
                name="headline"
                onChange={(e) => setHeadline(e.target.value)}
                value={headline}
            />

            <label>Price per Day</label>
            <input 
                type="number"
                name="pricePerDay"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />

            <button type="submite">Create Apartment</button>
        </form>
      </div>
    );
  }
   
export default AddApartmentPage;
   
