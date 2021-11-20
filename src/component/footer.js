import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
                <footer >
                    <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
                        <div className="col-12">
                            <div className="row row-2">
                                <div className="col-sm-3 text-md-center">
                                    <h5><span> <i className="fa fa-firefox text-light" aria-hidden="true" /></span><b> Reacter</b></h5>
                                </div>
                                <div className="col-sm-3 my-sm-0 mt-5">
                                    <ul className="list-unstyled">
                                        <li className="mt-0">Platform</li>
                                        <li>Help Center</li>
                                        <li>Security</li>
                                    </ul>
                                </div>
                                <div className="col-sm-3 my-sm-0 mt-5">
                                    <ul className="list-unstyled">
                                        <li className="mt-0">Customers</li>
                                        <li>Use Cases</li>
                                        <li>Customers Services</li>
                                    </ul>
                                </div>
                                <div className="col-sm-3 my-sm-0 mt-5">
                                    <ul className="list-unstyled">
                                        <li className="mt-0">Company</li>
                                        <li>About</li>
                                        <li>Careers- <span className="Careers">We're-hiring</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
                        <div className="col-12">
                            <div className="row my-4 row-1 no-gutters">
                                <div className="col-sm-3 col-auto text-center"><small>Ⓒ Reacter Softwere</small></div>
                                <div className="col-md-3 col-auto " />
                                <div className="col-md-3 col-auto" />
                                <div className="col my-auto text-md-left text-right "> <small> hello@reacter.com <span><img src="https://i.imgur.com/TtB6MDc.png" className="img-fluid " width={25} /></span> <span><img src="https://i.imgur.com/N90KDYM.png" className="img-fluid " width={25} /></span></small> </div>
                            </div>
                        </div>
                    </div>
                </footer>


        </>
    )
}

export default Footer
