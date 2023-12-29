import {
    component$,
    Slot,
} from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'

const getData = routeLoader$(async props => {

})

const Layout = component$(() => {

    const data = getData().value

    return <>
        <Slot />
    </>
})

export default Layout
