export default ()=>{
    return(
        <form action="#">
            <input type="text" className="prompt" placeholder="e.g. oregano" aria-label="Add ingredient"/>
            <button type="submit" className="prompt-submit" onMouseOver={()=>{console.log("hey")}}>Add ingredient</button>
        </form>
    )
}