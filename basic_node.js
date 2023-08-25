const socket = require('socket')
const threading = require('threading')

class simpleNode:
    constructor(host,port){
        self.host = host;
        self.port = port;
    }
    
    start(){
        const server = net.createServer((client)=>{
            this.handleClient(client);
        });
        server.listen(this.host, this.port, () => {
            console.log(`Server started at ${this.host} ${this.port}`);
        });

        handleClient(client){
            client.on('data',(data) => {
                console.log(`data passed to ${data.log}`);
                data.end();
            });
        }
    }

    const node = SimpleNode('127.0.0.1', 8080);
    node.start();
