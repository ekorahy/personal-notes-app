import React from "react";
import ButtonLink from "../components/main/ButtonLink";
import UrlImage from "../components/main/UrlImage";
import MenusImg from "../assets/images/illustration_menus.png";
import { AiOutlineFileAdd } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { ThemeConsumer } from '../contexts/ThemeContext';

function MenusPage() {
    return (
        <ThemeConsumer>
            {({ theme, language }) => {
                return (
                    <div className="container col-xxl-8 px-4 py-3">
                        <div className="col flex-lg-row align-items-center g-5 py-5">
                            <div className="row-10 row-sm-8 row-lg-6">
                                <UrlImage
                                urlImg={MenusImg} 
                                alt="Menus Ilustration Image" 
                                className="d-block mx-lg-auto img-fluid mx-auto" 
                                width="230" 
                                height="130" 
                                loading="lazy" />
                            </div>
                            <div className="row-lg-6">
                                <p tabIndex={0} className={`fw-lighter fs-6 text-center mt-3 fw-bold text-${theme}`}>{language === 'id' ? 'Pilih Menu' : 'Choose Menu'}</p>
                                <div className="d-flex justify-content-center flex-wrap">
                                    <ButtonLink
                                    link="/add" 
                                    icon={<AiOutlineFileAdd style={{fontSize: "24px"}} />} 
                                    className="btn btn-outline-success px-5 mb-2 fw-400" 
                                    style={{padding: '10px 0', margin: '0 10px 0 0'}} 
                                    title={language === 'id' ? 'Tambah catatan baru' : 'Add new note'} />
                                    <ButtonLink
                                    link="/notes" 
                                    icon={<CgNotes style={{fontSize: "24px"}} />} 
                                    className="btn btn-outline-info px-5 mb-2 fw-400" 
                                    style={{padding: '10px 0', margin: '0 10px 0 0'}} 
                                    title={language === 'id' ? 'Lihat catatan' : 'View notes'} />
                                    <ButtonLink
                                    link="/archived" 
                                    icon={<RiArchiveDrawerLine style={{fontSize: "24px"}} />} 
                                    className="btn btn-outline-warning px-5 mb-2 fw-400" 
                                    style={{padding: '10px 0', margin: '0 10px 0 0'}} 
                                    title={language === 'id' ? 'Lihat arsip' : 'View archived'} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ThemeConsumer>
    );
}

export default MenusPage;