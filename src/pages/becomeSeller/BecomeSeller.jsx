import { useEffect } from "react";
import "./BecomeSeller.css";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const BecomeSeller = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // 🔒 Login check
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);

  // 🚀 Become seller handler
  const handleBecomeSeller = async () => {
    try {
      await newRequest.put(
        "/users/become-Seller",
        {
          desc: "I am a professional web developer",
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      // update localStorage
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...currentUser, isSeller: true })
      );

      alert("You are now a Seller 🎉");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  if (currentUser?.isSeller) {
    return (
      <div className="becomeSeller">
        <h2>You are already a Seller ✅</h2>
      </div>
    );
  }

  return (
    <div className="becomeSeller">
      <div className="container">
        <h1>Become a Seller</h1>
        <p>
          Start selling your services and earn money by showcasing your skills.
        </p>

        <button onClick={handleBecomeSeller}>Become a Seller</button>
      </div>
    </div>
  );
};

export default BecomeSeller;
