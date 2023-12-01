import { writable } from "svelte/store";

export const boardId = writable()
export const boardData = writable()
export const boardList = writable()
export const isEditBarVisible = writable()
export const pageIsLoading = writable(false)


