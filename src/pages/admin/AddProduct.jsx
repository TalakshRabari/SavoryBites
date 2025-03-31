import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseconfig"
import FooterAdmin from "../../component/admin/FooterAdmin"
import HeaderAdmin from "../../component/admin/HeaderAdmin"
import PageTitleAdmin from "../../component/admin/PageTitleAdmin";
import SidebarAdmin from "../../component/admin/SidebarAdmin"
import { error, success } from "../../store/message"
import { useState } from "react";
function AddProduct() {

    let [name, setName] = useState("")
    let [desc, setDesc] = useState("")
    let [category, setCategory] = useState("")
    let [price, setPrice] = useState("")
    let [brand, setBrand] = useState("")
    let [productid, setProductid] = useState("")

    async function addproduct() {
        try {
            let colref = collection( db , "products")
            await addDoc(colref, {
                name: name,
                productid: productid,
                desc: desc,
                category: category,
                brand: brand,
                price:price
            })
            success("Product Added!");
        } catch (err) {
            console.log(err)
            error("Something Went Wrong!")
        }


        // console.log("Function Invoked!")
    }
    return (
        <>
            {/* layout-wrap */}
            <div className="layout-wrap">
                {/* section-menu-left */}
                <SidebarAdmin />
                {/* /section-menu-left */}
                {/* section-content-right */}
                <div className="section-content-right">
                    {/* header-dashboard */}
                    <HeaderAdmin />
                    {/* /header-dashboard */}
                    {/* main-content */}
                    <div className="main-content">
                        {/* main-content-wrap */}
                        <div className="main-content-inner">
                            {/* main-content-wrap */}
                            <div className="main-content-wrap">
                                <PageTitleAdmin title="Add Product" />
                                {/* form-add-product */}
                                <form className="tf-section-2 form-add-product">
                                    <div className="wg-box">
                                        <fieldset className="name">
                                            <div className="body-title mb-10">Product name <span className="tf-color-1">*</span></div>
                                            <input value={name} onChange={(e) =>setName(e.target.value) } className="mb-10" type="text" placeholder="Enter product name" name="text" tabIndex={0} aria-required="true" required />
                                            <div className="text-tiny">Do not exceed 20 characters when entering the product name.</div>
                                        </fieldset>
                                        <fieldset className="name">
                                            <div className="body-title mb-10">Product Id <span className="tf-color-1">*</span></div>
                                            <input value={productid} onChange={(e) =>setProductid(e.target.value) } className="mb-10" type="text" placeholder="Enter product id" name="text" tabIndex={0} aria-required="true" required />
                                        </fieldset>
                                        <div className="gap22 cols">
                                            <fieldset className="category">
                                                <div className="body-title mb-10">Category <span className="tf-color-1">*</span></div>
                                                <div className="select">
                                                    <select className value={category} onChange={(e) => setCategory(e.target.value)}>
                                                        <option>Choose category</option>
                                                        <option>Pizza</option>
                                                        <option>Burger</option>
                                                        <option>Sandwitch</option>
                                                        <option>Chips</option>
                                                    </select>
                                                </div>
                                            </fieldset>

                                        </div>
                                        <fieldset className="brand">
                                            <div className="body-title mb-10">Brand <span className="tf-color-1">*</span></div>
                                            <div className="select">
                                                <select className value={brand} onChange={(e) => { setBrand(e.target.value) }}>
                                                    <option>Choose category</option>
                                                    <option>Dominoz</option>
                                                    <option>Pizzahut</option>
                                                    <option>Starbucks</option>
                                                    <option>KFG</option>
                                                    <option>CaffaCoffeeDay</option>
                                                </select>
                                            </div>
                                        </fieldset>
                                        <fieldset className="description">
                                            <div className="body-title mb-10">Description <span className="tf-color-1">*</span></div>
                                            <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} className="mb-10" name="description" placeholder="Description" tabIndex={0} aria-required="true" required defaultValue={""} />
                                            <div className="text-tiny">Do not exceed 100 characters when entering the product name.</div>
                                        </fieldset>
                                    </div>
                                    <div className="wg-box">
                                        <fieldset>
                                            <div className="body-title mb-10">Upload images</div>
                                            <div className="upload-image mb-16">

                                                <div className="item up-load">
                                                    <label className="uploadfile" htmlFor="myFile">
                                                        <span className="icon">
                                                            <i className="icon-upload-cloud" />
                                                        </span>
                                                        <span className="text-tiny">Drop your images here or select <span className="tf-color">click to browse</span></span>
                                                        <input type="file" id="myFile" name="filename" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="body-text">You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions. Notice that the product shows all the details</div>
                                        </fieldset>
                                        <div className="cols gap22">

                                            <fieldset className="name">
                                                <div className="body-title mb-10">Product Price</div>

                                                <input value={price} onChange={(e) => { setPrice(e.target.value) }} type="Number" name="Price" />

                                            </fieldset>
                                        </div>
                                        <div className="cols gap10">
                                            <button onClick={addproduct} className="tf-button w-full" type="button">Add product</button>

                                        </div>
                                    </div>
                                </form>
                                {/* /form-add-product */}
                            </div>
                            {/* /main-content-wrap */}
                        </div>
                        {/* /main-content-wrap */}
                        {/* bottom-page */}
                        <FooterAdmin />
                        {/* /bottom-page */}
                    </div>
                    {/* /main-content */}
                </div>
                {/* /section-content-right */}
            </div>
            {/* /layout-wrap */}

        </>
    )
}
export default AddProduct