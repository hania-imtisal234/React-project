import "./RecentLogins.css";
import Card1 from "./Card1";
import img1 from "./imgs/user.jpg";
import Card2 from "./Card2";
import { useState } from "react";

function RecentLogins() {
  const [cardName, setCardName] = useState("Amir");

  return (
    <div class="logins">
      <div class="header">
        <h3 class="label">Facebook</h3>
        <h3 class="recent">Recent Logins</h3>
        <h6>Click your picture or add an account.</h6>
      </div>

      <div class="accounts">
        <div class="row">
          <Card1 cardName={cardName} />
          <Card2 />
        </div>
      </div>
    </div>
  );
}
export default RecentLogins;
