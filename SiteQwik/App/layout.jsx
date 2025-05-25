import {
    component$,
    Slot,
    useContext,
} from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import {
    AppContext,
    GoogleTagManagerNoScript,
    Message,
    useAsync,
} from "Base"
import {
    applyGranularity,
    getGlobalization
} from "Globalization"
import { getApplicationSettings } from "Settings"
import { useLayoutSeo } from "Seo"
import { getLayout } from "Contents"
import { getMenu } from "Navigation"
import {
    Footer,
    Header,
} from "Layout"

const getData = routeLoader$(async props => {
    const [
        layout,
        menuData,
        globalization,
        applicationSettings,
    ] = await useAsync([
        getLayout("main", props),
        getMenu(props),
        getGlobalization(props),
        getApplicationSettings(props),
    ])
    return {
        ...globalization,
        ...layout,
        ...menuData,
        ...applicationSettings,
    }
})

const Layout = component$(() => {

    const data = getData().value
    const app = useContext(AppContext)
    const {
        currentLocale,
        settings,
        translations,
    } = data

    return <>
        <GoogleTagManagerNoScript {...settings} />
        <div
            class="scroll-smooth scroll-pb-7 h-auto"
            dir={currentLocale.isRtl ? "rtl" : "ltr"}
        >
            <Message
                {...app}
                text={applyGranularity(translations, app.message)}
            />
            <Header {...data} />
            <Slot />
            <Footer {...data} />
        </div>
    </>
})

export default Layout

const head = ({ resolveValue }) => {
    return useLayoutSeo(getData, resolveValue)
}

export { head }
