export type BannerAdType = {
  id: number,
  backgroundImageUrl: string,
  title: string,
  description: string,
  participateNum: number,
  maxParticipateNum?: number,
  startDate: number,
  category: string,
  periodWeek: number
};

export const getBannerAdList = (): Promise<Array<BannerAdType>> => new Promise(
  resolve => {
    setTimeout(() => resolve([
      {
        id: 1,
        backgroundImageUrl: 'https://newsimg.hankookilbo.com/cms/articlerelease/2021/05/27/fb2f8f9f-b0fe-4468-bbe8-f182600f4a2e.jpg',
        title: 'BTS 세트 10개 먹고 찐 ARMY 인증하자!',
        description: '맥도날드 X 챌린저스',
        participateNum: 123822,
        startDate: 1625053452178,
        category: '기타',
        periodWeek: 4
      },
      {
        id: 2,
        backgroundImageUrl: 'https://reactjs.org/logo-og.png',
        title: 'React Framework 공부하면서 용돈벌자!',
        description: 'React X 챌린저스',
        participateNum: 323,
        maxParticipateNum: 500,
        startDate: 1624853452178,
        category: '기타',
        periodWeek: 8
      },
    ]), 200);
  }
);

export const getPopularChallengeList = (category: string, num: number): Promise<Array<ChallengeType>> => new Promise(
  resolve => {
    setTimeout(() => {
      resolve(
        challenges
          .filter(challenge => challenge.category === category)
          .sort((a, b) => b.participateNum - a.participateNum)
          .slice(0, num)
      );
    }, 200);
  }
);

export const getAllPopularChallengeList = (num: number): Promise<Array<ChallengeType>> => new Promise(
  resolve => {
    setTimeout(() => {
      resolve(
        challenges
          .sort((a, b) => b.participateNum - a.participateNum)
          .slice(0, num)
      );
    }, 200);
  }
);

export const getMyChallengeList = (num: number): Promise<Array<ChallengeType>> => new Promise(
  resolve => setTimeout(() => resolve(
    myChallenges
      .slice(0, num)
      .map(id => challenges.find(challenge => challenge.id === id) as ChallengeType)
  ), 200)
);

export type ChallengeType = {
  id: number,
  imageUrl: string,
  hostName: string,
  hostProfileImage: string,
  title: string,
  startTime: number,
  participateNum: number,
  maxParticipateNum?: number,
  certNumPerWeek: number,
  periodWeek: number,
  category: string,
  description: string
};

let idGenerator: number = 0;

const createChallenge = (
  title: string,
  description: string,
  category: string,
): ChallengeType => {
  return {
    id: idGenerator++,
    imageUrl: '',
    hostName: '공식 챌린지',
    hostProfileImage: '/icons/official_challenge_mark_new.png',
    title,
    description,
    participateNum: Math.floor(Math.random() * 2000) + 10,
    startTime: Number(new Date()) + Math.floor(Math.random() * 10) * 100000000,
    category,
    periodWeek: Math.floor(Math.random() * 6) + 2,
    certNumPerWeek: Math.floor(Math.random() * 6)
  }
};

const challenges: Array<ChallengeType> = [
  createChallenge('매주 1kg 감량하기', '', '건강'),
  createChallenge('홈트 영상 보며 운동하기', '', '건강'),
  createChallenge('1만보 걷기', '', '건강'),
  createChallenge('매일 헬스장 가기', '', '건강'),
  createChallenge('[반보] 영어 강의 체험하기', '', '역량'),
  createChallenge('책읽기', '', '역량'),
  createChallenge('하루 1시간 공부', '', '역량'),
  createChallenge('블로그 글쓰기', '', '역량'),
  createChallenge('우리 동네 동식물 사진찍기', '', '정서'),
  createChallenge('반려식물 물 주기', '', '정서'),
  createChallenge('반려동물과 산책하기', '', '정서'),
  createChallenge('부모님께 전화드리기', '', '정서'),
  createChallenge('재테크 영상보기', '', '자산'),
  createChallenge('경제기사 읽기', '', '자산'),
  createChallenge('매 주 5만원 통장에 저금하기', '', '자산'),
  createChallenge('중고거래 앱에서 리셀링 실천하기', '', '자산'),
  createChallenge('미라클모닝 | 아침 8시 일어나기', '', '생활'),
  createChallenge('2021 하반기 계획 세우기', '', '생활'),
  createChallenge('[하루도전] 할일3가지 쓰기', '', '생활'),
  createChallenge('팩하기', '', '생활'),
  createChallenge('[라이프] 사진전 관람하기', '', '취미'),
  createChallenge('악기 연습하기', '', '취미'),
  createChallenge('[배민커넥트] 동네에서 운동하며 용돈벌기', '', '취미'),
  createChallenge('집밥 요리하기', '', '취미'),
];

const myChallenges: Array<number> = [1, 2, 5, 6, 7, 10, 14, 15];