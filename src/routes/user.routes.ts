import { FastifyInstance, fastify } from 'fastify';
import { UserUseCase } from '../usercases/user.usecase';
import { UserCreate } from '../interfaces/user.inferface';


export async function userRoutes(fastify: FastifyInstance){
    const userUseCase = new UserUseCase();
    fastify.post<{ Body: UserCreate }>("/", async(req, reply) =>{
        const {name, email} = req.body 
        try{
            const data = await userUseCase.create({
                name,
                email
            })
            return reply.send(data);

        }catch(error){
            reply.send(error)
        }
    })
    fastify.get('/', (req, reply) =>{
        reply.send({hello: 'world'})
    })
}