import { produce } from "immer";

const createUserDataSlice = (set, get) => ({
    username : "",
    password: "",
    spotifyData: []
})

export default createUserDataSlice;