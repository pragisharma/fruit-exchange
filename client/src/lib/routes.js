import Home from './Home.svelte'
import Register from './Register.svelte'
import Day from './Day.svelte'
import Slot from './Slot.svelte'
import Week from './Week.svelte'
import ShowModal from './ShowModal.svelte'
import LoginPage from './LoginPage.svelte'
import Error from './Error.svelte'
import AdminWeek from './AdminWeek.svelte'
import NewFeed from './NewFeed.svelte'
import About from './About.svelte'
import ContactUs from './ContactUs.svelte'
import Add from './Add.svelte'
import { wrap } from 'svelte-spa-router/wrap'
import { first_name } from './stores.js'
import Buy from './Buy.svelte'

export const routes = {
    "/": Home,
    "/register": Register,
    "/about": About,
    "/contactus": ContactUs,
    "/today": Day,
    "/slot": Slot,
    "/week": wrap({
        component: Week,
        userData: {first_name: first_name}
    }),
    "/modaltest": ShowModal,
    "/signin": LoginPage,
    "/error": Error,
    "/admin": AdminWeek,
    "/fruits": NewFeed,
    "/add": Add,
    "/buy": Buy
}