const Express = require("express");
const app = Express();
const port = 4000;
const cookieParser = require('cookie-parser');
const cors = require('cors');



app.use(cors({
    origin:'http://localhost:3000',
    credentials:true

}))

app.use(Express.json());
app.use(cookieParser());

require('./Connection/conn');

 const AuthRoutes = require('./Routes/user');
 const VideoRoutes = require('./Routes/video');
const CommentRoutes = require('./Routes/comment');

app.use('/auth',AuthRoutes);
 app.use('/api',VideoRoutes);
app.use('/commentApi',CommentRoutes);


app.listen(port,()=>{
    console.log("project is running on on port 4000");
} )