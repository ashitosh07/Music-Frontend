import React, { useState } from "react";
import "./Donation.css";
import emailjs from "emailjs-com";
import JSZip from "jszip";
import Paypal from "./PayPal";

const DonationForm = ({ onClose, currentSong }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPaypalEnabled, setIsPaypalEnabled] = useState(false);

  const handleDonate = async () => {
    if (parseFloat(amount) < 100) {
      setErrorMessage("Minimum donation amount is $100.");
      return;
    }

    setIsPaypalEnabled(true); // Enable PayPal when the form is submitted
  };

  const handlePaypalSuccess = async (orderID) => {
    // Handle PayPal success, send email, etc.
    try {
      const url = window.location.origin + currentSong.audio;
      const requestData = {
        title: currentSong.title,
        description: currentSong.description,
        url,
        email,
        donationAmount: amount,
      };

      try {
        const response = await fetch("http://localhost:5002/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          console.log("Upload successful!");
        } else {
          console.error("Error uploading file:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }

      onClose();
    } catch (error) {
      console.error("Error making donation:", error);
    }
  };

  return (
    <div className="bg-black p-8 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Donate Now</h2>
      {!isPaypalEnabled ? (
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border rounded-md w-full p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded-md w-full p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-white-700">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              className="border rounded-md w-full p-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handleDonate}
          >
            Donate
          </button>
        </form>
      ) : (
        <Paypal amount={amount} onSuccess={handlePaypalSuccess} />
      )}
    </div>
  );
};

export default DonationForm;
