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
    LatestPosts,
    OurTeam,
    PropertiesSlider,
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
        getLatestPosts(10),
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
        blogTexts,
        counter,
        currentLocale,
        filter,
        hero,
        homeFilter,
        indexAd,
        latestPosts,
        localePathPrefix,
        localesEnum,
        occasionProperties,
        ourTeam,
        propertiesTexts,
        propertyImages,
        rentProperties,
        services,
        states,
        translations,
        property,
        propertyInfoTexts,
    } = data

    return <main>
        <Hero {...hero} />
        <Filter
            {...homeFilter}
            filter={filter}
            allCityDivision={allCityDivision}
            allDealTypes={allDealTypes}
            allPropertyTypes={allPropertyTypes}
        />
        <Services {...services} />
        <PropertiesSlider
            currentLocale={currentLocale}
            localePathPrefix={localePathPrefix}
            localesEnum={localesEnum}
            properties={occasionProperties}
            propertiesTexts={propertiesTexts}
            propertyImages={propertyImages}
            sliderName={'occasionSwiper'}
            translations={translations}
            property={property}
            propertyInfoTexts={propertyInfoTexts}
        />
        <States {...states} />
        <Counter {...counter} />
        <Ad {...indexAd} />
        <OurTeam {...ourTeam} />
        <LatestPosts
            {...blogTexts}
            latestPosts={latestPosts}
            localePathPrefix={data.localePathPrefix}
        />
    </main>
})

export default Index

const head = ({ resolveValue }) => {

    return useSeo(getData, resolveValue)
}

export { head }
