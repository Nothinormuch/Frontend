import marker from "/marker-icon.svg"
export default function(props){
    return(
        <div className="entry">
            <img src={props.img.src} alt={props.img.alt} className="entry-image" />
            <div className="entry-text">
                <div className="entry-location">
                    <div className="country">
                        <img src={marker} alt="marker-icon" className="marker-icon"/>
                        <span className="country-name">{props.country}</span>
                    </div>
                    <a href={props.googleMapsLink} target="_blank" className="location-link">View on Google Maps</a>
                </div>
                <h2 className="entry-name">{props.title}</h2>
                <span className="entry-date">{props.dates}</span>
                <p className="entry-desc">{props.desc}</p>
            </div>
        </div>
    )
}