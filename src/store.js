import { writable } from 'svelte/store';

export const loadedPosts = writable(new Map());
