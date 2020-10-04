import React from 'react';
import './map.scss';
import ImageMapper from 'react-image-mapper';
import Kart from '../../../assets/images/snertingdal-kart.png';
import mapStyles from './Map.module.scss';


//Makes selected areas (with coordinates) of an image clickable
const MAP = {
    name: "my-map",
    areas: [
        { name: "Norsk Orgel- og Harmoniumfabrikk", shape: "circle", coords: [160,250,120], description: `Norsk Orgel- og Harmoniumfabrikk var et firma som bygget pipeorgler og trøorgler. Det ble grunnlagt i 1873 av Bernt Myrengen, og startet opp på Myrengens gård i Vardal hvor han allerede fra 1870 hadde bygget orgler. Tredje generasjon, representert ved Bernhard Berntzen, utvidet virksomheten med å selge pianoer og å starte produksjon av trøorgler, noe som kom i gang i 1919. I 1929 arvet han gården Berg i Snertingdal, og flyttet bedriften dit. Etter andre verdenskrig bygget han en ny fabrikkbygning, og sønnen Klaus Berntzen gikk inn i firmaet og ble der livet ut.` },
        { name: "Præstgar´n", shape: "circle", coords: [560,344,120], description: 'Kontakt oss på telefon: 45 27 24 24, eller epost: mail@prestgarden.no. Vår adresse er: Seegårdsveien 130, 2838 Snertingdal '},
        { name: "Seegård Kirke", shape: "circle", coords: [958,178,120], description: 'Seegård kirke ble først bygget i 1781 i Snertingdal, og var en laftet korskirke med 235 plasser. Palmesøndag 1994, brant kirken ned. Med dette forsvart hele det gamle inventaret, men spiret falt et stykke unna varmen da tårnet raste sammen, og ble tatt vare på. Etter tre års bygging, sto en ny kirke ferdig på samme tomt i 1997.' },
        { name: "Snertingdal Auto", shape: "circle", coords: [760,500,70], description: 'I 1916 gikk noen snertingdøler, med Bernhard Berntzen (tidligere eier av Norsk Orgel- og Harmoniumfabrikk) i spissen, i gang med dannelsen av et rutebilselskap. Det ikke bare godt mottatt hos bygdefolket, som mente en slik «monster» ikke hadde noe å gjøre i en fredelig dal. Men arbeidet lot seg likevel ikke stanse. Første oppgave var å skaffe en bil, derfor reiste de til Kristiania og kjøpte en «Federal» lastebil. Etter hvert ble behovet for personaltrafikk større, og i 1925 kjøpte de den første bussen; en 14-seters International med 5 dører. ' },
        { name: "Bukkene Bruse Brua", shape: "circle", coords: [363,582,120], description: 'De tre bukkene Bruse, er et norskt folkeeventyr som Abjørnsen og Moe fikk fortalt av Anders Lysgaard fra Svennes Gård Biri i 1842. Eventyret handler om tre geitebukker som på vei til sommerbeite på en seter, blir truet av et troll under en bru. Det finnes mange hundre års historie å ta av i Snertingdal, men alle historier er kanskje ikke like faktabasert. Brua som i aviser er blitt omtalt som «Bukkene Bruse brua», heter Snartum bru, og ligger ved Skogheim skole i Snertingdal. Ingen vet helt sikkert når brua ble bygd, man antar at den kan ha blitt bygd mellom 1820 – 1832, men den kan også være eldre. Gamlevegen over brua fra Skogheim skole til Seegård, ble nedlagt i 1937, og brua har siden stått som et godt bevart stykke veghistorie.' },
        { name: "Den Blinde Ku", shape: "circle", coords: [983,400,135], description: 'Da Inger Rosenfeld fikk ei halvblind ku i 50-årsgave, lærte hun seg å ytse og bygde meieriet. Ostene ble først prøvd ut i Frankrike hvor de ble svært godt mottatt. Siden har de funnet veien til kresne ganer både i Norge, USA og andre land. I april 2018 brant hele meieriet i Ås ned, ostevoksen som stod til smelting ble overopphetet og tok fyr. Hele bygget brant ned til grunnen, og alt de hadde bygd opp gjennom 20 år gikk opp i røyk. Ikke så langt unna prestegården i Snertingdal, lå det gamle ysteriet. Det skulle rives, og Brenner hadde fått høre at Rosenfeld hadde bånd til ysteriet. Etter en lang sommer med leting etter nye lokaler, bestemte de seg for å satse på Snertingdal Ysteri. Det var i Snertingdal Rosenfelds ostedrøm startet. Hennes onkel, Sverre Sakshaug, var meieribestyrer ved ysteriet fra 1950 – 1973, og hun tilbrakte en sommer hos ham sammen med søsteren.' },
        { name: "Kvernlien Mølle", shape: "circle", coords: [974,573,70], description: 'Kvernlien mølle i Snertingdal ble bygget i 1872, er fortsatt intakt, og er et betydelig kulturminne. I området rundt ligger gamle mølleruiner fra 1669, mens «nye» Kvernlien mølle er en godt bevart skatt. Før var småbruket et viktig sentrum for mølle- og tømmervirksomhet i Snertingdal. Det ble allerede i 1850 bygget to andre møller litt lenger nede langs elva. Dette ble slutten på for gardsmøllene, og folk tok med seg kornet sitt til Kvernlien mølle for å få det malt. I 1944 sto også et frø- og kornrenseri ferdig ved møllen, renseriene var av avgjørende betydning for å unngå hungersnød. Da Arve Kværnlien solgte Kvernlien mølle i oktober 2013, var det slutten for tre generasjoner møllere. Margrethe Berg tapte hjertet sitt til stedet, og kjøpte møllen. ' },
        { name: "Historie", shape: "circle", coords: [151,428,80], description: 'Presteboligen Biri kapellanbolig i Snertingdal, ble bygget i 1899. Høsten 2017 kom den 117 år gamle presteboligen for salg. Uten å kjenne hverandre, bestemte Hans Olav Brenner og Anita Krohn Traaseth, å gå sammen for å bevare gården. De har begge dype aner fra Snertingdal, og ønsket å bygge prestegården om til et lokalt kulturhus og møteplass, og gjøre den tilgjengelig for bygdas befolkning og andre som kan bidra med noe positivt. Etter salget fra Opplysningsvesenets fond, er nå gamle Biri kapellanbolig for første gang i privat eie. '},
        { name: "Peder Bjerkeseth", shape: "circle", coords: [590,136,120], description: 'Peder Bjerkeseth ble født i 1880 på Nordmøre, og var prest. Han virka på Karlsøy i Troms og flere steder på Østlandet, blant annet i Snertingdalen. I 1917 begynte han som residerende kapellan i Biri prestegjeld, med ansvar for annekssokna Seegård og Nykirke i Snertingdalen. Han og familien bodde på prestegården i Snertingdalen og tok seg fram med motorsykkel, både sommer og vinter. Bjerkeseth var praktisk anlagt, og laget en ski til motorsykkelen sin for å kunne bruke den også på vinterstid. I Bjerkeseths familiealbum kan man se flere bilder av motorsykkelen, den er nå eid av Teknisk Museum.' }
    ]
 
}


