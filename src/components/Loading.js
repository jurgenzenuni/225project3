const Loading = () => {
    return <div class="container d-flex justify-content-center"> 
        <div class="mx-auto">
        <img class= "loading" src={require("../images/loading5.png")} /> <br></br>
         <b>Retrieving information Please wait...</b>
        </div>
        {/* <img class= "loading" src={require("../images/loading5.png")} height={500} width={500} /> <br></br>
         <b>Loading...</b> */}
         </div>
}

export default Loading;