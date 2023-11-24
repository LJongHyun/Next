import {create} from 'zustand';

const useStore = create((set) => ({
  expression: '',
  result: '',
  history: [],
  setExpression: (value) => set({ expression: value }),
  setResult: (value) => set({ result: value }),
  addToHistory: (value) => set((state) => ({ history: [...state.history, value].slice(-3) })),
}));

export { useStore };