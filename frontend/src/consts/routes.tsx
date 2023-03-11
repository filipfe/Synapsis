import { about1, about2 } from "../assets/about/about";
import { asd } from "../assets/autism/autism";
import { autism } from "../assets/pageframes/pageframes";
import CooperatingOrganizations from "../pages/about/agreement/CooperatingOrganizations";
import FoundingOrganizations from "../pages/about/agreement/FoundingOrganizations";
import PolishAutismAgreement from "../pages/about/agreement/PolishAutismAgreement";
import AutismEurope from "../pages/about/AutismEurope";
import MissionAndGoals from "../pages/about/foundation/MissionAndGoals";
import OrganizationalStructure from "../pages/about/foundation/OrganizationalStructure";
import Reports from "../pages/about/foundation/Reports";
import Statute from "../pages/about/foundation/Statute";
import PartnerShips from "../pages/about/PartnerShips";
import RODO from "../pages/about/RODO";
import Definition from "../pages/autism/Definition";
import Downloads from "../pages/autism/Downloads";
import Occurance from "../pages/autism/Occurance";
import PeopleWithASD from "../pages/autism/PeopleWithASD";
import PracticalInformation from "../pages/autism/PracticalInformation";
import Symptoms from "../pages/autism/Symptoms";
import { RouteType } from "../types/routes";

export const autismRoutes: RouteType[] = [
  {
    path: "/definicja",
    title: "DEFINICJA AUTYZMU",
    component: <Definition />,
    image: autism,
  },
  {
    path: "/objawy",
    title: "OBJAWY AUTYZMU",
    component: <Symptoms />,
    image: autism,
  },
  {
    path: "/wystepowanie",
    title: "WYSTĘPOWANIE AUTYZMU",
    component: <Occurance />,
    image: autism,
  },
  {
    path: "/informacje-praktyczne",
    title: "INFORMACJE PRAKTYCZNE",
    component: <PracticalInformation />,
    image: autism,
  },
  {
    path: "/sytuacja-osob-z-asd",
    title: "SYTUACJA OSÓB Z ASD",
    component: <PeopleWithASD />,
    image: asd,
  },
  {
    path: "/materialy-do-pobrania",
    title: "MATERIAŁY DO POBRANIA",
    component: <Downloads />,
    image: about1,
  },
];

export const aboutUsRoutes: RouteType[] = [
  {
    path: "/misja-i-cele",
    component: <MissionAndGoals />,
    title: "MISJA I CELE",
    image: about1,
  },
  {
    path: "/struktura-organizacyjna",
    component: <OrganizationalStructure />,
    title: "STRUKTURA ORGANIZACYJNA",
    image: about1,
  },
  {
    path: "/sprawozdania",
    component: <Reports />,
    title: "SPRAWOZDANIA",
    image: about1,
  },
  {
    path: "/statut",
    component: <Statute />,
    title: "STATUT",
    image: about1,
  },
  {
    path: "/porozumienie-autyzm-polska",
    component: <PolishAutismAgreement />,
    title: "POROZUMIENIE AUTYZM POLSKA",
    image: about1,
    routes: [
      {
        path: "/organizacje-zalozycielskie",
        component: <FoundingOrganizations />,
        image: about2,
        title: "ORGANIZACJE ZAŁOŻYCIELSKIE",
      },
      {
        path: "/organizacje-wspolpracujace",
        component: <CooperatingOrganizations />,
        image: about1,
        title: "ORGANIZACJE WSPÓŁPRACUJĄCE",
      },
    ],
  },
  {
    path: "/autism-europe",
    component: <AutismEurope />,
    image: about1,
    title: "AUTISM EUROPE",
  },
  {
    path: "/partnerstwa",
    component: <PartnerShips />,
    image: about1,
    title: "PARTNERSTWA",
  },
  {
    path: "/rodo",
    component: <RODO />,
    image: about1,
    title: "RODO",
  },
];
