import DashboardIcon from "@mui/icons-material/Dashboard"
import { PropertiesMenu } from "Properties"

const menuItems = [
    {
        title: "InfraDashboard",
        icon: DashboardIcon,
        path: "/"
    },
    ...PropertiesMenu
]

export default menuItems
