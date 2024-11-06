import React from 'react';
import { LAB_NAME } from '../constants';
import { Instagram, Twitter} from '../assets/Icons';

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 text-center align-middle">
      <div className="align-middle uppercase">{LAB_NAME}{"  "}<Instagram /> <Twitter /></div>
      <br />
      <p className="text-xs capitalize">© {LAB_NAME} Lab. 2024. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
