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
    
    setIsAuth(value) {
        self.isAuth = value;
    },
    
    setCurrentUser(value) {
        self.currentUser = value;
    },
    
    logout: flow(function * (after) {
        self.setIsLoading(true);
        
        const {errors} = yield UserApi.Logout();
        
        if (errors) {
            self.setError(errors.detail || 'Неизвестная ошибка');
        } else {
            self.setCurrentUser(null);
            self.setIsAuth(false);
            after();
        }
        
        self.setIsLoading(false);
    }),
    
    fetchCurrentUser: flow(function * () {
        self.setIsLoading(true);
        
        const {errors, data} = yield UserApi.FetchCurrent();
        
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
            self.setError(errors.detail || 'Неизвестная ошибка');
        } else {
            self.setCurrentUser(data);
        }
        
        self.setIsAuth(!!data);
        self.setIsLoading(false);
        
        return !!errors;
    }),
});