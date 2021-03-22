
export const handleFetchErrors = (response) => {
    console.log('fetch handleErrors', { response });
    if (!response.ok) { throw new Error(response.status); }
    if (response.status !== 200) { throw new Error({ error: 'something went wrong!', data: response.json(), status: response.status }); }
    return response;
}