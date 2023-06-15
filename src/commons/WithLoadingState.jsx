import React from 'react';

function WithLoadingState(Component) {
    return function WithLoadingState({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;

        return (
            <p>Estamos cargando la informacion, please wait </p>
        );
    }
}

export default WithLoadingState;