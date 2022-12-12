import React from "react";

function Footer(){

  let currentDate = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p>Copyright &copy; {currentDate}</p>
      </footer>
    </div>
  );
}

export default Footer;
