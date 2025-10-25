class Software {
    constructor(name) {
        this.name = name
    }

    run() {
        console.log(`${this.name} is running`)
    }
}
class Plugin {
    constructor(description) {
        this.description = description
    }

    activate() {
        console.log(`Plugin "${this.description}" is activated`)
    }
}
class Browser extends Software {
    constructor(name) {
        super(name)
        this.plugins = []
    }

    addPlugin(plugin) {
        this.plugins.push(plugin)
        console.log(`Plugin "${plugin.description}" installed in ${this.name}`)
    }

    runPlugins() {
        console.log(`${this.name} is running all plugins:`)
        this.plugins.forEach(p => p.activate())
    }
}
const s0 = new Software('Generic App')
s0.run()

const p1 = new Plugin('AdBlocker')
const p2 = new Plugin('Dark Mode')

const b1 = new Browser('Chrome')
b1.addPlugin(p1)
b1.addPlugin(p2)
b1.run()
b1.runPlugins()

Software.prototype.update = function() {
    console.log(`${this.name} is updating...`)
}

b1.update()
