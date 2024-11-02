import { Controller, Get } from '@nestjs/common';

@Controller('records')
export class RecordsController {
  @Get()
  findAll(): string {
    return 'This is the list of records found in the database';
  }
}
