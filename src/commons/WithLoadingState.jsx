import React from "react";

function WithLoadingState(Component) {
    return function WithLoadingState({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />

        return (
            <p>Cargando pelìculas, espere un momento por favor</p>
        )
    }
}

export default WithLoadingState;