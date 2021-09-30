import React from 'react';
import CardInfo from './Cardinfo';
import Col from 'react-bootstrap/Col';

function Card(props) {

    return(
        
        <Col className="d-flex justify-content-center">
            <div
                className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
                <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                { props.item.selected && <CardInfo 
                    title={props.item.title}
                    subTitle={props.item.subTitle}
                    link={props.item.link} /> }
            </div>
        </Col>
     

    )
}

export default Card;