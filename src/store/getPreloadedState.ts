import { PartialRootState } from './configureStore';

import { initialMapState, MapState } from '../store/Map/reducer';

import { initialTaskState, TaskState } from '../store/Task/reducer';

const getPreloadedMapState = (): MapState => {
    return {
        ...initialMapState,
    };
};

const getPreloadedTaskState = (): TaskState => ({
    ...initialTaskState,
});

const getPreloadedState = (): PartialRootState => {
    return {
        Map: getPreloadedMapState(),
        Task: getPreloadedTaskState(),
    };
};

export default getPreloadedState;
