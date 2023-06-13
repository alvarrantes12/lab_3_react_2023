import React from "react";

function WithLoadingState(Component){
    return function WithloadingState({isLoading, ...props}){
        if(!isLoading) return <Component {...props} />

        return (
            <p>Espere, cargando info</p>
        )
    }
}

export default WithLoadingState;