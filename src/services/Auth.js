import { handleFetchErrors } from '../helpers/handleFetchErrors';
const FAKE_JSON_API_KEY = 'h0nkCI-M_TRAxvCUo41XWQ';
const FAKE_JSON_API_URL = 'https://app.fakejson.com/q';


export class Auth {

    static login = reqData => {
        const reqBody = {
            token: FAKE_JSON_API_KEY,
            data: {
                id: 'personNickname',
                name: 'nameFirst',
                email: 'internetEmail',
                phone: 'phoneHome',
                _repeat: 1,
            },
        };
        return fetch(FAKE_JSON_API_URL, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        })
            .then(handleFetchErrors)
            .then(res => res.json())
            .then(data => ({ data }))
            .catch(err => ({ error: err }));
    }

    static signUp = reqData => {
        const reqBody = {
            token: FAKE_JSON_API_KEY,
            data: {
                id: 'personNickname',
                name: 'nameFirst',
                email: 'internetEmail',
                phone: 'phoneHome',
                _repeat: 1,
            },
        };
        return fetch(FAKE_JSON_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        }).
            then(handleFetchErrors)
            .then(res => res.json())
            .then(data => ({ data }))
            .catch(error => ({ error }));
    }
}
