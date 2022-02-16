// set server-side cache 
const setCache = (req, res, next) => {
    const cacheTime = 60 * 5 // cache stored for 5 mins
    // Note that no-cache does not mean "don't cache". 
    // no-cache allows caches to store a response, 
    // but requires them to revalidate it before reuse.
    if (req.method == 'GET') res.set('Cache-control', `no-cache, max-age=${cacheTime}`) 
    else res.set('Cache-control', 'no-store')
    next()
}

module.exports = setCache