import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (request, reply) => {
    return 'pong\n'
})

server.get('/', async (request, reply) => {
    return reply.send(`Hello World! ${process.env.PORT}`);
})

server.get('/health', async (request, reply) => {
    return reply.send(`Hello World ! ${process.env.PORT}`);
});

try {
    // Read the port from environment variables, fallback to 3000
    const port = Number(process.env.PORT) || 3000;

    await server.listen({
        port: port,
        host: '0.0.0.0' // <-- THIS IS THE CRITICAL LINE FOR COOLIFY
    });

    console.log(`Server listening on port ${port}`);
} catch (err) {
    console.error(err);
    process.exit(1);
}
// server.listen(PORT, '0.0.0.0', (err, address) => {
//     if (err) {
//         console.error(err)
//         process.exit(1)
//     }
//     console.log(`Server listening at ${address}`)
// })