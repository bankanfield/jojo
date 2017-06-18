export default function (state = '!CLICK', action) {
    switch (action.type) {
        case "BUTTON1_CLICK":
            switch (action.payload) {
                case 'CLICK':
                    return '!CLICK';
                case '!CLICK':
                    return 'CLICK';
                default:
                    return 'DEFAULT'
            }
    }

    return state;
}