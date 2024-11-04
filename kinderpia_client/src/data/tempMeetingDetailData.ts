import { MeetingData } from "../types/meeting";

// export const dummyMeetings: MeetingData[] = [
//   { 
//     meetingId: 1,
//     title: '에버랜드 같이 가요~!',
//     category: '오락 & 여가',
//     location: '경기도 용인시 처인구 포곡읍 에버랜드로 199',
//     selectedDate: '2024-10-30',
//     selectedTime: '10:00',
//     writer: '즐거운하루',
//     participants: 5,
//     maxParticipants: 10,
//     description: '환상의 나라로 오세요 즐거운 축제가 열리는 곳\n모험의 나라로 오세요 영원한 행복의 나라 에버랜드',
//     meetingStatus: '모집중',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 2,
//     title: '토익 스터디원 모집합니다',
//     category: '교육',
//     location: '서울특별시 강남구 테헤란로 231 센터필드 지하1층',
//     selectedDate: '2024-11-01',
//     selectedTime: '19:00',
//     writer: '영어마스터',
//     participants: 3,
//     maxParticipants: 6,
//     description: '매주 토요일 토익 스터디 진행합니다.\n목표 점수 850점 이상\n함께 열심히 공부해요!',
//     meetingStatus: '모집중',
//     JoinMethod: false,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 3,
//     title: '한강 자전거 라이딩',
//     category: '운동',
//     location: '서울특별시 영등포구 여의동로 330 여의도한강공원',
//     selectedDate: '2024-11-05',
//     selectedTime: '08:00',
//     writer: '라이더킹',
//     participants: 8,
//     maxParticipants: 12,
//     description: '한강 따라 여의도에서 잠실까지 라이딩 가실 분들 모집합니다.\n초보자도 환영!',
//     meetingStatus: '모집중',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 4,
//     title: '주말 등산 모임',
//     category: '운동',
//     location: '서울특별시 강북구 우이동 산 1-1',
//     selectedDate: '2024-11-02',
//     selectedTime: '07:00',
//     writer: '산악인',
//     participants: 6,
//     maxParticipants: 8,
//     description: '북한산 정상 등반하실 분들 모집합니다.\n등산 경험자 우대',
//     meetingStatus: '모집완료',
//     JoinMethod: false,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 5,
//     title: '프론트엔드 개발자 모각코',
//     category: '교육',
//     location: '서울특별시 강남구 선릉로 429',
//     selectedDate: '2024-11-03',
//     selectedTime: '14:00',
//     writer: '코딩왕',
//     participants: 4,
//     maxParticipants: 5,
//     description: 'React, TypeScript 사용하시는 분들과 함께 코딩하고 싶습니다.\n경력 무관, 열정 있으신 분!',
//     meetingStatus: '모집중',
//     JoinMethod: false,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 6,
//     title: '주말 축구 한판!',
//     category: '운동',
//     location: '서울특별시 마포구 월드컵로 243-60',
//     selectedDate: '2024-11-09',
//     selectedTime: '16:00',
//     writer: '축구왕',
//     participants: 10,
//     maxParticipants: 22,
//     description: '11:11 풋살 하실 분들 모집합니다.\n실력 무관, 열심히 뛰실 분!',
//     meetingStatus: '모집중',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 7,
//     title: '맛집 탐방',
//     category: '음식',
//     location: '서울특별시 마포구 망원동 395-73',
//     selectedDate: '2024-11-04',
//     selectedTime: '18:30',
//     writer: '맛있는인생',
//     participants: 3,
//     maxParticipants: 4,
//     description: '망원동 맛집 투어 함께해요.\n숨은 맛집 찾아다니실 분!',
//     meetingStatus: '모집완료',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 8,
//     title: '보드게임 모임',
//     category: '오락 & 여가',
//     location: '서울특별시 마포구 와우산로 39길 32',
//     selectedDate: '2024-11-06',
//     selectedTime: '19:00',
//     writer: '게임조아',
//     participants: 2,
//     maxParticipants: 6,
//     description: '뱅, 스플렌더, 카탄 등 보드게임 함께해요.\n초보자 환영!',
//     meetingStatus: '모집중',
//     JoinMethod: false,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 9,
//     title: '영화 감상 모임',
//     category: '오락 & 여가',
//     location: '서울특별시 용산구 한강대로23길 55 아이파크몰 6층',
//     selectedDate: '2024-11-07',
//     selectedTime: '15:00',
//     writer: '영화광',
//     participants: 4,
//     maxParticipants: 6,
//     description: '듄2 함께 보실 분 구합니다.\n영화 후 카페에서 감상 나누기',
//     meetingStatus: '모집중',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 10,
//     title: '일본어 회화 스터디',
//     category: '교육',
//     location: '서울특별시 서대문구 신촌로 119',
//     selectedDate: '2024-11-08',
//     selectedTime: '20:00',
//     writer: '일본어마스터',
//     participants: 4,
//     maxParticipants: 8,
//     description: 'JLPT N2 이상 회화 스터디원 모집합니다.\n매주 목요일 정기 모임',
//     meetingStatus: '모집중',
//     JoinMethod: false,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 11,
//     title: '롯데월드 번개',
//     category: '오락 & 여가',
//     location: '서울특별시 송파구 올림픽로 240',
//     selectedDate: '2024-11-15',
//     selectedTime: '11:00',
//     writer: '놀이공원러버',
//     participants: 2,
//     maxParticipants: 4,
//     description: '롯데월드 자유이용권 할인받아서 같이 가요!\n신나게 놀아봐요~',
//     meetingStatus: '모집중',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 12,
//     title: '주식 투자 스터디',
//     category: '교육',
//     location: '서울특별시 강남구 테헤란로 427 위워크타워 3층',
//     selectedDate: '2024-11-10',
//     selectedTime: '13:00',
//     writer: '워렌버핏',
//     participants: 5,
//     maxParticipants: 10,
//     description: '기업 분석과 차트 공부 함께해요.\n초보자부터 고수까지 환영!',
//     meetingStatus: '모집완료',
//     JoinMethod: false,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 13,
//     title: '클라이밍 멤버 모집',
//     category: '운동',
//     location: '서울특별시 마포구 와우산로21길 19-3',
//     selectedDate: '2024-11-12',
//     selectedTime: '17:00',
//     writer: '클라이머',
//     participants: 3,
//     maxParticipants: 6,
//     description: '함께 클라이밍 하실 분 구합니다.\n초보자도 환영해요!',
//     meetingStatus: '모집중',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 14,
//     title: '사진 촬영 모임',
//     category: '취미',
//     location: '서울특별시 종로구 사직로 161',
//     selectedDate: '2024-11-16',
//     selectedTime: '14:00',
//     writer: '사진작가',
//     participants: 4,
//     maxParticipants: 8,
//     description: '가을 풍경 사진 촬영하실 분!\n카메라 장비 무관',
//     meetingStatus: '모집중',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 15,
//     title: '온라인 게임 한판',
//     category: '오락 & 여가',
//     location: '온라인',
//     selectedDate: '2024-11-11',
//     selectedTime: '21:00',
//     writer: '게이머',
//     participants: 3,
//     maxParticipants: 5,
//     description: '롤 5인큐 가실 분~\n실버 이상 가능하신 분!',
//     meetingStatus: '모집중',
//     JoinMethod: false,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 16,
//     title: '주말 테니스',
//     category: '운동',
//     location: '서울특별시 송파구 올림픽로 424 올림픽테니스장',
//     selectedDate: '2024-11-17',
//     selectedTime: '09:00',
//     writer: '테니스왕',
//     participants: 2,
//     maxParticipants: 4,
//     description: '테니스 복식 하실 분 모집합니다.\n초중급 이상',
//     meetingStatus: '모집중',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 17,
//     title: '전시회 관람',
//     category: '문화',
//     location: '서울특별시 용산구 한강대로 130 디뮤지엄',
//     selectedDate: '2024-11-18',
//     selectedTime: '13:00',
//     writer: '문화인',
//     participants: 3,
//     maxParticipants: 5,
//     description: '팀랩 전시 보러가실 분!\n관람 후 감상 나누기',
//     meetingStatus: '모집중',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 18,
//     title: '캠핑 멤버 구해요',
//     category: '오락 & 여가',
//     location: '경기도 가평군 상면 임초밤안골로 115',
//     selectedDate: '2024-11-23',
//     selectedTime: '11:00',
//     writer: '캠핑러버',
//     participants: 4,
//     maxParticipants: 8,
//     description: '주말 캠핑 가실 분!\n장비 있으신 분 우대',
//     meetingStatus: '모집중',
//     JoinMethod: false,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 19,
//     title: '베이킹 클래스',
//     category: '요리',
//     location: '서울특별시 마포구 망원로 96',
//     selectedDate: '2024-11-19',
//     selectedTime: '15:00',
//     writer: '베이커리',
//     participants: 6,
//     maxParticipants: 8,
//     description: '마카롱 만들기 클래스입니다.\n재료비 포함 5만원',
//     meetingStatus: '모집완료',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   },
//   {
//     meetingId: 20,
//     title: '와인 테이스팅',
//     category: '음식',
//     location: '서울특별시 용산구 이태원로 187-5',
//     selectedDate: '2024-11-20',
//     selectedTime: '19:00',
//     writer: '소믈리에',
//     participants: 5,
//     maxParticipants: 8,
//     description: '프랑스 와인 테이스팅 모임입니다.\n와인 초보자도 환영!',
//     meetingStatus: '모집중',
//     JoinMethod: true,
//     createdAt: '2024-10-21'
//   }
// ];