import { useState } from "react";
import { styled } from "styled-components";

export interface ISaleItem {
  itemName: string;
  gram: number;
}

export interface ISale {
  index: number;
  name: string;
  saleList: ISaleItem[];
  preCheck: boolean;
  payType: "Card" | "Cash" | "Account" | null;
  price: number;
  finalCheck: boolean;
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 1px;
  * {
    width: 12%;
    background-color: rgba(135, 206, 235, 0.6);
    margin: 5px 0px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Location = styled.div`
  display: flex;
`;
const UpButton = styled.div``;
const DownButton = styled.div``;

const Name = styled.div``;

const Items = styled.div`
  width: 24%;
  flex-direction: column;
`;
const Group = styled.div`
  display: flex;
  width: 100%;
`;
const Item = styled.div`
  width: 50%;
`;
const Gram = styled.div`
  width: 50%;
`;
const AddItem = styled.div`
  background-color: skyblue;
  margin: 5px;
  padding: 5px;
`;

const PreCheck = styled.input``;

const Payment = styled.div``;

const FinalCheck = styled.input``;

const DeleteButton = styled.button``;

export default function Salebar({
  index,
  name,
  saleList,
  preCheck,
  payType,
  price,
  finalCheck,
}: ISale) {
  //   const [sName, setSName] = useState(name);
  //   const [sSaleList, setSSaleList] = useState<ISaleItem[]|null>(saleList);
  return (
    <Wrapper>
      <Location>
        <UpButton>👆</UpButton>
        <DownButton>👇</DownButton>
        {index}
      </Location>
      <Name>{name}</Name>
      <Items>
        {saleList?.map((sale, index) => (
          <Group key={index}>
            <Item>{sale.itemName}</Item>
            <Gram>{sale.gram}</Gram>
          </Group>
        ))}
        <AddItem>+</AddItem>
      </Items>
      <PreCheck type="checkBox" checked={preCheck} />
      <Payment>{payType ? `${price}` : "미결제"}</Payment>
      <FinalCheck type="checkBox" checked={finalCheck} />
      <DeleteButton>Delete</DeleteButton>
    </Wrapper>
  );
}
