import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light py-3 border-top mt-auto">
      <div className="container text-center">
        <p className="mb-0 text-muted">
          &copy; {currentYear} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;