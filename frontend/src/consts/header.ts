import { NavLinkProps } from "../types/header";

export const navLinks: NavLinkProps[] = [
    {
        to: '/',
        title: 'O NAS',
        subLinks: [
            {
                title: 'FUNDACJA',
                to: '/',
                subLinks: []
            },
            {
                title: 'POROZUMIENIE AUTYZM POLSKA',
                to: '/',
                subLinks: []
            }
        ]
    },
    {
        to: '/autyzm',
        title: 'AUTYZM',
        subLinks: [
            {
                title: 'CZYM JEST?',
                to: '/autyzm',
                subLinks: [
                    {
                        title: 'DEFINICJA',
                        to: '/autyzm/definicja',
                        subLinks: []
                    },
                    {
                        title: 'OBJAWY',
                        to: '/autyzm/objawy',
                        subLinks: []
                    },
                    {
                        title: 'WYSTĘPOWANIE',
                        to: '/autyzm/występowanie',
                        subLinks: []
                    }
                ]
            }
        ]
    },
    {
        to: '/zaangazuj-sie',
        title: 'ZAANGAŻUJ SIĘ',
        subLinks: [
            {
                title: 'WPŁAĆ DAROWIZNĘ',
                to: 'https://panel.fs.org.pl/civicrm/contribute/transact?reset=1&id=2',
                subLinks: []
            },
            {
                title: '1%',
                to: 'https://1procent.synapsis.org.pl/',
                subLinks: []
            }
        ]
    },
    {
        to: '/nasze-dzialania',
        title: 'NASZE DZIAŁANIA',
        subLinks: []
    },
    {
        to: '/rzecznictwo',
        title: 'RZECZNICTWO',
        subLinks: []
    },
    {
        to: '/kontakt',
        title: 'KONTAKT',
        subLinks: []
    },
]