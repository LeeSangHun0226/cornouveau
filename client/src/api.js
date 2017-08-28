const ProductAPI = {
  products: [
    {
      url: 'https://s3.ap-northeast-2.amazonaws.com/peopet/about/KakaoTalk_20170213_151718305.jpg',
      title: '코르누보1',
      amount: 100,
    },
    {
      url: 'https://s3.ap-northeast-2.amazonaws.com/peopet/about/KakaoTalk_20170213_151718305.jpg',
      title: '코르누보2',
      amount: 200,
    },
    {
      url: 'https://s3.ap-northeast-2.amazonaws.com/peopet/about/KakaoTalk_20170213_151718305.jpg',
      title: '코르누보3',
      amount: 300,
    },
  ],
  all: function(){ return this.products },
  get: (id) => {
    const isProduct = p => p.number === id;
    return this.players.find(isProduct);
  },
};

export default ProductAPI;
