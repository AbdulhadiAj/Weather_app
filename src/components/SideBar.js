
const SideBar = ({otherCities}) => {
    return (
        <aside className="aside">
            <h3 className="h3">Weather in Famous cities</h3>
            <ul>
                <a href="#" onClick={otherCities}>
                    <li>Paris</li>
                </a>
                <a href="#" onClick={otherCities}>
                    <li>London</li>
                </a>
                <a href="#" onClick={otherCities}>
                    <li>Beirut</li>
                </a>
                <a href="#" onClick={otherCities}>
                    <li>Damascus</li>
                </a>
                <a href="#" onClick={otherCities}>
                    <li>Berlein</li>
                </a>
                <a href="#" onClick={otherCities}>
                    <li>Dubai</li>
                </a>
                <a href="#" onClick={otherCities}>
                    <li>Cairo</li>
                </a>
                <a href="#" onClick={otherCities}>
                    <li>Mombey</li>
                </a>
                <a href="#" onClick={otherCities}>
                    <li>New York</li>
                </a>
                <a href="#" onClick={otherCities}>
                    <li>Roma</li>
                </a>
            </ul>
        </aside>
    )
}

export default SideBar
