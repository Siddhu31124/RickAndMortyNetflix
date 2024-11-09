import { LOGO_URL, ALT_TEXT } from "../../Constant";
import {
  actionButtonContainer,
  header,
  headerText,
  joinButton,
  logo,
  singInButton,
} from "./Styles";

//rename actionButton classname
const Header = () => {
  return (
    <header className={header}>
      <img src={LOGO_URL} alt={ALT_TEXT} className={logo} />
      <div className={actionButtonContainer}>
        <h1 className={headerText}>UNLIMITED TV SHOWS AND MOVIES</h1>
        <button className={joinButton}>Join Now</button>
        <button className={singInButton}>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
