
load('/Library/Ruby/Gems/1.8/gems/jspec-2.11.13/lib/jspec.js')
load('src/js/counter.js')

JSpec
.exec('unit/js/spec.counter.js')
.run({ formatter: JSpec.formatters.Terminal, failuresOnly: true })
.report()