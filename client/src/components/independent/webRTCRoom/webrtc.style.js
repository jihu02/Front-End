import styled from "styled-components";

//////////////////////////////////////
/*WebRTCRoom*/
//////////////////////////////////////
const MainView = styled.div`
  transition: margin-left 0.5s;
  width: 0;
`;
const SideBar = styled.div`
  height: calc(100% - 48px);
  width: 0;
  position: fixed;
  z-index: 0;
  top: 56px;
  right: 0;
  background-color: #2e373e;
  overflow-x: hidden;
  transition: 0.5s;
`;
const VideoBaseContainer = styled.div`
  width: 100vw;
  display: flex;
  background: #424c53;
`;

const SecondBox = styled.div`
  width: calc(100vw - 64px);
  height: calc(100vh - 56px);
  background: #424c53;
`;
const ToggleBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 19px;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  width: calc(100vw - 64px);
`;
const ToggleDiv = styled.div`
  width: calc((100vw - 64px) / 2);
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
`;

//////////////////////////////////////
/*VideoNav*/
const UpperNav = styled.div`
  width: calc((100vw - 64px) / 2);
  height: 56px;
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ConferenceTitle = styled.div`
  margin-left: 26px;
  font-size: 22px;
  color: white;
  font-family: NanumSquareB;
  overflow: hidden;
`;
const UserCount = styled.div`
  margin-left: 20px;
`;

const RoundDiv = styled.button`
  background: #2e373e;
  height: 28px;
  border: 1px solid #2e373e;
  border-radius: 13.5px;
  box-shadow: 1.9px 2.3px 7px black 0.2;

  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  outline: none;
`;

const TimeDiv = styled.button`
  background: #2e373e;
  height: 28px;
  border: 1px solid #2e373e;
  border-radius: 13.5px;
  box-shadow: 1.9px 2.3px 7px black 0.2;

  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  outline: none;
  width: auto;
  color: var(--greenish-teal);
  margin-left: 15px;
  font-size: 16.5px;
  padding-left: 15px;
  padding-right: 15px;

  &:hover {
    background: #f25959;
    color: white;
  }
`;
const NavP = styled.div`
  font-size: 16.5px;
`;

//////////////////////////////////////
/*VideoMenubar */
//////////////////////////////////////

const Logo = styled.div`
  width: 64px;
  height: 62px;
  background: #2e373e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
`;

const LeftNav = styled.div`
  width: 64px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #2e373e;
`;

const LeftUpperDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LeftBottomDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;
const ButtonItem = styled.button`
  width: 63px;
  height: 55px;

  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeItem = styled.button`
  width: 63px;
  height: 55px;

  border: none;
  background: var(--greenish-teal);
  // opacity: 0.5;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//////////////////////////////////////
/*VideoItem */
//////////////////////////////////////
const VideoFrame = styled.div`
  padding-left: 30px;
  padding-top: 19px;
  padding-right: 30px;

  height: 100vh-56px;
`;
const EmotionStatus = styled.div`
  position: absolute;

  top: 50%;
  left: 40%;
  width: 220px;

  display: flex;
  text-align: center;
  align-items: baseline;
  padding: 10px;
  font-size: 14px;

  background: black;
  color: white;

  opacity: 0.5;
  border-radius: 10px;
`;
const VideosContainer = styled.div`
  display: flex;
  height: 100%;
  width: 1340px;
  flex-wrap: wrap;

  z-index: 1;
`;
const EmotionCircle = styled.div`
  background: #2e373e;
  font-family: NanumSquareEB;

  --box-main-color: rgba(0, 0, 0, 0.2);
  --box-shadow-h-offset: 2.3px;
  --box-shadow-v-offset: 1.9px;
  --box-shadow-blur: 7px;

  width: 47px;
  height: 47px;
  border-radius: 60px;

  box-shadow: var(--box-shadow-h-offset) var(--box-shadow-v-offset)
    var(--box-shadow-blur) var(--box-main-color);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmotionButton = styled.button`
  background: #ae4747;
  font-size: 20px;
  color: white;
  font-family: NanumSquareEB;

  --box-main-color: rgba(0, 0, 0, 0.2);
  --box-shadow-h-offset: 2.3px;
  --box-shadow-v-offset: 1.9px;
  --box-shadow-blur: 7px;

  width: 60px;
  height: 60px;
  border-radius: 60px;

  box-shadow: var(--box-shadow-h-offset) var(--box-shadow-v-offset)
    var(--box-shadow-blur) var(--box-main-color);

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  cursor: pointer;
  border: 0px;
`;
const EmotionDiv = styled.div`
  font-size: 20px;
  color: white;
  font-family: NanumSquareEB;
`;
const ConnectLine = styled.div`
  width: 100px;
  height: 2px;
  background: #2e373e;
`;
const EmotionSwitch = styled.div`
  position: absolute;
  left: 50%;
  top: 90%;

  height: 47px;

  display: flex;
  align-items: center;
  flex-direction: row;
`;

//////////////////////////////////////
/*TopicDrawerBar*/
//////////////////////////////////////
const DrawerContainer = styled.div`
  background: #424c53;
  width: 300px;
  height: calc(100%-48px);
`;
const TopicContainer = styled.div`
  display: flex;
  width: 100%;
  height: 39px;
