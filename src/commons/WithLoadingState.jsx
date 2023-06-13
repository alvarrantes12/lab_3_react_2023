import React from 'react';

function WithLoadingState(Component) {
    return function WithLoadingState({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;

        return (
            <p>Espere, la información se está cargando...</p>
        );
    }
}

export default WithLoadingState;
