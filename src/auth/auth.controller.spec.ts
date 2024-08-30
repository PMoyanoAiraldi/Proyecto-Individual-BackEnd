// import { Test, TestingModule } from "@nestjs/testing";
// import { User } from "../users/users.entity";
// import { UsersService } from "../users/users.service";
// import { AuthController } from "./auth.controller";
// import { hash } from "bcrypt";

// describe('AuthController', () =>{
//     let controller: AuthController;

//     beforeEach(async ()  => {
//         const hashedPassword = await hash('12345', 10)
//         const mockUserService: Partial<UsersService> = {
//             findOneByEmail: (email: string) => {
//                 if(email === 'harry@gmail.com'){
//                     return Promise.resolve({
//                         email: 'harry@gmail.com',
//                         password: hashedPassword,
//                         administrator: 'user',
//                     }as User)
//                 }else{
//                     return Promise.resolve(undefined)
//                 }
//             },
//             createUser: (entityLike?: Partial <User>): Promise<User> => 
//                 Promise.resolve({
//                     ...entityLike,
//                     administrator: 'user',
//                     id: '1234fs-1234fs-1234fs-1234fs'
//                 } as User)
//         };

//         const module: TestingModule = await Test.createTestingModule({
//             controllers: [AuthController]
//         }).compile();

//         controller = module.get<AuthController>(AuthController)
//     });

//     it('should be defined', () => {
//         expect(controller).toBeDefined();
//     });

//     it('signUp() create a new user with encrypted password', async () =>{
//         const user = await service.signUp(mockUser)
//         console.log('MockUser', user)
//         expect(user).toHaveProperty('id');
//         expect(user).toHaveProperty('administrator', 'user');
//         expect(user).toHaveProperty('password')
//     })

// })