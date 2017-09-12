import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class Italian extends Component {
  handleImageLoad(event) {
    // console.log('Image loaded ', event.target);
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

  renderLeftNav(onClick, disabled) {
    return (
      <button
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={onClick}
      />
    );
  }

  render() {
    const images = [
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0001.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0001.jpg',
      },
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0002.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0002.jpg',
      },
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0003.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0003.jpg',
      },
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0004.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0004.jpg',
      },
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0005.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0005.jpg',
      },
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0006.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0006.jpg',
      },
    ];

    return (
      <ImageGallery
        // showBullets
        renderPlayPauseButton={this.renderPlayPauseButton}
        // thumbnailPosition="top"
        lazyLoad={false}
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}
        showPlayButton={false}
        showFullscreenButton={false}
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
