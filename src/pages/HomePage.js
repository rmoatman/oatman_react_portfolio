import React from 'react';
import Hero from '../component/Hero';


function HomePage(props) {

    return(
        <Hero
            title={props.title}
            subTitle={props.subTitle}
            comment={props.comment}
        />
    );
}

export default HomePage;
