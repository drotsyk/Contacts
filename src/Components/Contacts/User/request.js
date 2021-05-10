export const request = (id) => {
    return fetch(`https://picsum.photos/id/${id}/info`)
    .then(res => {
        if(!res.ok){
            throw new Error(`${res.status} - ${res.statusText}`)
        }
        return res.json()
    })
}
