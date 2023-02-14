import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import {MdMenuBook} from 'react-icons/md'

const Navbar = ({handleShow}) => {
    const [meanclose, setMeanclose] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const toggle = (f_state) => {
        f_state((e) => !e );
    }

  return (
    <header className="header-area gray-bg clearfix">
    <div className="header-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-6">
                    <div className="logo">
                        <Link href="/">
                            {/*<Image alt="" src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676039036/chifa/logo_mvuekn.png" width='152' height='38' /> */}
                            <Image alt=''
                            src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676265990/chifa/logo-2-light_wre4hs.png' 
                            fill={true}
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 col-6">
                    <div className="header-bottom-right">
                        <div className="main-menu">
                            <nav>
                                <ul>
                                    <li className="top-hover"><Link href="/" >Inicio</Link></li>

                                    <li><Link href="about">Quienes Somos</Link></li>

                                    <li><Link href="/">contactos</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-currency">
                            <button className='btn_view_card' onClick={handleShow}>
                                 <MdMenuBook/> <span>Ver carta</span>
                            </button>

                        </div>
                        <div className="header-cart">
                            <a href="#">
                                <div className="cart-icon">
                                    <Image width='24' height='24' alt='' src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676039449/chifa/shopping-cart_inb3fm.png"/>
                                </div>
                            </a>
                            {/*
                            <div className="shopping-cart-content">
                                <ul>
                                    <li className="single-shopping-cart">
                                        <div className="shopping-cart-img">
                                            <a href="#"><Image width='30' height='30' alt="" src="assets/img/cart/cart-1.jpg" /></a>
                                        </div>
                                        <div className="shopping-cart-title">
                                            <h4><a href="#">Phantom Remote </a></h4>
                                            <h6>Qty: 02</h6>
                                            <span>$260.00</span>
                                        </div>
                                        <div className="shopping-cart-delete">
                                            <a href="#"><Image width='30' height='30' alt='' src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676039449/chifa/close_eeqcwi.png"/></a>
                                        </div>
                                    </li>
                                    <li className="single-shopping-cart">
                                        <div className="shopping-cart-img">
                                            <a href="#"><Image width='30' height='30' alt="" src="assets/img/cart/cart-2.jpg" /></a>
                                        </div>
                                        <div className="shopping-cart-title">
                                            <h4><a href="#">Phantom Remote</a></h4>
                                            <h6>Qty: 02</h6>
                                            <span>$260.00</span>
                                        </div>
                                        <div className="shopping-cart-delete">
                                            <a href="#"><Image width='30' height='30' alt='' src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676039449/chifa/close_eeqcwi.png"/></a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="shopping-cart-total">
                                    <h4>Shipping : <span>$20.00</span></h4>
                                    <h4>Total : <span className="shop-total">$260.00</span></h4>
                                </div>
                                <div className="shopping-cart-btn">
                                    <a href="cart-page.html">view cart</a>
                                    <a href="checkout.html">checkout</a>
                                </div>
                            </div>
                            */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-area">
                <div className="mobile-menu mean-container">
                <div className="mean-bar"><a  onClick={() => toggle(setMeanclose)} className={meanclose ? "meanmenu-reveal meanclose" : "meanmenu-reveal"}   ><span></span><span></span><span></span></a>
                    <nav className="mean-nav">
                        <ul className={meanclose ? "menu-overflow active" : "menu-overflow"} >
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="about">Quienes Somos</Link></li>
                            <li><Link href="/"> Contactos </Link></li>
                        </ul>
                    </nav>
                </div>

                    <nav id="mobile-menu-active">
                        <ul className="menu-overflow">
                            <li><a href="#">HOME</a>
                                <ul>
                                    <li><a href="index.html">home version 1</a></li>
                                    <li><a href="index-2.html">home version 2</a></li>
                                </ul>
                            </li>
                            <li><a href="#">pages</a>
                                <ul>
                                    <li><a href="about-us.html">about us </a></li>
                                    <li><a href="shop.html">shop Grid</a></li>
                                    <li><a href="shop-list.html">shop list</a></li>
                                    <li><a href="product-details.html">product details</a></li>
                                    <li><a href="cart-page.html">cart page</a></li>
                                    <li><a href="checkout.html">checkout</a></li>
                                    <li><a href="wishlist.html">wishlist</a></li>
                                    <li><a href="my-account.html">my account</a></li>
                                    <li><a href="login-register.html">login / register</a></li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                            </li>
                            <li><a href="shop.html"> Shop </a>
                                <ul>
                                    <li><a href="#">Categoría 01</a>
                                        <ul>
                                            <li><a href="shop.html">Aconite</a></li>
                                            <li><a href="shop.html">Ageratum</a></li>
                                            <li><a href="shop.html">Allium</a></li>
                                            <li><a href="shop.html">Anemone</a></li>
                                            <li><a href="shop.html">Angelica</a></li>
                                            <li><a href="shop.html">Angelonia</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Categoría 02</a>
                                        <ul>
                                            <li><a href="shop.html">Balsam</a></li>
                                            <li><a href="shop.html">Baneberry</a></li>
                                            <li><a href="shop.html">Bee Balm</a></li>
                                            <li><a href="shop.html">Begonia</a></li>
                                            <li><a href="shop.html">Bellflower</a></li>
                                            <li><a href="shop.html">Bergenia</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Categoría 03</a>
                                        <ul>
                                            <li><a href="shop.html">Caladium</a></li>
                                            <li><a href="shop.html">Calendula</a></li>
                                            <li><a href="shop.html">Carnation</a></li>
                                            <li><a href="shop.html">Catmint</a></li>
                                            <li><a href="shop.html">Celosia</a></li>
                                            <li><a href="shop.html">Chives</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Categoría 04</a>
                                        <ul>
                                            <li><a href="shop.html">Daffodil</a></li>
                                            <li><a href="shop.html">Dahlia</a></li>
                                            <li><a href="shop.html">Daisy</a></li>
                                            <li><a href="shop.html">Diascia</a></li>
                                            <li><a href="shop.html">Dusty Miller</a></li>
                                            <li><a href="shop.html">Dame’s Rocket</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">BLOG</a>
                                {/*<ul>
                                    <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                    <li><a href="#">Blog Standard</a>
                                        <ul>
                                            <li><a href="blog-left-sidebar.html">left sidebar</a></li>
                                            <li><a href="blog-right-sidebar.html">right sidebar</a></li>
                                            <li><a href="blog-no-sidebar.html">no sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Post Types</a>
                                        <ul>
                                            <li><a href="blog-details-standerd.html">Standard post</a></li>
                                            <li><a href="blog-details-audio.html">audio post</a></li>
                                            <li><a href="blog-details-video.html">video post</a></li>
                                            <li><a href="blog-details-gallery.html">gallery post</a></li>
                                            <li><a href="blog-details-link.html">link post</a></li>
                                            <li><a href="blog-details-quote.html">quote post</a></li>
                                        </ul>
                                    </li>
                                </ul>*/}
                            </li>
                            <li><a href="contact.html"> Contact us </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Navbar
