import React, { useState, useEffect } from "react";
import axios from "axios";

function Kutya() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDogImage();
  }, []);

  const getDogImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setImage(response.data.message);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching dog image:", error);
      setLoading(false);
    }
  };

  return (
    <div className="kutya">
      <h2 className="cim">Kutyák</h2>
      {loading ? (
        <img src="loading.gif" alt="Loading..." className="kutya-kep" />
      ) : (
        <img src={image} alt="Kutya" className="kutya-kep" />
      )}
      <button className="gomb" onClick={getDogImage}>
        Következő
      </button>
    </div>
  );
}

export default Kutya;
