// set server-side cache 
// TO DO : check cache header
const setCache = (req, res, next) => {
    // aggressive cache for React index.html
    const cacheTime = 31536000 // cache stored for 1 years
    if (req.method === 'GET') {
        res.set('Cache-control', `max-age=${cacheTime}`) 
    } else res.set('Cache-control', 'no-cache')
    next()
}

module.exports = setCache