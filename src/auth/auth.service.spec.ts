import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service"
import { UsersService } from "../users/users.service";
import { User } from "../users/users.entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import { SignUpAuthDto } from "./dto/signup-auth.dto";


describe('AuthService', () =>{
    let service: AuthService;

    beforeEach(async ()  => {
        
        const mockUserService: Partial<UsersService> = {
            findOneByEmail: () => Promise.resolve(undefined),
            createUser: (entityLike?: Partial <User>) => 
                Promise.resolve({
                    ...entityLike,
                    administrator: 'user',
                    id: '1234fs-1234fs-1234fs-1234fs'
                } as User)
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: getRepositoryToken(User),
                    useValue:{},
                },
                {
                    provide: JwtService,
                    useValue:{},
                },
                {
                    provide: UsersService,
                    useValue: mockUserService,
                }
            ]
        }).compile();

        service = module.get<AuthService>(AuthService)
    });

    const mockUser = new SignUpAuthDto({
        name:'Harry Potter',
        email: 'harry@gmail.com',
        password: 'Harry*1234',
        passwordConfirm: 'Harry*1234',
        address:'Calle falsa 123',
        city:'asddf',
        country: 'hbkajb',
        phone: 542158
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('signUp() create a new user with encrypted password', async () =>{
        const user = await service.signUp(mockUser)
        console.log('MockUser', user)
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('administrator', 'user');
        expect(user).toHaveProperty('password')
    })

})