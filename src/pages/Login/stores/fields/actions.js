import {getParent} from 'mobx-state-tree';

export default self => ({
    setEmail(value) {
        self.email = value;
        getParent(self).setError(null);
    },
    
    setPassword(value) {
        self.password = value;
        getParent(self).setError(null);
    },
});