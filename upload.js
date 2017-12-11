const router = require('koa-router')()

const multer=require('koa-multer');
//配置  
var storage = multer.diskStorage({  
  //文件保存路径  
  destination: function (req, file, cb) {  
    cb(null, 'public/uploads/')  
  },  
  //修改文件名称  
  filename: function (req, file, cb) {  
    var fileFormat = (file.originalname).split(".");  
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
  }  
}) 

//加载配置  
var upload = multer({ storage: storage }); 

router.prefix('/users')

router.get('/', async (ctx, next)=>{
  await ctx.render('form');
  return next();
})

router.post('/', upload.single('file'),async (ctx,next)=>{
  // var files=this.request.body.files; 
  const filename=ctx.req.file.filename;
  const body=ctx.req.body;
  await console.log(filename,body);
})


router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
