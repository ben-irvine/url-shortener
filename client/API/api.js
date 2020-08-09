import request from 'superagent'

export function ShortenUrl(url) {
  
    return request
        .post("/api/v1/urls")
        .send({
            url: url,
            user: localStorage.getItem("userId")
        })
        .then(res => {
            return res.body
        })
}
export function getMyUrls(creator) {
    console.log("get my urls :", creator)
    return request
        .get(`/api/v1/urls/${creator}`)
        .then(res => {
            return res.body.data
        })
}