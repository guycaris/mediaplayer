export default function ClipButtons ({onButtonClick}){
    
    return(
        <>
            <div>
                <button onClick={()=>onButtonClick(1)}>1</button>
                <button onClick={()=>onButtonClick(2)}>2</button>
                <button onClick={()=>onButtonClick(3)}>3</button>
                <button onClick={()=>onButtonClick(4)}>4</button>
                <button onClick={()=>onButtonClick(5)}>5</button>
            </div>
        </>
    );
}