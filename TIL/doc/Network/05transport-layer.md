전송계층의 역할, 연결형 통신과 비연결형 통신을 이해하기 

- 데이터 손상, 유실에 대한 책임을 갖는 역할
- 역할 : 목적지에 신뢰할 수 있는 데이터를 전달하기 위해서 필요한 계층
- 역할 : 오류를 점검하는 기능이 있음 (= 데이터가 제대로 도착했는지 확인하는 역할)
- 역할 : 전송된 데이터의 목적지가 어떤 애플리케이션인지 식별하는 기능도 있음

---

# 전송계층의 역할

- 오류 점검 기능
- 어떤 목적지 어필리케이션으로 가는지 식별하는 기능
ex) 웹브라우져인지 메일 프로그램인지..

# 연결형 통신과 비연결형 통신

- **연결형통신** ⇒ 신뢰성/정확성 : 데이터를 목적지에 문제없이 전달

    ◦ 상대편과 확인해 가면서 통신하는 방식 ( 통신이 가능한지 )

    ◦ TCP

- **비연결형** ⇒ 효율성 : 빠르고 효율적으로 전달하는 것

    ◦ 상대편을 확인하지 않고 일반적으로 데이터 전송하는 방식 

    ◦ UDP 

# TCP

- 연결형 통신

## 세그먼트

- TCP 헤더가 붙은 데이터!
- TCP 헤더 : 목적지까지 데이터를 전송하기 위한 정보들이 있음

## 코드비트 : 데이터 전송 통신로 확보

- 연결(Connection) 이라는 가상의 독점 통신로를 확보해야 함
- 코드비트 : TCP 헤더의 107번부터 112번까지의 6비트
- URG / ACK(응답) / PSH / RST / SYN(연결요청) / FIN
- 초기값 0 활성 1

## 3 Way handshake

### ⑴ 연결 수립

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6257e11b-db2e-4c23-9d63-041564a512b2/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6257e11b-db2e-4c23-9d63-041564a512b2/Untitled.png)

- #1 : 연결 확립 허기를 받기 위한 SYN → SYN 1 ACK 0
- #2 : 연결을 허가한다는 응답 ACK과 다시 연결 확립 허가를 받기 위한 ACK를 다시 보낸다 → SYN 1 ACK 1
- #3 : 연결 확립 응답을 다시 보낸다 → SYN 0 ACK 1

### ⑵ 연결 해제

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2f8c035-2e44-44a6-b735-460ebd2938a4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2f8c035-2e44-44a6-b735-460ebd2938a4/Untitled.png)

- #1 : 컴퓨터 1에서 2로 연결 종료 요청을 보낸다 FIN
- #2 : 컴퓨터 2에서 1로 연결 종료 응답(ACK)을 반환한다.
- #3 : 컴퓨터 2에서 1로 연결 종료 요청을 보낸다.
- #4 : 컴퓨터1에서 2로 연결 종료 응답을 반환한다

FIN ACK 가 1 로 활성화

---

# 일련번호와 확인 응답번호

연결 수립(3 Way Handshake)이후 데이터 전송에 사용되는 헤더의 정보.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86f599ed-bf56-4bf5-96e1-499510cdb5c5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86f599ed-bf56-4bf5-96e1-499510cdb5c5/Untitled.png)

## 일련번호 (Sequence Number)

송신 측에서 수신 측에 이 데이터가 몇 번째 데이터인지 알려주는 역할

## 확인 응답번호 (Acknowledge Number)

수신 측이 몇번째 데이터를 수신했는지 송신 측 에 알려주는 역할 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4434d40c-e623-4a6d-8ae1-980999f5094b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4434d40c-e623-4a6d-8ae1-980999f5094b/Untitled.png)

① 컴퓨터 1은 컴퓨터 2로 200바이트의 데이터를 전송한다.

② 컴퓨터 2는 200 바이트를 수신하고자 하는 데이터 번호를 확인 응답 번호, 다음에 수신하고자 하는 데이터는 3201 부터 보내달라고 요청

③ 컴퓨터1은 컴퓨터2에게 3021부터 200 바이트의 데이터를 요청한다

④ 컴퓨터2는 200 바이트를 수신하고 다음에 수신하고자 하는 데이터의 번호를 요청한다

## 윈도우 사이즈(Window Size)

- 세그먼트를 하나씩 응답을 허용하면 한세월이 걸린다.. 치얼스..
- 따라서 세그먼트를 연속해서 보내고 묶음에 대해 확인한다.
- 이 때 버퍼에 담을 수 있는 세그먼트의 갯수를 **윈도우 크기** 라고 한다.
- 버퍼의 초기 사이즈는 3 way handshake 때 알게 된다.

---

# 포트 번호

## 포트번호란

목적지의 어떤 애플리케이션인지 구분하는 역할 

따라서 헤더의 출발지 포트와 목적지 포트로 애플리케이션을 구분한다. 

## 포트번호 사이즈

- 0~65535번
- 0~1023 은 주요 프로토콜 
1024 는 예약되어 있지만 사용되지는 않는 포트
1025 이후는 랜덤포트로 클라이언트의 송신포트

### 웹에서의 포트

- 웹 브라우저로 접속할 때는 할당된 포트로 접속한다. 따라서 서버에서는 포트번호를 지정해 주어야 함.
- 요청해서 받아오는 정보는 포트번호를 지정하지 않고 1025 포트로 응답을 받음

---

# UDP

- 전송 계층에서 효율적으로 통신 할 수 있도록 하는 프로토콜 구조
- 비연결형, 빠른 속도, 영상에 활용

## UDP 헤더

- UDP 헤더가 붙은 데이터를 UDP 데이터그램 이라고 한다

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dfd97616-06e7-4895-814f-137489d98bc2/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dfd97616-06e7-4895-814f-137489d98bc2/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9619100a-a267-4196-a5f4-0ce0b8f00046/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9619100a-a267-4196-a5f4-0ce0b8f00046/Untitled.png)

- 확인 응답 없이 보내기 때문에 속도가 더 빠르고 헤더가 간결하다.
- 브로드캐스트 전송 가능 : 같은 랜 안에 있는 컴퓨터나 네트워크 장비에 데이터를 일괄전송 가능

---

# 퀴즈

- 퀴즈는 (연결형)통신이고 UDP는 (비연결형) 통신이다.
- TCP 헤더가 있는 데이터를 (세그먼트)라고 하고 UDP 헤더가 있는 데이터를 (UDP 데이터그램) 이라고 한다.
- 연결 확립을 위해 사용하는 코드비트는 (ACK), (SYN) 이다.
- 연결 확립하기 위한 세 번의 통신 교환을 (3 way handshake)라고 한다.
- 연결을 종료하기 위해 사용하는 코드 비트는  (ACK), (SYN) 이다.
- 데이터를 재전송하는 것을 (재전송 제어)라고 한다.
- 받은 세그먼트(데이터)를 일시 저장하는 장소를 (버퍼)라고 한다.
- 데이터가 넘치는 것을 (오버플로우)라고 한다.
- (포트 번호)는 목적지가 어떤 애플리케이션인지 구분하는 역할을 한다.
- 포트번호는 0 부터 (65535)까지 사용할 수 있다.