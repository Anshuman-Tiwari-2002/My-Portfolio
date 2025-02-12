import { format } from "date-fns";

const Footer = () => (
  <div id="footer" className="mb-16 text-xs leading-loose opacity-30">
    {/* Licensed under MIT. */}
    <br />
  <center> © {format(new Date(), "yyyy")}   Made with Love ❤️</center>
  </div>
);

export default Footer;
