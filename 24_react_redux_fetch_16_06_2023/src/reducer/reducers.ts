import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// 3.5 Описываем интерфейс кастомных сущностей: IUser, IPost, IComment
interface IUser {
    id: number;
    name: string
}

interface IPost {
    id: number;
    title: string
}

interface IComment {
    id: number;
    body: string
}

// 3.4 Описываем интерфейс глобального состояния
export interface DataState {
    users: IUser[];
    posts: IPost[];
    comments: IComment[];
    currentPagePosts: number;
    currentPageComments: number;
    postsPerPage: number;
    commentsPerPage: number;
}

// 3.3 Описываю стартовое значение глобального состояния
const initialState: DataState = {
    users: [],
    posts: [],
    comments: [],
    commentsPerPage: 10,
    postsPerPage: 10,
    currentPagePosts: 1,
    currentPageComments: 1
}

// 3.1 Выделяем отдельно логику части(slice) приложения с определёнными инструментами для
//     работы с этой частью приложения
const dataSlice = createSlice({
    name: 'data',
    initialState, // Если ключ и значение совпадают, можно написать только 1 раз
    reducers: {
        // описываем Action прямо здесь:
        // типизируем (PayloadAction = экшен с нагрузкой, нагрузка типа number)
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        },
        setPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        },
        setComments: (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        },
        setCurrentPagePosts(state, action: PayloadAction<number>) {
            state.currentPagePosts = action.payload;
        },
        setCurrentPageComments(state, action: PayloadAction<number>) {
            state.currentPageComments = action.payload;
        }
    }
})

// 3.2 Экспортирую описанные в slice инструменты
export const {setCurrentPagePosts, setCurrentPageComments, setUsers, setComments, setPosts} = dataSlice.actions
export default dataSlice.reducer;