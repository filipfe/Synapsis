export type NavLinkProps = {
    title: string | string[],
    to: string,
    subLinks: NavLinkProps[],
    className?: string,
}