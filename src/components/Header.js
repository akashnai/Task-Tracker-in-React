import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      {/* for custom css  */}
      {/* <h1 style={ headingStyle }>{title}</h1> */}

      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// //setting css in react
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black',
// }

export default Header;
