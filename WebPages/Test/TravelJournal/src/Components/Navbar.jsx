import logo from "/logo.svg"
export default function(){
    return(
        <header>
            <img src={logo} alt="nav-logo" className="nav-logo" />
            <span className="nav-text">my travel journal.</span>
        </header>
    )
}