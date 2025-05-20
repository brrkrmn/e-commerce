import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="border-2 w-full flex flex-col ">
      <div className="flex flex-col items-start gap-4 bg-[#FAFAFA] text-[#252B42] py-12 px-10 md:px-48 md:flex-row md:justify-between">
        <h3 className="font-montserrat font-bold text-2xl">Bandage</h3>
        <div className="flex items-center justify-start gap-6">
          <Link to="/home">
            <img
              className="w-7 h-7"
              src="/src/assets/icons/footer/facebook.svg"
              alt="Facebook logo"
            />
          </Link>
          <Link to="/home">
            <img
              className="w-7 h-7"
              src="/src/assets/icons/footer/instagram.svg"
              alt="Facebook logo"
            />
          </Link>
          <Link to="/home">
            <img
              className="w-7 h-7"
              src="/src/assets/icons/footer/twitter.svg"
              alt="Facebook logo"
            />
          </Link>
        </div>
      </div>
      <div>info</div>
      <div className="flex flex-col items-center justify-center bg-[#FAFAFA] text-[#737373] font-bold py-10 sm:text-md leading-6 font-montserrat tracking-wide md:justify-start md:flex-row md:gap-1 md:px-48 *:text-nowrap">
        <p>Made With Love By</p>
        <p>Finland All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;