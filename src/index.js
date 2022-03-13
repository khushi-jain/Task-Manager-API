
const express= require('express')
require('./db/mongoose')
const Task=require('./models/task')
const User=require('./models/user')

const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const app=express() 
const port=process.env.PORT

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Site is currently down. Check back soon!')
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port,()=>{
    console.log('server is up on port '+port)
})



// const main=async()=>{
//   const task=await Task.findById('622c604f7c729e156083f5b1')
//   await task.populate('owner').execPopulate()
//   console.log(task.owner)

// const user=await User.findById('622c72ba7f56ad0780e9e8e3')
// await user.populate('tasks').execPopulate()

// console.log(user.tasks)
// } 
// main()
// const jwt=require('jsonwebtoken')

// const myFunction = async()=>{
//  const token = jwt.sign({ _id:'abc123' },'thisismynewcourseintroduction')
//  console.log(token)


//  const data=jwt.verify(token,'thisismynewcourseintroduction',{expiresIn:'7 days '})
// console.log(data)
// }

// andrew-> irehfjrfilrjf -> andrew   encryption is reversiblr
//mypass-> jrfnjkndmemk    hashing algos

// myFunction()