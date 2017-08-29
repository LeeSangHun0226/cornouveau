import React from 'react';

const Complete = (props) => {
  const { paymentData, productData } = props.location.state;
  return (
    <div>
      <div>
        NAME: {productData.productData[0].name}
      </div>
      <div>
        PAYMENT INFO : {paymentData.paymentMethod}
      </div>
      <div>
        결제완료
      </div>
    </div>
  );
};

export default Complete;
