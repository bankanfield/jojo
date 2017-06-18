export default function (state = '!CLICK', action) {
    switch (action.type) {
        case "BUTTON1_CLICK":
            return action.payload;
    }

    return state;
}