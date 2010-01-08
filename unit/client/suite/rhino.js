
load('unit/client/lib/jspec.js')
load('app/public/counter.js')

JSpec
.exec('unit/client/spec/counter.js')
.run({ reporter: JSpec.reporters.Terminal, failuresOnly: false })
.report()