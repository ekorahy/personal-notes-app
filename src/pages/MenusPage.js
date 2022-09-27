import React from "react";
import ButtonLink from "../components/main/ButtonLink";
import UrlImage from "../components/main/UrlImage";
import MenusImg from "../assets/images/illustration_menus.png";

function MenusPage() {
    return (
        <div>
            <div className='container col-xxl-8 px-4 py-5'>
                <div className='row flex-lg-row align-items-center g-5 py-5'>
                <div className='col-10 col-sm-8 col-lg-6'>
                <UrlImage src={MenusImg} alt="Home Ilustration Image" className='d-block mx-lg-auto img-fluid' width='350' loading='lazy' />
                </div>
                <div className='col-lg-6'>
                    <p tabIndex={0} className='fw-lighter fs-6 text-center'>Choose Menu</p>
                    <div className="d-flex justify-content-center">
                        <ButtonLink link="/add" label="Add Note" className='btn btn-success px-4 text-white fw-400' style={{padding: '10px 0', margin: '0 10px 0 0'}} />
                        <ButtonLink link="/notes" label="View Notes" className='btn btn-info px-4 text-white fw-400' style={{padding: '10px 0', margin: '0 10px 0 0'}} />
                        <ButtonLink link="/archived" label="View Archived" className='btn btn-warning px-4 text-white fw-400' style={{padding: '10px 0', margin: '0 10px 0 0'}} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MenusPage;