import React from 'react';
import { useContent } from '../contexts/ContentContext';

const Footer: React.FC = () => {
  const { content } = useContent();
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-6 md:px-12 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} {content.footer.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
