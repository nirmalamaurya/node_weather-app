const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname , '../public')
const viewsPath = path.join(__dirname , '../templets/views')
const partialPath = path.join(__dirname , '../templets/partials')

console.log(viewsPath)

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index', {
       title:'First Web Page' ,
       name:'Nirmala'
    })
})

app.get('/about', (req, res)=>{
res.render('about',{
    title:'About Page',
    name:'Nirmala'
})
})

app.get('/weather', (req, res)=>{
    res.render('weather',{
       title :'Weather will display here....',
       name:'Nirmala'
    });
})

app.get('*',(req, res)=>{
    res.render('pageNotFound',{
        title :'404 Error',
       name:'Nirmala',
        errorMessage:' Page not found!!!!'
        
    })
})

app.listen(port, ()=>{
    console.log('app is running on port ' + port);
})