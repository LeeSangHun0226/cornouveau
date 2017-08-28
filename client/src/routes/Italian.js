import React, { Component } from 'react';
import italian1 from '../images/italian1.jpg';
import italian2 from '../images/italian2.jpg';
import italian3 from '../images/italian3.jpg';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class Italian extends Component {
  handleImageLoad(event) {
    console.log('Image loaded ', event.target);
  }

  renderPlayPauseButton(onClick, isPlaying) {
    return (
        <button
          type='button'
          className={
            `image-gallery-play-button${isPlaying ? ' active' : ''}`}
          onClick={onClick}
        />
    );
  }

  render() {
    const images = [
      {
        original: `${italian1}`,
        thumbnail: `${italian1}`,
      },
      {
        original: `${italian2}`,
        thumbnail: `${italian2}`,
      },
      {
        original: `${italian3}`,
        thumbnail: `${italian3}`,
      },
    ]

    return (
      <ImageGallery
          showBullets
          renderPlayPauseButton={this.renderPlayPauseButton}
          thumbnailPosition="top"
          lazyLoad={false}
          items={images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
      />
  )
    //   <div style={{ width: '100%', height: '80%' }}>
    //     <Carousel style={{ backgroundColor: 'white', display: 'flex', flex: 1, justifyContent: 'center' }}>
    //        <Carousel.Item>
    //          <img width={900} height={500} alt="900x500" src={cornouveau}/>
    //          <Carousel.Caption>
    //            <h3>First slide label</h3>
    //          </Carousel.Caption>
    //        </Carousel.Item>
    //        <Carousel.Item>
    //          <img width={900} height={500} alt="900x500" src={cornouveau}/>
    //          <Carousel.Caption>
    //            <h3>Second slide label</h3>
    //          </Carousel.Caption>
    //        </Carousel.Item>
    //        <Carousel.Item>
    //          <img width={900} height={500} alt="900x500" src={cornouveau}/>
    //          <Carousel.Caption>
    //            <h3>Third slide label</h3>
    //          </Carousel.Caption>
    //        </Carousel.Item>
    //      </Carousel>
    //    </div>
    // );
  }
};

export default Italian;
