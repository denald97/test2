import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.model';
import { Role, UsersRoles } from './roles/roles.model';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/categories.model';
import { Book } from './books/books.model';


@Module({
  imports: [UsersModule, RolesModule, AuthModule, CategoriesModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'library',
      entities: [User, Role, UsersRoles, Category, Book],
      synchronize: true,
      logging: true,
    }),
    JwtModule.registerAsync({
      global: true,
      useFactory: async () => ({
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '15m' },
      }),
    }),
    BooksModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
