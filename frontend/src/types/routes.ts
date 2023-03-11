export type RouteType = {
    path: string,
    image?: string,
    title: string,
    component: JSX.Element,
    routes?: RouteType[] 
}