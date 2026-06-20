import { format } from "date-fns";
const Footer = () => (
  <footer id="footer" className=" py-6 text-center text-sm text-muted opacity-60">
    © {format(new Date(), "yyyy")} • Built by Anshuman Tiwari
  </footer>
);

export default Footer;
