import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import { useAsync } from "Base"
import { getGlobalization } from "Globalization"
import { getAllCityDivisions } from "Geo"
import { useSeo } from "Seo"
import { getPage } from "Contents"
import { getLatestPosts } from "Blog"
import {
    getAllDealTypes,
    getAllPropertyTypes,
    getLatestDealType,
    getLatestOccasion,
} from "Properties"
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
} from "Index"

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
        getLatestPosts(10, props),
        getPage("home", props),
        getLatestDealType("sale"),
        getLatestDealType("rent"),
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
        property,
        propertyImages,
        propertyInfoTexts,
        rentProperties,
        services,
        shapes,
        states,
        translations,
    } = data

    return <main>
        <Hero {...hero} />
        <Filter
            {...homeFilter}
            allCityDivision={allCityDivision}
            allDealTypes={allDealTypes}
            allPropertyTypes={allPropertyTypes}
            filter={filter}
            localePathPrefix={localePathPrefix}
        />
        <Services {...services} />
        <PropertiesSlider
            {...shapes}
            currentLocale={currentLocale}
            localePathPrefix={localePathPrefix}
            localesEnum={localesEnum}
            properties={occasionProperties}
            propertiesTexts={propertiesTexts}
            property={property}
            propertyImages={propertyImages}
            propertyInfoTexts={propertyInfoTexts}
            sliderName="occasionSwiper"
            translations={translations}
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
