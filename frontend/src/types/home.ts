export interface BoxProps {
    image: string,
    text: string
}

export interface YellowBoxProps extends BoxProps {
    number: number,
}

export interface NewsBoxProps extends BoxProps {
    title: string,
    desc: string,
    date: Date
}

export interface PlaceBoxProps extends BoxProps {
    phone: string,
    email: string
}