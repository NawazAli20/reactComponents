function Address(props){
    return(
        <div>
            <h3>{props.addressInfo.street}</h3>
            <p>{props.addressInfo.city}, {props.addressInfo.zip}</p>
        </div>
    )
}

export default Address;