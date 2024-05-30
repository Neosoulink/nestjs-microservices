import { Module } from '@nestjs/common';

import { TracingModule } from '@app/tracing';
import { AlarmsClassifierServiceController } from './alarms-classifier-service.controller';
import { AlarmsClassifierServiceService } from './alarms-classifier-service.service';

@Module({
  imports: [TracingModule], // 👈
  controllers: [AlarmsClassifierServiceController],
  providers: [AlarmsClassifierServiceService],
})
export class AlarmsClassifierServiceModule {}
