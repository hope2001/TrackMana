const screenshot = require('screenshot-desktop')
let fs = require('fs')


  screenshot.listDisplays().then(display =>{
    console.log(display);
  })

 function Shooter(params) {
    screenshot({format: 'png'}).then((img) => {
        console.log(img);
        fs.writeFileSync(params+'captureDeskk.png', img)
      }).catch((err) => {
        console.log('something bad happen');
      })
    
  }