import DashboardIcon from "@mui/icons-material/Dashboard"
import { AccountsMenu } from "Accounts"
import { BlogMenu } from "Blog"
import { ConfigurationMenu } from "Configuration"
import { ContactsMenu } from "Contacts"
import { ContentsMenu } from "Contents"
import { FormsMenu } from "Forms"
import { GeoMenu } from "Geo"
import { GlobalizationMenu } from "Globalization"
import { ModulesMenu } from "Modules"
import { NavigationMenu } from "Navigation"
import { PropertiesMenu } from "Properties"
import { QuestionsMenu } from "Questions"
import { SeoMenu } from "Seo"

const menuItems = [
    {
        title: "InfraDashboard",
        icon: DashboardIcon,
        path: "/"
    },
    ...PropertiesMenu,
    ...ContactsMenu,
    ...BlogMenu,
    ...QuestionsMenu,
    ...ContentsMenu,
    ...NavigationMenu,
    ...SeoMenu,
    ...FormsMenu,
    ...ModulesMenu,
    ...GeoMenu,
    ...ConfigurationMenu,
    ...GlobalizationMenu,
    ...AccountsMenu,
]

export default menuItems
