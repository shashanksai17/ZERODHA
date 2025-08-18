import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          {/* Added consistent heading to match other columns */}

          <img
            className="mb-4"
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "150px", maxWidth: "100%" }}
          />
          <p className="text-muted mb-3">
            &copy; 2010 - 2025, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>
          {/* Enhanced social media icons with proper spacing */}
          <div className="social-icons d-flex justify-content-start mb-3">
            <a
              href="https://www.facebook.com/zerodhatrading"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i
                className="fa fa-facebook-square text-muted fs-4"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://www.instagram.com/zerodhaonline/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i
                className="fa fa-instagram text-muted fs-4"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/company/zerodha"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i
                className="fa fa-linkedin text-muted fs-4"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://www.youtube.com/zerodha"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i
                className="fa fa-youtube text-muted fs-4"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://twitter.com/zerodhaonline"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i
                className="fa fa-twitter text-muted fs-4"
                aria-hidden="true"
              ></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa fa-whatsapp text-muted fs-4"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>

        <div className="col">
          <h5 className="mt-4">Account</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a
                href="/account/demat"
                className="text-muted text-decoration-none"
              >
                Open demat account
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/account/minor"
                className="text-muted text-decoration-none"
              >
                Minor demat account
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/account/nri"
                className="text-muted text-decoration-none"
              >
                NRI demat account
              </a>
            </li>
            <li className="mb-2">
              <a href="/commodity" className="text-muted text-decoration-none">
                Commodity
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/dematerialisation"
                className="text-muted text-decoration-none"
              >
                Dematerialisation
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/fund-transfer"
                className="text-muted text-decoration-none"
              >
                Fund transfer
              </a>
            </li>
            <li className="mb-2">
              <a href="/mtf" className="text-muted text-decoration-none">
                MTF
              </a>
            </li>
            <li className="mb-2">
              <a href="/referral" className="text-muted text-decoration-none">
                Referral program
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5 className="mt-3">Support</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a
                href="/support/contact"
                className="text-muted text-decoration-none"
              >
                Contact us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/support/portal"
                className="text-muted text-decoration-none"
              >
                Support portal
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/support/complaint"
                className="text-muted text-decoration-none"
              >
                How to file a complaint?
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/support/status"
                className="text-muted text-decoration-none"
              >
                Status of your complaints
              </a>
            </li>
            <li className="mb-2">
              <a href="/bulletin" className="text-muted text-decoration-none">
                Bulletin
              </a>
            </li>
            <li className="mb-2">
              <a href="/circular" className="text-muted text-decoration-none">
                Circular
              </a>
            </li>
            <li className="mb-2">
              <a href="/blog" className="text-muted text-decoration-none">
                Z-Connect blog
              </a>
            </li>
            <li className="mb-2">
              <a href="/downloads" className="text-muted text-decoration-none">
                Downloads
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5 className="mb-3">Company</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/about" className="text-muted text-decoration-none">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="/philosophy" className="text-muted text-decoration-none">
                Philosophy
              </a>
            </li>
            <li className="mb-2">
              <a href="/press" className="text-muted text-decoration-none">
                Press & media
              </a>
            </li>
            <li className="mb-2">
              <a href="/careers" className="text-muted text-decoration-none">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="/csr" className="text-muted text-decoration-none">
                Zerodha Cares (CSR)
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://zerodha.tech"
                className="text-muted text-decoration-none"
              >
                Zerodha.tech
              </a>
            </li>
            <li className="mb-2">
              <a href="/opensource" className="text-muted text-decoration-none">
                Open source
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5 className="mb-4">Quick links</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/ipo" className="text-muted text-decoration-none">
                Upcoming IPOs
              </a>
            </li>
            <li className="mb-2">
              <a href="/charges" className="text-muted text-decoration-none">
                Brokerage charges
              </a>
            </li>
            <li className="mb-2">
              <a href="/holidays" className="text-muted text-decoration-none">
                Market holidays
              </a>
            </li>
            <li className="mb-2">
              <a href="/calendar" className="text-muted text-decoration-none">
                Economic calendar
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/calculators"
                className="text-muted text-decoration-none"
              >
                Calculators
              </a>
            </li>
            <li className="mb-2">
              <a href="/markets" className="text-muted text-decoration-none">
                Markets
              </a>
            </li>
            <li className="mb-2">
              <a href="/sectors" className="text-muted text-decoration-none">
                Sectors
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-muted text-small ">
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
      </p>
      <p className="text-muted text-small ">
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
      </p>
      <p className="text-muted text-small ">
        Investments in securities market are subject to market risks; read all the related documents carefully before investing.

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
      </p>
      <p className="text-muted text-small ">
        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
      </p>

    
    </div>
    </footer>
  );
}

export default Footer;