class InteractiveMap extends React.Component {

    constructor(props) {
        super(props)
        this.state ={ 
			msg: null,
			title: null,
            windowWidth: window.innerWidth
         }
    }

	clicked(area) {
		this.setState({ 
			title: ` ${area.name}`,
			msg: ` ${area.description} `,
			close: 'x',
			styleMessage: ` ${mapStyles.message} `,
			styleTitle: ` ${mapStyles.maptitle} `,
			styleDesc: ` ${mapStyles.mapdescription} `,
			styleTop: ` ${mapStyles.popupTop} `,
			closeButton: ` ${mapStyles.close} `
		});
	}

	// this function sets all states to null in order to make the popup box close 
	close(area) {
		this.setState({ 
			title: null,
			msg: null,
			close: null,
			styleMessage: null,
			styleTitle: null,
			styleDesc: null,
			styleTop: null
		});
	}
    /*Resizes the image with the area coordinates when the window gets smaller */
    componentDidMount() {
        window.addEventListener("resize", e => {
            this.setState( {windowWidth: window.innerWidth} );
        });
    }



    render(){
        console.log(this.state);
        return(
        <div className="map">
            <h1 className="headline">Kart</h1>
            <p className="map-text">Her i Snertingdal har vi også andre ting å by på. Klikk deg rundt på kartet vårt!</p>

            <div className={mapStyles.mapper} >                
                <ImageMapper className="clickable-map" src={Kart} map={MAP} imgWidth={1154} 
                onClick={area => this.clicked(area)}
                width={(this.state.windowWidth - (this.state.windowWidth * 0,95))}/>
            </div>
            
            <div className={this.state.styleMessage}>
						<div className={this.state.styleTop}>
							<p className={this.state.styleTitle}>{this.state.title ? this.state.title : null}</p>
							<span className={this.state.closeButton} onClick={area => this.close(area)}>{this.state.close ? this.state.close : null}</span>
						</div>
						<p className={this.state.styleDesc}>{this.state.msg ? this.state.msg : null}</p>
					</div>
        </div>

        );
    };

}


export default InteractiveMap;