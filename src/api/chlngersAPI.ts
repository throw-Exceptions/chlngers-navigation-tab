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
      // {
      //   id: 1,
      //   backgroundImageUrl: 'https://newsimg.hankookilbo.com/cms/articlerelease/2021/05/27/fb2f8f9f-b0fe-4468-bbe8-f182600f4a2e.jpg',
      //   title: 'BTS 세트 먹고 ARMY 인증하자!',
      //   description: '맥도날드 X 챌린저스',
      //   participateNum: 123822,
      //   startDate: 1625053452178,
      //   category: '기타',
      //   periodWeek: 4
      // },
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