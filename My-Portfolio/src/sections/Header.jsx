import { useRef } from "react";

function Header() {
  const menuRef = useRef(null);

  const hamburger = () => {
    if (menuRef.current) {
      menuRef.current.style.display = menuRef.current.style.display === "none" ? "flex" : "none";
    }
  };

  return (
    <header>
      <div className="logo-name">Rajiv</div>

      <nav id="menu" ref={menuRef}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="hamburger-menu" onClick={hamburger}>
        <img src="assets/burger-bar.png" alt="Menu" />
      </div>
    </header>
  );
}

export default Header;
