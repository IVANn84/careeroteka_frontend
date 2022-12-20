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
    
    fetchCurrentUser: flow(function * () {
        self.setIsLoading(true);
        
        const {errors, data} = yield UserApi.FetchCurrent();
        
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
            self.setError(errors.detail || 'Неизвестная ошибка');
        } else {
            self.setCurrentUser(data);
        }
        
        self.setIsAuth(!errors);
        self.setIsLoading(false);
    }),
});