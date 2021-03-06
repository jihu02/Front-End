/**
 * [OUTLINE]
 * 담당자 : 안지후
 * 화상회의 메인 홈 화면
 */

import React, { Component } from "react";
import { ConferenceRoomDetail } from "./ConferenceRoomDetail";

export class ConferenceRoom extends Component {
  render() {
    return (
      <div>
        <ConferenceRoomDetail title="현재 진행중인 회의" />
        <ConferenceRoomDetail title="내가 포함된 회의" />
        <br />
      </div>
    );
  }
}

export default ConferenceRoom;
