import React from 'react';
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.preloader}>
            {/*<img src='https://flevix.com/wp-content/uploads/2020/01/Preloader.gif' />*/}
            <img src='https://media3.giphy.com/media/1kIZV70jFzw0pg2Cw1/source.gif' />
        </div>
    );
};

export default Preloader;