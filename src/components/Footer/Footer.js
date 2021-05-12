import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <ul className="footer-block">
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                    <li>ACCESSIBILITY</li>
                    <li>CAREERS</li>
                    <li>REQUEST BROCHURE</li>
                    <li>NEWSLETTER SIGNUP</li>
                    <li>PRESS RELEASES</li>
                    <li>PRIVACY</li>
                    <li>CALIFORNIA PRIVACY</li>
                    <li>LEGAL</li>
                    <li>COOKIE CONSENT OPTIONS</li>
                </ul>
            </div>
            <div>
                <div>
                    <h1 className="footer-title">LEASING & FINANCE</h1>
                    <ul className="footer-li">
                        <li>APPLY FOR CREDIT</li>
                        <li>REWARD & FINANCE PROGRAMS</li>
                        <li>END OF LEASE OPTIONS</li>
                        <li>BUY OR LEASE QUIZ</li>
                    </ul>
                </div>
                <div>
                    <h1 className="footer-title">HELP & SUPPORT</h1>
                    <ul className="footer-li">
                        <li>ROADSIDE ASSISTANCE</li>
                        <li>BLUETOOTH</li>
                        <li>NAVIGATION</li>
                        <li>MAINTENANCE</li>
                        <li>SAFETY FAQ</li>
                        <li>WARRANTY</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="footer-title">OWNERS</h1>
                    <ul className="footer-li">
                        <li>OWNER BENEFITS</li>
                        <li>MOBILE PHONE APPS</li>
                        <li>PAY MY BILL</li>
                        <li>DRIVERS WEBSITE</li>
                        <li>SHOP ACCESSORIES</li>
                        <li>SHOP PARTS</li>
                    </ul>
                </div>
                <div>
                    <h1 className="footer-title">BRAND & LIFESTYLE</h1>
                    <ul className="footer-li">
                        <li>SEE FERRARI</li>
                        <li>FERRARI PERFORMANCE</li>
                        <li>MOTORSPORTS</li>
                        <li>TUNED CARS</li>
                        <li>SAFETY TECHNOLOGY</li>
                        <li>FERRARI HYBRIDS</li>
                        <li>FERRARI MERCHANDISE</li>
                        <li>FERRARI INTERNATIONAL</li>
                        <li>INTERSECT BY FERRARI – NYC</li>
                        <li>FERRARI LY 650 YACHT</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="footer-title">SERVICE & WARRANTY</h1>
                <ul className="footer-li">
                    <li>MAINTENANCE SCHEDULE</li>
                    <li>FIND A DEALER</li>
                    <li>WARRANTY COVERAGE</li>
                    <li>SERVICE BY FERRARI</li>
                    <li>FERRARI TIRE CENTER</li>
                </ul>
                <div className="footer-block2">
                    <InstagramIcon className="instagram" />
                    <FacebookIcon className="facebook" />
                    <TwitterIcon className="twiter" />
                    <YouTubeIcon className="youtube" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
