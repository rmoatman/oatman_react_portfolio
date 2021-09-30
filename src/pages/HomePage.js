import React from 'react';
import Hero from '../component/Hero';
import Carousel from '../component/Carousel';



function HomePage(props) {

    return(
        <div>
            <Hero
                title={props.title}
                subTitle={props.subTitle}
                comment={props.comment}
            />

            <Carousel />
        </div>
    );
}

export default HomePage;
