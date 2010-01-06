
load('test/unit/js/lib/jspec.js')
load('app/public/counter.js')

JSpec
.exec('test/unit/js/spec/counter.js')
.run({ reporter: JSpec.reporters.Terminal, failuresOnly: true })
.report()