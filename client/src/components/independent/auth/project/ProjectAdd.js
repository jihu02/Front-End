import React, { Component } from "react";
import "./projectadd.style.css";
import { Link } from "react-router-dom";
import TagsProjectPeople from "./TagsProjectPeople";
import TagsProjectDepart from "./TagsProjectDepart";
import * as service from "../../../../services/ProjectService";

export class ProjectAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectname: "",
      depart_tag: [],
      people_tag: []
    };
  }

  addproject = () => {
    //프로젝트 개설하기
    console.log(this.state.projectname);
    console.log(this.state.depart_tag);
    console.log(this.state.people_tag);
    service
      .projectAdd(
        this.state.projectname,
        this.state.depart_tag,
        this.state.people_tag
      )
      .then(
        res => {
          console.log(res.data.data._id);
          if (res.data.message === "프로젝트 생성 성공") {
            this.props.history.push(`/auth/projectList`);
            console.log("프로젝트 개설 성공");
          } else if (res.data.message === "중복된 프로젝트명") {
            console.log("프로젝트가 중복되었습니다.");
          }
        },
        err => {
          console.log("프로젝트 개설 실패");
          console.log(err);
        }
      );
  };

  //자식한테 받은 props를 state에 넣기
  myCallback = dataFromChild => {
    this.setState({ depart_tag: dataFromChild });
  };

  myCallback2 = dataFromChild => {
    this.setState({ people_tag: dataFromChild });
  };

  render() {
    return (
      <div className="inner-container4">
        <div className="header3">프로젝트 개설</div>
        <div className="p-explanation">
          프로젝트를 개설하게 되면, 해당 프로젝트의 담당자가 되며
        </div>
        <div className="p-explanation">
          이후 프로젝트의 수정 및 삭제는 본인만 가능합니다.
        </div>

        <div className="p-input-container">
          <div className="p-green-message">* 문항은 필수 입력사항 입니다.</div>
          <div className="p-input-row">
            <div className="p-text">프로젝트명</div>
            <div className="star2">*</div>
            <input
              type="text"
              className="p-input"
              onChange={e => {
                this.setState({
                  projectname: e.target.value
                });
              }}
            />
          </div>

          <div className="p-input-row">
            <div className="p-text">소속 부서</div>
            <TagsProjectDepart callbackFromParent={this.myCallback} />
          </div>

          <div className="p-input-row">
            <div className="p-text">참여자</div>
            <TagsProjectPeople callbackFromParent={this.myCallback2} />
          </div>
        </div>

        <button className="p-add-btn" onClick={this.addproject}>
          개설하기
        </button>
      </div>
    );
  }
}

export default ProjectAdd;
