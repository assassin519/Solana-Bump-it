export interface RankItemProps {
    avatar: string,
    onClick: () => void,
    price: number,
    rank: number,
    username: string,
}

export interface ActivityListItemProps {
    text?:string,
}