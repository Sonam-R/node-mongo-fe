import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 bottom-0 fixed">
        <nav>
          <a className="link link-hover">Services</a>
        </nav>
        <nav>
          <a className="link link-hover">About us</a>
        </nav>
        <nav>
          <a className="link link-hover">Terms of use</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
