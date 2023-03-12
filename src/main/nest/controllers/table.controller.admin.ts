import { Controller, Post, Body, Delete, Query, Patch } from '@nestjs/common';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateTableController } from 'src/presentation/controllers/table/createTable-controller';
import { DeleteTableController } from 'src/presentation/controllers/table/deleteTable-controller';

import { UpdateTableController } from 'src/presentation/controllers/table/updateTable-controller';

@Controller('/admin/table')
export class TableControllerAdmin {
  constructor(
    private readonly createTableController: CreateTableController,
    private readonly deleteTableController: DeleteTableController,
    private readonly UpdateTableController: UpdateTableController,
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
    return await this.UpdateTableController.execute(httpRequest);
  }
}
