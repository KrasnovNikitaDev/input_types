
export function handleInputValue(array, dispatch){
    let russiaChar = chekussinChar(array);
    let nameEn = chekName(array, 65, 90, 97, 122);
    let nameRus = chekName(array, 1040, 1071, 1072, 1103);
    let IP = chekIP(array);
    let mail = chekMail(array);


    if(nameEn || nameRus) {
        if(array.filter(elem => elem === 32).length > 1){ 
            dispatch({type:'ACTION-SET-TYPE-ERROR'});
        }
        else dispatch({type:'ACTION-SET-NAME', value: array});
    }
    else if( array[0] === 43 ){
        let phonNumber = chekPhoneNumber(array);

        if(phonNumber) dispatch({type:'ACTION-SET-PHONE-NUMBER', value: array});
        else dispatch({type:'ACTION-SET-TYPE-ERROR'});
    }
    else if( array.length >= 4 && !array.includes(32) && !array.includes(46) ) {
        dispatch({type:'ACTION-SET-NICKNAME', value: array});
    }
    else if( IP ) dispatch({type:'ACTION-SET-IP', value: array});
    else if(mail && !russiaChar) dispatch({type:'ACTION-SET-MAIL', value: array});

    else dispatch({type:'ACTION-SET-TYPE-ERROR'});
}


/* ======================= Проверка на кириллицу =======================*/

function chekussinChar(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i]>= 1040 && arr[i] <= 1103) return true;
    }
    return false;
}

/* ======================= Проверка на номер телефона =======================*/

function chekPhoneNumber(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 32 || arr[i] === 40 || arr[i] === 41 || arr[i] === 43 || arr[i] === 45) continue;
        else if(arr[i] >= 48 && arr[i] <= 57) continue;
        else return false;
    }
    if (arr.filter(elem => elem === 43).length > 1) return false;
    else if (arr.filter(elem => elem === 40).length > 1) return false;
    else if (arr.filter(elem => elem === 41).length > 1) return false;

    return true;
}

/* ======================= Проверка на ФИО =======================*/

function chekName(arr, minUpperCase, MaxUpperCase, minLowerCase, maxLowerCase){
    if( !( arr[0] >= minUpperCase && arr[0] <= MaxUpperCase )) return false;

    for (let i = 1; i < arr.length; i++){
        if (arr[i]>= minUpperCase && arr[i] <= MaxUpperCase) continue;
        if (arr[i]>= minLowerCase && arr[i] <= maxLowerCase) continue;
        else if (arr[i] === 32) continue;
        else return false;
    }
    return true;
}

/* ======================= Проверка на IP =======================*/
function chekIP(arr){
    if( !(arr[0] >= 48 && arr[0] <= 57) ) return false;

    for( let i = 0; i < arr.length; i++){
        if( arr[i] === 46) continue;
        else if( arr[i] >= 48 && arr[i] <= 57 ) continue;
        else return false;
    }
    if ( !(arr.filter(i => i === 46).length === 3) ) return false;
    if ( arr.length < 10 && arr.length > 15 ) return false;

    return true;
}

/* ======================= Проверка на почту =======================*/
function chekMail(arr){
    if( arr[0] === 64 ) return false;

    for( let i = 0; i < arr.length; i++){
        if( arr[i] === 64 || arr[i] === 46 || arr[i] !== 32) continue;
        else return false;
    }

    return true;
}