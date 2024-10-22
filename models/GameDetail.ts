interface IGameDetail {
    meta: IMetaData;
    hero: IHeroData;
    features: IFeatureData;
    howToPlay: IHowToPlayData;
    faq: IFAQData;
  }
  
  interface IMetaData {
    title: string;
    description: string;
  }
  
  interface IHeroData {
    title: string;
    subTitle: string;
  }
  
  interface IFeatureData {
    title: string;
    subTitle: string;
    items: IFeatureItem[];
  }
  
  interface IFeatureItem {
    title: string;
    description: string;
  }
  
  interface IHowToPlayData {
    title: string;
    subTitle: string;
    items: IHowToPlayItem[];
  }
  
  interface IHowToPlayItem {
    text: string;
  }
  
  interface IFAQData {
    title: string;
    subTitle: string;
    items: IFAQItem[];
  }
  
  interface IFAQItem {
    question: string;
    answer: string;
  }
  