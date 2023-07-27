import React, { useEffect } from "react";
import "./lostPage.css";


function LostPage() {
    useEffect(() => {
      const redirectTimeout = setTimeout(() => {

        window.location.replace("/");
      }, 5000);

      return () => clearTimeout(redirectTimeout);
    }, []);

  return (
    <div className="lost_container">
        <p>I'm lost</p>
      <iframe
      title="gif_lost"
        src="https://giphy.com/embed/xRYZdfv3DgIQb1dvNA"
        width="480"
        height="480"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
   
    </div>
  );
}

export default LostPage;
