import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Success = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put(
          "/orders",
          {
            headers: { Authorization: localStorage.getItem("token") },
          },
          {
            payment_intent,
          }
        );

        setTimeout(() => {
          navigate("/orders");
        }, 2000);
      } catch (err) {
        console.log("Success Page Error:", err.response?.data || err.message);
      }
    };
    makeRequest();
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "150px", fontSize: "22px" }}>
      Payment Successful 🎉 <br />
      Redirecting to your Orders page...
    </div>
  );
};

export default Success;
