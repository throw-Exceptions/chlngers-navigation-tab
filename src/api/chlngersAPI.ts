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
      )
    }, 200);
  }
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

const challenges: Array<ChallengeType> = [
  {
    id: 1,
    imageUrl: '',
    hostName: '공식 챌린지',
    hostProfileImage: '/icons/official_challenge_mark_new.png',
    title: '매주 1kg 감량하기',
    description: '',
    participateNum: 420,
    startTime: 1625053452178,
    category: '건강',
    periodWeek: 4,
    certNumPerWeek: 1
  },
  {
    id: 2,
    imageUrl: '',
    hostName: '공식 챌린지',
    hostProfileImage: '/icons/official_challenge_mark_new.png',
    title: '홈트 영상 보며 운동하기',
    description: '',
    participateNum: 215,
    startTime: 1625053452178,
    category: '건강',
    periodWeek: 2,
    certNumPerWeek: 4
  },
  {
    id: 3,
    imageUrl: '',
    hostName: '공식 챌린지',
    hostProfileImage: '/icons/official_challenge_mark_new.png',
    title: '매일 헬스장 가기',
    description: '',
    participateNum: 1213,
    startTime: 1625053452178,
    category: '건강',
    periodWeek: 4,
    certNumPerWeek: 5
  },
  {
    id: 4,
    imageUrl: '',
    hostName: '공식 챌린지',
    hostProfileImage: '/icons/official_challenge_mark_new.png',
    title: '1만보 걷기',
    description: '',
    participateNum: 3215,
    startTime: 1625053452178,
    category: '건강',
    periodWeek: 2,
    certNumPerWeek: 3
  },
];

