export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_DONE = 'SHOW_DONE';
export const SHOW_OPEN = 'SHOW_OPEN';

//SHOW_ALL
export const showAll = () => ({
  type: SHOW_ALL,
  filter: 'all',
})
//SHOW_DONE
export const showDone = () => ({
  type: SHOW_ALL,
  filter: 'done',
})

//SHOW_OPEN
export const showOpen = () => ({
  type: SHOW_ALL,
  filter: 'open',
})