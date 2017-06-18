export function CAction1(clickk) {
    var isClick
    switch (clickk) {
        case 'CLICKED':
            isClick = 'CLICKED';
        case '!CLICKED':
            isClick = '!CLICKED';
        default:
            isClick = 'DEFAULT'
    }
    return {
        type: 'BUTTON1_CLICK',
        payload: isClick
    }
}