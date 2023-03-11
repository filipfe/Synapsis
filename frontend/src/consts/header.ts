import { NavLinkProps } from "../types/header";

export const navLinks: NavLinkProps[] = [
    {
        to: '/o-nas',
        title: 'O NAS',
        subLinks: [
            {
                title: 'FUNDACJA',
                to: '',
                subLinks: [
                    {
                        title: 'MISJA I CELE',
                        to: '/o-nas/misja-i-cele',
                        subLinks: []
                    },
                    {
                        title: 'STRUKTURA ORGANIZACYJNA',
                        to: '/o-nas/struktura-organizacyjna',
                        subLinks: []
                    },
                    {
                        title: 'SPRAWOZDANIA',
                        to: '/o-nas/sprawozdania',
                        subLinks: []
                    },
                    {
                        title: 'STATUT',
                        to: '/o-nas/statut',
                        subLinks: []
                    }
                ]
            },
            {
                title: 'POROZUMIENIE AUTYZM POLSKA',
                to: '/o-nas/porozumienie-autyzm-polska',
                subLinks: [
                    {
                        title: 'ORGANIZACJE ZAŁOZYCIELSKIE',
                        to: '/o-nas/porozumienie-autyzm-polska/organizacje-zalozycielskie',
                        subLinks: []
                    },
                    {
                        title: 'ORGANIZACJE WSPÓŁPRACUJĄCE',
                        to: '/o-nas/porozumienie-autyzm-polska/organizacje-wspolpracujace',
                        subLinks: []
                    },
                ]
            },
            {
                title: 'AUTISM EUROPE',
                to: '/o-nas/autism-europe',
                subLinks: []
            },
            {
                title: 'PARTNERSTWA',
                to: '/o-nas/partnerstwa',
                subLinks: []
            },
            {
                title: 'RODO',
                to: '/o-nas/rodo',
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
                        to: '/autyzm/wystepowanie',
                        subLinks: []
                    }
                ]
            },
            {
                title: 'INFORMACJE PRAKTYCZNE',
                to: '/autyzm/informacje-praktyczne',
                subLinks: []
            },
            {
                title: 'SYTUACJA OSÓB Z ASD',
                to: '/autyzm/sytuacja-osob-z-asd',
                subLinks: []
            },
            {
                title: 'MATERIAŁY DO POBRANIA',
                to: '/autyzm/materialy-do-pobrania',
                subLinks: []
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
            },
            {
                title: 'BIEGANIE CHARYTATYWNE',
                to: '/zaangazuj-sie/bieganie-charytatywne',
                subLinks: []
            },
            {
                title: 'WOLONTARIAT',
                to: '/zaangazuj-sie/wolontariat',
                subLinks: []
            },
            {
                title: 'CRS',
                to: '/zaangazuj-sie/crs',
                subLinks: []
            },
            
        ]
    },
    {
        to: '/nasze-dzialania',
        title: 'NASZE DZIAŁANIA',
        subLinks: [
            {
                title: 'PROJEKTY',
                to: '/nasze-dzialania/projekty',
                subLinks: []
            },
            {
                title: 'OFERTA USŁUG',
                to: '/nasze-dzialania/oferta-uslug',
                subLinks: []
            },
            {
                title: 'RZECZNICTWO',
                to: '/nasze-dzialania/rzecznictwo',
                subLinks: []
            },
            {
                title: 'PODCASTY',
                to: '/nasze-dzialania/podcasty',
                subLinks: []
            },
            {
                title: 'STAŻE',
                to: '/nasze-dzialania/staze',
                subLinks: []
            },
            {
                title: 'PLACÓWKI OŚWIATOWE',
                to: '/nasze-dzialania/placowki-oswiatowe',
                subLinks: [
                    {
                        title: 'NPKU',
                        to: '/nasze-dzialania/placowki-oswiatowe/npku',
                        subLinks: []
                    },
                    {
                        title: 'NSPPP',
                        to: '/nasze-dzialania/placowki-oswiatowe/nsppp',
                        subLinks: []
                    },
                ]
            },
            {
                title: '„BADABADA”',
                to: 'http://badabada.pl/',
                subLinks: []
            },
            {
                title: 'AKCJE SPECJALNE',
                to: '/nasze-dzialania/akcje-specjalne',
                subLinks: []
            },
            {
                title: 'SKLEPY',
                to: '/nasze-dzialania/sklepy',
                subLinks: [
                    {
                        title: 'SKLEP SYNAPSIS',
                        to: 'https://sklep.synapsis.org.pl/',
                        subLinks: []
                    },
                    {
                        title: 'SKLEP PRACOWNI SYNAPSIS',
                        to: 'http://sklep.pracowniasynapsis.pl/',
                        subLinks: []
                    },
                ]
            },
        ]
    },
    {
        to: '/konferencja',
        title: 'KONFERENCJA',
        subLinks: []
    },
    {
        to: '/szkolenia',
        title: 'SZKOLENIA',
        subLinks: [
            {
                to: '/szkolenia/terminarz-szkolen',
                title: 'TERMINARZ SZKOLEŃ',
                subLinks: []
            },
            {
                to: '/szkolenia/webinary-i-szkolenia-online',
                title: 'WEBINARY I SZKOLENIA ONLINE',
                subLinks: []
            },
            {
                to: '/szkolenia/oferta-szkolen',
                title: 'OFERTA SZKOLEŃ',
                subLinks: []
            },
            {
                to: '/szkolenia/kadra-szkoleniowe',
                title: 'KADRA SZKOLENIOWA',
                subLinks: []
            },
            {
                to: '/szkolenia/regulamin',
                title: 'REGULAMIN',
                subLinks: []
            }
        ]
    },
    {
        to: '/kontakt',
        title: 'KONTAKT',
        subLinks: [
            {
                to: '/kontakt/ogolny',
                title: 'KONTAKT OGÓLNY',
                subLinks: []
            },
            {
                to: '/kontakt/podmiot-leczniczy',
                title: 'PODMIOT LECZNICZY',
                subLinks: []
            },
            {
                to: '/kontakt/telefony-poradnicze',
                title: 'TELEFONY PORADNICZE',
                subLinks: []
            },
            {
                to: '/kontakt/szkolenia',
                title: 'KONTAKT SZKOLENIA',
                subLinks: []
            },
            {
                to: '/kontakt/ukraina',
                title: 'ДОПОМОГА ДЛЯ УКРАЇНИ',
                subLinks: []
            },
            {
                to: '/kontakt/dla-mediow',
                title: 'DLA MEDIÓW',
                subLinks: []
            }
        ]
    },
]