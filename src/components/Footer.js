import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Page Links</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <div className='footer-link-items external'>
                        <h2>Links to Explore</h2>
                        <p><a href="https://noises.online" target="_blank">Noises Online - Ambient Noise</a></p>
                        <p><a href="https://www.mapcrunch.com" target="_blank">Random Street View</a></p>
                        <p><a href="https://quickdraw.withgoogle.com" target="_blank">Quick, Draw!</a></p>
                        <p><a href="https://unshorten.it" target="_blank">Unshorten.It</a></p>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Info</h2>
                        <p>Ray Vanderloop</p>
                        <p>rachelvanderloop@gmail.com</p>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img to='/' className='logo-img' src='images/logo-white.png'/>
                        </Link>
                    </div>
                    <small className='website-rights'>Ray Vanderloop, 2024</small>
                    <div className='social-icons'>
                        <div className='social-icon-link instagram'>
                            <a href='https://www.instagram.com/stella_and_kitty/'>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </div>
                        <div className='social-icon-link linkedin'>
                            <a href='https://www.linkedin.com/in/rachelvanderloop/'>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </div>
                        <div className='social-icon-link github'>
                            <a href='https://github.com/ray-vanderloop'>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;