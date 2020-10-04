import React from 'react'; 
import Dialog from './dialog.jsx';
import './gallery.scss';

// libraries used to make lightbox and gallery
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


import pic1 from '../../../assets/images/picture1.jpg';
import pic2 from '../../../assets/images/picture2.jpg';
import pic3 from '../../../assets/images/picture3.jpg';
import pic4 from '../../../assets/images/picture4.jpg';
import pic5 from '../../../assets/images/picture5.jpg';
import pic6 from '../../../assets/images/picture6.jpg';
import pic7 from '../../../assets/images/picture7.jpg';
import pic8 from '../../../assets/images/picture8.jpg';
import pic9 from '../../../assets/images/picture9.jpg';


const photos = [
    { src: `${pic1}`, caption: "Lastet opp av Mor", alt: "ku", width: 3, height: 2},
    { src: `${pic2}`, caption: "Lastet opp av Poteter", alt: "hus", width: 3, height: 2 },
    { src: `${pic3}`, caption: "Lastet opp av Anita", width: 3, height: 2 },
    { src: `${pic4}`, caption: "Lastet opp av Nesebalsam", width: 3, height: 2 },
    { src: `${pic5}`, caption: "Lastet opp av Herr Grønn", width: 3, height: 2 },
    { src: `${pic6}`, caption: "Lastet opp av Lasse", width: 3, height: 2 },
    { src: `${pic7}`, caption: "Lastet opp av EnLitenSau", width: 3, height: 2 },
    { src: `${pic8}`, caption: "Lastet opp av Meg", width: 3, height: 2 },
    { src: `${pic9}`, caption: "Lastet opp av Coca Cola", width: 3, height: 2 }
  ];



class GalleryPage extends React.Component { 
    constructor() {
        super();
        this.state = { currentImage: null };
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
      }

      // opens lightbox on click
      openLightbox(event, i) {
        this.setState({
          currentImage: i.index,
          lightboxIsOpen: true,
        });
      }

      // closes lightbox on click
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }

      //goes to next image
      nextImage() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }

      // goes to previous image
      previousImage() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }

    state = {
        isOpen: false
    }
    render(){
        return(
            <div className="container">
                <div className="background">
                    <h1 className="headline">Galleri</h1>
                    <p className="gallery-description">Præstgar'n har en rik historie som vi er veldig stolte av, og vi ønsker at flere skal få gleden av å ta del i den. 
                        I galleriet har vi satt sammen en samling med historiske bilder fra både eldre og nyere tid, slik at du kan gjenoppleve byggets historie.
                        Vi er også stadig på jakt etter flere bilder av Præstgar'n opp gjennom årene, og vil at alle skal kunne bidra. 
                        Sitter du kanskje på skatten vi ser etter? Last gjerne opp bildene dine!
                    </p>
                    <button type="button" className="popup-button" onClick={(e) => this.setState({ isOpen: true })}>Last opp bilder</button>
                    <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>  
                        <div className="popup">
                            <h1 className="popup-headline">Last opp bilde her</h1>
                            <form>
                                <label>
                                    <input placeholder="Fornavn.." type="text"/>
                                </label>
                                <label>
                                    <input placeholder="Etternavn.." type="text"/>
                                </label>
                                <textarea maxLength="100" placeholder="Kort bildebeskrivelse" cols="57" rows="5"></textarea>
                            </form>
                            <button className="upload" type="button">Last opp bilde</button>
                            <button className="send" type="button">Send</button>
                        </div>
                    </Dialog>

                    <div className="gallery">
                        <Gallery photos={photos} onClick={this.openLightbox} />
                        <Lightbox images={photos}
                            onClose={this.closeLightbox}
                            onClickNext={this.nextImage}
                            onClickPrev={this.previousImage}
                            currentImage={this.state.currentImage}
                            isOpen={this.state.lightboxIsOpen}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

export default GalleryPage;




