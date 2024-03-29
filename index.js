const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5000

const title = "\n\n\n\
_____                __      __\n\
|  __ \\              | |     | |\n\
| |__) |___  __ _  __| |_   _| |\n\
|  _  // _ \\/ _` |\/ _` | | | | |\n\
| | \\ \\  __/ (_| | (_| | |_| |_|\n\
|_|  \\_\\___|\\__,_|\\__,_|\\__, (_)\n\
                        __/ |  \n\
                       |___/   \n\n\
";

express()
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

console.log(title);