import avatar from "/src/Assets/avatar.png";
import logo from "/src/Assets/Mooverse_logo.png";
import { useEffect, useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow(false));
    };
  }, []);

  return (
    <div
      className={`${
        show && "bg-black"
      } p-5 w-[100vw] transition-all duration-[0.5s] ease-in fixed top-0 flex justify-between z-10`}
    >
      <h1
        className={`font-extrabold text-xl text-red-700 ${
          show &&
          "border-b-[0.1px] transition-all duration-500 ease-in-out border-red-200"
        }`}
      >
        MooVerse
      </h1>
      <img
        className="nav_avatar w-[30px] object-contain"
        src={avatar}
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
