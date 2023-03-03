import Definition from "../pages/autism/Definition";
import Occurance from "../pages/autism/Occurance";
import Symptoms from "../pages/autism/Symptoms";

export const autismRoutes = [
    {
        path: '/definicja',
        title: 'DEFINICJA AUTYZMU',
        component: <Definition />
    },
    {
        path: '/objawy',
        title: 'OBJAWY AUTYZMU',
        component: <Symptoms />
    },
    {
        path: '/występowanie',
        title: 'WYSTĘPOWANIE AUTYZMU',
        component: <Occurance />
    }
]