
setInterval(() => {
    const fs = require('fs')
    fetch('https://fliptheisland.com/data.json')
  .then(response => response.json())
  .then(data => {
    const content = data
    fs.writeFile('./data.json', content, err => {
      if (err) {
        console.error(err)
        return
      }
  })
  const fs = require('fs')

const content = 
fs.writeFile('./data.json', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
})
}, 2000)
