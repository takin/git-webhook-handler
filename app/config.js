module.exports = {
    port: 8080,
    sshkeypath:"/Users/mtakin/.ssh/id_rsa.pub",
    logger: {
        level: 'info',
        format: 'json',
        filepath: {
            all: '/Users/mtakin/Desktop/webhook-logger.log',
            error: false,
            info: false
        }
    },
    actions:{
        prefetch:"echo fetching preparation...",
        postfetch:"echo done fetching..."
    },
    repository:[
        {
            url:"git@github.com:takin/hook-demo.git",
            localpath:"/Users/mtakin/Desktop/test",
            branch:"master",
        }
    ]
}