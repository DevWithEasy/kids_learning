const adminRouter = require('./AdminRouters')
const banglaRouter = require('./banglaRouters')
const englisRouter = require('./englishRouters')
const mathRouter = require('./mathRouters')
const arabicRouter = require('./arabicRouters')

const routers = [
    {
        path : '/api/admin',
        handler : adminRouter
    },
    {
        path : '/api/arabic',
        handler : arabicRouter
    },
    {
        path : '/api/bangla',
        handler : banglaRouter
    },
    {
        path : '/api/english',
        handler : englisRouter
    },
    {
        path : '/api/math',
        handler : mathRouter
    },
    // {
    //     path : '/',
    //     handler : (req,res) =>{
    //         res.json({
    //             status : 200,
    //             success : true,
    //             message : 'Server successfully running...'
    //         })
    //     }
    // }
]

const applyRouter = (app) =>{
    routers.map(r=>{
        if(r.path === '/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}

module.exports = applyRouter