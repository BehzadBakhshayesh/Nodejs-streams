const fs = require('fs');

const server = require('http').createServer()

// res.write("11111111")
// res.write("222222222222")
// res.write("3333333333333")
// res.write("44444444444")
// res.write("55555555555")
// res.end() 

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