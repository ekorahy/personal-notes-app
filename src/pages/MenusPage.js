import React from "react";
import ButtonLink from "../components/main/ButtonLink";
import UrlImage from "../components/main/UrlImage";
import MenusImg from "../assets/images/illustration_menus.png";
import { AiOutlineFileAdd } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { RiArchiveDrawerLine } from 'react-icons/ri';

function MenusPage() {
    return (
        <div>
            <div className='container col-xxl-8 px-4 py-3'>
                <div className='col flex-lg-row align-items-center g-5 py-5'>
                <div className='row-10 row-sm-8 row-lg-6'>
                <UrlImage src={MenusImg} alt="Home Ilustration Image" className='d-block mx-lg-auto img-fluid mx-auto' width='230' height='130' loading='lazy' />
                </div>
                <div className='row-lg-6'>
                    <p tabIndex={0} className='fw-lighter fs-6 text-center mt-3 fw-bold'>Choose Menu</p>
                    <div className="d-flex justify-content-center flex-wrap">
                        <ButtonLink
                        link="/add" 
                        label={<AiOutlineFileAdd style={{fontSize: "24px"}} />} 
                        className='btn btn-success px-5 mb-2 text-white fw-400' 
                        style={{padding: '10px 0', margin: '0 10px 0 0'}} 
                        title="Add New Note" />
                        <ButtonLink
                        link="/notes" 
                        label={<CgNotes style={{fontSize: "24px"}} />} 
                        className='btn btn-primary px-5 mb-2 text-white fw-400' 
                        style={{padding: '10px 0', margin: '0 10px 0 0'}} 
                        title="View Notes" />
                        <ButtonLink
                        link="/archived" 
                        label={<RiArchiveDrawerLine style={{fontSize: "24px"}} />} 
                        className='btn btn-warning px-5 mb-2 text-white fw-400' 
                        style={{padding: '10px 0', margin: '0 10px 0 0'}} 
                        title="View Archived" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MenusPage;