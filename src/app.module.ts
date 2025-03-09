import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.model';
import { Role } from './roles/roles.model';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';


@Module({
  imports: [UsersModule, RolesModule, AuthModule,
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
      entities: [User, Role],
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
  controllers: [CategoriesController],
  providers: [BooksService],
})
export class AppModule {}
