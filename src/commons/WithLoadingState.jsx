import React from "react";
//import Loader from "react-loader.spinner";

function WithLoadingState(Component){
    return function WithLoadingState({isLoading, ...props}){
        if(!isLoading)return <Component {...props}/>

        return(

            <div>
                <p>Espere, cargando información sobre las películas</p>
                
            </div>
        );
    }

}

export default WithLoadingState;