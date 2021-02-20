import React from 'react'
import './footer.styles.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container bottom_border">
                <div className="row">
                    <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
            {/* <!--headin5_amrc--> */}
                        {/* <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                        <p><i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini road 35 block </p>
                        <p><i className="fa fa-phone"></i>  +91-9999878398  </p>
                        <p><i className="fa fa fa-envelope"></i> info@example.com  </p>


                    </div>


                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Links</h5>
                        {/* <!--headin5_amrc--> */}
                        <ul className="footer_ul_amrc">
                        <li><a href="http://webenlance.com">Home</a></li>
                        <li><a href="http://webenlance.com">Services</a></li>
                        <li><a href="http://webenlance.com">About</a></li>
                        <li><a href="http://webenlance.com">FAQ</a></li>
                        <li><a href="http://webenlance.com">Contact</a></li>
                        <li><a href="http://webenlance.com">Sign Up</a></li>
                        </ul>
            {/* <!--footer_ul_amrc ends here--> */}
                    </div>


                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Careers</h5>
                        {/* <!--headin5_amrc--> */}
                        <ul className="footer_ul_amrc">
                        <li><a href="http://webenlance.com">Job Openings</a></li>
                        <li><a href="http://webenlance.com">Service Providers</a></li>
                        <li><a href="http://webenlance.com">Success</a></li>
                        <li><a href="http://webenlance.com">Benefits</a></li>
                        {/* <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li> */}
                        {/* <li><a href="http://webenlance.com">Image Cropping</a></li> */}
                        </ul>
                        {/* <!--footer_ul_amrc ends here--> */}
                    </div>


                    <div className=" col-sm-4 col-md  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">About us</h5>
                        {/* <!--headin5_amrc ends here--> */}
                
                        <p>We Care Home Care was launched in November 2020. The company"s vision is to empower millions of service professionals across the world to deliver services at home like never seen before.</p>
                        {/* <!--footer_ul2_amrc ends here--> */}
                    </div>
                </div>
            </div>


            <div className="container">
                {/* <ul className="foote_bottom_ul_amrc">
                <li><a href="http://webenlance.com">Home</a></li>
                <li><a href="http://webenlance.com">About</a></li>
                <li><a href="http://webenlance.com">Services</a></li>
                <li><a href="http://webenlance.com">Pricing</a></li>
                <li><a href="http://webenlance.com">Contact</a></li>
                <li><a href="http://webenlance.com">Blog</a></li>
                </ul> */}
                {/* <!--foote_bottom_ul_amrc ends here--> */}
                <p className="text-center copyright">Copyright ©2021 All Rights Reserved | Designed by <a href="#1">We Care home Care</a></p>

                <ul className="social_footer_ul">
                <li><a href="http://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="http://twitter.com"><i className="fab fa-twitter"></i></a></li>
                <li><a href="http://linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="http://instagram.com"><i className="fab fa-instagram"></i></a></li>
                </ul>
                {/* <!--social_footer_ul ends here--> */}
            </div>

        </footer>

        )
}

export default Footer




// <!-- Crédit to https://bootsnipp.com/snippets/bxDBA -->