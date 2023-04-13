import {applySnapshot, flow, getSnapshot} from 'mobx-state-tree';

import UserApi from 'Api/user';

let initialState = {};

export default self => ({
    afterCreate() {
        initialState = getSnapshot(self);
    },
    
    reset() {
        applySnapshot(self, initialState);
    },
    
    setIsLoading(value) {
        self.isLoading = value;
    },
    
    setError(value) {
        self.error = value;
    },
    
    signup: flow(function * () {
        const {
            email,
            password,
            confirmPassword,
        } = self.fieldsStore;
        
        if (!email || !password || !confirmPassword) {
            return;
        }
    
        self.setIsLoading(true);
        
        const {errors} = yield UserApi.Register({
            email,
            password,
            confirmPassword,
        });
        
        self.setIsLoading(false);
        
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
            self.setError(errors.detail || 'Неизвестная ошибка');
        } else {

            // eslint-disable-next-line no-console
            console.log('signup');
            // const unauthorizedFromUrl = sessionStorage.getItem('unauthorizedFromUrl');
            
            // if (unauthorizedFromUrl) {
            //     sessionStorage.removeItem('unauthorizedFromUrl');
            //     window.location.href = unauthorizedFromUrl;
            // } else {
            //     window.location.href = '/';
            // }
        }
    }),
});