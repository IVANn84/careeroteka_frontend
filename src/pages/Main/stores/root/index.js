import {types} from 'mobx-state-tree';

import areasStore, {AreasStore} from '../areas';
import fieldsStore, {FieldsStore} from '../fields';
import professionsStore, {ProfessionsStore} from '../professions';
import actions from './actions';

export const RootStore = types
    .model('Root', {
        areasStore: types.maybe(AreasStore),
        fieldsStore: types.maybe(FieldsStore),
        professionsStore: types.maybe(ProfessionsStore),
    })
    .actions(actions);

export default RootStore.create({
    areasStore,
    fieldsStore,
    professionsStore,
});