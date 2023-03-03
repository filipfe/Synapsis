export interface BoxProps {
    image: string,
    text: string
}

export interface YellowBoxProps extends BoxProps {
    number: number,
}

export interface NewsBoxProps extends BoxProps {
    date: Date
}

export interface PlaceBoxProps extends BoxProps {
    phone: string,
    email: string
}