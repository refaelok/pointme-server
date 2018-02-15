const httpHeaders = (req, res, next) => {
    if(process.env.NODE_ENV === 'dev'){
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
    }
    res.header('Access-Control-Allow-METHODS', 'GET,PUT,POST,DELETE,HEAD,OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, Origin, x-requested-with, Content-Type, Content-Range, Content-Disposition, Content-Description');
    next();
};

module.exports = httpHeaders;
