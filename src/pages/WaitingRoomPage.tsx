import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserStandbyList from "../components/common/UserStandbyList";
import { StBasicButton } from "../styles/BasicButton";
import TopLineButton from "../components/common/TopLineButton";
import LogoImage from "../assets/logo/mainlogo_image.webp";
import IdBoxImage from "../assets/images/title_container.webp";
import CopyIcon from "../assets/icons/copy.webp";
import { Stomp } from "@stomp/stompjs";

const WaitingRoomPage = () => {

  const token = localStorage.getItem("token");
  const [stompClient, setStompClient] = useState<any>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const webSocketUrl = `ws://${process.env.REACT_APP_SOCKET_URL}/ws/message`;

  const [button, setButton] = useState<boolean>(false);

  const ButtonOnclick = () => {
    setButton(!button);
  };

  const userArr: any = [
    // 게임시작 페이지 기능 구현 작업 중 임의로 사용하는 값이야 신경쓰지말고 그대로 두고 있어 나중에 고칠게
    { id: 0, turn: true, user: true, name: "멍지니", count: [0, 1, 2] },
    {
      id: 1,
      turn: false,
      user: true,
      name: "춘식이동생춘식이삼사오",
      count: [0, 1, 2, 3, 4, 5, 6],
    },
    { id: 2, turn: false, user: true, name: "준짱잉", count: [0, 1, 2, 3, 4] },
    { id: 3, turn: false, user: true, name: "주호민동생", count: [0] },
    { id: 4, turn: false, user: false, name: null, count: null },
  ];

  const onClickCopyHandler = async (id: string) => {
    try {
      await navigator.clipboard.writeText(id);
      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("복사에 실패하였습니다.");
    }
  };

  useEffect(() => {
    // STOMP 클라이언트 설정
    const socket = new WebSocket(webSocketUrl);
    const client = Stomp.over(socket);
    console.log(client);

    // 연결 헤더에 엑세스 토큰 추가
    const headers = {
      token: token,
    }

    setStompClient(client);

    // STOMP 연결
    client.connect(
      headers,
      () => {
        // 구독 설정
        const subscription = client.subscribe("/room/create", (message) => {
          const newMessage = JSON.parse(message.body);
          console.log(message);

          setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        // 컴포넌트 언마운트 시 연결 해제
        return () => {
          if (stompClient) {
            subscription.unsubscribe();
            stompClient.disconnet(() => {});
          }
        }
      },
      (error: any) => {
        console.log("STOMP 연결 실패", error);
      }
    );
  }, [token]);

  return (
    <GameRoomLayout>
      <TopLineButton />
      <div style={{ marginTop: "20px" }}>
        <UserStandbyList gamestart={false} userArr={userArr} />
      </div>
      <IdContainer>
        <IdBackgroundImage src={IdBoxImage} alt="" />
        <IdBoxContainer>
          <Id>
            방 ID : 00001
            <Copy
              src={CopyIcon}
              alt=""
              onClick={() => onClickCopyHandler("00001")}
            />
          </Id>
        </IdBoxContainer>
      </IdContainer>
      <LogoContainer src={LogoImage} alt="" />
      <ButtonContainer>
        {button ? (
          <StBasicButton
            width="120px"
            height="40px"
            color="white"
            onClick={ButtonOnclick}
          >
            CANCEL
          </StBasicButton>
        ) : (
          <StBasicButton
            width="120px"
            height="40px"
            color="red"
            onClick={ButtonOnclick}
          >
            READY!
          </StBasicButton>
        )}
      </ButtonContainer>
    </GameRoomLayout>
  );
};

const GameRoomLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IdContainer = styled.div`
  width: 260px;
  height: 68px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  position: relative;
`;

const IdBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`;

const IdBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Id = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  text-indent: 20px;
`;

const Copy = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
`;

const LogoContainer = styled.img`
  width: 300px;
  height: 230px;
  object-fit: contain;
  margin: 40px 0px 120px 0px;
  user-select: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default WaitingRoomPage;
