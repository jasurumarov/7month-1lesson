import React from 'react'
// IMAGES
import Social1 from '../../images/social1.svg'
import Social2 from '../../images/social2.svg'
import Social3 from '../../images/social3.svg'
import Social4 from '../../images/social4.svg'
import Social5 from '../../images/social5.svg'
import Logo from '../../images/footer-logo.svg'
import App1 from '../../images/footer-app1.svg'
import App2 from '../../images/footer-app2.svg'
import Payments from '../../images/payments.svg'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineHeadphones } from 'react-icons/md'
import { LiaTelegram } from 'react-icons/lia'
import { LuClock4 } from 'react-icons/lu'
import { Link, useLocation } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
    let {pathname} = useLocation()
    if(pathname.includes("/register") || pathname.includes("/admin")){
        return <></>
    }
  return (
    <footer>
        <div className="container">
            <div className="footer__content">
                <div className="footer__title">
                    <img src={Logo} alt="footer logo" />
                    <p className='footer__title-logo' >Awesome grocery store website template</p>
                    <ul>
                        <li>
                            <div>
                                <IoLocationOutline/>
                                <p><span>Address:</span> 5171 W Campbell Ave</p>
                            </div>
                            <p>undefined Kent, Utah 53127 United States</p>
                        </li>
                        <li>
                            <MdOutlineHeadphones />
                            <p><span>Call Us:</span>(+91) - 540-025-124553</p>
                        </li>
                        <li>
                            <LiaTelegram />
                            <p><span>Email:</span>sale@Nest.com</p>
                        </li>
                        <li>
                            <LuClock4 />
                            <p><span>Hours:</span>10:00 - 18:00, Mon - Sat</p>
                        </li>
                    </ul>
                </div>
                <div className="footer__nav">

                    <ul className="footer__nav-list">
                        <h3>Company</h3>
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                        <li>Support Center</li>
                        <li>Careers</li>
                    </ul>
                    <ul className="footer__nav-list">
                        <h3>Account</h3>
                        <Link to={'/register'}>Sign In</Link>
                        <li>View Cart</li>
                        <li>My Wishlist</li>
                        <li>Track My Order</li>
                        <li>Help Ticket</li>
                        <li>Shipping Details</li>
                        <li>Compare products</li>
                    </ul>
                </div>
                <div className="footer__nav">
                    <ul className="footer__nav-list">
                        <h3>Corporate</h3>
                        <li>About Us</li>
                        <li>Affiliate Program</li>
                        <li>Farm Business</li>
                        <li>Farm Careers</li>
                        <li>Our Suppliers</li>
                        <li>Accessibility</li>
                        <li>Promotions</li>
                    </ul>
                    <ul className="footer__nav-list">
                        <h3>Popular</h3>
                        <li>Milk & Flavoured Milk</li>
                        <li>Butter and Margarine</li>
                        <li>Eggs Substitutes</li>
                        <li>Marmalades</li>
                        <li>Sour Cream and Dips</li>
                        <li>Tea & Kombucha</li>
                        <li>Cheese</li>
                    </ul>
                    <div className="footer__nav-app">
                        <h3>Install App</h3>
                        <p>From App Store or Google Play</p>
                        <article>
                            <img src={App1} alt="play app" />
                            <img src={App2} alt="play app" />
                        </article>
                        <h5>Secured Payment Gateways</h5>
                        <img src={Payments} alt="payment methods" />
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p className='footer__bottom-desc'>© 2022, <span>Nest</span> - HTML Ecommerce Template <br /> All rights reserved</p>
                <div className="footer__bottom-calls">
                    <div className="footer__bottom-call">
                        <FiPhoneCall />
                        <article>
                            <h3>1900 - 6666</h3>
                            <p>Working 8:00 - 22:00</p>
                        </article>
                    </div>
                    <div className="footer__bottom-call">
                        <FiPhoneCall />
                        <article>
                            <h3>1900 - 6666</h3>
                            <p>Working 8:00 - 22:00</p>
                        </article>
                    </div>
                </div>
                <div className="footer__bottom-socials">
                    <div>
                        <h3>Follow Us</h3>
                        <article>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <img src={Social1} alt="social media" />
                            </a>
                            <a href="https://www.twitter.com/" target='_blank'>
                                <img src={Social2} alt="social media" />
                            </a>
                            <a href="https://www.instagram.com/" target='_blank'>
                                <img src={Social3} alt="social media" />
                            </a>
                            <a href="https://www.pinterest.com/" target='_blank'>
                                <img src={Social4} alt="social media" />
                            </a>
                            <a href="https://www.youtube.com/" target='_blank'>
                                <img src={Social5} alt="social media" />
                            </a>
                        </article>
                    </div>
                    <p>Up to 15% discount on your first subscribe</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer