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
    
    login: flow(function * () {
        const {
            email,
            password,
        } = self.fieldsStore;
        
        if (!email || !password) {
            return;
        }
    
        self.setIsLoading(true);
        
        const {errors} = yield UserApi.Login({
            email,
            password,
        });
        
        self.setIsLoading(false);
        
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
            self.setError(errors.detail || 'Неизвестная ошибка');
        } else {
            const unauthorizedFromUrl = sessionStorage.getItem('unauthorizedFromUrl');
            
            if (unauthorizedFromUrl) {
                sessionStorage.removeItem('unauthorizedFromUrl');
                window.location.href = unauthorizedFromUrl;
            } else {
                window.location.href = '/';
            }
        }
    }),
});