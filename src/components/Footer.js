import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

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
                    <div className='footer-link-items'>
                        <h2>Links to Explore</h2>
                        <Link to={{pathname: "https://noises.online"}} target="_blank">Noises Online - Ambient Noise</Link>
                        <Link to={{pathname: "https://www.mapcrunch.com"}} target="_blank">Random Street View</Link>
                        <Link to={{pathname: "https://quickdraw.withgoogle.com"}} target="_blank">Quick, Draw!</Link>
                        <Link to={{pathname: "https://unshorten.it"}} target="_blank">Unshorten.It</Link>
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
                    <small className='website-rights'>Ray Vanderloop, 2023</small>
                    <div className='social-icons'>
                        
                        <Link className='social-icon-link instagram'
                            to={{pathname: "https://www.instagram.com/stella_and_kitty/"}}
                            target='_blank'
                            aria-label='Instagram'>
                                <i className='fab fa-instagram'/>
                        </Link>
                        <Link className='social-icon-link linkedin'
                            to={{pathname: "https://www.linkedin.com/in/rachelvanderloop/"}}
                            target='_blank'
                            aria-label='LinkedIn'>
                                <i className='fab fa-linkedin'/>
                        </Link>
                        <Link className='social-icon-link github'
                            to={{pathname: "https://github.com/ray-vanderloop"}}
                            target='_blank'
                            aria-label='LinkedIn'>
                                <i className='fab fa-github'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;