import request from 'superagent'

export function ShortenUrl(url) {
    return request
        .post(url)
}