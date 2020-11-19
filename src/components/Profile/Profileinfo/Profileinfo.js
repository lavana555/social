import React from 'react';
import style from './Profile.module.css'

const Profileinfo = () => {
    return (
        <div>
            <div>
                <img src="https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg"></img>
            </div>
            <div className={style.descriptionBlock}>
                ava +discription
            </div>
        </div>
    );
};

export default Profileinfo;
