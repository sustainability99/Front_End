import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISortingItem {
    name: string;
    sortProperty: string;
    order: string;
}

interface IFilterState {
    categoryId: number;
    categoryNames: string[];
    categoryName: string;
    sortingItem: ISortingItem;
    currentPage: number;
}

const initialState: IFilterState = {
    categoryId: 0,

    categoryNames: [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые'
    ],

    categoryName: 'Все',

    sortingItem: {
        name: 'по-популярности',
        sortProperty: 'rating',
        order: 'desc'
    },

    currentPage: 1
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        onClickCategory(state = initialState, action: PayloadAction<number>) {
            state.categoryId = action.payload;
            state.categoryName = state.categoryNames[state.categoryId];
        },
        onClickSort(state = initialState, action: PayloadAction<ISortingItem>) {
            state.sortingItem = action.payload;
        },
        setCurrentPage(state = initialState, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        }
    }
});

export const { onClickCategory, onClickSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;