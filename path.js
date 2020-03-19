const path=require('path')
console.log(path.basename("/d:/nodefiles/fs.js",".js"))
console.log(process.env.PATH.split(path.delimiter));
console.log(path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  }))
  console.log(path.parse('/home/user/dir/file.txt'));
 console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
 console.log(path.resolve( 'static_files/png/', '../gif/image.gif'));
 console.log(path.resolve( '/sstatic_files/png/', '../gif/image.gif'));
 console.log(path.toNamespacedPath('\\nodefiles\static_files\gif\image.gif'));
 console.log('foo\\bar\\baz'.split(path.sep))
 console.log(path.win32)
