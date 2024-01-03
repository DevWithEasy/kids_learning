const adminRouter = require('./AdminRouters')
const banglaRouter = require('./banglaRouters')

const routers = [
    {
        path : '/api/admin',
        handler : adminRouter
    },
    {
        path : '/api/bangla',
        handler : banglaRouter
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