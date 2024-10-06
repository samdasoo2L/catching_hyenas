import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 5px 10px;
`;

const Title = styled.div`
  font-size: 50px;
`;

const Contents = styled.div``;

const Items = styled.div`
  display: flex;
  margin: 10px 0px;
  gap: 10px;
  font-size: 30px;
  a {
    text-decoration: none;
  }
`;

const Item = styled.div`
  color: black;
`;

const Split = styled.div`
  background-color: black;
  height: 1px;
  width: 330px;
  margin-bottom: 10px;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Title>조천수산</Title>
      <Contents>
        <Items>
          <Link to="/">
            <Item>판매</Item>
          </Link>
          <Link to="/listup">
            <Item>구입</Item>
          </Link>
          <Link to="/static">
            <Item>통계</Item>
          </Link>
          <Item>로그아웃</Item>
        </Items>
        <Split></Split>
        <Outlet />
      </Contents>
    </Wrapper>
  );
}
