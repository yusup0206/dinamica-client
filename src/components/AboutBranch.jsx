import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutBranch = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full px-5 sm:px-10 flex flex-col gap-5">
          <div className="text-center text-balance">
            <h1 className="text-primary-100 text-2xl sm:text-3xl font-semibold mb-2">
              About Us
            </h1>
            <p className="text-customBlack-100 text-sm sm:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              optio numquam officia corrupti similique nulla quasi odit minus
              ratione, laudantium in doloremque est necessitatibus maiores!
            </p>
          </div>
          <div className="px-4 py-8 bg-primary-100 rounded-md shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div className="flex gap-3 items-center justify-center">
                <FaClock className="text-white text-4xl sm:text-5xl" />
                <div className="text-white">
                  <h5 className="text-base sm:text-lg font-semibold">
                    Isleyan wagty
                  </h5>
                  <p className="text-sm sm:text-base">
                    Mon-Fri 8:00 to 20:00. Sat-Sun 9:00 to 23:00
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <FaPhoneAlt className="text-white text-4xl sm:text-5xl" />
                <div className="text-white">
                  <h5 className="text-base sm:text-lg font-semibold">
                    Isleyan wagty
                  </h5>
                  <p className="text-sm sm:text-base">
                    Mon-Fri 8:00 to 20:00. Sat-Sun 9:00 to 23:00
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full border-t-2 border-white pt-5 flex items-center justify-center gap-5">
              <Link to={'/home'}>
                <FaInstagram className="text-white text-4xl sm:text-5xl" />
              </Link>
              <Link to={'/home'}>
                <FaFacebookF className="text-white text-4xl sm:text-5xl" />
              </Link>
              <Link to={'/home'}>
                <FaWhatsapp className="text-white text-4xl sm:text-5xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBranch;
