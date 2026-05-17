import CompoB from "./CompoB";

const CompoC = ({userName}) => {
    return(
        <div>
            <h2>This is Components C</h2>
            <CompoB userName = {userName}/>
        </div>
    )
}

export default CompoC;