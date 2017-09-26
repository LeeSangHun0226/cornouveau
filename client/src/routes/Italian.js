import React, { Component } from 'react';
import Slider from 'react-slick';
import { Image } from 'react-bootstrap';
import './Italian.css';

const images = [
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0001.jpg',
    // thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0001.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0002.jpg',
    // thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0002.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0003.jpg',
    // thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0003.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0004.jpg',
    // thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0004.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0005.jpg',
    // thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0005.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0006.jpg',
    // thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/2.italaingreyhound/0006.jpg',
  },
];


class Italian extends Component {

  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

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

  renderImages = (cardData) => (
    cardData.map((data, i) => (
      <div key={i}>
        <Image
          src={data.image}
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
        }}
        />
      </div>
    ))
  )
  


  render() {
    const settings = {
      dots: true,
      // lazyLoad: true,
      infinite: true,
      // arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }],
    };

    return (
      <div style={{ background: '#E0E0E0', paddingBottom: '50px' }}>
        <Slider ref={c => this.slider = c} {...settings}>
          {this.renderImages(images)}
        </Slider>
        <div style={{}}>
          <button className='button-prev' onClick={this.previous} />
          <button className='button-next' onClick={this.next} />
        </div>
      </div>
      
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


// <ImageGallery
//   // showBullets
//   renderPlayPauseButton={this.renderPlayPauseButton}
//   // thumbnailPosition="top"
//   lazyLoad={false}
//   items={images}
//   slideInterval={2000}
//   onImageLoad={this.handleImageLoad}
//   showPlayButton={false}
//   showFullscreenButton={false}
// />