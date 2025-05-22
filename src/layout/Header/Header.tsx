import ContactBar from "./components/ContactBar/ContactBar";
import DesktopHeader from "./components/DesktopHeader/DesktopHeader";
import MobileHeader from "./components/MobileHeader/MobileHeader";

const Header = () => {
  return (
    <div className="w-full font-montserrat">
      <div className="hidden xl:flex w-full *:px-10 *:md:px-48">
        <ContactBar />
      </div>
      <div className="hidden xl:flex w-full *:px-10 *:md:px-48">
        <DesktopHeader />
      </div>
      <div className="flex xl:hidden w-full">
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
