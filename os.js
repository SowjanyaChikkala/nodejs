var os = require('os'); 
console.log("CPU architecture: " + os.arch()) 
console.log("Free memory: " + os.freemem()); 
console.log("Total memory: " + os.totalmem());  
console.log(os.networkInterfaces());  
console.log('OS default directory for temp files : ' + os.tmpdir ()); 
console.log("endianess:"+os.endianness())
var c=os.EOL
console.log("EOL:"+c)
console.log("constants:")
console.log(os.constants)
console.log("cpus:")
console.log(os.cpus())
console.log("priority of os:"+os.getPriority(0))
console.log(os.constants.priority)
console.log("current home directory"+os.homedir())
console.log("host:"+os.hostname())
console.log(os.loadavg())
console.log("platform:"+os.platform())
console.log("release:"+os.release())
console.log("setpriority:"+os.setPriority(0,-20))
console.log("type:"+os.type())
console.log("uptime:"+os.uptime())
console.log("version:"+os.version)
console.log(os.constants.signals)
console.log(os.constants.errno)
