<div align="center">
  <h1>🧒 킨더피아 🐇</h1>
</div>

![킨더피아](https://github.com/user-attachments/assets/33ea9cdb-dc36-4684-bf3c-b78a116bc72c)

<div align="center">
  <strong>👨‍👩‍👧‍👦 부모와 아이들이 함께할 공간을 소개하며,<br> 🗨 모임을 만들어 함께 할 수 있는 웹 사이트</strong>
</div>

<br>

## 📢 1. 서비스 소개

킨더피아는 '킨더(Kindergarten)'와 '유토피아(Utopia)'의 합성어로,
부모와 아이가 함께하는 이상적인 문화생활 플랫폼입니다.

현대 사회에서 바쁜 부모들이 자녀와 질 높은 시간을 보내기 어려운 점에 착안하여 기획되었습니다. 다양한 놀이시설, 박물관, 키즈카페 등의 정보를 제공하고, 같은 관심사를 가진 가족들이 모임을 만들 수 있는 기회를 제공합니다.

<br>

❣ 회원 가입할 때 테스트 계정을 생성하거나, 로그인화면에서 [테스트 유저 계정으로 로그인] 버튼을 누르면
해당 프로젝트를 빠르게 살펴볼 수 있습니다.❣

[👉 킨더피아 배포링크 바로가기](http://ec2-3-38-150-41.ap-northeast-2.compute.amazonaws.com/)<br/>

[👉 킨더피아 위키 바로가기](https://github.com/SeSAC-3rd-Kinderpia/kinderpia_front/wiki)


<br>

## 📅 2. 개발일정

🗓️ 기간 : 2024.10.21 (월) ~ 11.08 (금)

- Jira를 활용한 체계적인 일정 관리와 효율적인 작업 분배
- 원활한 커뮤니케이션을 통한 프로젝트 진행 상황 실시간 공유

![개발일정](https://github.com/user-attachments/assets/036c4b70-714e-411b-b130-f6c007d87b01)

<br>

## 📂 3. 프로젝트 폴더 구조

```
📂src/
├── 📂api/           # Axios 인스턴스 및 API 관련 함수
├── 📂assets/        # 아이콘, 이미지 등 정적 리소스
├── 📂components/    # 컴포넌트 모음
│  ├─ 📂 common ─────────── 📦 공통 컴포넌트
│  ├─ 📂 chat ───────────── 📦 채팅기능에서 사용되는 컴포넌트
│  ├─ 📂 chatlist ───────── 📦 채팅방 목록을 보여주기 위해서 사용되는 컴포넌트
│  ├─ 📂 meeting ────────── 📦 모임기능 페이지에서 사용되는 컴포넌트
│  ├─ 📂 mypage ─────────── 📦 마이 페이지에서 사용되는 컴포넌트
│  ├─ 📂 place ──────────── 📦 장소기능 페이지에서 사용되는 컴포넌트
│  └─ 📂 review ─────────── 📦 장소상세 페이지에서 리뷰 기능에 사용되는 컴포넌트
├── 📂data/          # 사이트 이용약관 & 개발단계에서 활용한 더미데이터 모음
├── 📂hooks/         # 커스텀 훅 모음
├── 📂layout/        # 공통 레이아웃 모음
├── 📂pages/         # 페이지 모음
│  ├─ 📂 meeting ────────── 📦 모임기능 페이지 모음
│  ├─ 📂 mypage ─────────── 📦 마이페이지 페이지 모음
├── 📂store/         # 유틸리티 함수
├── 📂styles/        # 스타일 모음
│  ├─ 📂 common ─────────── 📦 공통 스타일
│  │  ├─ _reset.scss ─────── 브라우저의 기본 스타일을 초기화하고 일관된 스타일 기반을 제공
│  │  ├─ _utils.scss ─────── 전역적으로 사용되는 기본 스타일과 유틸리티 믹스인을 정의
│  │  └─ _variables.scss ─── 프로젝트 전반에서 사용되는 글로벌 변수들을 정의
│  ├─ 📂 chat ───────────── 📦 채팅기능에서 사용되는 스타일
│  ├─ 📂 chatlist ───────── 📦 채팅방 목록을 보여주기 위해서 사용되는 스타일
│  ├─ 📂 meeting ────────── 📦 모임기능 페이지에서 사용되는 스타일
│  ├─ 📂 mypage ─────────── 📦 마이 페이지에서 사용되는 스타일
│  ├─ 📂 place ──────────── 📦 장소기능 페이지에서 사용되는 스타일
│  └─ 📂 review ─────────── 📦 장소상세 페이지에서 리뷰 기능에 사용되는 스타일
├── 📂types/         # TypeScript에 활용되는 Type,interface 모음
└── 📂utils/         # 공통으로 사용되는 유틸 함수 모음
app.tsx              # React-Route모음

```

## 😀 4. Use Case(유스케이스)

<p align="center">
  <img src="https://github.com/user-attachments/assets/14bda5ae-c54c-4891-96c9-c145ef7b9054" width="500" height="auto" alt="유스케이스 다이어그램">
</p>

## ⚙️ 5. 기술 스택

### Languages
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <br/>

### Framework / Library
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><br/>
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> 
<img src="https://img.shields.io/badge/STOMP.js-000000?style=for-the-badge&logo=winston&logoColor=white"> <img src="https://img.shields.io/badge/SockJS-000000?style=for-the-badge&logo=winston&logoColor=white">
<img src="https://img.shields.io/badge/SweetAlert2-000000?style=for-the-badge&logo=winston&logoColor=white"><br/>

### Style
 <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">

 <br/>

## 🏷️ 6. 담당한 기능
### 채팅 기능

| 채팅 목록 페이지                                                                              | 채팅방 입장                                                                                     |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![]() | ![]() |

| 메시지 송수신                                                                                    | 참여 인원 확인                                                                                      |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| ![]() | ![]() |

| 채팅 메시지 신고                                                                                 | 채팅방 떠나기                                                                                      |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| ![]() | ![]() |
