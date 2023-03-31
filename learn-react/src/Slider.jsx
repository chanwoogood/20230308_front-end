import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Slider() {
  const [index, setIndex] = useState(0);

  /* useEffect(() => {
    alert(index);
  }, [index]); */
  const handleIndex = (op) => {
    if (index + op > 0 && index + op <= 2) setIndex(index + op);
  };
  return (
    <>
      <Container>
        <SlideList index={index}>
          <SlideItem bgColor="purple">1</SlideItem>
          <SlideItem bgColor="blue">2</SlideItem>
          <SlideItem bgColor="red">3</SlideItem>
        </SlideList>
        <BtnSlide onClick={() => handleIndex(-1)}>이전</BtnSlide>
        <BtnSlide onClick={() => handleIndex(+1)}>다음</BtnSlide>
      </Container>
      <BtnNumList>
        <BtnNum onClick={() => setIndex(0)}>1</BtnNum>
        <BtnNum onClick={() => setIndex(1)}>2</BtnNum>
        <BtnNum onClick={() => setIndex(2)}>3</BtnNum>
      </BtnNumList>
    </>
  );
}

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  overflow: hidden;
  position: relative;
`;

const SlideList = styled.ul`
  display: flex;

  transform: translateX(${({ index }) => index * -100}%);
  transition: transform 0.5s;
`;

const SlideItem = styled.li`
  display: flex;
  list-style: none;
  width: 100%;
  height: 500px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: white;

  background-color: ${({ bgColor }) => bgColor};
`;

const BtnNumList = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
`;

const BtnNum = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #00ff22;
  gap: 10;
  border: none;

  cursor: pointer;

  &:hover {
    background-color: #008cff;
  }
`;

const BtnSlide = styled(BtnNum)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;

  transform: translateY(-50%);
  &:nth-of-type(1) {
    left: 20px;
  }

  &:nth-of-type(2) {
    right: 20px;
  }
`;
