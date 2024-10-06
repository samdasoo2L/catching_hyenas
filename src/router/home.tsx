import { useState } from "react";
import { styled } from "styled-components";
import Salebar from "../components/salebar";

const Wrapper = styled.div``;

const DateWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: end;
  margin-bottom: 10px;
`;
const DateInput = styled.input`
  /* display: none; */
`;
const DateOutput = styled.label`
  width: 150px;
  height: 50px;
  border: 3px solid skyblue;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

const SalesForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 20px;
  gap: 1px;
  div {
    width: 12%;
    text-align: center;
    background-color: skyblue;
    padding: 5px 0px;
    margin: 5px 0px;
    border-radius: 5px;
  }
`;

const AddButton = styled.div`
  width: 100%;
  text-align: center;
  border: 3px solid skyblue;
  font-size: 25px;
  padding: 5px;
  border-radius: 5px;
  margin: 5px 0px;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

export default function Home() {
  const [today, setToday] = useState("Today");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToday(e.target.value);
  };
  return (
    <Wrapper>
      <DateWrapper>
        <DateOutput htmlFor="date">{today}</DateOutput>
        <DateInput type="date" onChange={onChange} id="date" />
      </DateWrapper>
      <SalesForm>
        <div>순서</div>
        <div>구매자</div>
        <div>품목</div>
        <div>무게/가격</div>
        <div>품목확정</div>
        <div>결제</div>
        <div>판매확정</div>
        <div>삭제</div>
      </SalesForm>
      <Salebar />
      <AddButton>Add</AddButton>
    </Wrapper>
  );
}
