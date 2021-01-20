/* eslint-disable prettier/prettier */
import React from 'react';
import {
    CallOutlined,
    EmailOutlined,
    Facebook,
    Instagram,
    LinkedIn
} from '@material-ui/icons';
// eslint-disable-next-line no-unused-vars
import brandIcon from '../../Assets/Icons/eSeaIcon.png';

const IconStyle = { marginBottom: "15px", background: "white", borderRadius: "5px" }
export default function Footer() {
    return (
        <footer className="footer p-5 container-fluid">
            <div className="row footer__row justify-content-center align-content-center">
                <div className="col-md-6 col-sm-6 d-flex flex-column mb-5">
                    <h4 className="footer__title font-weight-bold mb-3">
                        Hubungi Kami
                    </h4>
                    <div className="d-flex">
                        <CallOutlined style={IconStyle} />
                        <p className="ml-3 footer__icon-text"> 081-888-888</p>
                    </div>
                    <div className="d-flex">
                        <EmailOutlined style={IconStyle} />
                        <p className="ml-3 footer__icon-text mb-5">eseaIkan@gmail.com</p>
                    </div>
                    <h4 className="footer__title font-weight-bold mb-3">
                        Ikuti Kami
                    </h4>
                    <div className="d-flex">
                        <Facebook style={IconStyle} />
                        <p className="ml-3 footer__icon-text"> 081-888-888</p>
                    </div>
                    <div className="d-flex">
                        <Instagram style={IconStyle} />
                        <p className="ml-3 footer__icon-text">eseaIkan@gmail.com</p>
                    </div>
                    <div className="d-flex">
                        <LinkedIn style={IconStyle} />
                        <p className="ml-3 footer__icon-text">eseaIkan@gmail.com</p>
                    </div>
                </div>

                <div className="col-md-5 col-sm-12 d-flex align-items-center flex-column mb-5">
                    <h4 className="footer__title font-weight-bold mb-3">
                        Ikuti Mailing List kami!
                    </h4>
                    <form className="form-group  w-100">
                        <input type="text" className="form-control" placeholder="Masukan Email Anda" />
                    </form>
                    <button className="btn btn-block btn-esea-main mb-5" type="button">
                        Subscribe
                    </button>
                    <img src={brandIcon} className="img-fluid mb-2" alt="logo" />
                    <p className="footer__icon-text text-center"> Kami menyediakan ikan segar berkualitas</p>
                </div>
                <p className="footer__icon-text text-center">©E-sea 2020, inc</p>
            </div>
        </footer>
    );
}
