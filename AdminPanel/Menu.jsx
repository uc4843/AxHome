import Menus from "Menus"

const menuItems = [
    {
        title: "InfraDashboard",
        icon: "Dashboard",
        path: "/"
    },
    ...Menus.Properties,
    ...Menus.Blog,
    ...Menus.Questions,
    ...Menus.Contents,
    ...Menus.Navigation,
    ...Menus.Seo,
    ...Menus.Galleries,
    ...Menus.Forms,
    ...Menus.NewTaxonomy,
    ...Menus.Attributes,
    ...Menus.Modules,
    ...Menus.Geo,
    ...Menus.Globalization,
    ...Menus.Settings,
    ...Menus.Tenants,
    ...Menus.Contacts,
    ...Menus.Accounts,
]

export default menuItems
