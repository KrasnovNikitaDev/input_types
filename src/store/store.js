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
                stringType: 'Name'
            };
        case 'ACTION-PHONE-NUMBER':
            console.log();
            return {...state, 
                data: [...action.value]
                .filter(elem => (
                    elem !== ' ' && elem !== '-' && elem !== '(' && elem !== ')')
                ).join(''),
                stringType: 'Phone number'
            };
        case 'ACTION-MAIL': 
            return {...state, 
                data: action.value, 
                stringType: 'Email'
            };
        case 'ACTION-IP': 
            return {...state, 
                data: action.value, 
                stringType: 'IP address'
            };
        case 'ACTION-USER-NICKMANE': 
            return {...state, 
                data: action.value, 
                stringType: 'Nickname'
            };
        case 'ACTION-TYPE-ERROR': 
            return {...state, 
                data: '',
                stringType: 'Error, type undefined'
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


