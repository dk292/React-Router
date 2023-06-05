import { NavLink, RelativeRoutingType } from "react-router-dom"

interface Prop {
    text: string,
    end?: boolean,
    route?: string,
    relative?: RelativeRoutingType
}

const NavigationLink = ({text, end, route,relative}: Prop) => {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return (
        <NavLink relative={relative} style={({isActive}) => isActive ? activeStyle : {}} to={route!} end={end}>{ text }</NavLink>
    )
}

export default NavigationLink