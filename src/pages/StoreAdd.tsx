import React, { useState } from "react";
import DaumPostcode from 'react-daum-postcode';
import tw from "tailwind-styled-components";

function StoreAdd() {
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [addressInfo, setAddressInfo] = useState("")

  const productChangeHandler = (e) => {
    if (e.target.name === "itemName") {
      setProduct({...product, itemName: e.target.value});
    }
    else if (e.target.name === "price") {
      setProduct({...product, price: Number(e.target.value)});
    }
    else if (e.target.name === "totalTicket") {
      setProduct({...product, totalTicket: Number(e.target.value)});
    }
  }

  const productAddHandler = () => {
    setProducts([...products, {...product}]);
    console.log(products)
  }

  const openPostHandler = () => {
    setOpenPostcode((prev) => !prev);
  }

  const selectAddress = (address) => {
    setAddressInfo(address.address);
    setOpenPostcode(false);
  }

  return (
    <StoreAddSection>
      <div className="text-2xl font-semibold mb-10 ml-10">업체등록하기</div>
      <div className="flex mb-6 items-center">
        <InputTitle>업체명</InputTitle>
        <Input type="text" />
      </div>
      <div className="flex mb-6">
        <InputTitle className="pt-3">소개글</InputTitle>
        <IntroContent />
      </div>
      <div className="flex mb-6 items-center relative">
        <InputTitle>주소</InputTitle>
        <Input type="text" value={addressInfo} readOnly/>
        <SearchAddress type="button" onClick={openPostHandler}>주소찾기</SearchAddress>
        {openPostcode && (
          <DaumPostcode className="absolute top-12 border-[1px] border-black" onComplete={selectAddress} autoClose={false} />
        )}
      </div>
      <div className="flex mb-6 items-center">
        <InputTitle>카카오톡 ID</InputTitle>
        <Input type="text" />
      </div>
      <div className="flex mb-6 items-center">
        <InputTitle>업체 전화번호</InputTitle>
        <Input type="text" />
      </div>
      <div className="flex mb-6 items-center">
        <InputTitle>카테고리</InputTitle>
        <Category>
          <option>선택해주세요</option>
          <option>스노클링/다이빙</option>
          <option>수상레저</option>
          <option>서핑</option>
          <option>승마</option>
          <option>ATV</option>
        </Category>
      </div>
      <div className="flex mb-6">
        <InputTitle>상품등록</InputTitle>
        <ProductBox> 
          <div className="flex mb-6 items-center">
            <ProductInputTitle>상품명</ProductInputTitle>
            <Input type="text" name="itemName" onChange={productChangeHandler} />
          </div>
          <div className="flex mb-6 items-center">
            <ProductInputTitle>가격</ProductInputTitle>
            <Input type="text" name="price" onChange={productChangeHandler} />
          </div>
          <div className="flex mb-6 items-center">
            <ProductInputTitle>티켓 개수</ProductInputTitle>
            <Input type="text" name="totalTicket" onChange={productChangeHandler} />
          </div>
          <ProductAddBtn type="button" onClick={productAddHandler}>등록하기</ProductAddBtn>
        </ProductBox>
      </div>
        {products.map((el) => (
          <Ticket>{el.itemName} {el.price.toLocaleString('ko-KR')} X {el.totalTicket}</Ticket>
        ))}
    </StoreAddSection>
  );
}

export default StoreAdd;

const StoreAddSection = tw.section`
  w-[900px]
  mx-auto mt-20
  font-medium text-lg
`;

const Input = tw.input`
  border-[1px] border-[#9A9A9A] rounded-[5px]
  flex-auto
  ml-5 p-3
  h-[45px]
`;
const Category = tw.select`
  border-[1px] border-[#9A9A9A] rounded-[5px]
  flex-auto
  ml-5 px-3 py-2
  h-[45px]
`;

const IntroContent = tw.textarea`
  border-[1px] border-[#9A9A9A] rounded-[5px]
  flex-auto
  ml-5 p-3
  h-[120px]
`;

const InputTitle = tw.div`
  w-[130px] text-right
`;

const SearchAddress = tw.button`
  px-5 py-1 ml-3
  bg-[#4771B7]
  rounded-[10px]
  text-white text-base
`;

const ProductBox = tw.div`
  w-[830px]
  pl-8 pr-10 py-7 ml-5
  bg-[#EDF1F8]
  flex-1
  rounded-[5px]
`;

const ProductInputTitle = tw.div`
  w-[80px] text-right
`;

const ProductAddBtn = tw.button`
  px-5 py-1
  bg-[#4771B7]
  rounded-[10px]
  text-white text-base
  block
  ml-auto
`;

const Ticket = tw.div`
  ml-40 mb-5
  font-bold text-[#4771B7]
`;