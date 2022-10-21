import React, {useEffect} from 'react';

import Preloader from 'Component/Preloader';

export default function Login({
    isLoading,
    error,
    
    dispatcher: {
        login,
    },
    
    classes,
}) {
    useEffect(() => {
        login();
    }, []);
    
    return (
        <div className={classes.container}>
            <Preloader isDisplayed={isLoading}/>
            {error && (
                <p className={classes.error}>
                    {error}
                </p>
            )}
        </div>
    );
}