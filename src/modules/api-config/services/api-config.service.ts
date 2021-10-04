import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ApiConfig, JwtConfig } from '../api-config.types';

@Injectable()
export class ApiConfigService {
  constructor(protected readonly configService: ConfigService) {}

  get apiConfig(): ApiConfig {
    return {
      timezone: this.configService.get<string>('API_TIMEZONE'),
      formatDatetime: this.configService.get<string>('API_FORMAT_DATE_TIME'),
      port: this.configService.get<number>('API_PORT')
    };
  }

  get authConfig(): JwtConfig {
    return {
      jwtSecretKey: this.configService.get<string>('JWT_SECRET'),
    };
  }

  get mongoConnection(): MongooseModuleOptions {
    const host = this.configService.get('MONGO_HOST');
    const port = this.configService.get('MONGO_PORT');
    const portMongo = port > 0 ? ':' + port: '';
    const user = this.configService.get<string>('MONGO_USER');
    const password = this.configService.get<string>('MONGO_PASSWORD');
    const dbName = this.configService.get('MONGO_DATABASE');
    const mongoUser = user?.length ? `${user}:${password}@` : '';
    const uri = `mongodb+srv://${mongoUser}${host}${portMongo}`;
    return {
      uri,
      dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
}
