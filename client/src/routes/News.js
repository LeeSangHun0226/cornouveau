import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";

const newsData = [
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0001.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0002.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0003.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0004.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0005.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/1.about/3.news/%ED%94%BC%ED%8F%AC%EB%8B%89%EC%8A%A4+%EB%B0%A9%EB%AC%B8%EA%B8%B0/1%EC%84%B8%EB%B6%80/0006.jpg',
  },
];


class News extends Component {

  renderNews = () => (
    newsData.map((data, i) => (
      <div key={i}>
        <Image
          src={data.image}
          style={{ width: '87%', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
        />
      </div>
    ))
  )

  render() {
    return (
      <div>
        {this.renderNews()}
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
}

export default News;
