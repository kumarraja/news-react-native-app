import {handleFetchErrors} from '../helpers/handleFetchErrors';
const NEWSAPI_KEY = '2739f6f2-681f-44f1-a131-d4faf6a2fe55';
const NEWSAPI_URL = 'http://eventregistry.org/api/v1'

export class News {
    static handleErrors(response) {
        console.log('fetch handleErrors', { response });
        if (!response.ok) { throw new Error(response.status); }
        if (response.status !== 200) { throw new Error({ error: 'something went wrong!', data: response.json(), status: response.status }); }
        return response;
    }

    static getNews = reqData => {

        let URL = `${NEWSAPI_URL}/article/getArticles`;
        let reqBody = {
            'action': 'getArticles',
            'keyword': 'Barack Obama',
            'articlesPage': 1,
            'articlesCount': 10,
            'articlesSortBy': 'date',
            'articlesSortByAsc': false,
            'articlesArticleBodyLen': -1,
            'resultType': 'articles',
            'dataType': [
                'news',
                'pr',
            ],
            'lang': 'eng',
            'apiKey': NEWSAPI_KEY,
            'forceMaxDataTimeWindow': 31
        };
        return fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        })
            // .then(this.handleErrors)
            .then(handleFetchErrors)
            .then(res => res.json())
            .then(data => ({ data: data.articles.results }))
            .catch(error => ({ error }));
    };
}
