import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-6">
      <div className='px-20 text-justify'>
        <p className="font-bold text-white text-5xl pt-5 pb-5">Our Mission</p>
        <p>Our mission is to bridge the gap between aspiring technology students and valuable industry opportunities by providing a platform that connects them with meaningful internships. We aim to empower students with hands-on experience, real-world exposure, and the chance to build professional networks that lay the foundation for their careers. By fostering partnerships with top organizations and tailoring our services to meet the needs of both students and companies, we strive to cultivate a future where every tech student has the opportunity to grow, innovate, and succeed in their chosen field.</p>
      </div>
      <div className="mt-12 text-center bg-[#0a0a0a]">
            <p className="text-white">
              You can also reach us directly at:{" "}
              <a href="mailto:talenxpro@gmail.com" className="text-blue-500 font-medium hover:underline">
                talenxpro@gmail.com
              </a>
            </p>
            <p className="text-white">
              Or call us at:{" "} <a href="tel:9652877034" className="text-blue-500 font-medium hover:underline">9652877034</a>
            </p>
          </div>
    </footer>
  );
};

export default Footer;
