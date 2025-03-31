    import HeaderAdmin from "../../component/admin/HeaderAdmin"
    import SidebarAdmin from "../../component/admin/SidebarAdmin"
    import FooterAdmin from "../../component/admin/FooterAdmin"
     import  { useState } from "react"
     import { useEffect } from "react"
     import { db } from "../../firebaseconfig"
     import { collection, onSnapshot } from "firebase/firestore"
     import { getDocs } from "firebase/firestore"
import { NavLink } from "react-router"
     
    function ViewCategory() {
 
                let [categories ,setCategories] = useState("")

                          useEffect( ()=>{
                           getCategories()
                          },[])
               
                           function getCategories(){
                            let colref = collection(db , "categories")
                           onSnapshot(colref , (snapshot) =>{
                            let result = [];
                            snapshot.docs.forEach((doc) => {
                                result.push({ id: doc.id, ...doc.data() });
                            });
                            setCategories(result);
                           })
                          }
        
        return (
            <>
                <div class="layout-wrap">
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
                                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                                        <h3>All category</h3>
                                        <ul className="breadcrumbs flex items-center flex-wrap justify-start gap20">
                                            <li>
                                                <NavLink to="/admin"><div className="text-tiny">Dashboard</div></NavLink>
                                            </li>
                                            <li>
                                                <i className="icon-chevron-right" />
                                            </li>
                                            <li>
                                                <NavLink to="/admin/viewcategory"><div className="text-tiny">Category</div></NavLink>
                                            </li>
                                            <li>
                                                <i className="icon-chevron-right" />
                                            </li>
                                            <li>
                                                <div className="text-tiny">All category</div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* all-category */}
                                    <div className="wg-box">
                                        <div className="flex items-center justify-between gap20 flex-wrap">
                                            <div className="wg-filter flex-grow">
                                                <form className="form-search">
                                                    <fieldset className="name">
                                                        <input type="text" placeholder="Search here..." className name="name" tabIndex={2} aria-required="true" required />
                                                    </fieldset>
                                                    <div className="button-submit">
                                                        <button className type="submit"><i className="icon-search" /></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <NavLink className="tf-button style-1 w208" to="/admin/addcategory"><i className="icon-plus" />Add New</NavLink>
                                        </div>
                                        <div className="wg-table table-all-category">
                                            <ul className="table-title flex gap20 mb-14">
                                                <li>
                                                    <div className="body-title">Category</div>
                                                </li>
                                                <li>
                                                    <div className="body-title">Category Id</div>
                                                </li>
                                                <li>
                                                    <div className="body-title">Category  Description</div>
                                                </li>
                                                <li>
                                                    <div className="body-title">Action</div>
                                                </li>
                                            </ul>
                                            <div className="divider" />
                                            {categories &&  
                                          categories.map((category) => (
                                            <ul className="flex flex-column">
                                                <li className="attribute-item flex items-center justify-between gap20" key={category.categoryid}>

                                                    <div className="body-text">
                                                        {category.name}
                                                    </div>
                                                    <div className="body-text">
                                                        {category.categoryid}
                                                    </div>
                                                    <div className="body-text">
                                                        {category.desc}
                                                    </div>

                                                    {/* <div classsName="list-icon-function">
                                                        <div className="item eye">
                                                            <div className="icon8-edit"></div>
                                                        </div>
                                                        <div className="item edit">
                                                            <div className="icon8-delete"></div>
                                                        </div>
                                                    </div> */}
                                                </li>
                                            </ul>
                                          ))}
                                            


                                        </div>
                                       
                                        <div className="flex items-center justify-between flex-wrap gap20">
                                            
                                        
                                        </div>
                                    </div>
                                    {/* /all-category */}
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

            </>
        )
    }
    export default ViewCategory