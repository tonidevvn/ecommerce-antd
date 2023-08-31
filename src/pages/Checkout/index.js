import { Link } from "react-router-dom";
import SuperThank from "../../assets/images/super_thank_you.svg";

const ThankYou = () => {
  return (
    <div>
      <h2>
        🥰 Thanks for your order. Return <Link to="/"> home page</Link>.
      </h2>
      <img
        src={SuperThank}
        style={{ width: "280px", maxWidth: "60%" }}
        alt="Thank you"
      />
    </div>
  );
};

export default ThankYou;
