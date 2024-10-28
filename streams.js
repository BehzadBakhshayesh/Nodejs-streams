const fs = require('fs');

const server = require('http').createServer()


server.on('request', (req, res) => {
    //SOLUTION 1

    // fs.readFile("./test.txt", (error, data) => {
    //     if (error) {
    //         console.log(error);
    //     }
    //     res.end(data)
    // })

    //SOLUTION 2

    // const readable = fs.createReadStream("./test.txt")
    // readable.on("data", (chunk) => {
    //     res.write(chunk)
    // })
    // readable.on("end", () => {
    //     res.end()
    // })
    // readable.on("error", (error) => {
    //     res.status(500)
    //     res.end("file not found")
    // })


    //SOLUTION 3
    // readableSource.pipe(writableDes)

    const readable = fs.createReadStream("./test.txt")
    readable.pipe(res)



})

server.listen("8000", "127.0.0.1", () => {
    console.log("listening on 8000");

})