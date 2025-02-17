import DashboardIcon from "@mui/icons-material/Dashboard"
import { AccountsMenu } from "Accounts"
import { AttributesMenu } from "Attributes"
import { BlogMenu } from "Blog"
import { ContactsMenu } from "Contacts"
import { ContentsMenu } from "Contents"
import { FormsMenu } from "Forms"
import { GalleriesMenu } from "Galleries"
import { GeoMenu } from "Geo"
import { GlobalizationMenu } from "Globalization"
import { ModulesMenu } from "Modules"
import { NavigationMenu } from "Navigation"
import { NewTaxonomyMenu } from "NewTaxonomy"
import { PropertiesMenu } from "Properties"
import { QuestionsMenu } from "Questions"
import { SeoMenu } from "Seo"
import { SettingsMenu } from "Settings"
import { TenantsMenu } from "Tenants"

const menuItems = [
    {
        title: "InfraDashboard",
        icon: DashboardIcon,
        path: "/"
    },
    ...PropertiesMenu,
    ...BlogMenu,
    ...QuestionsMenu,
    ...ContentsMenu,
    ...NavigationMenu,
    ...SeoMenu,
    ...GalleriesMenu,
    ...FormsMenu,
    ...NewTaxonomyMenu,
    ...AttributesMenu,
    ...ModulesMenu,
    ...GeoMenu,
    ...GlobalizationMenu,
    ...SettingsMenu,
    ...TenantsMenu,
    ...ContactsMenu,
    ...AccountsMenu,
]

export default menuItems
