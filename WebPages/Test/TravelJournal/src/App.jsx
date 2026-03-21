import Navbar from "./Components/Navbar.jsx"
import Entry from "./Components/Entry.jsx"
import data from "./data.js"

export default function(){

    var entries = data.map((entry)=><Entry 
                    key={entry.id}
                    img={{
                        src: entry.img.src,
                        alt: entry.img.alt
                    }}
                    title={entry.title}
                    country={entry.country}
                    googleMapsLink={entry.googleMapsLink}
                    dates={entry.dates}
                    desc={entry.text}
                />)
    return(
        <>
            <Navbar />
            <article className="journal">
                {entries}
            </article>
        </>
    )
}