`;
const TopicItem = styled.button`
  font-size: 12px;
  width: 90px;
  height: 100%;
  background: #40474d;

  color: #84949d;

  cursor: pointer;
  outline: none;

  border: solid 1px #2e373e;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DrawerTitleContainer = styled.div`
  background: #2e373e;
  color: white;
  font-size: 16px;

  height: 45px;
  padding-left: 13px;
  padding-top: 5px;
  display: flex;
  align-items: center;
`;
const RecordTime = styled.div`
  font-size: 10px;
  color: #616c72;
  font-family: NanumSquareL;

  margin-left: 14px;
`;
const DarkDivideLine = styled.div`
  background: #2e373e;
  width: 100%;
  height: 1px;
`;
const RecordItem = styled.div`
  color: white;
  width: 164px;
  font-size: 12px;
  font-family: NanumSquareL;
  margin-left: 13px;
  display: inline-block;
`;
const RecordItemColor = styled.div`
  color: white;
  font-size: 12px;
  font-family: NanumSquareL;
  display: inline-block;
  margin-right: 5px;
`;
const RecordBorder = styled.div`
  display: flex;
  background: #2e373e;
  // opacity: 0.5;
  width: 100%;
  height: auto;

  padding-top: 15px;
  padding-left: 13px;
  padding-bottom: 15px;
`;
const TimeStamp = styled.div`
  font-size: 10px;
  color: #84949d;
`;

//////////////////////////////////////
/*InviteDialog */
//////////////////////////////////////
const InviteContainer = styled.div`
  position: absolute;
  display: inline-block;
  background: #ffffff;
  z-index: 100;
`;

const InviteList = styled.div`
  z-index: 100;
  width: 163px;
  height: auto;

  position: absolute;
  top: 15px;
  left: -105px;
  background: #ffffff;
  font-weight: bold;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;
const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background: var(--white-two);
  margin-top: 7px;
`;
const UserText = styled.div`
  font-size: 10px;
  font-family: NanumSquareB;
  color: var(--brownish-grey);
  margin-left: 10px;
`;
const UserContainer = styled.div`
  height: 40px;
  width: 163;
  display: flex;
  background: #ffffff;
  align-items: center;
  padding-left: 11px;
`;

const ShowInviteButton = styled.button`
  width: 163px;
  height: 28px;
  color: var(--greenish-teal);
  font-size: 9px;
  background: #f3f3f3;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const DialogUpperLine = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
  justify-content: center;
`;
const ShortLine = styled.div`
  width: 26px;
  background: var(--greenish-teal);
`;

//////////////////////////////////////
/*VideoControlButtons */
//////////////////////////////////////
const CircleBtn = styled.button`
  background: #f25959;
  width:31px
  height: 31px;
  border: 1px solid #f25959;
  color:white;
  border-radius: 50px;
  box-shadow: 2.3px 1.9px 7px black 0.2;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right:10px;

  cursor:pointer;
  outline:none;
`;
const VideoControlContainer = styled.div`
  display: flex;
  margin-top: 15px;
  margin-right: 15px;
`;

//////////////////////////////////////
/*VideoOrder */
//////////////////////////////////////
const VideoOrderContainer = styled.div`
  width: 781px;
  height: 42px;
  border: 1px solid black 0.3;
  border-radius: 45px;

  position: relative;
  bottom: 100px;
  left: 261px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  background: black;
  opacity: 0.3;
`;
const TurnName = styled.div`
  font-size: 16px;
  font-family: NanumSqareB;
  color: white;
`;

//////////////////////////////////////
/*CheckLeaveDialog */
//////////////////////////////////////
const CheckLeaveContainer = styled.div`
  width: 314px;
  height: 163px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CheckLeaveDiv = styled.div`
  color: var(--light-black);
  font-family: NanumSquareR
  font-size:14px;
`;
const CheckButtonItem = styled.button`
  width: 75px;
  height: 38px;
  color: var(--brownish-grey)
  font-family:NanumSquareB;
  font-size: 14px;
  border: solid 1px var(--white-two);
  border-radius:10px;

  outline:none;
  cursor:pointer;

  &:hover {
    background:var(--greenish-teal);
    color:white;
  }
`;
const RowButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 27px;
`;
export {
  MainView,
  SideBar,
  VideoBaseContainer,
  SecondBox,
  ToggleBtn,
  Row,
  ToggleDiv
};
export { UpperNav, ConferenceTitle, UserCount, RoundDiv, TimeDiv, NavP };

export {
  InviteContainer,
  UserContainer,
  UserText,
  DivideLine,
  InviteList,
  ShowInviteButton,
  ShortLine,
  DialogUpperLine
};
export { Logo, LeftNav, ButtonItem, HomeItem, LeftUpperDiv, LeftBottomDiv };
export {
  TopicItem,
  DrawerContainer,
  DrawerTitleContainer,
  RecordTime,
  TopicContainer,
  DarkDivideLine,
  RecordItem,
  RecordItemColor,
  RecordBorder,
  TimeStamp
};
export {
  VideoFrame,
  EmotionStatus,
  VideosContainer,
  EmotionButton,
  EmotionCircle,
  EmotionSwitch,
  ConnectLine,
  EmotionDiv
};

export { CircleBtn, VideoControlContainer };
export { VideoOrderContainer, TurnName };
export { CheckLeaveContainer, CheckButtonItem, RowButtons, CheckLeaveDiv };
