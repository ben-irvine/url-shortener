import request from 'superagent'

export function ShortenUrl(url) {
    console.log("data looks like", url)
    return request
        .post("/api/v1/urls")
        .send({
            data: url
        })
        .then(res => {
            return res.body
        })
}