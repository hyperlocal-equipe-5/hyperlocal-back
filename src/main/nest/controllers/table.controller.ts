import { Controller, Query, Get } from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllTablesController } from 'src/presentation/controllers/table/getAllTables-controller';
import { GetOneTableController } from 'src/presentation/controllers/table/getOneTable-controller';

@Controller('/table')
export class TableController {
  constructor(
    private readonly getAllTablesController: GetAllTablesController,
    private readonly getOneTableController: GetOneTableController,
  ) {}

  @Get('/get-one-table')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneTableController.execute(httpRequest);
  }

  @Get('/get-all-tables')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllTablesController.execute(httpRequest);
  }
}
