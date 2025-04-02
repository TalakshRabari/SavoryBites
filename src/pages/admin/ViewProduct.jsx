import { collection , onSnapshot } from "firebase/firestore"
import { useEffect  , useState } from "react"
import FooterAdmin from "../../component/admin/FooterAdmin"
import HeaderAdmin from "../../component/admin/HeaderAdmin"
import PageTitleAdmin from "../../component/admin/PageTitleAdmin"
import SidebarAdmin from "../../component/admin/SidebarAdmin"
import { db } from "../../firebaseconfig"
import { NavLink } from "react-router"

function ViewProduct() {
   
        let [products , setProducts] =useState([])
        let [searchquery , setSearchQuery] =useState("")

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

            //  Search Handle function

            let handleSearchChange = (e) => {
                setSearchQuery(e.target.value);
            }
        
            let filteredProducts = products.filter((product) => {
              return product.name.toLowerCase().includes(searchquery.toLowerCase());
            });

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
                                                    
                                                    <form className="form-search">
                                                        <fieldset className="name">
                                                            <input type="text" placeholder="Search Products..." value={searchquery} onChange={handleSearchChange} className name="name" tabIndex={2} defaultValue aria-required="true" required />
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
                                                        <div className="body-title">Product Category</div>
                                                    </li>
                                                    <li>
                                                        <div className="body-title">Product Description</div>
                                                    </li>
                                                    <li>
                                                        <div className="body-title">Price</div>
                                                    </li>
                                                     <li>
                                                        <div className="body-title">Action</div>
                                                    </li>
                                                </ul>
                                                <div className="divider" />
                                                {filteredProducts && filteredProducts.length > 0 ?
                                  (filteredProducts.map((product) => (
                            <ul className="flex flex-column" style={{paddingLeft: 0}} >
                              <li className="product-item gap14">
                                
                                <div className="flex items-center justify-between gap20 flex-grow">
              
                             
                                <div className="name" style={{display:"flex", flexDirection:"row" , gap:"20px"}}>
                                  <div  className="image no-bg">
                                      {product.imageUrl && (
                                        <img src={product.imageUrl}  alt={product.name} width={100} />
                                      )}  
                                </div>
                                    {product.name} 
                                  
                                  
                                </div>
                                <div className="body-text">
                                {product.productid}
                                </div>
                                <div className="body-text">
                                  {product.category}
                                </div>

                                <div className="body-text">
                                 
                                  {product.desc}
                                </div>
                                <div className="body-text"  style={{textAlign:"-webkit-center"}}>
                                  {product.price}
                                </div>
                              
                                <li className="list-icon-function">
                                  <div className="item eye">
                                              <i class="icon-eye"></i>   
                                  </div>
                                  <div className="item edit">
                                           <i class="icon-edit-3"></i>
                                  </div>
                                  <div className="item trash">
                                           <i class="icon-trash-2"></i>
                                  </div>

                                </li>
                         
                                 </div>
                              </li>
                            </ul>
                          )) 
                         )  : (
                          <div>No Matching Product Found</div>
                         )
                        
                        }
                                               
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