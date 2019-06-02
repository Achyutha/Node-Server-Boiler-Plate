const cluster = require('cluster');
const os = require('os');
const numCpus = os.cpus().length;
const app = require('./server');

if(cluster.isMaster) {
    for(let i=0; i<numCpus; i++) {
        cluster.fork();
    }
} else {
    app();
}
