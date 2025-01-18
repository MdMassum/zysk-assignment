import React from "react";
import logo from '../assets/logo.png'

const Footer = () => {

  const footerData = [
    {
      title: "Product",
      links: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      title: "Company",
      links: [
        "About us",
        "Careers",
        "Press",
        "News",
        "Media kit",
        "Contact",
      ],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorials",
        "Support",
      ],
    },
    {
      title: "Use cases",
      links: [
        "Startups",
        "Enterprise",
        "Government",
        "SaaS centre",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    {
      title: "Social",
      links: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "GitHub",
        "AngelList",
        "Dribbble",
      ],
    },
    {
      title: "Legal",
      links: [
        "Terms",
        "Privacy",
        "Cookies",
        "Licenses",
        "Setting",
        "Contact",
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 py-5 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {link}{" "}
                  {link === "Solutions" && (
                    <span className="text-green-600 text-xs">New</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start md:items-center text-gray-500 text-xs mt-6 mx-3 md:mx-16 border-t border-gray-300">
        <img src={logo} alt="logo" className="mt-3 w-20"/>
        <p>© 2077 zysktechnologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
