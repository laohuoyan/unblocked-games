
export interface IGameConfig {
    id: string
    title: string;
    logo: string;
    /** 嵌入的游戏 */
    url: string;
    category: string;
}

export interface ICategoryConfig {
    category: string,
    name: string,
    title: string,
    subTitle: string,
    description: string,
}

export interface PageParams {
    [key: string]: any
    locale: string
    gameName: string
    category: string
}