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