import { create } from 'zustand'

const useStore = create((set) => ({
  bears: JSON.parse(localStorage.getItem('wishlist')) || [],
  increasePopulation: (action) => {
    set((state) => {
      // Find the index of the item with the given _id
      const index = state.bears.findIndex((i) => i._id === action._id);

      let updatedBears;
      if (index !== -1) {
        // If the item exists, double the state (or handle it as required)
        updatedBears = [...state.bears, ...state.bears];
      } else {
        // If the item does not exist, filter it out (or handle as required)
        updatedBears = state.bears.filter((i) => i.id !== action.id);
      }

      // Update localStorage
      localStorage.setItem('wishlist', JSON.stringify(updatedBears));

      return { bears: updatedBears };
    });
  }
}));

export default useStore;
