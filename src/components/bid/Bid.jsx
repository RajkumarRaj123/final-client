import { useState } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Bid = ({ gig }) => {
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    try {
      await newRequest.post(
        "/bids",
        {
          gigId: gig._id,
          sellerId: gig.userId,
          price: Number(price),
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Bid placed successfully");
    } catch (err) {
      console.log(err);
      alert(err.response?.data || "Something went wrong");
    }
  };

  return (
    <form className="bidForm" onSubmit={handleSubmit}>
      <h3>Place a Bid</h3>

      <input
        type="number"
        placeholder="Your budget"
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <textarea
        placeholder="Message to seller"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">Submit Bid</button>
    </form>
  );
};

export default Bid;
