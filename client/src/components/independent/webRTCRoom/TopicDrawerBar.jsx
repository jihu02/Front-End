/**
 * 담당자:조윤영 Edit By.권소영
 * [OUTLINE]
 * TopicDrawerBar파일은 기존 DrawerBar컴포넌트를 고정하여 STT를 적용한 컴포넌트.
 * <p>
 * [METHOD]
 * recognition.onstart(): STT 인식 시작하는 함수
 * recognition.onend(): stt 인식 종료하는 함수
 * recognition.onresult(): 인식된 결과 처리하는 함수
 * recognition.onerror(): 에러를 처리하는 함수
 * onJoin(): STT 시작하는 함수
 * writeMessage(type, name, message): 인식된 메시지 프론트에 기록하는 함수
 * sender(text): socket.io 서버에 유저이름, 인식된 메시지 전송하는 함수
 *
 *
 * <p>
 * [LIBRARY]
 * 1. io: socket에 연결하기 위한 라이브러리
 */
import React, { Component } from "react";
import io from "socket.io-client";
import {
  DrawerContainer,
  DrawerTitleContainer,
  RecordTime,
  TopicContainer,
  TopicItem,
  DarkDivideLine,
  RecordItem,
  RecordItemColor,
  RecordBorder,
  TimeStamp
} from "./webrtc.style";

//--------------------------------------------------------
//-----------------Speech Recognition Code----------------
//--------------------------------------------------------

var isRecognizing = false;
var ignoreEndProcess = false;
var finalTranscript = "";

window.SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;

var recognition = new window.webkitSpeechRecognition();
const language = "ko-KR";
recognition.continuous = true; // 음성이 인식될 때마다 결과값 반환
recognition.interimResults = true; // 끝나지 않은 상태의 음성 반환 설정

/** STT 인식 시작 함수*/
recognition.onstart = function() {
  isRecognizing = true;
};

