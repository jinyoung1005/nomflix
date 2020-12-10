/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color:white;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
  padding:0px 10px;
  background-color:rgba(20,20,20,0.8);
  box-shadow:0px 1px 5px 2px rgba(0,0,0,0.8);
  /* boxshadow로 헤더가 네비바처럼 생겨졌음 */
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width:50px;
  /* width로 movies  tv search 헤더 부분 각각 이격을 두게함*/
  text-align: center;
  height:50px;
  /* height로 헤더 글자들이 위로 올라감 */
  border-bottom:5px solid 
    ${props => (props.current ? "#3498db" : "transparent")};
  /* 헤더에 파란색 밑줄이 생김 solid 사이즈는 밑줄 높이사이즈*/
  transition:border-bottom 0.5s ease-in-out;
  /*헤더 밑에 밑줄이 무빙효과가 생겨짐  */
`;

const SLink = styled(Link)`
  height:50px;
  /* display:block; */
  /* 헤더 글자아닌 글자 주변클릭해도 링크옮길수있게하는 기능 */
  display:flex;
  align-items:center;
  justify-content:center;
  /* 헤더가 다시 천장에 있던게 중앙높이로 교정됨 */
`;

export default withRouter(({ location: {pathname} }) => (
  <Header>
    {/* {console.log(props)} */}
    <List>
      <Item current={pathname === "/"}>
        {/* 위에 콘솔로 통해 location pathname을 확인하여 각각 그값들을 true,false자리에 넣음 */}
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));