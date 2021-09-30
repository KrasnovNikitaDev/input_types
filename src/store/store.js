import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const dafultState = {
    data: null,
    stringType: null
}

const reducer = (state = dafultState, action) => {
    switch(action.type){
        case 'ACTION-NAME': 
            return {...state, 
                data: action.value, 
                stringType: 'Имя Фамилия'
            };
        case 'ACTION-PHONE-NUMBER':
            console.log();
            return {...state, 
                data: [...action.value]
                .filter(elem => (
                    elem !== ' ' && elem !== '-' && elem !== '(' && elem !== ')')
                ).join(''),
                stringType: 'Номер телефона'
            };
        case 'ACTION-MAIL': 
            return {...state, 
                data: action.value, 
                stringType: 'Почта'
            };
        case 'ACTION-IP': 
            return {...state, 
                data: action.value, 
                stringType: 'IP адрес'
            };
        case 'ACTION-USER-NICKMANE': 
            return {...state, 
                data: action.value, 
                stringType: 'Имя пользователя'
            };
        case 'ACTION-TYPE-ERROR': 
            return {...state, 
                data: '',
                stringType: 'Ошибка, тип не опознан.'
            };
        case 'CLEAR-STORE': 
            return {
                data: null,
                stringType: null
            };
        default: 
            return state;
    }
}

export const store = createStore(
    reducer, 
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(saga)


