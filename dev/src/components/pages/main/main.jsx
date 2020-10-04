import React from 'react';
import { NavLink } from 'react-router-dom';
import EventClicker from './EventClicker';
import './slider-animations.scss';
import './main.scss';

// import package and styling for animated slider
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


// photos
import PraestgardenHus from '../../../assets/images/praestgarn-illustrasjon.png';
import SnertingdalBuss from '../../../assets/images/snertingdal-buss.png';
import PraestgardenHekk from '../../../assets/images/praestgarn-hekk-klipping.jpg';
import PraestgardenRent from '../../../assets/images/praestgarn-gang.jpg';


const content = [
	{
		title: 'En tur i solnedgangen med Jan Teigen',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa.',
        button: 'Les mer',
        purchase: 'Kjøp billetter',
        image: 'https://static1.squarespace.com/static/51c2647ee4b097ff213b1a19/t/52599f0ce4b018d723814d2d/1381605140157/AutumnSunset3.jpg',
        ticket: 'https://tikkio.com/',
        page: '/history',
        date: '39. juni 2019'
	},
	{
		title: 'Ikke jordbær',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Les mer',
        purchase: 'Kjøp billetter',
        image: 'https://media.daysoftheyear.com/20171223115009/strawberry-day1.jpg',
        ticket: 'https://tikkio.com/',
        page: '/program',
        date: '24. mai 2019'
	},
	{
		title: 'Palli juseyo tut bufen',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        button: 'Les mer',
        purchase: 'Kjøp billetter',
        image: 'https://i.imgur.com/DvmN8Hx.jpg',
        ticket: 'https://tikkio.com/',
        page: '/contact',
        date: '20. juni 3012'
	}
];

const styles = {
    historyBackground: {
        backgroundImage: `url(${PraestgardenHekk})`
    },

    rentBackground: {
        backgroundImage: `url(${PraestgardenRent})`
    }
};


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.sliderRef = undefined;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(content) {
        this.sliderRef.goTo(content, undefined);

        // stop and restart interval when clicked
        this.timerID = clearInterval(this.timerID);
        this.timerID = setInterval(this.sliderRef.next, 10000);
    }
    
    componentDidMount() {
        this.timerID = setInterval(this.sliderRef.next, 10000);
    }
    
    // stops slider timer when entering another page
    componentWillUnmount() {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
    }
    
    render(){
        return(
            <div className="index">
                <div className="eventclick-wrapper">
                    <h2>Kommende arrangementer</h2>
                    <EventClicker ref={pager => {this.pager = pager;}}
                    content={content}
                    triggerhandleClick={this.handleClick}
                    />
                </div>

                <Slider 
                duration={1}
                className="slider-wrapper" 
                ref={ref => (this.sliderRef = ref)}
                onSlideChange={content => this.pager.setSliderIndex(content.slideIndex)}
                >
                    {content.map((item, index) => (
                        <div key={index} className="slider-content" style={{ background: `url('${item.image}')` }}>
                            <div className="slide-text">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="buttons">
                                    <a href={item.ticket} target="_blank" rel="noopener noreferrer"><button>{item.purchase}</button></a>
                                    <NavLink to={ `${item.page}` }><button>{item.button}</button></NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="index-showcase">
                    <img className="index-pic" src={PraestgardenHus} alt="Tegning av Praestgarn"/>
                    <div className="index-text">
                        <h2>Præstgar'n – Snertingdals nye møtested</h2>
                        <p>Høsten 2017 kjøpte Hans Olav Brenner og Anita Krohn Traaseth prestegården i Snertingdal. 
                        Stedet drives nå som et flerbrukshus med både kulturarrangementer, kafé og utleie med mer. 
                        Præstgar'n har en godt dokumentert historie, og denne kan du oppleve gjennom tekst og bilder på siden.
                        </p>
                        <NavLink to="/aboutus">
                            <span className="read-more">Les mer om oss</span>
                            <span className="read-arrow"> > </span>
                        </NavLink>
                    </div>
                </div>

                <div className="image-showcase" style={styles.historyBackground}>
                    <div className="image-showcase-text">
                        <p>1929</p>
                        <h2>Tilbakeblikk</h2>
                        <p>Klipping av hekk i Præstgarden i 1929. Presten på stillas og barna foran.</p>
                        <NavLink to="/history">
                            <span className="read-more">Les mer om historien</span>
                            <span className="read-arrow"> > </span>
                        </NavLink>
                    </div>
                </div>

                <div className="index-showcase">
                    <img className="index-pic" src={SnertingdalBuss} alt="Tegning av Praestgarn"/>
                    <div className="index-text">
                        <h2>Våre venner</h2>
                        <p>Vi samarbeider med mange lokale bedrifter i Snertingdal, og vi vil ha gleden av å representere dere flere av våre samarbeidspartnere.
                            De bidrar til i noen av våre arrangementer slik at vi sammen kan tilby dere den beste opplevelsen. Bli kjent med dem!
                        </p>
                        <NavLink to="/partner">
                            <span className="read-more">Les mer om våre venner</span>
                            <span className="read-arrow"> > </span>
                        </NavLink>
                    </div>
                </div>

                <div className="image-showcase" style={styles.rentBackground}>
                    <div className="image-showcase-text">
                        <h2>Utleie</h2>
                        <p>Vi tilbyr muligheter for utleie for diverse type arrangementer. Ta en titt på prisene våre.</p>
                        <NavLink to="/rent">
                            <span className="read-more">Les mer om utleie</span>
                            <span className="read-arrow"> > </span>
                        </NavLink>
                    </div>
                </div>

            </div>
        );
    };
}  

export default Index;