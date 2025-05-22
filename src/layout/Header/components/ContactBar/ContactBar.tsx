import { Mail, Phone } from "lucide-react";
import { Link } from "react-router";
import { socialLinks } from "./constants";

const ContactBar = () => {
  return (
    <div className="w-full bg-dark-blue text-white text-sm font-medium tracking-wide py-4 flex items-center justify-between">
      <div className="flex items-center justify-start gap-6">
        <div className="flex items-center justify-start gap-1">
          <Phone className="w-4 h-4" />
          <p>(225) 555-0118</p>
        </div>
        <div className="flex items-center justify-start gap-1">
          <Mail className="w-4 h-4" />
          <p>rivera@example.com</p>
        </div>
      </div>
      <p>Follow Us and get a chance to win 80% off</p>
      <div className="flex items-center justify-start gap-3">
        <p>Follow Us :</p>
        <div className="flex items-center justify-start gap-3 *:w-5 *:h-5">
          {socialLinks.map((link) => (
            <Link to={link.address} className="*:stroke-[1.5px]">
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactBar;