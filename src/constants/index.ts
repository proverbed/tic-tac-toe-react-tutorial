import { FiHome } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { GoPerson } from "react-icons/go";

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "#",
    sectionId: '#home-section',
    icon: FiHome
  },
  {
    id: "projects",
    label: "Projects",
    href: "#",
    sectionId: "#projects-section",
    icon: MdWork
  },
  {
    id: "about",
    label: "About",
    href: "#",
    sectionId: "#about-section",
    icon: GoPerson
  },
  {
    id: "contact",
    label: "Contact",
    href: "#",
    sectionId: "#contact-section",
    icon: FaPhone
  }
];

export default navItems;
