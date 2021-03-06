import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./menu.style.css";
import styled from "styled-components";

const active = {
  marginTop: "25px",
  width: "100%",
  height: "53px",
  color: "var(--greenish-teal)",
  fontSize: "22px",
  fontFamily: "NanumSquareEB",
  textAlign: "center",
  textDecoration: "none",
  borderLeft: "5px solid var(--greenish-teal)"
};
const ProjectName = styled.div`
  width: 100%;
  height: 52px;
  background: var(--white-four);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-family: NanumSquareEB;
  color: var(--brownish-grey);
`;
const ProjectManageBtn = styled.button`
  color: var(--white-two);
  font-size: 16px;
  width: 100%;
  padding: 0px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  margin-top: 400px;
  outline: none;
`;
export class Menu extends Component {
  render() {
    const regex1 = new RegExp("/home");
    const regex2 = new RegExp("/room");

    if (regex1.test(window.location.pathname)) {
      return (
        <div className="menu-container">
          <ProjectName> {localStorage.getItem("projectName")}</ProjectName>

          <NavLink
            className="link-list"
            to={`/home/issue/${localStorage.getItem("projectId")}`}
            activeStyle={active}
          >
            이슈관리
          </NavLink>
          <NavLink
            className="link-list"
            activeStyle={active}
            to={`/home/conferenceRoom/${localStorage.getItem("projectId")}`}
          >
            회의실
          </NavLink>
          <NavLink
            className="link-list"
            activeStyle={active}
            to={`/home/conferenceDocument/${localStorage.getItem("projectId")}`}
          >
            회의록
          </NavLink>
          <ProjectManageBtn>프로젝트 관리 화면으로</ProjectManageBtn>
        </div>
      );
    } else if (window.location.pathname === "") {
      return <div />;
    } else {
      return <div />;
    }
  }
}

Menu.contextType = {
  router: PropTypes.object
};

export default Menu;
