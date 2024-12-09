const Comment = require('../Modals/comment');


exports.addComment = async(req, res)=>{
    try{
       let{video, message} = req.body;
       const comment = new Comment({user:req.user._id,video,message});
        await comment.save();

        res.status(201).json({
            message:"Success",
            comment
        });
    }
    catch(error){
       res.status(500).json({error:'Server error'});
       console.log(error)
    }
}



exports.getCommentByVideoId = async(req,res)=>{
    try{
        let {video} = req.params;
        const comments = await Comment.find({video: video}).populate('user','channelName profilePic userName createAt' );
       console.log(comments)
        res.status(201).json({
            message:"success",
            comments
        });

    }catch(error){
        res.status(500).json({error:'server error'})
        console.log(error)
    }
}