/** STT 인식 종료 함수*/
recognition.onend = function() {
  isRecognizing = false;

  if (ignoreEndProcess) {
    return false;
  }

  if (!finalTranscript) {
    return false;
  }
};
/** 인식된 결과 처리 함수 */
recognition.onresult = function(event) {
  let interimTranscript = "";

  if (typeof event.results === "undefined") {
    recognition.onend = null;
    recognition.stop();
    return;
  }

  for (let i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      // 인식된 문장이 끝났을 경우
      sender(event.results[i][0].transcript);
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
};
/** 에러 처리 함수 */
recognition.onerror = function(event) {
  console.log("onerror", event);

  if (event.error.match(/no-speech|audio-capture|not-allowed/)) {
    ignoreEndProcess = true;
  }
};

/** STT 종료하는 함수 */
const onExit = () => {
  if (isRecognizing) {
    recognition.stop();
    return;
  }
};

//--------------------------------------------------------
//-----------------Send to socket.io Server---------------
//--------------------------------------------------------

var serverURL = "https://s.chameleon4switch.cf/";
var name = localStorage.getItem("name");
var room = localStorage.getItem("roomId");
var color;
var isTopicChanged = false;
var topic; // TODO: 토픽 바꾸면 여기에서 토픽값 저장하고 있어야 함. 초기값 들어있는지 확인 바람

var socket = null;

var boxes = new Array();

/* 인식된 메시지 프론트에 기록하는 함수*/
function writeMessage(color, name, message) {
  var box = new Object();

  box.color = color;
  box.name = name;
  box.message = message;

  boxes.push(box);
}

/* socket.io 서버에 유저이름, 인식된 메시지 전송하는 함수 */
function sender(text) {
  socket.emit("user", {
    color: color,
    name: name,
    message: text,
    topic: topic
  });
  writeMessage(color, name, text);
}

export class TopicDrawerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d: new Date(),
      chatLogs: "",
      startTime: new Date(),
      isTopicClicked: [],
      currentTopic: "",
      currentTopicIndex: 0
    };
    this.items = [];
    for (let i = 1; i <= 5; i++) {
      this.items.push(i);
    }
  }
  componentDidMount() {
    /*회의 시작 시간 state에 담아둔다: 회의 종료 시간과 계산하여 회의 총 시간 계산 예정 */
    this.setState({
      startTime: new Date()
    });

    // Clockcmp 컴포넌트가 불러올때마다 1초씩 this.Change()를 부른다
    this.timeID = setInterval(() => this.onChangeTime(), 1000);
  }

  componentWillUnmount() {
    //종료되면 반복하는것도 클리어시키기
    clearInterval(this.timeID);

    //회의록 기록 종료
    if (isRecognizing) {
      recognition.stop();
      return;
    }
  }

  componentWillReceiveProps = () => {
    //props를 전달받으면 현재 선택된 토픽을 초기화한다.
    console.log("현재 토픽:", this.props.mainTopics[0]);

    this.setState({
      currentTopic: this.props.mainTopics[0],
      currentTopicIndex: 0
    });

    //프론트 스타일링 0번째 버튼 선택으로 초기화
    const initTopicClicked = [];
    this.state.isTopicClicked.forEach(index => {
      initTopicClicked.push(false);
    });
    initTopicClicked[0] = true;

    this.setState({ isTopicClicked: initTopicClicked });
  };

  componentWillMount() {
    const script = document.createElement("script");

    script.src = "http://cdn.socket.io/socket.io-1.4.0.js";

    socket = io.connect(serverURL);

    socket.on("connection", function(data) {
      if (data.type === "connected") {
        color = data.color;

        socket.emit("connection", {
          type: "join",
          name: name,
          room: room
        });
      }
    });

    socket.on("system", function(data) {
      writeMessage("#eeeeee", "system", data.message);
    });

    socket.on("message", function(data) {
      writeMessage(data.color, data.name, data.message);
    });

    if (isTopicChanged) {
      socket.emit("topic", {
        topic: this.state.currentTopic,
        index: this.state.currentTopicIndex
      });

      isTopicChanged = false;
    }

    socket.on("changeTopic", function(data) {
      if (topic === data.topic) {
        console.log(
          "현재 토픽 주제(",
          topic,
          ")와 같으므로 바꾸지 않음: ",
          data.topic
        );
      } else {
        console.log("토픽 변경 실행");
        // TODO: 윤영 여기에 프론트 토픽 바꾸도록 추가 바람
        this.setState({
          currentTopic: data.topic,
          currentTopicIndex: data.index
        });

        //여기서부터는 토픽 선택 시, 해당 토픽 선택에 대한 스타일링을 입힘.
        const newIsTopicClicked = [];
        this.state.isTopicClicked.forEach(index => {
          newIsTopicClicked.push(false);
        });
        newIsTopicClicked[data.index] = true;

        this.setState({ isTopicClicked: newIsTopicClicked });
      }
    });

    /*******************************/
    /** STT 시작하는 함수 */
    /*******************************/
    if (isRecognizing) {
      alert("이미 참여 중입니다.");
      return;
    }

    recognition.lang = language;
    recognition.start();
    ignoreEndProcess = false;

    finalTranscript = "";
    /*******************************/
  }

  /***************************************************/
  //일반 호출 함수
  /***************************************************/
  onChangeTime = () => {
    this.setState({
      d: new Date()
    });
  };

  onTopicChange = e => {
    console.log("토픽이름:", e.target.innerHTML);
    isTopicChanged = true;
    topic = e.target.innerHTML;

    //여기서부터는 토픽 선택 시, 해당 토픽 선택에 대한 스타일링을 입힌 부분.(소여이는 이 아래는 신경쓰지 않아도 됨.)
    const newIsTopicClicked = [];
    this.state.isTopicClicked.forEach(index => {
      newIsTopicClicked.push(false);
    });
    newIsTopicClicked[e.target.id] = true;

    this.setState({
      isTopicClicked: newIsTopicClicked,
      currentTopic: e.target.innerHTML,
      currentTopicIndex: e.target.id
    });
  };

  render() {
    var currentDate =
      this.state.d.getFullYear() +
      "." +
      this.state.d.getMonth() +
      "." +
      this.state.d.getDate() +
      "." +
      this.state.d.getHours() +
      ":" +
      this.state.d.getMinutes() +
      ":" +
      this.state.d.getSeconds();

    const { startTime, mainTopics } = this.props;
    return (
      <DrawerContainer>
        <DrawerTitleContainer>
          실시간 회의록
          <RecordTime>{currentDate}</RecordTime>
        </DrawerTitleContainer>
        <TopicContainer>
          {/* Topic GET API 받아와서 map으로 for문 돌릴 부분 */}
          {Object.keys(mainTopics).map(topicId => {
            const topic = mainTopics[topicId];
            return (
              <TopicItem
                onClick={this.onTopicChange}
                id={topicId}
                style={{
                  color: this.state.isTopicClicked[topicId]
                    ? "var(--greenish-teal)"
                    : "white"
                }}
              >
                {topic}
              </TopicItem>
            );
          })}
        </TopicContainer>

        <DarkDivideLine />
        {/* RecordBox: 정적이 길게 흐르기 전까지를 기준으로 기록을 보여주는 RecordBox,즉 소영이 너가 쌓아내려갈 DIV */}
        {Object.keys(boxes).map(id => {
          const box = boxes[id];

          return (
            <RecordBorder>
              <TimeStamp>
                {this.state.d.getHours()}:{this.state.d.getMinutes()}
              </TimeStamp>
              <RecordItem>
                <RecordItemColor
                  style={{
                    color: box.color
                  }}
                >
                  {box.name}:
                </RecordItemColor>
                {box.message}
              </RecordItem>
            </RecordBorder>
          );
        })}

        <section className="center"></section>
      </DrawerContainer>
    );
  }
}

export default TopicDrawerBar;
