const User = require('../model/user')

exports.addUser=(req,res,next)=>{
    const name = req.body.name 
    const email = req.body.email
    const age = req.body.age
    if(req.body){
        User.create({
            name : name ,
            email : email ,
            age :  age 
        }).then(result=>{

            if(result.isNewRecord){
            res.status(200).send('Success')
            }else{
                res.status(202).send('User Already Exists')
            }
        }).catch(err=>{
            res.status(400).send(err)
            console.log(err)
        })
    }
}

exports.getUser = (req,res,next)=>{
    User.findAll().then(result=>{
        res.send(result)
    }).
    catch(err=>console.log(err))
}

exports.getEdit =(req,res,next)=>{
    let id = req.params.id
    const name = req.body.name 
    const email = req.body.email
    const age = req.body.age
    User.findByPk(id).then((result)=>{
        result.name = name,
        result.email = email ,
        result.age = age
        result.save()
    }).
    then((result)=>{
        res.status(200).send('Data Up-Date SuccessFull!!')
    }).catch(err=>console.log(err))
}

exports.getDelete=(req,res,next)=>{
    let id = req.params.id
    User.findByPk(id).then(result=>{
        result.destroy()
    }).then((result)=>{
        console.log('User Data Deleted')
        res.status(208).send('User Data Deleted')
    }).catch(err=>console.log(err))
}