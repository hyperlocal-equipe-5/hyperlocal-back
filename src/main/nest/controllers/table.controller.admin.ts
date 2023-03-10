import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
} from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateTableController } from 'src/presentation/controllers/table/createTable-controller';
import { DeleteTableController } from 'src/presentation/controllers/table/deleteTable-controller';
import { GetAllTablesController } from 'src/presentation/controllers/table/getAllTables-controller';
import { GetOneTableController } from 'src/presentation/controllers/table/getOneTable-controller';
import { UpdateTableController } from 'src/presentation/controllers/table/updateTable-controller';

@Controller('/admin/table')
export class TableControllerAdmin {
  constructor(
    private readonly createTableController: CreateTableController,
    private readonly deleteTableController: DeleteTableController,
    private readonly updateTableController: UpdateTableController,
    private readonly getAllTablesController: GetAllTablesController,
    private readonly getOneTableController: GetOneTableController,
  ) {}

  @Post('/create-table')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createTableController.execute(httpRequest);
  }

  @Delete('/delete-table')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteTableController.execute(httpRequest);
  }

  @Patch('/update-table')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.updateTableController.execute(httpRequest);
  }

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
