import "bootstrap-icons/font/bootstrap-icons.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="mb-3 mb-md-0 text-muted">
              All rights reserved &copy; Zhanel Milliardova
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.instagram.com/ramen_77/"
              >
                <svg className="bi" width="24" height="24">
                  <FaInstagram />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://api.whatsapp.com/send/?phone=77717228216&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0"
              >
                <svg className="bi" width="24" height="24">
                  <FaWhatsapp />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.facebook.com/ramen77.astana/"
              >
                <svg className="bi" width="24" height="24">
                  <FaFacebook />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </footer>
  );
}
