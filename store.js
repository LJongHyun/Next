import create from 'zustand';

const useStore = create((set) => ({
  expression: '',
  result: '',
  history: [],

  // Set the expression
  setResult: (expression) => set((state) => ({ expression })),

  // Save result to history
  addToHistory: (result) => set((state) => ({ history: [...state.history, result].slice(-3) })),
}));

export { useStore };