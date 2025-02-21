import React from "react";
import { useLocation } from "react-router-dom";
type Props = {};

function Booking({}: Props) {
  const location = useLocation();
  const { step, image } = location.state || {}; // Ma’lumotni olish

  if (!step || !image) {
    return <h1>Ma’lumot topilmadi! ❌</h1>;
  }
  return (
    <div>
      <h1>Booking Step: {step}</h1>
      <img src={image} alt="Guide" style={{ width: "300px" }} />
    </div>
  );
}

export default Booking;
