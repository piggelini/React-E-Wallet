import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async () => {
    return fetch(" https://randomuser.me/api/").then((res) =>
        res.json()
    );
});


const cardListSlice = createSlice({


    name: "cardList",
    initialState: {
        cards: [{
            number: 1234123412341234,
            name: "",
            valid: "11/25",
            vendor: "Miso",
            ccv: 432,
            active: true,
            id: 1
        },
        {
            number: 4334123412341555,
            name: "",
            valid: "11/25",
            vendor: "Yuzu",
            ccv: 432,
            active: false,
            id: 2
        },
        {
            number: 4334123412341234,
            name: "",
            valid: "11/25",
            vendor: "Yuzu",
            ccv: 432,
            active: false,
            id: 3
        }
        ],
        latestId: 3,
    },
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload);
            state.latestId += 1;
        },
        deleteCard: (state, action) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload);
        },
        activateCard: (state, action) => {
            state.cards = state.cards.map((card) => {
                if (card.active === true) {
                    card.active = false;
                } else if (card.id === action.payload && card.active === false) {
                    card.active = true;
                }
                return card;

            });
            console.log(state.cards);
        },

    },
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            const [{ name: { first, last } }] = action.payload.results;
            state.cards[0].name = first.toUpperCase() + ' ' + last.toUpperCase();
            state.status = "Found data!";
        },
        [getUser.pending]: (state, action) => {
            state.status = "Loading data...";
        },
        [getUser.rejected]: (state, action) => {
            state.status = "Failed to get data";
        },
    },

});

export const { addCard, deleteCard, activateCard } = cardListSlice.actions;
export default cardListSlice.reducer;
