import {types} from 'mobx-state-tree';

import entityStore, {EntityStore} from '../entity';
import fieldsStore, {FieldsStore} from '../fields';
import directionsStore, {DirectionsStore} from '../directions';
import gradesStore, {GradesStore} from '../grades';
import actions from './actions';

export const RootStore = types
    .model('Root', {
        entityStore: types.maybe(EntityStore),
        fieldsStore: types.maybe(FieldsStore),
        directionsStore: types.maybe(DirectionsStore),
        gradesStore: types.maybe(GradesStore),
    })
    .actions(actions);

export default RootStore.create({
    entityStore,
    fieldsStore,
    directionsStore,
    gradesStore,
});