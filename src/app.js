import Address from "./components/address";


function Greetings(props){
    return(
        <>
            <p>Hello, {props.name}</p>
        </>
    )
}



function App(){
    const name = "Nawaz"
    const addressInfo ={street:"1087 Woodruff Rd", zip:67545, city:"Washington D.C."};
    return (
        <>
            <h1>Welcome to React!</h1>
            <p>React is fun</p>
            <Greetings name="Nawaz"/>
            <Address addressInfo={addressInfo}/>
        </>
    )
}

export default App; 