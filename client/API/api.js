import request from 'superagent'

export function ShortenUrl(url) {
  
    return request
        .post("/api/v1/urls")
        .send({
            data: url
        })
        .then(res => {
            return res.body
        })
}