process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});
process.on('exit', function(code) {
  setTimeout(function() {
    console.log('This will not run');
  }, 0);
  console.log('I am in exit:', code);
});

process.on("beforeExit",(c)=>{setTimeout((c)=>{console.log("heloooo")
process.exit(c)},2000)
})
console.log('This message is displayed first.');
setTimeout(()=>{console.log("I am second")},2000)
