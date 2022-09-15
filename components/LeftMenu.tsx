import { Link } from "react-router-dom";
import "./LeftMenu.css";

function LeftMenu() {
  return (
    <div className="left-menu">
      <nav className="left-menu-nav">
        <ul className="left-menu_list">
          <Link to="/">
            <li className="left-menu_list-li">
              <img
                className="left-menu_list-li-icon"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968885.png"
                alt="medium-logo"
                width={40}
              />
            </li>

            <li className="left-menu_list-li">
              <img
                className="left-menu_list-li-icon"
                src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
                alt="home"
                width={40}
              />
            </li>
          </Link>
          <li className="left-menu_list-li">
            <img
              className="left-menu_list-li-icon"
              src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png"
              alt="notifications"
              width={40}
            />
          </li>
          <li className="left-menu_list-li">
            <img
              className="left-menu_list-li-icon"
              src="https://cdn-icons-png.flaticon.com/128/4406/4406149.png"
              alt="links"
              width={40}
            />
          </li>
          <li className="left-menu_list-li">
            <img
              className="left-menu_list-li-icon"
              src="https://cdn-icons-png.flaticon.com/128/3979/3979284.png"
              alt="stories"
              width={40}
            />
          </li>
          <li className="left-menu_list-li">
            <img
              className="left-menu_list-li-icon"
              src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
              alt="write"
              width={40}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LeftMenu;
