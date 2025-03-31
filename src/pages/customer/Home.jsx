import { NavLink } from "react-router"
import Footer from "../../component/customer/Footer"
import Header from "../../component/customer/Header"

function Home() {
    return (
        <>
            <div>
                {/* Main Wrapper Start */}
                <div id="scroll-container">
                    {/* HEADER MENU START */}
                    <Header/>
                    {/* HEADER MENU END */}
                    {/* HERO BANNER START */}
                    <section className="hero-banner">
                        <div className="container-fluid">
                            <div className="row align-items-center row-gap-4">
                                <div className="col-md-6">
                                    <div className="row align-items-center row-gap-4 justify-content-between">
                                        <div className="order-xl-1 order-2">
                                            <div className="hero-text mb-32">
                                                <h1 className="medium-black mb-20">Delight in Every Bite at<span className="color-ter">“Savory
                                                    Bites”</span></h1>
                                                <p className="light-gray mb-20">
                                                    Lorem ipsum dolor sit amet consectetur. Sed euismod justo<br /> volutpat malesuada. Purus in
                                                    pellentesque a convallis morbi <br />convallis.
                                                </p>
                                                <p className="fw-500 color-ter-5 mb-20">INGREDIANTS</p>
                                            </div>
                                            <div className="veg-icon d-flex gap-16 mb-32">
                                                <img className="veg-icon-1" src="/savory/assets/media/hero/tomato.png" alt />
                                                <img className="veg-icon-2" src="/savory/assets/media/hero/pepper.png" alt />
                                                <img className="veg-icon-3" src="/savory/assets/media/hero/cabbage.png" alt />
                                                <img className="veg-icon-4" src="/savory/assets/media/hero/onion.png" alt />
                                                <div className="hero-icon">
                                                    <p className="fw-600 white">+3</p>
                                                </div>
                                            </div>
                                            <NavLink className="cus-btn" to="/register">
                                                <span className="text">order now</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className>
                                        <img src="/savory/assets/media/hero/hero-image.png" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* HERO BANNER END */}
                    {/* About Section START */}
                    <section className="about-us py-80">
                        <div className="container-fluid">
                            <div className="row align-items-center row-gap-4">
                                <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-0 order-lg-0 order-2">
                                    <img className src="/savory/assets/media/about/about-img-1.png" alt />
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <span className="eyebrow about-btn bg-primary br-12 white mb-6">about us</span>
                                    <h2 className="medium-black mb-24">Juicy Burgers,<br /> Unmatched Flavor</h2>
                                    <p className="light-gray mb-24">
                                        Lorem ipsum dolor sit amet consectetur. Sed euismod justo<br /> volutpat malesuada. Purus in
                                        pellentesque a convallis morbi <br />convallis.
                                    </p>
                                    <ul className="dark-gray fw-600 d-flex gap-64 mb-16">
                                        <li>Locally-Sourced Beef</li>
                                        <li>Organic Ingredients</li>
                                    </ul>
                                    <ul className="dark-gray fw-600 d-flex gap-64 mb-48">
                                        <li>Sustainable Practices</li>
                                        <li>Custom Blend</li>
                                    </ul>
                                    <NavLink className="cus-btn bg-color-ter mb-6" to="/about">learn more</NavLink>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About Section END */}
                    {/* MENU Section START */}
                    <section className="menu-section mb-80">
                        <div className="row g-0 align-items-center">
                            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 order-1">
                                <div className="first-menu">
                                    <div className>
                                        <h2 className="mb-32 white">Sand-<br />wiches</h2>
                                        <p className="mb-32 white">Lorem ipsum dolor sit amet<br /> consectetur. Sed euismod justo <br />volutpat
                                            malesuada.
                                            Purus in<br /> pellentesque.</p>
                                        <NavLink className="cus-btn bg-medium-black white " to="/customer/menu">view menu</NavLink>
                                    </div>
                                    <div className="menu-1-img">
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 order-2">
                                <div className="first-menu-2">
                                    <div className>
                                        <h2 className="mb-32 white">Grill<br />house</h2>
                                        <p className="mb-32 white">Lorem ipsum dolor sit amet<br /> consectetur. Sed euismod justo <br />volutpat
                                            malesuada.
                                            Purus in<br /> pellentesque.</p>
                                        <NavLink className="cus-btn menu-cus-btn bg-medium-black white " to="/customer/menu">view menu</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-6 col-md-6 order-3">
                                <div className="first-menu-3">
                                    <div className>
                                        <h2 className="mb-32 white">Snap <br />Burgers</h2>
                                        <p className="mb-32 white">Lorem ipsum dolor sit amet<br /> consectetur. Sed euismod justo <br />volutpat
                                            malesuada.
                                            Purus in<br /> pellentesque.</p>
                                        <NavLink className="cus-btn bg-medium-black white " to="/customer/menu">view menu</NavLink>
                                    </div>
                                    <div className="menu-1-img">
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-8 col-md-8 order-xxl-4 order-5">
                                <div className="first-menu-4 h-100">
                                    <div className>
                                        <h2 className="mb-32 white">Hot<br />dogs</h2>
                                        <p className="mb-32 white">Lorem ipsum dolor sit amet<br /> consectetur. Sed euismod justo <br />volutpat
                                            malesuada.
                                            Purus in<br /> pellentesque.</p>
                                        <NavLink className="cus-btn bg-medium-black white " to="/customer/menu">view menu</NavLink>
                                    </div>
                                    <div className="menu-1-img">
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-6 col-md-6  order-xxl-5 order-4">
                                <div className="first-menu-5">
                                    <div className>
                                        <h2 className="mb-32 white">Cheese <br />Burger</h2>
                                        <p className="mb-32 white">Lorem ipsum dolor sit amet<br /> consectetur. Sed euismod justo <br />volutpat
                                            malesuada.
                                            Purus in<br /> pellentesque.</p>
                                        <NavLink className="cus-btn menu-cus-btn bg-medium-black white " to="/customer/menu">view menu</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-md-4 order-6">
                                <div className="redirect-link">
                                    <div>
                                        <h3 className="text-center mb-32">and<br />much<br />more.</h3>
                                        <div className="d-flex justify-content-center">
                                            <NavLink to="/customer/menu" className="menu-button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 19 19" fill="none">
                                                    <path d="M17.5266 12.3423C15.0904 9.90614 14.1159 4.3841 16.7145 1.78549M16.7145 1.78549C15.2257 3.27428 11.0301 5.84582 6.15768 0.973428M16.7145 1.78549L1.28529 17.2147" stroke="#FAFAFA" strokeWidth="2.29687" />
                                                </svg>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* MENU Section END */}
                    {/* ingredients Section START */}
                    <section className="ingredient-sec mb-80">
                        <div className="container-fluid">
                            <div className="text-center mb-48">
                                <span className="eyebrow about-btn bg-ter br-12 white mb-6">ingredients</span>
                                <h2 className="medium-black">best quality<br />ingredients</h2>
                            </div>
                            <div className="row row-gap-4 align-items-center">
                                <div className="col-xl-3 offset-xl-0 offset-xl-0 col-md-3 offset-md-0">
                                    <div className="ingredients-content">
                                        <div className="mb-64">
                                            <h5 className="color-ter mb-24">artisan<br />buns</h5>
                                            <div className="d-flex align-items-center light-gray gap-6">
                                                <div className="ingredients-ul" />
                                                <p className="mb-4p light-gray">Available Gluten-Free</p>
                                            </div>
                                            <div className="d-flex align-items-center light-gray gap-8">
                                                <div className="ingredients-ul" />
                                                <p className="light-gray">Made Cecally</p>
                                            </div>
                                        </div>
                                        <div className="quality-text">
                                            <h5 className="color-ter-5 mb-24">ground<br />beef</h5>
                                            <div className="d-flex align-items-center light-gray gap-6">
                                                <div className="ingredients-ul" />
                                                <p className="mb-4p light-gray">Signature Blended Beef</p>
                                            </div>
                                            <div className="d-flex align-items-center light-gray gap-6">
                                                <div className="ingredients-ul" />
                                                <p className="light-gray">Never Frozen</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src="/savory/assets/media/ingredients/burger-ingredients.png" alt />
                                </div>
                                <div className="col-xxl-3 offset-xxl-0 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0  col-md-3 offset-md-0">
                                    <div className="ingredients-content-2">
                                        <div className="mb-64">
                                            <h5 className="color-quat mb-24 text-end">fresh<br />produce</h5>
                                            <div className="d-flex align-items-center justify-content-end light-gray gap-8">
                                                <p className="mb-4p light-gray">Made Fresh Everyday</p>
                                                <div className="ingredients-ul" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-end light-gray gap-8">
                                                <p className="light-gray">Hand-Tossed</p>
                                                <div className="ingredients-ul" />
                                            </div>
                                        </div>
                                        <div className="quality-right-text quality-text-1">
                                            <h5 className="color-primary mb-24 text-end">ground<br />turkey</h5>
                                            <div className="d-flex align-items-center justify-content-end light-gray gap-8">
                                                <p className="mb-4p fw-400 light-gray">Ground Fresh</p>
                                                <div className="ingredients-ul" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-end light-gray gap-8">
                                                <p className="light-gray">Never Frozen</p>
                                                <div className="ingredients-ul" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ingredients Section END */}
                    {/* customers favorite  Us START */}
                    <section className="cus-favorite mb-80 py-40">
                        <div className="text-center">
                            <span className="eyebrow about-btn bg-sec br-12 white mb-6">favorites</span>
                            <h2 className="mb-48">customers favorite </h2>
                        </div>
                        <div className="burger-slider">
                            <div className="box-1">
                                <div className="img-box">
                                    <img src="/savory/assets/media/cus-favorite/burger-2.png" alt />
                                </div>
                                <div className="content-box">
                                    <p className="content-text fw-600 mb-6">Special</p>
                                    <a href="menu.html" className="h5 content-text-1 mb-24">Burger with Bacon</a>
                                    <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce, Pinkles and Red Onion.
                                    </p>
                                    <hr className="content-text mb-24" />
                                    <h4 className="content-text mb-32">$10.99</h4>
                                    <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                </div>
                            </div>
                            <div className="box-1">
                                <div className="img-box">
                                    <img src="/savory/assets/media/cus-favorite/burger-3.png" alt />
                                </div>
                                <div className="content-box">
                                    <p className="fw-600 content-text mb-6">Special</p>
                                    <a href="menu.html" className="h5 content-text-1 mb-24">Crunch Grillhouse</a>
                                    <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce, Pinkles and Red Onion.
                                    </p>
                                    <hr className=" content-text mb-24" />
                                    <h4 className="content-text mb-32">$12.99</h4>
                                    <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                </div>
                            </div>
                            <div className="box-1">
                                <div className="img-box">
                                    <img src="/savory/assets/media/cus-favorite/burger-4.png" alt />
                                </div>
                                <div className="content-box">
                                    <p className="fw-600 content-text mb-6">Special</p>
                                    <a href="menu.html" className="h5 content-text-1 mb-24">Sizzle Snap Burgers</a>
                                    <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce, Pinkles and Red Onion.
                                    </p>
                                    <hr className="content-text mb-24" />
                                    <h4 className="content-text mb-32">$16.99</h4>
                                    <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                </div>
                            </div>
                            <div className="box-1">
                                <div className="img-box">
                                    <img src="/savory/assets/media/cus-favorite/burger-5.png" alt />
                                </div>
                                <div className="content-box">
                                    <p className="fw-600 content-text mb-6">Special</p>
                                    <a href="menu.html" className="h5 content-text-1 mb-24">Hamburger cheese</a>
                                    <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce, Pinkles and Red Onion.
                                    </p>
                                    <hr className="content-text mb-24" />
                                    <h4 className="content-text mb-32">$10.99</h4>
                                    <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                </div>
                            </div>
                            <div className="box-1">
                                <div className="img-box">
                                    <img src="/savory/assets/media/cus-favorite/burger-1.png" alt />
                                </div>
                                <div className="content-box">
                                    <p className="fw-600 content-text mb-6">Special</p>
                                    <a href="menu.html" className="h5 content-text-1 mb-24">Petti Burger</a>
                                    <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce, Pinkles and Red Onion.
                                    </p>
                                    <hr className="content-text mb-24" />
                                    <h4 className="content-text mb-32">$11.99</h4>
                                    <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* customers favorite  Us END */}
                    {/* BANNER SECTION START */}
                    <section className="banner-1 py-80 mb-80">
                        <div className="container-fluid">
                            <h1 className="color-ter mb-6">family</h1>
                            <h4 className="mb-16 white">is rich with flavor. it’s people<br />
                                that surrounding us with gratitude,<br />
                                <span className="color-ter-5">satisfy the soul.</span>
                            </h4>
                            <p className="mb-32 lightest-gray">Lorem ipsum dolor sit amet consectetur. Sed euismod justo<br /> volutpat malesuada.
                                Purus in
                                pellentesque a convallis morbi<br /> convallis.</p>
                            <h6 className="mb-24 white">what is important for us?</h6>
                            <div className="banner-elements">
                                <div className="d-flex gap-24 align-items-center">
                                    <img className="banner-icon" src="/savory/assets/media/vector/meat.png" alt />
                                    <h6 className="light-gray">precisely selected<br />meat the best<br />breeders</h6>
                                </div>
                                <div className="d-flex gap-24 align-items-center">
                                    <img className="banner-icon" src="/savory/assets/media/vector/leave.png" alt />
                                    <h6 className="light-gray">only natural<br />products from<br />local farmers</h6>
                                </div>
                                <div className="d-flex gap-24 align-items-center">
                                    <img className="banner-icon" src="/savory/assets/media/vector/repeat.png" alt />
                                    <h6 className="light-gray">we use only<br />biodegradable<br />packing</h6>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* BANNER SECTION END */}
                    {/* OUR TEAM Section START */}
                    <section className="team-sec  py-80">
                        <div className>
                            <div className="text-center mb-48">
                                <span className="eyebrow about-btn bg-color-quat br-12 white mb-6">our team</span>
                                <h2 className>our professionals</h2>
                            </div>
                            <div className="team-member">
                                <div className="our-teams">
                                    <div className="team-1">
                                        <div className="team-img">
                                            <img className src="/savory/assets/media/our-team/team-1.png" alt />
                                        </div>
                                        <div className="team-content">
                                            <p className="team-text fw-600 mb-6">Maker</p>
                                            <h6 className="mb-16 team-text">Emily Brooks</h6>
                                            <p className="team-text">Lorem ipsum dolor sit amet<br /> consectetur. Sed euismod <br />justo volutpat
                                                malesuada.
                                            </p>
                                            <hr className="varticle-line mb-16 mt-16 white" />
                                            <div className="social-icon">
                                                <a href="#" className>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g clipPath="url(#clip0_21540_1716)">
                                                            <path d="M17.6249 6.20312C18.0131 6.20312 18.3281 5.88812 18.3281 5.5V1.28125C18.3281 0.893125 18.0131 0.578125 17.6249 0.578125H13.4062C10.6921 0.578125 8.48431 2.78594 8.48431 5.5V9.01562H6.37494C5.98681 9.01562 5.67181 9.33063 5.67181 9.71875V13.9375C5.67181 14.3256 5.98681 14.6406 6.37494 14.6406H8.48431V23.875C8.48431 24.2631 8.79931 24.5781 9.18744 24.5781H13.4062C13.7943 24.5781 14.1093 24.2631 14.1093 23.875V14.6406H16.9218C17.2654 14.6406 17.5588 14.3922 17.6156 14.0533L18.3187 9.83453C18.3524 9.63062 18.2953 9.42203 18.1617 9.26406C18.0281 9.10656 17.8317 9.01562 17.6249 9.01562H14.1093V6.20312H17.6249ZM13.4062 10.4219H16.7948L16.326 13.2344H13.4062C13.0181 13.2344 12.7031 13.5494 12.7031 13.9375V23.1719H9.89056V13.9375C9.89056 13.5494 9.57556 13.2344 9.18744 13.2344H7.07806V10.4219H9.18744C9.57556 10.4219 9.89056 10.1069 9.89056 9.71875V5.5C9.89056 3.56172 11.4679 1.98438 13.4062 1.98438H16.9218V4.79688H13.4062C13.0181 4.79688 12.7031 5.11188 12.7031 5.5V9.71875C12.7031 10.1069 13.0181 10.4219 13.4062 10.4219Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(-1.52588e-05 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M14.242 10.7405L22.9844 0.578125H20.9127L13.3217 9.40196L7.25875 0.578125H0.265854L9.43422 13.9213L0.265854 24.5781H2.33765L10.354 15.2599L16.7569 24.5781H23.7498L14.2415 10.7405H14.242ZM11.4044 14.0389L10.4754 12.7102L3.08414 2.13773H6.26629L12.2312 10.6701L13.1601 11.9987L20.9137 23.0894H17.7316L11.4044 14.0394V14.0389Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(-1.52588e-05 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M12.2362 24.5781C12.1567 24.5781 12.0773 24.5781 11.9973 24.5777C10.116 24.5823 8.37781 24.5345 6.68738 24.4316C5.13757 24.3373 3.7229 23.8017 2.59607 22.8829C1.50879 21.9963 0.766296 20.7975 0.389282 19.3202C0.0611572 18.034 0.0437622 16.7715 0.0270996 15.5504C0.0150146 14.6742 0.00256348 13.636 0 12.5803C0.00256348 11.5201 0.0150146 10.4819 0.0270996 9.60571C0.0437622 8.38476 0.0611572 7.12225 0.389282 5.83593C0.766296 4.35864 1.50879 3.15984 2.59607 2.27325C3.7229 1.35442 5.13757 0.818841 6.68756 0.724542C8.37799 0.62182 10.1166 0.573846 12.0018 0.578424C13.8836 0.574396 15.6213 0.62182 17.3117 0.724542C18.8615 0.818841 20.2762 1.35442 21.403 2.27325C22.4905 3.15984 23.2328 4.35864 23.6098 5.83593C23.9379 7.12206 23.9553 8.38476 23.972 9.60571C23.9841 10.4819 23.9967 11.5201 23.9991 12.5759V12.5803C23.9967 13.636 23.9841 14.6742 23.972 15.5504C23.9553 16.7714 23.9381 18.0339 23.6098 19.3202C23.2328 20.7975 22.4905 21.9963 21.403 22.8829C20.2762 23.8017 18.8615 24.3373 17.3117 24.4316C15.6929 24.5301 14.0299 24.5781 12.2362 24.5781ZM11.9973 23.0912C13.8479 23.0956 15.5471 23.0487 17.1978 22.9484C18.3697 22.8772 19.752 22.1085 20.5844 21.4297C21.3538 20.8022 21.8837 19.9365 22.1593 18.8566C22.4325 17.7859 22.4482 16.6364 22.4634 15.5248C22.4753 14.6545 22.4878 13.6236 22.4903 12.5781C22.4878 11.5323 22.4753 10.5016 22.4634 9.63134C22.4482 8.51971 22.4325 7.37017 22.1593 6.29937C21.8837 5.21941 21.3538 4.35369 20.5844 3.72619C19.752 3.0476 18.3697 2.30144 17.1978 2.23021C15.5471 2.12969 13.8479 2.08336 12.0016 2.08739C10.1514 2.08299 8.45196 2.13519 6.80127 2.23571C5.62939 2.30694 4.37526 2.80952 3.54286 3.48811C2.77346 4.11561 2.10105 5.21941 1.82548 6.29937C1.55229 7.37017 1.53654 8.51952 1.52134 9.63134C1.50944 10.5024 1.49699 11.5338 1.49443 12.5803C1.49699 13.6221 1.50944 14.6537 1.52134 15.5248C1.53654 16.6364 1.55229 17.7859 1.82548 18.8566C2.10105 19.9365 2.63096 20.8022 3.40037 21.4297C4.23277 22.1083 5.62939 22.8772 6.80127 22.9484C8.45196 23.0489 10.1517 23.0958 11.9973 23.0912ZM11.9526 18.4374C8.72186 18.4374 6.0932 15.809 6.0932 12.5781C6.0932 9.34716 8.72186 6.71868 11.9526 6.71868C15.1835 6.71868 17.8119 9.34716 17.8119 12.5781C17.8119 15.809 15.1835 18.4374 11.9526 18.4374ZM12.0016 8.08301C9.36718 8.08301 7.51314 9.93705 7.51314 12.5759C7.51314 14.7728 9.17436 17.0911 11.9757 17.0911C14.1728 17.0911 16.457 15.0097 16.457 12.5759C16.457 10.379 14.781 8.08301 12.0016 8.08301ZM18.4682 4.84368C17.6916 4.84368 17.0619 5.4732 17.0619 6.24993C17.0619 7.02667 17.6916 7.65618 18.4682 7.65618C19.2449 7.65618 19.8744 7.02667 19.8744 6.24993C19.8744 5.4732 19.2449 4.84368 18.4682 4.84368Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(0 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#" className="social-icon-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M8.78343 24.583C7.29093 24.583 5.83171 24.0622 4.6753 23.1162C3.15655 21.8741 2.28561 20.0403 2.28561 18.0851C2.28561 16.6611 2.73843 15.3083 3.59483 14.1734C4.42171 13.078 5.59827 12.2572 6.90796 11.863C8.07843 11.5105 9.31265 12.0959 9.77811 13.2251C9.80811 13.2973 9.83436 13.3723 9.85686 13.4464C10.0392 14.052 9.97499 14.6923 9.67593 15.2492C9.37686 15.8061 8.87858 16.2134 8.27296 16.3958C7.53515 16.618 7.01999 17.3126 7.01999 18.0851C7.01999 18.7025 7.35093 19.2833 7.8839 19.6011C8.17827 19.7769 8.51577 19.8617 8.8603 19.8472C9.80624 19.8069 10.5473 19.017 10.5473 18.0486V2.97265C10.5473 1.89265 11.2636 0.940617 12.2887 0.657961C12.4017 0.626554 12.518 0.604054 12.6333 0.590461C12.8475 0.564679 13.0645 0.568898 13.2787 0.601711C14.0953 0.723117 14.7989 1.27296 15.1158 2.03702C15.2353 2.3253 15.2958 2.62999 15.2958 2.94265C15.2958 4.19562 15.8653 5.35765 16.8586 6.13062C17.5692 6.68374 18.4205 6.97812 19.32 6.9814C20.2861 6.98468 21.15 7.56077 21.5212 8.44905C21.6834 8.83812 21.7378 9.26562 21.6778 9.68562C21.5114 10.8448 20.4914 11.7158 19.3026 11.7158C19.2984 11.7158 19.2947 11.7158 19.2905 11.7158C17.8781 11.7087 16.5136 11.3684 15.2817 10.723V18.0964C15.2817 18.1039 15.2817 18.1114 15.2812 18.1194C15.2705 20.0464 14.4117 21.8567 12.9244 23.0891C11.7619 24.0523 10.2914 24.583 8.78343 24.583ZM7.59327 13.1675C7.50046 13.1675 7.40624 13.1811 7.31296 13.2092C6.28686 13.5181 5.36483 14.1617 4.71702 15.0205C4.04624 15.9092 3.69186 16.9691 3.69186 18.0851C3.69186 19.6166 4.37483 21.0537 5.56593 22.0278C6.47202 22.7689 7.61483 23.1767 8.78343 23.1767C9.96421 23.1767 11.1164 22.7609 12.0267 22.0062C13.1953 21.0378 13.8689 19.6161 13.875 18.1053C13.875 18.1001 13.875 18.0941 13.8755 18.087V8.07218L14.9939 8.89062C16.2516 9.81124 17.7398 10.3016 19.2975 10.3095H19.3026C19.7962 10.3095 20.2181 9.95655 20.2856 9.4864C20.31 9.31483 20.2894 9.14843 20.2237 8.9914C20.0733 8.63187 19.7086 8.38905 19.3153 8.38765C18.1017 8.38343 16.9533 7.9864 15.9951 7.24015C14.6573 6.19859 13.89 4.63202 13.89 2.94265C13.89 2.81562 13.8656 2.69187 13.8173 2.57562C13.6884 2.26484 13.4025 2.04124 13.0716 1.99249L13.0655 1.99155C12.9773 1.97796 12.8883 1.97609 12.8001 1.98687C12.7547 1.99249 12.7087 2.0014 12.6633 2.01405C12.2447 2.1289 11.9531 2.52312 11.9531 2.97265V18.0486C11.9531 18.8722 11.6428 19.6564 11.0798 20.2569C10.5108 20.8639 9.74343 21.2173 8.91936 21.252C8.30015 21.2778 7.69311 21.125 7.16296 20.8086C6.20718 20.2386 5.61327 19.1947 5.61327 18.0851C5.61327 16.6976 6.53999 15.4494 7.86702 15.0495C8.11265 14.9755 8.31515 14.81 8.43655 14.5841C8.55796 14.3581 8.58421 14.098 8.51015 13.8523C8.50124 13.8223 8.48999 13.7914 8.4778 13.7614C8.32593 13.393 7.97296 13.1675 7.59327 13.1675ZM15.2808 18.1081V18.1142C15.2808 18.1123 15.2808 18.11 15.2808 18.1081Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(0 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-1">
                                        <div className="team-img">
                                            <img className src="/savory/assets/media/our-team/team-2.png" alt />
                                        </div>
                                        <div className="team-content">
                                            <p className="team-text fw-600 mb-6">Maker</p>
                                            <h6 className="mb-16 team-text">Ethan Rodriguez</h6>
                                            <p className="team-text">Lorem ipsum dolor sit amet<br /> consectetur. Sed euismod <br />justo volutpat
                                                malesuada.
                                            </p>
                                            <hr className="varticle-line mb-16 mt-16 white" />
                                            <div className="social-icon">
                                                <a href="#" className>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g clipPath="url(#clip0_21540_1716)">
                                                            <path d="M17.6249 6.20312C18.0131 6.20312 18.3281 5.88812 18.3281 5.5V1.28125C18.3281 0.893125 18.0131 0.578125 17.6249 0.578125H13.4062C10.6921 0.578125 8.48431 2.78594 8.48431 5.5V9.01562H6.37494C5.98681 9.01562 5.67181 9.33063 5.67181 9.71875V13.9375C5.67181 14.3256 5.98681 14.6406 6.37494 14.6406H8.48431V23.875C8.48431 24.2631 8.79931 24.5781 9.18744 24.5781H13.4062C13.7943 24.5781 14.1093 24.2631 14.1093 23.875V14.6406H16.9218C17.2654 14.6406 17.5588 14.3922 17.6156 14.0533L18.3187 9.83453C18.3524 9.63062 18.2953 9.42203 18.1617 9.26406C18.0281 9.10656 17.8317 9.01562 17.6249 9.01562H14.1093V6.20312H17.6249ZM13.4062 10.4219H16.7948L16.326 13.2344H13.4062C13.0181 13.2344 12.7031 13.5494 12.7031 13.9375V23.1719H9.89056V13.9375C9.89056 13.5494 9.57556 13.2344 9.18744 13.2344H7.07806V10.4219H9.18744C9.57556 10.4219 9.89056 10.1069 9.89056 9.71875V5.5C9.89056 3.56172 11.4679 1.98438 13.4062 1.98438H16.9218V4.79688H13.4062C13.0181 4.79688 12.7031 5.11188 12.7031 5.5V9.71875C12.7031 10.1069 13.0181 10.4219 13.4062 10.4219Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(-1.52588e-05 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M14.242 10.7405L22.9844 0.578125H20.9127L13.3217 9.40196L7.25875 0.578125H0.265854L9.43422 13.9213L0.265854 24.5781H2.33765L10.354 15.2599L16.7569 24.5781H23.7498L14.2415 10.7405H14.242ZM11.4044 14.0389L10.4754 12.7102L3.08414 2.13773H6.26629L12.2312 10.6701L13.1601 11.9987L20.9137 23.0894H17.7316L11.4044 14.0394V14.0389Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(-1.52588e-05 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M12.2362 24.5781C12.1567 24.5781 12.0773 24.5781 11.9973 24.5777C10.116 24.5823 8.37781 24.5345 6.68738 24.4316C5.13757 24.3373 3.7229 23.8017 2.59607 22.8829C1.50879 21.9963 0.766296 20.7975 0.389282 19.3202C0.0611572 18.034 0.0437622 16.7715 0.0270996 15.5504C0.0150146 14.6742 0.00256348 13.636 0 12.5803C0.00256348 11.5201 0.0150146 10.4819 0.0270996 9.60571C0.0437622 8.38476 0.0611572 7.12225 0.389282 5.83593C0.766296 4.35864 1.50879 3.15984 2.59607 2.27325C3.7229 1.35442 5.13757 0.818841 6.68756 0.724542C8.37799 0.62182 10.1166 0.573846 12.0018 0.578424C13.8836 0.574396 15.6213 0.62182 17.3117 0.724542C18.8615 0.818841 20.2762 1.35442 21.403 2.27325C22.4905 3.15984 23.2328 4.35864 23.6098 5.83593C23.9379 7.12206 23.9553 8.38476 23.972 9.60571C23.9841 10.4819 23.9967 11.5201 23.9991 12.5759V12.5803C23.9967 13.636 23.9841 14.6742 23.972 15.5504C23.9553 16.7714 23.9381 18.0339 23.6098 19.3202C23.2328 20.7975 22.4905 21.9963 21.403 22.8829C20.2762 23.8017 18.8615 24.3373 17.3117 24.4316C15.6929 24.5301 14.0299 24.5781 12.2362 24.5781ZM11.9973 23.0912C13.8479 23.0956 15.5471 23.0487 17.1978 22.9484C18.3697 22.8772 19.752 22.1085 20.5844 21.4297C21.3538 20.8022 21.8837 19.9365 22.1593 18.8566C22.4325 17.7859 22.4482 16.6364 22.4634 15.5248C22.4753 14.6545 22.4878 13.6236 22.4903 12.5781C22.4878 11.5323 22.4753 10.5016 22.4634 9.63134C22.4482 8.51971 22.4325 7.37017 22.1593 6.29937C21.8837 5.21941 21.3538 4.35369 20.5844 3.72619C19.752 3.0476 18.3697 2.30144 17.1978 2.23021C15.5471 2.12969 13.8479 2.08336 12.0016 2.08739C10.1514 2.08299 8.45196 2.13519 6.80127 2.23571C5.62939 2.30694 4.37526 2.80952 3.54286 3.48811C2.77346 4.11561 2.10105 5.21941 1.82548 6.29937C1.55229 7.37017 1.53654 8.51952 1.52134 9.63134C1.50944 10.5024 1.49699 11.5338 1.49443 12.5803C1.49699 13.6221 1.50944 14.6537 1.52134 15.5248C1.53654 16.6364 1.55229 17.7859 1.82548 18.8566C2.10105 19.9365 2.63096 20.8022 3.40037 21.4297C4.23277 22.1083 5.62939 22.8772 6.80127 22.9484C8.45196 23.0489 10.1517 23.0958 11.9973 23.0912ZM11.9526 18.4374C8.72186 18.4374 6.0932 15.809 6.0932 12.5781C6.0932 9.34716 8.72186 6.71868 11.9526 6.71868C15.1835 6.71868 17.8119 9.34716 17.8119 12.5781C17.8119 15.809 15.1835 18.4374 11.9526 18.4374ZM12.0016 8.08301C9.36718 8.08301 7.51314 9.93705 7.51314 12.5759C7.51314 14.7728 9.17436 17.0911 11.9757 17.0911C14.1728 17.0911 16.457 15.0097 16.457 12.5759C16.457 10.379 14.781 8.08301 12.0016 8.08301ZM18.4682 4.84368C17.6916 4.84368 17.0619 5.4732 17.0619 6.24993C17.0619 7.02667 17.6916 7.65618 18.4682 7.65618C19.2449 7.65618 19.8744 7.02667 19.8744 6.24993C19.8744 5.4732 19.2449 4.84368 18.4682 4.84368Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(0 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#" className="social-icon-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M8.78343 24.583C7.29093 24.583 5.83171 24.0622 4.6753 23.1162C3.15655 21.8741 2.28561 20.0403 2.28561 18.0851C2.28561 16.6611 2.73843 15.3083 3.59483 14.1734C4.42171 13.078 5.59827 12.2572 6.90796 11.863C8.07843 11.5105 9.31265 12.0959 9.77811 13.2251C9.80811 13.2973 9.83436 13.3723 9.85686 13.4464C10.0392 14.052 9.97499 14.6923 9.67593 15.2492C9.37686 15.8061 8.87858 16.2134 8.27296 16.3958C7.53515 16.618 7.01999 17.3126 7.01999 18.0851C7.01999 18.7025 7.35093 19.2833 7.8839 19.6011C8.17827 19.7769 8.51577 19.8617 8.8603 19.8472C9.80624 19.8069 10.5473 19.017 10.5473 18.0486V2.97265C10.5473 1.89265 11.2636 0.940617 12.2887 0.657961C12.4017 0.626554 12.518 0.604054 12.6333 0.590461C12.8475 0.564679 13.0645 0.568898 13.2787 0.601711C14.0953 0.723117 14.7989 1.27296 15.1158 2.03702C15.2353 2.3253 15.2958 2.62999 15.2958 2.94265C15.2958 4.19562 15.8653 5.35765 16.8586 6.13062C17.5692 6.68374 18.4205 6.97812 19.32 6.9814C20.2861 6.98468 21.15 7.56077 21.5212 8.44905C21.6834 8.83812 21.7378 9.26562 21.6778 9.68562C21.5114 10.8448 20.4914 11.7158 19.3026 11.7158C19.2984 11.7158 19.2947 11.7158 19.2905 11.7158C17.8781 11.7087 16.5136 11.3684 15.2817 10.723V18.0964C15.2817 18.1039 15.2817 18.1114 15.2812 18.1194C15.2705 20.0464 14.4117 21.8567 12.9244 23.0891C11.7619 24.0523 10.2914 24.583 8.78343 24.583ZM7.59327 13.1675C7.50046 13.1675 7.40624 13.1811 7.31296 13.2092C6.28686 13.5181 5.36483 14.1617 4.71702 15.0205C4.04624 15.9092 3.69186 16.9691 3.69186 18.0851C3.69186 19.6166 4.37483 21.0537 5.56593 22.0278C6.47202 22.7689 7.61483 23.1767 8.78343 23.1767C9.96421 23.1767 11.1164 22.7609 12.0267 22.0062C13.1953 21.0378 13.8689 19.6161 13.875 18.1053C13.875 18.1001 13.875 18.0941 13.8755 18.087V8.07218L14.9939 8.89062C16.2516 9.81124 17.7398 10.3016 19.2975 10.3095H19.3026C19.7962 10.3095 20.2181 9.95655 20.2856 9.4864C20.31 9.31483 20.2894 9.14843 20.2237 8.9914C20.0733 8.63187 19.7086 8.38905 19.3153 8.38765C18.1017 8.38343 16.9533 7.9864 15.9951 7.24015C14.6573 6.19859 13.89 4.63202 13.89 2.94265C13.89 2.81562 13.8656 2.69187 13.8173 2.57562C13.6884 2.26484 13.4025 2.04124 13.0716 1.99249L13.0655 1.99155C12.9773 1.97796 12.8883 1.97609 12.8001 1.98687C12.7547 1.99249 12.7087 2.0014 12.6633 2.01405C12.2447 2.1289 11.9531 2.52312 11.9531 2.97265V18.0486C11.9531 18.8722 11.6428 19.6564 11.0798 20.2569C10.5108 20.8639 9.74343 21.2173 8.91936 21.252C8.30015 21.2778 7.69311 21.125 7.16296 20.8086C6.20718 20.2386 5.61327 19.1947 5.61327 18.0851C5.61327 16.6976 6.53999 15.4494 7.86702 15.0495C8.11265 14.9755 8.31515 14.81 8.43655 14.5841C8.55796 14.3581 8.58421 14.098 8.51015 13.8523C8.50124 13.8223 8.48999 13.7914 8.4778 13.7614C8.32593 13.393 7.97296 13.1675 7.59327 13.1675ZM15.2808 18.1081V18.1142C15.2808 18.1123 15.2808 18.11 15.2808 18.1081Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(0 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-1">
                                        <div className="team-img">
                                            <img className src="/savory/assets/media/our-team/team-3.png" alt />
                                        </div>
                                        <div className="team-content">
                                            <p className="team-text fw-600 mb-6">Maker</p>
                                            <h6 className="mb-16 team-text">Sarah Johnson</h6>
                                            <p className="team-text">Lorem ipsum dolor sit amet<br /> consectetur. Sed euismod <br />justo volutpat
                                                malesuada.
                                            </p>
                                            <hr className="varticle-line mb-16 mt-16 white" />
                                            <div className="social-icon">
                                                <a href="#" className>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g clipPath="url(#clip0_21540_1716)">
                                                            <path d="M17.6249 6.20312C18.0131 6.20312 18.3281 5.88812 18.3281 5.5V1.28125C18.3281 0.893125 18.0131 0.578125 17.6249 0.578125H13.4062C10.6921 0.578125 8.48431 2.78594 8.48431 5.5V9.01562H6.37494C5.98681 9.01562 5.67181 9.33063 5.67181 9.71875V13.9375C5.67181 14.3256 5.98681 14.6406 6.37494 14.6406H8.48431V23.875C8.48431 24.2631 8.79931 24.5781 9.18744 24.5781H13.4062C13.7943 24.5781 14.1093 24.2631 14.1093 23.875V14.6406H16.9218C17.2654 14.6406 17.5588 14.3922 17.6156 14.0533L18.3187 9.83453C18.3524 9.63062 18.2953 9.42203 18.1617 9.26406C18.0281 9.10656 17.8317 9.01562 17.6249 9.01562H14.1093V6.20312H17.6249ZM13.4062 10.4219H16.7948L16.326 13.2344H13.4062C13.0181 13.2344 12.7031 13.5494 12.7031 13.9375V23.1719H9.89056V13.9375C9.89056 13.5494 9.57556 13.2344 9.18744 13.2344H7.07806V10.4219H9.18744C9.57556 10.4219 9.89056 10.1069 9.89056 9.71875V5.5C9.89056 3.56172 11.4679 1.98438 13.4062 1.98438H16.9218V4.79688H13.4062C13.0181 4.79688 12.7031 5.11188 12.7031 5.5V9.71875C12.7031 10.1069 13.0181 10.4219 13.4062 10.4219Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(-1.52588e-05 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M14.242 10.7405L22.9844 0.578125H20.9127L13.3217 9.40196L7.25875 0.578125H0.265854L9.43422 13.9213L0.265854 24.5781H2.33765L10.354 15.2599L16.7569 24.5781H23.7498L14.2415 10.7405H14.242ZM11.4044 14.0389L10.4754 12.7102L3.08414 2.13773H6.26629L12.2312 10.6701L13.1601 11.9987L20.9137 23.0894H17.7316L11.4044 14.0394V14.0389Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(-1.52588e-05 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M12.2362 24.5781C12.1567 24.5781 12.0773 24.5781 11.9973 24.5777C10.116 24.5823 8.37781 24.5345 6.68738 24.4316C5.13757 24.3373 3.7229 23.8017 2.59607 22.8829C1.50879 21.9963 0.766296 20.7975 0.389282 19.3202C0.0611572 18.034 0.0437622 16.7715 0.0270996 15.5504C0.0150146 14.6742 0.00256348 13.636 0 12.5803C0.00256348 11.5201 0.0150146 10.4819 0.0270996 9.60571C0.0437622 8.38476 0.0611572 7.12225 0.389282 5.83593C0.766296 4.35864 1.50879 3.15984 2.59607 2.27325C3.7229 1.35442 5.13757 0.818841 6.68756 0.724542C8.37799 0.62182 10.1166 0.573846 12.0018 0.578424C13.8836 0.574396 15.6213 0.62182 17.3117 0.724542C18.8615 0.818841 20.2762 1.35442 21.403 2.27325C22.4905 3.15984 23.2328 4.35864 23.6098 5.83593C23.9379 7.12206 23.9553 8.38476 23.972 9.60571C23.9841 10.4819 23.9967 11.5201 23.9991 12.5759V12.5803C23.9967 13.636 23.9841 14.6742 23.972 15.5504C23.9553 16.7714 23.9381 18.0339 23.6098 19.3202C23.2328 20.7975 22.4905 21.9963 21.403 22.8829C20.2762 23.8017 18.8615 24.3373 17.3117 24.4316C15.6929 24.5301 14.0299 24.5781 12.2362 24.5781ZM11.9973 23.0912C13.8479 23.0956 15.5471 23.0487 17.1978 22.9484C18.3697 22.8772 19.752 22.1085 20.5844 21.4297C21.3538 20.8022 21.8837 19.9365 22.1593 18.8566C22.4325 17.7859 22.4482 16.6364 22.4634 15.5248C22.4753 14.6545 22.4878 13.6236 22.4903 12.5781C22.4878 11.5323 22.4753 10.5016 22.4634 9.63134C22.4482 8.51971 22.4325 7.37017 22.1593 6.29937C21.8837 5.21941 21.3538 4.35369 20.5844 3.72619C19.752 3.0476 18.3697 2.30144 17.1978 2.23021C15.5471 2.12969 13.8479 2.08336 12.0016 2.08739C10.1514 2.08299 8.45196 2.13519 6.80127 2.23571C5.62939 2.30694 4.37526 2.80952 3.54286 3.48811C2.77346 4.11561 2.10105 5.21941 1.82548 6.29937C1.55229 7.37017 1.53654 8.51952 1.52134 9.63134C1.50944 10.5024 1.49699 11.5338 1.49443 12.5803C1.49699 13.6221 1.50944 14.6537 1.52134 15.5248C1.53654 16.6364 1.55229 17.7859 1.82548 18.8566C2.10105 19.9365 2.63096 20.8022 3.40037 21.4297C4.23277 22.1083 5.62939 22.8772 6.80127 22.9484C8.45196 23.0489 10.1517 23.0958 11.9973 23.0912ZM11.9526 18.4374C8.72186 18.4374 6.0932 15.809 6.0932 12.5781C6.0932 9.34716 8.72186 6.71868 11.9526 6.71868C15.1835 6.71868 17.8119 9.34716 17.8119 12.5781C17.8119 15.809 15.1835 18.4374 11.9526 18.4374ZM12.0016 8.08301C9.36718 8.08301 7.51314 9.93705 7.51314 12.5759C7.51314 14.7728 9.17436 17.0911 11.9757 17.0911C14.1728 17.0911 16.457 15.0097 16.457 12.5759C16.457 10.379 14.781 8.08301 12.0016 8.08301ZM18.4682 4.84368C17.6916 4.84368 17.0619 5.4732 17.0619 6.24993C17.0619 7.02667 17.6916 7.65618 18.4682 7.65618C19.2449 7.65618 19.8744 7.02667 19.8744 6.24993C19.8744 5.4732 19.2449 4.84368 18.4682 4.84368Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(0 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#" className="social-icon-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M8.78343 24.583C7.29093 24.583 5.83171 24.0622 4.6753 23.1162C3.15655 21.8741 2.28561 20.0403 2.28561 18.0851C2.28561 16.6611 2.73843 15.3083 3.59483 14.1734C4.42171 13.078 5.59827 12.2572 6.90796 11.863C8.07843 11.5105 9.31265 12.0959 9.77811 13.2251C9.80811 13.2973 9.83436 13.3723 9.85686 13.4464C10.0392 14.052 9.97499 14.6923 9.67593 15.2492C9.37686 15.8061 8.87858 16.2134 8.27296 16.3958C7.53515 16.618 7.01999 17.3126 7.01999 18.0851C7.01999 18.7025 7.35093 19.2833 7.8839 19.6011C8.17827 19.7769 8.51577 19.8617 8.8603 19.8472C9.80624 19.8069 10.5473 19.017 10.5473 18.0486V2.97265C10.5473 1.89265 11.2636 0.940617 12.2887 0.657961C12.4017 0.626554 12.518 0.604054 12.6333 0.590461C12.8475 0.564679 13.0645 0.568898 13.2787 0.601711C14.0953 0.723117 14.7989 1.27296 15.1158 2.03702C15.2353 2.3253 15.2958 2.62999 15.2958 2.94265C15.2958 4.19562 15.8653 5.35765 16.8586 6.13062C17.5692 6.68374 18.4205 6.97812 19.32 6.9814C20.2861 6.98468 21.15 7.56077 21.5212 8.44905C21.6834 8.83812 21.7378 9.26562 21.6778 9.68562C21.5114 10.8448 20.4914 11.7158 19.3026 11.7158C19.2984 11.7158 19.2947 11.7158 19.2905 11.7158C17.8781 11.7087 16.5136 11.3684 15.2817 10.723V18.0964C15.2817 18.1039 15.2817 18.1114 15.2812 18.1194C15.2705 20.0464 14.4117 21.8567 12.9244 23.0891C11.7619 24.0523 10.2914 24.583 8.78343 24.583ZM7.59327 13.1675C7.50046 13.1675 7.40624 13.1811 7.31296 13.2092C6.28686 13.5181 5.36483 14.1617 4.71702 15.0205C4.04624 15.9092 3.69186 16.9691 3.69186 18.0851C3.69186 19.6166 4.37483 21.0537 5.56593 22.0278C6.47202 22.7689 7.61483 23.1767 8.78343 23.1767C9.96421 23.1767 11.1164 22.7609 12.0267 22.0062C13.1953 21.0378 13.8689 19.6161 13.875 18.1053C13.875 18.1001 13.875 18.0941 13.8755 18.087V8.07218L14.9939 8.89062C16.2516 9.81124 17.7398 10.3016 19.2975 10.3095H19.3026C19.7962 10.3095 20.2181 9.95655 20.2856 9.4864C20.31 9.31483 20.2894 9.14843 20.2237 8.9914C20.0733 8.63187 19.7086 8.38905 19.3153 8.38765C18.1017 8.38343 16.9533 7.9864 15.9951 7.24015C14.6573 6.19859 13.89 4.63202 13.89 2.94265C13.89 2.81562 13.8656 2.69187 13.8173 2.57562C13.6884 2.26484 13.4025 2.04124 13.0716 1.99249L13.0655 1.99155C12.9773 1.97796 12.8883 1.97609 12.8001 1.98687C12.7547 1.99249 12.7087 2.0014 12.6633 2.01405C12.2447 2.1289 11.9531 2.52312 11.9531 2.97265V18.0486C11.9531 18.8722 11.6428 19.6564 11.0798 20.2569C10.5108 20.8639 9.74343 21.2173 8.91936 21.252C8.30015 21.2778 7.69311 21.125 7.16296 20.8086C6.20718 20.2386 5.61327 19.1947 5.61327 18.0851C5.61327 16.6976 6.53999 15.4494 7.86702 15.0495C8.11265 14.9755 8.31515 14.81 8.43655 14.5841C8.55796 14.3581 8.58421 14.098 8.51015 13.8523C8.50124 13.8223 8.48999 13.7914 8.4778 13.7614C8.32593 13.393 7.97296 13.1675 7.59327 13.1675ZM15.2808 18.1081V18.1142C15.2808 18.1123 15.2808 18.11 15.2808 18.1081Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(0 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-1">
                                        <div className="team-img">
                                            <img className src="/savory/assets/media/our-team/team-4.png" alt />
                                        </div>
                                        <div className="team-content">
                                            <p className="team-text fw-600 mb-6">Waiter</p>
                                            <h6 className="mb-16 team-text">Emily Brooks</h6>
                                            <p className="team-text">Lorem ipsum dolor sit amet<br /> consectetur. Sed euismod <br />justo volutpat
                                                malesuada.
                                            </p>
                                            <hr className="varticle-line mb-16 mt-16 white" />
                                            <div className="social-icon">
                                                <a href="#" className>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g clipPath="url(#clip0_21540_1716)">
                                                            <path d="M17.6249 6.20312C18.0131 6.20312 18.3281 5.88812 18.3281 5.5V1.28125C18.3281 0.893125 18.0131 0.578125 17.6249 0.578125H13.4062C10.6921 0.578125 8.48431 2.78594 8.48431 5.5V9.01562H6.37494C5.98681 9.01562 5.67181 9.33063 5.67181 9.71875V13.9375C5.67181 14.3256 5.98681 14.6406 6.37494 14.6406H8.48431V23.875C8.48431 24.2631 8.79931 24.5781 9.18744 24.5781H13.4062C13.7943 24.5781 14.1093 24.2631 14.1093 23.875V14.6406H16.9218C17.2654 14.6406 17.5588 14.3922 17.6156 14.0533L18.3187 9.83453C18.3524 9.63062 18.2953 9.42203 18.1617 9.26406C18.0281 9.10656 17.8317 9.01562 17.6249 9.01562H14.1093V6.20312H17.6249ZM13.4062 10.4219H16.7948L16.326 13.2344H13.4062C13.0181 13.2344 12.7031 13.5494 12.7031 13.9375V23.1719H9.89056V13.9375C9.89056 13.5494 9.57556 13.2344 9.18744 13.2344H7.07806V10.4219H9.18744C9.57556 10.4219 9.89056 10.1069 9.89056 9.71875V5.5C9.89056 3.56172 11.4679 1.98438 13.4062 1.98438H16.9218V4.79688H13.4062C13.0181 4.79688 12.7031 5.11188 12.7031 5.5V9.71875C12.7031 10.1069 13.0181 10.4219 13.4062 10.4219Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(-1.52588e-05 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M14.242 10.7405L22.9844 0.578125H20.9127L13.3217 9.40196L7.25875 0.578125H0.265854L9.43422 13.9213L0.265854 24.5781H2.33765L10.354 15.2599L16.7569 24.5781H23.7498L14.2415 10.7405H14.242ZM11.4044 14.0389L10.4754 12.7102L3.08414 2.13773H6.26629L12.2312 10.6701L13.1601 11.9987L20.9137 23.0894H17.7316L11.4044 14.0394V14.0389Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(-1.52588e-05 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M12.2362 24.5781C12.1567 24.5781 12.0773 24.5781 11.9973 24.5777C10.116 24.5823 8.37781 24.5345 6.68738 24.4316C5.13757 24.3373 3.7229 23.8017 2.59607 22.8829C1.50879 21.9963 0.766296 20.7975 0.389282 19.3202C0.0611572 18.034 0.0437622 16.7715 0.0270996 15.5504C0.0150146 14.6742 0.00256348 13.636 0 12.5803C0.00256348 11.5201 0.0150146 10.4819 0.0270996 9.60571C0.0437622 8.38476 0.0611572 7.12225 0.389282 5.83593C0.766296 4.35864 1.50879 3.15984 2.59607 2.27325C3.7229 1.35442 5.13757 0.818841 6.68756 0.724542C8.37799 0.62182 10.1166 0.573846 12.0018 0.578424C13.8836 0.574396 15.6213 0.62182 17.3117 0.724542C18.8615 0.818841 20.2762 1.35442 21.403 2.27325C22.4905 3.15984 23.2328 4.35864 23.6098 5.83593C23.9379 7.12206 23.9553 8.38476 23.972 9.60571C23.9841 10.4819 23.9967 11.5201 23.9991 12.5759V12.5803C23.9967 13.636 23.9841 14.6742 23.972 15.5504C23.9553 16.7714 23.9381 18.0339 23.6098 19.3202C23.2328 20.7975 22.4905 21.9963 21.403 22.8829C20.2762 23.8017 18.8615 24.3373 17.3117 24.4316C15.6929 24.5301 14.0299 24.5781 12.2362 24.5781ZM11.9973 23.0912C13.8479 23.0956 15.5471 23.0487 17.1978 22.9484C18.3697 22.8772 19.752 22.1085 20.5844 21.4297C21.3538 20.8022 21.8837 19.9365 22.1593 18.8566C22.4325 17.7859 22.4482 16.6364 22.4634 15.5248C22.4753 14.6545 22.4878 13.6236 22.4903 12.5781C22.4878 11.5323 22.4753 10.5016 22.4634 9.63134C22.4482 8.51971 22.4325 7.37017 22.1593 6.29937C21.8837 5.21941 21.3538 4.35369 20.5844 3.72619C19.752 3.0476 18.3697 2.30144 17.1978 2.23021C15.5471 2.12969 13.8479 2.08336 12.0016 2.08739C10.1514 2.08299 8.45196 2.13519 6.80127 2.23571C5.62939 2.30694 4.37526 2.80952 3.54286 3.48811C2.77346 4.11561 2.10105 5.21941 1.82548 6.29937C1.55229 7.37017 1.53654 8.51952 1.52134 9.63134C1.50944 10.5024 1.49699 11.5338 1.49443 12.5803C1.49699 13.6221 1.50944 14.6537 1.52134 15.5248C1.53654 16.6364 1.55229 17.7859 1.82548 18.8566C2.10105 19.9365 2.63096 20.8022 3.40037 21.4297C4.23277 22.1083 5.62939 22.8772 6.80127 22.9484C8.45196 23.0489 10.1517 23.0958 11.9973 23.0912ZM11.9526 18.4374C8.72186 18.4374 6.0932 15.809 6.0932 12.5781C6.0932 9.34716 8.72186 6.71868 11.9526 6.71868C15.1835 6.71868 17.8119 9.34716 17.8119 12.5781C17.8119 15.809 15.1835 18.4374 11.9526 18.4374ZM12.0016 8.08301C9.36718 8.08301 7.51314 9.93705 7.51314 12.5759C7.51314 14.7728 9.17436 17.0911 11.9757 17.0911C14.1728 17.0911 16.457 15.0097 16.457 12.5759C16.457 10.379 14.781 8.08301 12.0016 8.08301ZM18.4682 4.84368C17.6916 4.84368 17.0619 5.4732 17.0619 6.24993C17.0619 7.02667 17.6916 7.65618 18.4682 7.65618C19.2449 7.65618 19.8744 7.02667 19.8744 6.24993C19.8744 5.4732 19.2449 4.84368 18.4682 4.84368Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(0 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#" className="social-icon-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M8.78343 24.583C7.29093 24.583 5.83171 24.0622 4.6753 23.1162C3.15655 21.8741 2.28561 20.0403 2.28561 18.0851C2.28561 16.6611 2.73843 15.3083 3.59483 14.1734C4.42171 13.078 5.59827 12.2572 6.90796 11.863C8.07843 11.5105 9.31265 12.0959 9.77811 13.2251C9.80811 13.2973 9.83436 13.3723 9.85686 13.4464C10.0392 14.052 9.97499 14.6923 9.67593 15.2492C9.37686 15.8061 8.87858 16.2134 8.27296 16.3958C7.53515 16.618 7.01999 17.3126 7.01999 18.0851C7.01999 18.7025 7.35093 19.2833 7.8839 19.6011C8.17827 19.7769 8.51577 19.8617 8.8603 19.8472C9.80624 19.8069 10.5473 19.017 10.5473 18.0486V2.97265C10.5473 1.89265 11.2636 0.940617 12.2887 0.657961C12.4017 0.626554 12.518 0.604054 12.6333 0.590461C12.8475 0.564679 13.0645 0.568898 13.2787 0.601711C14.0953 0.723117 14.7989 1.27296 15.1158 2.03702C15.2353 2.3253 15.2958 2.62999 15.2958 2.94265C15.2958 4.19562 15.8653 5.35765 16.8586 6.13062C17.5692 6.68374 18.4205 6.97812 19.32 6.9814C20.2861 6.98468 21.15 7.56077 21.5212 8.44905C21.6834 8.83812 21.7378 9.26562 21.6778 9.68562C21.5114 10.8448 20.4914 11.7158 19.3026 11.7158C19.2984 11.7158 19.2947 11.7158 19.2905 11.7158C17.8781 11.7087 16.5136 11.3684 15.2817 10.723V18.0964C15.2817 18.1039 15.2817 18.1114 15.2812 18.1194C15.2705 20.0464 14.4117 21.8567 12.9244 23.0891C11.7619 24.0523 10.2914 24.583 8.78343 24.583ZM7.59327 13.1675C7.50046 13.1675 7.40624 13.1811 7.31296 13.2092C6.28686 13.5181 5.36483 14.1617 4.71702 15.0205C4.04624 15.9092 3.69186 16.9691 3.69186 18.0851C3.69186 19.6166 4.37483 21.0537 5.56593 22.0278C6.47202 22.7689 7.61483 23.1767 8.78343 23.1767C9.96421 23.1767 11.1164 22.7609 12.0267 22.0062C13.1953 21.0378 13.8689 19.6161 13.875 18.1053C13.875 18.1001 13.875 18.0941 13.8755 18.087V8.07218L14.9939 8.89062C16.2516 9.81124 17.7398 10.3016 19.2975 10.3095H19.3026C19.7962 10.3095 20.2181 9.95655 20.2856 9.4864C20.31 9.31483 20.2894 9.14843 20.2237 8.9914C20.0733 8.63187 19.7086 8.38905 19.3153 8.38765C18.1017 8.38343 16.9533 7.9864 15.9951 7.24015C14.6573 6.19859 13.89 4.63202 13.89 2.94265C13.89 2.81562 13.8656 2.69187 13.8173 2.57562C13.6884 2.26484 13.4025 2.04124 13.0716 1.99249L13.0655 1.99155C12.9773 1.97796 12.8883 1.97609 12.8001 1.98687C12.7547 1.99249 12.7087 2.0014 12.6633 2.01405C12.2447 2.1289 11.9531 2.52312 11.9531 2.97265V18.0486C11.9531 18.8722 11.6428 19.6564 11.0798 20.2569C10.5108 20.8639 9.74343 21.2173 8.91936 21.252C8.30015 21.2778 7.69311 21.125 7.16296 20.8086C6.20718 20.2386 5.61327 19.1947 5.61327 18.0851C5.61327 16.6976 6.53999 15.4494 7.86702 15.0495C8.11265 14.9755 8.31515 14.81 8.43655 14.5841C8.55796 14.3581 8.58421 14.098 8.51015 13.8523C8.50124 13.8223 8.48999 13.7914 8.4778 13.7614C8.32593 13.393 7.97296 13.1675 7.59327 13.1675ZM15.2808 18.1081V18.1142C15.2808 18.1123 15.2808 18.11 15.2808 18.1081Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(0 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-1">
                                        <div className="team-img">
                                            <img className src="/savory/assets/media/our-team/team-5.png" alt />
                                        </div>
                                        <div className="team-content">
                                            <p className="team-text fw-600 mb-6">Maker</p>
                                            <h6 className="mb-16 team-text">Megan Robinson</h6>
                                            <p className="team-text">Lorem ipsum dolor sit amet<br /> consectetur. Sed euismod <br />justo volutpat
                                                malesuada.
                                            </p>
                                            <hr className="varticle-line mb-16 mt-16 white" />
                                            <div className="social-icon">
                                                <a href="#" className>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g clipPath="url(#clip0_21540_1716)">
                                                            <path d="M17.6249 6.20312C18.0131 6.20312 18.3281 5.88812 18.3281 5.5V1.28125C18.3281 0.893125 18.0131 0.578125 17.6249 0.578125H13.4062C10.6921 0.578125 8.48431 2.78594 8.48431 5.5V9.01562H6.37494C5.98681 9.01562 5.67181 9.33063 5.67181 9.71875V13.9375C5.67181 14.3256 5.98681 14.6406 6.37494 14.6406H8.48431V23.875C8.48431 24.2631 8.79931 24.5781 9.18744 24.5781H13.4062C13.7943 24.5781 14.1093 24.2631 14.1093 23.875V14.6406H16.9218C17.2654 14.6406 17.5588 14.3922 17.6156 14.0533L18.3187 9.83453C18.3524 9.63062 18.2953 9.42203 18.1617 9.26406C18.0281 9.10656 17.8317 9.01562 17.6249 9.01562H14.1093V6.20312H17.6249ZM13.4062 10.4219H16.7948L16.326 13.2344H13.4062C13.0181 13.2344 12.7031 13.5494 12.7031 13.9375V23.1719H9.89056V13.9375C9.89056 13.5494 9.57556 13.2344 9.18744 13.2344H7.07806V10.4219H9.18744C9.57556 10.4219 9.89056 10.1069 9.89056 9.71875V5.5C9.89056 3.56172 11.4679 1.98438 13.4062 1.98438H16.9218V4.79688H13.4062C13.0181 4.79688 12.7031 5.11188 12.7031 5.5V9.71875C12.7031 10.1069 13.0181 10.4219 13.4062 10.4219Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(-1.52588e-05 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M14.242 10.7405L22.9844 0.578125H20.9127L13.3217 9.40196L7.25875 0.578125H0.265854L9.43422 13.9213L0.265854 24.5781H2.33765L10.354 15.2599L16.7569 24.5781H23.7498L14.2415 10.7405H14.242ZM11.4044 14.0389L10.4754 12.7102L3.08414 2.13773H6.26629L12.2312 10.6701L13.1601 11.9987L20.9137 23.0894H17.7316L11.4044 14.0394V14.0389Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(-1.52588e-05 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M12.2362 24.5781C12.1567 24.5781 12.0773 24.5781 11.9973 24.5777C10.116 24.5823 8.37781 24.5345 6.68738 24.4316C5.13757 24.3373 3.7229 23.8017 2.59607 22.8829C1.50879 21.9963 0.766296 20.7975 0.389282 19.3202C0.0611572 18.034 0.0437622 16.7715 0.0270996 15.5504C0.0150146 14.6742 0.00256348 13.636 0 12.5803C0.00256348 11.5201 0.0150146 10.4819 0.0270996 9.60571C0.0437622 8.38476 0.0611572 7.12225 0.389282 5.83593C0.766296 4.35864 1.50879 3.15984 2.59607 2.27325C3.7229 1.35442 5.13757 0.818841 6.68756 0.724542C8.37799 0.62182 10.1166 0.573846 12.0018 0.578424C13.8836 0.574396 15.6213 0.62182 17.3117 0.724542C18.8615 0.818841 20.2762 1.35442 21.403 2.27325C22.4905 3.15984 23.2328 4.35864 23.6098 5.83593C23.9379 7.12206 23.9553 8.38476 23.972 9.60571C23.9841 10.4819 23.9967 11.5201 23.9991 12.5759V12.5803C23.9967 13.636 23.9841 14.6742 23.972 15.5504C23.9553 16.7714 23.9381 18.0339 23.6098 19.3202C23.2328 20.7975 22.4905 21.9963 21.403 22.8829C20.2762 23.8017 18.8615 24.3373 17.3117 24.4316C15.6929 24.5301 14.0299 24.5781 12.2362 24.5781ZM11.9973 23.0912C13.8479 23.0956 15.5471 23.0487 17.1978 22.9484C18.3697 22.8772 19.752 22.1085 20.5844 21.4297C21.3538 20.8022 21.8837 19.9365 22.1593 18.8566C22.4325 17.7859 22.4482 16.6364 22.4634 15.5248C22.4753 14.6545 22.4878 13.6236 22.4903 12.5781C22.4878 11.5323 22.4753 10.5016 22.4634 9.63134C22.4482 8.51971 22.4325 7.37017 22.1593 6.29937C21.8837 5.21941 21.3538 4.35369 20.5844 3.72619C19.752 3.0476 18.3697 2.30144 17.1978 2.23021C15.5471 2.12969 13.8479 2.08336 12.0016 2.08739C10.1514 2.08299 8.45196 2.13519 6.80127 2.23571C5.62939 2.30694 4.37526 2.80952 3.54286 3.48811C2.77346 4.11561 2.10105 5.21941 1.82548 6.29937C1.55229 7.37017 1.53654 8.51952 1.52134 9.63134C1.50944 10.5024 1.49699 11.5338 1.49443 12.5803C1.49699 13.6221 1.50944 14.6537 1.52134 15.5248C1.53654 16.6364 1.55229 17.7859 1.82548 18.8566C2.10105 19.9365 2.63096 20.8022 3.40037 21.4297C4.23277 22.1083 5.62939 22.8772 6.80127 22.9484C8.45196 23.0489 10.1517 23.0958 11.9973 23.0912ZM11.9526 18.4374C8.72186 18.4374 6.0932 15.809 6.0932 12.5781C6.0932 9.34716 8.72186 6.71868 11.9526 6.71868C15.1835 6.71868 17.8119 9.34716 17.8119 12.5781C17.8119 15.809 15.1835 18.4374 11.9526 18.4374ZM12.0016 8.08301C9.36718 8.08301 7.51314 9.93705 7.51314 12.5759C7.51314 14.7728 9.17436 17.0911 11.9757 17.0911C14.1728 17.0911 16.457 15.0097 16.457 12.5759C16.457 10.379 14.781 8.08301 12.0016 8.08301ZM18.4682 4.84368C17.6916 4.84368 17.0619 5.4732 17.0619 6.24993C17.0619 7.02667 17.6916 7.65618 18.4682 7.65618C19.2449 7.65618 19.8744 7.02667 19.8744 6.24993C19.8744 5.4732 19.2449 4.84368 18.4682 4.84368Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(0 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href="#" className="social-icon-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                                                        <g>
                                                            <path d="M8.78343 24.583C7.29093 24.583 5.83171 24.0622 4.6753 23.1162C3.15655 21.8741 2.28561 20.0403 2.28561 18.0851C2.28561 16.6611 2.73843 15.3083 3.59483 14.1734C4.42171 13.078 5.59827 12.2572 6.90796 11.863C8.07843 11.5105 9.31265 12.0959 9.77811 13.2251C9.80811 13.2973 9.83436 13.3723 9.85686 13.4464C10.0392 14.052 9.97499 14.6923 9.67593 15.2492C9.37686 15.8061 8.87858 16.2134 8.27296 16.3958C7.53515 16.618 7.01999 17.3126 7.01999 18.0851C7.01999 18.7025 7.35093 19.2833 7.8839 19.6011C8.17827 19.7769 8.51577 19.8617 8.8603 19.8472C9.80624 19.8069 10.5473 19.017 10.5473 18.0486V2.97265C10.5473 1.89265 11.2636 0.940617 12.2887 0.657961C12.4017 0.626554 12.518 0.604054 12.6333 0.590461C12.8475 0.564679 13.0645 0.568898 13.2787 0.601711C14.0953 0.723117 14.7989 1.27296 15.1158 2.03702C15.2353 2.3253 15.2958 2.62999 15.2958 2.94265C15.2958 4.19562 15.8653 5.35765 16.8586 6.13062C17.5692 6.68374 18.4205 6.97812 19.32 6.9814C20.2861 6.98468 21.15 7.56077 21.5212 8.44905C21.6834 8.83812 21.7378 9.26562 21.6778 9.68562C21.5114 10.8448 20.4914 11.7158 19.3026 11.7158C19.2984 11.7158 19.2947 11.7158 19.2905 11.7158C17.8781 11.7087 16.5136 11.3684 15.2817 10.723V18.0964C15.2817 18.1039 15.2817 18.1114 15.2812 18.1194C15.2705 20.0464 14.4117 21.8567 12.9244 23.0891C11.7619 24.0523 10.2914 24.583 8.78343 24.583ZM7.59327 13.1675C7.50046 13.1675 7.40624 13.1811 7.31296 13.2092C6.28686 13.5181 5.36483 14.1617 4.71702 15.0205C4.04624 15.9092 3.69186 16.9691 3.69186 18.0851C3.69186 19.6166 4.37483 21.0537 5.56593 22.0278C6.47202 22.7689 7.61483 23.1767 8.78343 23.1767C9.96421 23.1767 11.1164 22.7609 12.0267 22.0062C13.1953 21.0378 13.8689 19.6161 13.875 18.1053C13.875 18.1001 13.875 18.0941 13.8755 18.087V8.07218L14.9939 8.89062C16.2516 9.81124 17.7398 10.3016 19.2975 10.3095H19.3026C19.7962 10.3095 20.2181 9.95655 20.2856 9.4864C20.31 9.31483 20.2894 9.14843 20.2237 8.9914C20.0733 8.63187 19.7086 8.38905 19.3153 8.38765C18.1017 8.38343 16.9533 7.9864 15.9951 7.24015C14.6573 6.19859 13.89 4.63202 13.89 2.94265C13.89 2.81562 13.8656 2.69187 13.8173 2.57562C13.6884 2.26484 13.4025 2.04124 13.0716 1.99249L13.0655 1.99155C12.9773 1.97796 12.8883 1.97609 12.8001 1.98687C12.7547 1.99249 12.7087 2.0014 12.6633 2.01405C12.2447 2.1289 11.9531 2.52312 11.9531 2.97265V18.0486C11.9531 18.8722 11.6428 19.6564 11.0798 20.2569C10.5108 20.8639 9.74343 21.2173 8.91936 21.252C8.30015 21.2778 7.69311 21.125 7.16296 20.8086C6.20718 20.2386 5.61327 19.1947 5.61327 18.0851C5.61327 16.6976 6.53999 15.4494 7.86702 15.0495C8.11265 14.9755 8.31515 14.81 8.43655 14.5841C8.55796 14.3581 8.58421 14.098 8.51015 13.8523C8.50124 13.8223 8.48999 13.7914 8.4778 13.7614C8.32593 13.393 7.97296 13.1675 7.59327 13.1675ZM15.2808 18.1081V18.1142C15.2808 18.1123 15.2808 18.11 15.2808 18.1081Z" fill="#FAFAFA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath>
                                                                <rect width={24} height={24} fill="white" transform="translate(0 0.578125)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Testimonials Area Start */}
                    <div className="testimonials_area_1 mb-80">
                        <div className="text-center mb-48">
                            <span className="eyebrow about-btn bg-sec br-12 white mb-6">TESTIMONIALS</span>
                            <h2 className>our satisfied customers</h2>
                        </div>
                        <div className="container-fluid">
                            <div className="content">
                                <div className="testimonials ">
                                    <div className="animation_image_zoom">
                                        <button className="review-btn testimonial-1" data-atr="review-1"> <img src="/savory/assets/media/user/user_1.jpg" alt /></button>
                                        <button className="review-btn testimonial-2" data-atr="review-2"> <img src="/savory/assets/media/user/user_2.jpg" alt /></button>
                                        <button className="review-btn testimonial-3" data-atr="review-3"> <img src="/savory/assets/media/user/user_3.jpg" alt /></button>
                                        <button className="review-btn testimonial-4" data-atr="review-4"> <img src="/savory/assets/media/user/user_4.jpg" alt /></button>
                                        <button className="review-btn testimonial-5" data-atr="review-5"> <img src="/savory/assets/media/user/user_5.jpg" alt /></button>
                                        <button className="review-btn testimonial-6" data-atr="review-6"> <img src="/savory/assets/media/user/user_6.jpg" alt /></button>
                                        <button className="review-btn testimonial-7" data-atr="review-7"> <img src="/savory/assets/media/user/user_2.jpg" alt /></button>
                                    </div>
                                    <div className="review-block" id="review-1">
                                        <div className="review-box box-bg p-24">
                                            <div className="review text-center bg-gray-3">
                                                <img src="/savory/assets/media/user/user_1.jpg" alt />
                                                <h6 className="fs-medium fw-7 white lh-130 ls-1 mb-16">Marlowe Cruz</h6>
                                                <p className="lh-150 ls-3 mb-0 white">"I am blown away by the creativity and professionalism of Blank.
                                                    They took my vision and turned it into a masterpiece."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-block" id="review-2">
                                        <div className="review-box box-bg p-24">
                                            <div className="review text-center bg-gray-3">
                                                <img src="/savory/assets/media/user/user_2.jpg" alt />
                                                <h6 className="fs-medium fw-7 white lh-130 ls-1 mb-16">Anastasia</h6>
                                                <p className="lh-150 ls-3 mb-0 white">"I am blown away by the creativity and professionalism of Blank.
                                                    They took my vision and turned it into a masterpiece."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-block" id="review-3">
                                        <div className="review-box box-bg p-24">
                                            <div className="review text-center bg-gray-3">
                                                <img src="/savory/assets/media/user/user_3.jpg" alt />
                                                <h6 className="fs-medium fw-7 white lh-130 ls-1 mb-16">Evangeline</h6>
                                                <p className="lh-150 ls-3 mb-0 white">"I am blown away by the creativity and professionalism of Blank.
                                                    They took my vision and turned it into a masterpiece."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-block" id="review-4">
                                        <div className="review-box box-bg p-24">
                                            <div className="review text-center bg-gray-3">
                                                <img src="/savory/assets/media/user/user_4.jpg" alt />
                                                <h6 className="fs-medium fw-7 white lh-130 ls-1 mb-16">Clementine</h6>
                                                <p className="lh-150 ls-3 mb-0 white">"I am blown away by the creativity and professionalism of Blank.
                                                    They took my vision and turned it into a masterpiece."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-block" id="review-5">
                                        <div className="review-box box-bg p-24">
                                            <div className="review text-center bg-gray-3">
                                                <img src="/savory/assets/media/user/user_5.jpg" alt />
                                                <h6 className="fs-medium fw-7 white lh-130 ls-1 mb-16">Theodora</h6>
                                                <p className="lh-150 ls-3 mb-0 white">"I am blown away by the creativity and professionalism of Blank.
                                                    They took my vision and turned it into a masterpiece."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-block" id="review-6">
                                        <div className="review-box box-bg p-24">
                                            <div className="review text-center bg-gray-3">
                                                <img src="/savory/assets/media/user/user_6.jpg" alt />
                                                <h6 className="fs-medium fw-7 white lh-130 ls-1 mb-16">Marlowe Cruz</h6>
                                                <p className="lh-150 ls-3 mb-0 white">"I am blown away by the creativity and professionalism of Blank.
                                                    They took my vision and turned it into a masterpiece."</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-block" id="review-7">
                                        <div className="review-box box-bg p-24">
                                            <div className="review text-center bg-gray-3">
                                                <img src="/savory/assets/media/user/user_2.jpg" alt />
                                                <h6 className="fs-medium fw-7 white lh-130 ls-1 mb-16">Penelope</h6>
                                                <p className="lh-150 ls-3 mb-0 white">"I am blown away by the creativity and professionalism of Blank.
                                                    They took my vision and turned it into a masterpiece."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Testimonials Area End */}
                    {/* BLOG Section START */}
                    <section className="blog-sec py-80">
                        <div className="container-fluid">
                            <div className="text-center mb-48">
                                <span className="eyebrow about-btn bg-sec br-12 white mb-6">blogs</span>
                                <h2 className>See Our Latest Article</h2>
                            </div>
                            <div className="row row-gap-4 align-items-center">
                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                    <div className="blog-content-area">
                                        <div className="blog-img">
                                            <a href="blog-detail.html">
                                                <img className src="/savory/assets/media/blog/blog-1.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="blog-text-area">
                                            <div className="d-flex gap-12 mb-8">
                                                <p className="fw-500 light-gray">Dec 10, 2024</p>
                                                <div className="d-flex align-items-center gap-8">
                                                    <div className="ingredients-ul" />
                                                    <p className="light-gray">2 Comment</p>
                                                </div>
                                            </div>
                                            <a href="blog-detail.html" className="h6 blog-hover-content dark-gray mb-16">Two meat and cheese
                                                sandwiches</a>
                                            <p className="blog-smaller-text mb-24 fw-400">Lorem ipsum dolor sit amet consectetur. Velit mi vitae dolor
                                                curabitur duis sociis.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-inline-flex gap-6 align-items-center">
                                                    <i className="fa-light fa-clock-three light-gray" />
                                                    <p className="light-gray">5 Min Reads</p>
                                                </div>
                                                <a href="#" className="cus-btn">learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                    <div className="blog-content-area">
                                        <div className="blog-img">
                                            <a href="blog-detail.html">
                                                <img className src="/savory/assets/media/blog/blog-2.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="blog-text-area">
                                            <div className="d-flex gap-12 mb-8">
                                                <p className="fw-500 light-gray">Dec 10, 2024</p>
                                                <div className="d-flex align-items-center gap-8">
                                                    <div className="ingredients-ul" />
                                                    <p className="light-gray">2 Comment</p>
                                                </div>
                                            </div>
                                            <a href="blog-detail.html" className="h6 blog-hover-content dark-gray mb-16">A chicken roll in pita with
                                                grilled chicken</a>
                                            <p className="blog-smaller-text mb-24 fw-400">Lorem ipsum dolor sit amet consectetur. Velit mi vitae dolor
                                                curabitur duis sociis.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-inline-flex gap-6 align-items-center">
                                                    <i className="fa-light fa-clock-three light-gray" />
                                                    <p className="light-gray">5 Min Reads</p>
                                                </div>
                                                <a href="blog-detail.html" className="cus-btn">learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                    <div className="blog-content-area">
                                        <div className="blog-img">
                                            <a href="blog-detail.html">
                                                <img className src="/savory/assets/media/blog/blog-3.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="blog-text-area">
                                            <div className="d-flex gap-12 mb-8">
                                                <p className="fw-500 light-gray">Dec 10, 2024</p>
                                                <div className="d-flex align-items-center gap-8">
                                                    <div className="ingredients-ul" />
                                                    <p className="light-gray">2 Comment</p>
                                                </div>
                                            </div>
                                            <a href="blog-detail.html" className="h6 blog-hover-content dark-gray mb-16">Indulge in a sesame bun burger,
                                                crispy fries</a>
                                            <p className="blog-smaller-text mb-24 fw-400">Lorem ipsum dolor sit amet consectetur. Velit mi vitae dolor
                                                curabitur duis sociis.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-inline-flex gap-6 align-items-center">
                                                    <i className="fa-light fa-clock-three light-gray" />
                                                    <p className="light-gray">5 Min Reads</p>
                                                </div>
                                                <a href="blog-detail.html" className="cus-btn">learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                    <div className="blog-content-area">
                                        <div className="blog-img">
                                            <a href="blog-detail.html">
                                                <img className src="/savory/assets/media/blog/blog-4.png" alt />
                                            </a>
                                        </div>
                                        <div className="blog-text-area">
                                            <div className="d-flex gap-12 mb-8">
                                                <p className="fw-500 light-gray">Dec 10, 2024</p>
                                                <div className="d-flex align-items-center gap-8">
                                                    <div className="ingredients-ul" />
                                                    <p className="light-gray">2 Comment</p>
                                                </div>
                                            </div>
                                            <a href="blog-detail.html" className="h6 blog-hover-content dark-gray mb-16">Hot dog dressed in mustard</a>
                                            <p className="blog-smaller-text mb-24 fw-400">Lorem ipsum dolor sit amet consectetur. Velit mi vitae dolor
                                                curabitur duis sociis.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-inline-flex gap-6 align-items-center">
                                                    <i className="fa-light fa-clock-three light-gray" />
                                                    <p className="light-gray">5 Min Reads</p>
                                                </div>
                                                <a href="blog-detail.html" className="cus-btn">learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* BLOG ARTICLE Section END */}
                    {/* FOOTER START */}
                    <Footer/>
                    {/* FOOTER END */}
                    {/* Main Wrapper End */}
                </div>
                {/* Back To Top Start */}
                <button className="scrollToTopBtn"><i className="fa fa-arrow-up" /></button>
                {/* Mobile Menu Start */}
                <div className="mobile-nav__wrapper">
                    <div className="mobile-nav__overlay mobile-nav__toggler" />
                    <div className="mobile-nav__content">
                        <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times" /></span>
                        <div className="logo-box">
                            <a href="index-2.html" aria-label="logo image"><img src="/savory/assets/media/logo.png" alt /></a>
                        </div>
                        <div className="mobile-nav__container" />
                        <ul className="mobile-nav__contact list-unstyled">
                            <li>
                                <i className="fas fa-envelope" />
                                <a href="mailto:example@company.com">example@company.com</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone" />
                                <a href="tel:+12345678">+123 (4567) -890</a>
                            </li>
                        </ul>
                        <div className="mobile-nav__social">
                            <a href="#"><i className="fa-brands fa-x-twitter" /></a>
                            <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu End */}
            </div>

        </>
    )
} export default Home