const DefaultState = {
    // Блок профессий
    searchProfession: null,
    areaId: null,
    areaName: 'Все направления',
    areas: {
        isLoading: false,
        valueList: [],
    },
    professions: {
        isLoading: false,
        valueList: [],
        nextPage: null,
    },
};

export default DefaultState;