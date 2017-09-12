import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class News extends Component {
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
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0001.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0001.jpg',
      },
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0002.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0002.jpg',
      },
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0003.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0003.jpg',
      },
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0004.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0004.jpg',
      },
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0005.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0005.jpg',
      },
      {
        original: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0006.jpg',
        thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0006.jpg',
      },
    ];

    return (
      <ImageGallery
        // showBullets
        // renderPlayPauseButton={this.renderPlayPauseButton}
        // thumbnailPosition="top"
        lazyLoad={false}
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        // slideInterval={2000}
        // onImageLoad={this.handleImageLoad}
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

export default News;
