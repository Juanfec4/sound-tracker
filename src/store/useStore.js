import {create}  from 'zustand';
import createUserDataSlice from './slices/userDataSlice';

const useStore = create((set,get) => ({
   ...createUserDataSlice(set,get)
}))

export default useStore;