import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "../MenuItems/MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // Set state
    state = { clicked: false };
  // Make Handleclick Function
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <nav className="NavbarItems">

        <a 
          href="/"
          className="navbar-logo">
          <h1>Mountain</h1>
        </a>
        
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link href="/" className={item.cName} to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
            
        </ul>
        
        <button>Sign Up</button>

        <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      
      </nav>
    );
  }
}

export default Navbar;