import { NestFactory } from '@nestjs/core';
import { ApiConfigService } from './modules/api-config/services';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());

  const apiConfigService = app.get(ApiConfigService);

  await app.listen(apiConfigService.apiConfig.port);
}
bootstrap();
