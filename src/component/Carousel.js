import React from 'react';
import bilingual from '../assets/images/bilingual.jpg';
import ingredients from '../assets/images/ingredients.jpg';
import weather from '../assets/images/weather.jpg';
import medication from '../assets/images/medication.jpg';
import planner from '../assets/images/planner.jpg';
import data from '../assets/images/data.jpg';
import Card from '../component/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component{

    constructor(props) {
        super (props);
        this.state = {

            items: [
                {
                    id: 0,
                    title: 'Get bilingual',
                    subTitle: 'A place to meet and learn languages with others',
                    imgSrc: bilingual,
                    link: 'https://mighty-garden-68730.herokuapp.com/login',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Good Eats',
                    subTitle: 'Restaurant and recipe finder',
                    imgSrc: ingredients,
                    link: 'https://rmoatman.github.io/Another-Version-of-Project-1---Good-Eats/#',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weather Dashboard',
                    subTitle: 'Track your local weather',
                    imgSrc: weather,
                    link: 'https://rmoatman.github.io/Roatman_Weather_Dashboard/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Day Planner',
                    subTitle: 'Keep track of the workday',
                    imgSrc: planner,
                    link: 'https://rmoatman.github.io/Roatman_Work_Day_Scheduler/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'ORM Example',
                    subTitle: 'Sample E-Commerce Back-end',
                    imgSrc: data,
                    link: 'https://github.com/rmoatman/E_Commerce_Back_End',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Medication Tracker',
                    subTitle: 'Keep track of daily medication schedules',
                    imgSrc: medication,
                    link: '/UnderConstruction',
                    selected: false
                },
            ]
        }
    }

    // toggles the selected falue (true/false).  Used for displaying project info when selected.
    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        // loops through all and makes all non-selected false
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )   
    }
    

}

export default Carousel

