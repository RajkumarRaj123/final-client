import { useEffect, useState } from "react";
import React from "react";
import "./Pay.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm.jsx";

const stripePromise = loadStripe(
  "pk_test_51SR8S8BTxwk6mvaS9zjNmwqAjvRoZhZLYZMcsBB7nD50kJJP59ECZ8l467xN1PYW6P2LAxraWrHBwZ0BKDzPDdhS00NGsXklDf"
);
const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [id]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
