import ContactBar from "./components/ContactBar/ContactBar";
import DesktopHeader from "./components/DesktopHeader/DesktopHeader";
import MobileHeader from "./components/MobileHeader/MobileHeader";

const Header = () => {
  return (
    <div className="w-full font-montserrat">
      <div className="hidden xl:flex w-full *:px-10">
        <ContactBar />
      </div>
      <div className="hidden xl:flex w-full *:px-10 md:*:px-5 items-center justify-center max-w-[1400px] mx-auto">
        <DesktopHeader />
      </div>
      <div className="flex xl:hidden w-full">
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
