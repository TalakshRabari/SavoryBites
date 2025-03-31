import Footer from "../../component/customer/Footer"
import Header from "../../component/customer/Header"
import PageTitle from "../../component/customer/PageTitle"

function Vieworders() {
    return (
        <>
            <div>
                {/* Main Wrapper Start */}
                <div id="scroll-container">
                    {/* HEADER MENU START */}
                      <Header/>
                    {/* HEADER MENU END */}
                    {/* TITLE BANNER START */}
                     <PageTitle title="Vieworders"/>
                    {/* TITLE BANNER END */}
                    {/* SHOP DETAIL SECTION START */}
                    <section className="shop-detail mb-80">
                        <div className="container-fluid">
                            <div className="row align-items-center row-gap-4 mb-64">
                                <div className="col-xxl-5 offset-xxl-1 col-md-6 offset-md-0 order-md-0 order-2">
                                    <div className="burger-bg">
                                        <img className src="/savory/assets/media/cus-favorite/burger-10.png" alt />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-md-6">
                                    <h3 className="color-ter mb-16">Crunch Grillhouse</h3>
                                    <div className="d-flex align-items-center gap-16 mb-24">
                                        <div className="d-flex align-items-center gap-6">
                                            <i className="fa-solid fa-star color-primary" />
                                            <i className="fa-solid fa-star color-primary" />
                                            <i className="fa-solid fa-star color-primary" />
                                            <i className="fa-solid fa-star color-primary" />
                                            <i className="fa-solid fa-star color-primary" />
                                        </div>
                                        <p className="dark-gray">( 6 Customer Review )</p>
                                    </div>
                                    <h3 className="medium-black mb-32">$12.99</h3>
                                    <hr className="mb-32" />
                                    <p className="mb-32">Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai wekemdini
                                        iaculis
                                        vitae nulla. Morbi mattis nec mi ac mollis. This is a type of food that is specifically
                                        formulated and intended for consumption by pets. It is usually sold in the form of dry
                                        kibble or wet cans, and is designed to meet.</p>
                                    <div className="quantity-box">
                                        <h6 className="medium-black">Quantity:</h6>
                                        <div className="quantity quantity-wrap">
                                            <div className="input-area quantity-wrap">
                                                <input className="decrement" type="button" defaultValue="-" />
                                                <input type="text" name="quantity" defaultValue={1} maxLength={2} size={1} className="number" />
                                                <input className="increment" type="button" defaultValue="+" />
                                            </div>
                                        </div>
                                        <button type="submit" className="cus-btn border-0">add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-10 offset-xxl-1 col-lg-12 col-md-12 offset-md-0">
                                <div className="description-wrapper br-20">
                                    <nav className="mb-48">
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link button-1 discription" id="nav-desc-tab" data-bs-toggle="tab" data-bs-target="#nav-desc" type="button" role="tab" aria-controls="nav-desc" aria-selected="false">Description</button>
                                            <button className="nav-link button-2 active reviews" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="true">Reviews (02)</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade" id="nav-desc" role="tabpanel" aria-labelledby="nav-desc-tab">
                                            <div className>
                                                <p>This is a type of food that is specifically formulated and intended for
                                                    consumption by
                                                    pets. It is usually sold in the form of dry kibble or wet cans, and is designed
                                                    to meet
                                                    the nutritional needs of a variety of different types of pets, including dogs,
                                                    cats, and
                                                    small animals like guinea pigs and rabbits.
                                                    This food may help from a variety of different ingredients, including meat,
                                                    grains,
                                                    vegetables, and fortified vitamins and minerals. Some pet food is formulated for
                                                    specific life stages, such as puppy or senior, and may contain higher levels of
                                                    certain
                                                    nutrients to support the needs of pets at those stages of life.
                                                    At the end, also formulated for pets with special dietary needs, such as those
                                                    with food
                                                    allergies or sensitivities.</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade active show" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                                            {/* REVIEW AREA */}
                                            <div className="row row-gap-4">
                                                <div className="col-lg-6 order-md-0 order-2">
                                                    <div className="d-flex gap-24 align-items-center">
                                                        <img className="review-user" src="/savory/assets/media/user/user_7.jpg" alt />
                                                        <div className="review-comment">
                                                            <div className="d-flex align-items-center gap-12 mb-12">
                                                                <p className="medium-black fw-600">Shafiqul <span className="dark-gray">
                                                                    (verified
                                                                    owner) -
                                                                    March 25, 2023</span></p>
                                                                <div className="d-flex align-items-center gap-6">
                                                                    <i className="fa-solid fa-star color-ter" />
                                                                    <i className="fa-solid fa-star color-ter" />
                                                                    <i className="fa-solid fa-star color-ter" />
                                                                    <i className="fa-solid fa-star color-ter" />
                                                                    <i className="fa-regular fa-star color-ter" />
                                                                </div>
                                                            </div>
                                                            <p className="dark-gray">Good Food….</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="add-review">
                                                        <h6 className="medium-black mb-12">Add a review</h6>
                                                        <p className="mb-12 ">Your email address will not be published. Required fields
                                                            are
                                                            marked *
                                                        </p>
                                                        <form method="post" className>
                                                            <input type="text" name="name" id="text" className="form-control mb-24" required placeholder="Name" />
                                                            <input type="email" name="email" id="e-mail" className="form-control mb-24" required placeholder="Email" />
                                                            <div className="checkbox-wrapper-46 mb-12">
                                                                <input type="checkbox" id="in-stock" className="inp-cbx" />
                                                                <label htmlFor="in-stock" className="cbx"><span>
                                                                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                                        <polyline points="1.5 6 4.5 9 10.5 1" />
                                                                    </svg></span><span className="dark-gray fw-400 check-mail-box">Save my
                                                                        name,
                                                                        email, and
                                                                        website in this browser for the next time I<br />
                                                                        comment.</span>
                                                                </label>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-12 mb-24">
                                                                <p className="medium-black">Rating *</p>
                                                                <div className="rating">
                                                                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                                                                    <label htmlFor="star5" title="text"><svg viewBox="0 0 576 512" height="18px" xmlns="http://www.w3.org/2000/svg" className="star-solid">
                                                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                                        </path>
                                                                    </svg></label>
                                                                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                                                                    <label htmlFor="star4" title="text"><svg viewBox="0 0 576 512" height="18px" xmlns="http://www.w3.org/2000/svg" className="star-solid">
                                                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                                        </path>
                                                                    </svg></label>
                                                                    <input defaultChecked type="radio" id="star3" name="rate" defaultValue={3} />
                                                                    <label htmlFor="star3" title="text"><svg viewBox="0 0 576 512" height="18px" xmlns="http://www.w3.org/2000/svg" className="star-solid">
                                                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                                        </path>
                                                                    </svg></label>
                                                                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                                                                    <label htmlFor="star2" title="text"><svg viewBox="0 0 576 512" height="18px" xmlns="http://www.w3.org/2000/svg" className="star-solid">
                                                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                                        </path>
                                                                    </svg></label>
                                                                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                                                                    <label htmlFor="star1" title="text"><svg viewBox="0 0 576 512" height="18px" xmlns="http://www.w3.org/2000/svg" className="star-solid">
                                                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                                                        </path>
                                                                    </svg></label>
                                                                </div>
                                                            </div>
                                                            <p className="dark-gray mb-12">Your review *</p>
                                                            <textarea name="message" id="comments" className="form-control form-control-2 mb-32" placeholder="Write Your Message" defaultValue={""} />
                                                            <button type="submit" className="cus-btn submit-btn">add a review</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* REVIEW AREA */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* SHOP DETAIL SECTION END */}
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
} export default Vieworders