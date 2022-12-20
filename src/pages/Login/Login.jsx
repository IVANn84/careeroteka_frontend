import React, {useEffect} from 'react';

import {useStoreLoginPage} from 'Page/Login/stores';

export default function Login({
    classes,
}) {
    const {
        // isLoading,
        error,
        login,
        reset,
    } = useStoreLoginPage();
    
    useEffect(() => {
        login();
        
        return reset;
    }, []);
    
    return (
        <div className={classes.container}>
            {error && (
                <p className={classes.error}>
                    {error}
                </p>
            )}
        </div>
    );
}