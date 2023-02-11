export const SET_SEARCH_FILTER = 'Search Filter';

export const postSearchFilter = (search) => ({
    type: SET_SEARCH_FILTER,
    search
});