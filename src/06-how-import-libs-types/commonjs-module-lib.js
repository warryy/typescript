function CommonJSModuleLib(opt) {
    console.log(opt)
}

CommonJSModuleLib.version = '0.0.0'

CommonJSModuleLib.doSomething = function() {
    console.log('commonjs module lib do something')
}

module.exports = CommonJSModuleLib