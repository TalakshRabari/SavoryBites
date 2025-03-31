import { collection , onSnapshot } from "firebase/firestore"
import { useEffect  , useState } from "react"
import FooterAdmin from "../../component/admin/FooterAdmin"
import HeaderAdmin from "../../component/admin/HeaderAdmin"
import PageTitleAdmin from "../../component/admin/PageTitleAdmin"
import SidebarAdmin from "../../component/admin/SidebarAdmin"
import { db } from "../../firebaseconfig"
import { NavLink } from "react-router"

function ViewProduct() {
   
        let [products , setProducts] =useState("")

           useEffect(()=>{
            viewproducts()
           },[])

        function viewproducts(){
        
                let colref = collection(db ,"products");
                 onSnapshot(colref, (snapshot) =>{      
                    let result = [];
                    snapshot.docs.forEach((doc) => {
                        result.push({ id: doc.id, ...doc.data() });
                    });
                  setProducts(result);
                 });
            }
        

    return (
        <>

            <div id="wrapper">
                {/* #page */}
                <div id="page" className>
                    {/* layout-wrap */}
                    <div className="layout-wrap">
                        {/* preload */}
                        
                        {/* /preload */}
                        {/* section-menu-left */}
                          <SidebarAdmin/>
                        {/* /section-menu-left */}
                        {/* section-content-right */}
                        <div className="section-content-right">
                            {/* header-dashboard */}
                              <HeaderAdmin/>
                            {/* /header-dashboard */}
                            {/* main-content */}
                            <div className="main-content">
                                {/* main-content-wrap */}
                                <div className="main-content-inner">
                                    {/* main-content-wrap */}
                                    <div className="main-content-wrap">
                                         <PageTitleAdmin title="Product List"/>
                                        {/* product-list */}
                                        <div className="wg-box">
                                            <div className="title-box">
                                                <i className="icon-coffee" />
                                                <div className="body-text">Tip search by Product ID: Each product is provided with a unique ID, which you can rely on to find the exact product you need.</div>
                                            </div>
                                            <div className="flex items-center justify-between gap10 flex-wrap">
                                                <div className="wg-filter flex-grow">
                                                    <div className="show">
                                                        <div className="text-tiny">Showing</div>
                                                        <div className="select">
                                                            <select className>
                                                                <option>10</option>
                                                                <option>20</option>
                                                                <option>30</option>
                                                            </select>
                                                        </div>
                                                        <div className="text-tiny">entries</div>
                                                    </div>
                                                    <form className="form-search">
                                                        <fieldset className="name">
                                                            <input type="text" placeholder="Search here..." className name="name" tabIndex={2} defaultValue aria-required="true" required />
                                                        </fieldset>
                                                        <div className="button-submit">
                                                            <button className type="submit"><i className="icon-search" /></button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <NavLink className="tf-button style-1 w208" to="/admin/addproduct"><i className="icon-plus" />Add new</NavLink>
                                            </div>
                                            <div className="wg-table table-product-list">
                                                <ul className="table-title flex gap40 mb-14">
                                                    <li>
                                                        <div className="body-title">Product Name</div>
                                                    </li>
                                                    <li>
                                                        <div className="body-title">Product ID</div>
                                                    </li>
                                                    <li>
                                                        <div className="body-title">Product Description</div>
                                                    </li>
                                                    <li>
                                                        <div className="body-title">Brand Name</div>
                                                    </li>
                                                    <li>
                                                        <div className="body-title">Price</div>
                                                    </li>
                                                     <li>
                                                        <div className="body-title">Action</div>
                                                    </li>
                                                </ul>
                                                <div className="divider" />
                                                {products &&
                          products.map((product) => (
                            <ul className="flex flex-column">
                              <li className="attribute-item flex items-center justify-between gap20">
                                <div className="name">
                                  <a
                                    href="add-attributes.html"
                                    className="body-title-2"
                                  >
                                    {product.name}
                                  </a>
                                </div>
                                <div className="body-text">
                                {product.productid}
                                </div>
                                <div className="body-text">
                                 
                                  {product.desc}
                                </div>
                                <div className="body-text">
                                  {product.brand}
                                </div>
                                <div className="body-text">
                                  {product.price}
                                </div>
                                <div className="body-text">
                                  {product.category}
                                </div>
                                <div className="list-icon-function">
                                  <div className="item eye">
                                  <div className="icons8-edit"></div>
                                  </div>
                                  <div className="item edit">
                                  <div class="icons8-delete"></div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          ))}
                                               
                                            </div>
                                            
                                         
                                        </div>
                                        {/* /product-list */}
                                    </div>
                                    {/* /main-content-wrap */}
                                </div>
                                {/* /main-content-wrap */}
                                {/* bottom-page */}
                                <FooterAdmin/>
                                {/* /bottom-page */}
                            </div>
                            {/* /main-content */}
                        </div>
                        {/* /section-content-right */}
                    </div>
                    {/* /layout-wrap */}
                </div>
                {/* /#page */}
            </div>


        </>
    )
}
export default ViewProduct