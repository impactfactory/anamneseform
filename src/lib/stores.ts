import { writable } from 'svelte/store';

export const answers = writable({
	answer1: '',
	answer2: 2
});
