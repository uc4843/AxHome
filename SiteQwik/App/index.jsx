import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import {
    getGlobalization,
    getLocalePathPrefix,
} from 'Globalization'
import { getAllCityDivisions } from 'Geo'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import { getLatestPosts } from 'Blog'
import {
    getAllDealTypes,
    getAllPropertyTypes,
    getLatestDealType,
    getLatestOccasion,
} from 'Properties'
import {
    Ad,
    Counter,
    Filter,
    Hero,
    OurTeam,
    Services,
    States,
} from 'Index'

const getData = routeLoader$(async props => {

    const [
        latestPosts,
        page,
        saleProperties,
        rentProperties,
        occasionProperties,
        globalization,
        allCityDivision,
        allDealTypes,
        allPropertyTypes,
    ] = await useAsync([
        getLatestPosts(6),
        getPage('home', props),
        getLatestDealType('sale'),
        getLatestDealType('rent'),
        getLatestOccasion(),
        getGlobalization(props),
        getAllCityDivisions(props),
        getAllDealTypes(props),
        getAllPropertyTypes(props),
    ])

    return {
        ...globalization,
        ...latestPosts,
        ...page,
        allCityDivision,
        allDealTypes,
        allPropertyTypes,
        occasionProperties,
        rentProperties,
        saleProperties,
    }
})

const Index = component$(() => {

    const data = getData().value
    data.localePathPrefix = getLocalePathPrefix()

    const {
        allCityDivision,
        allDealTypes,
        allPropertyTypes,
        counter,
        currentLocale,
        hero,
        homeFilter,
        indexAd,
        latestPosts,
        localePathPrefix,
        localesEnum,
        ourTeam,
        rentProperties,
        saleProperties,
        services,
        states,
        translations,
    } = data

    return <main>
        <Hero {...hero} />
        <Filter
            class="bg-custom-color4"
            {...homeFilter}
        />
        <Services {...services} />
        <Counter {...counter} />
        <Ad {...indexAd} />
        <OurTeam {...ourTeam} />
        <States {...states} />
    </main>
})

export default Index

const head = ({ resolveValue }) => {

    return useSeo(getData, resolveValue)
}

export { head }
