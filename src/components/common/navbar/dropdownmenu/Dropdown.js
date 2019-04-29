import React from 'react';
import './dropdown.style.css';
import notice from "../../../../assets/home/alert_off.png";
import alert from "../../../../assets/home/alrert_list.png";
import user from "../../../../assets/home/userProfile.png";
import styled, { css } from 'styled-components';

const Alert_text = styled.div`
  margin-top: 3px;
  font-size: 10px;
  display: flex;
  justify-content: flex-start;
`;

const Alert_time = styled.div`
  font-size: 8.5px;
  color: var(--greenish-teal);
  text-align: bottom;
  margin-top: 35px;
`;

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="dropdown" >

        <button className="notice-btn">
          <img src={notice} onClick={this.showDropdownMenu} className="notice_im" />
        </button>

        {this.state.displayMenu ? (
          <ul className="alert_ul">
            <div className="alert_title">최근 알림</div>
            <li className="alert_li">
              <div className="alert_div">
                <img className="alert_img" src={alert}></img>
                <div className="alert_text_div">
                  <Alert_text className="alert_text">잠시 뒤 예정된 회의 "4월 간행물 ..."가 있습니다. </Alert_text>
                </div>
                <Alert_time className="alert_time_text">방금</Alert_time>
              </div>
            </li>

            <li className="alert_li">
              <div className="alert_div">
                <img className="alert_img" src={user}></img>
                <div className="alert_text_div">
                  <Alert_text className="alert_text">조윤영 Cho yoonyoung으로부터 채팅 부재중 3건 </Alert_text>
                </div>
                <Alert_time className="alert_time_text">3분</Alert_time>
              </div>
            </li>

            <li className="alert_li">
              <div className="alert_div">
                <img className="alert_img" src={user}></img>
                <div className="alert_text_div">
                  <Alert_text className="alert_text">안지후 Ahn jihu으로부터 화상 회의 부재중 1건 </Alert_text>
                </div>
                <Alert_time className="alert_time_text">12분</Alert_time>
              </div>
            </li>

            <li className="alert_li">
              <div className="alert_div">
                <img className="alert_img" src={alert}></img>
                <div className="alert_text_div">
                  <Alert_text className="alert_text">30분 뒤, 예정된 회의 "4월 간행물 ..."가 있습니다. </Alert_text>
                </div>
                <Alert_time className="alert_time_text">30분</Alert_time>
              </div>
            </li>

            <button className="alert_all">전체보기</button>
          </ul>

        ) :
          (
            null
          )
        }

      </div>

    );
  }
}

export default Dropdown;