import { Controller, Post, Body, Delete, Query, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateTableController } from 'src/presentation/controllers/table/createTable-controller';
import { DeleteTableController } from 'src/presentation/controllers/table/deleteTable-controller';

import { UpdateTableController } from 'src/presentation/controllers/table/updateTable-controller';
import { CreateTable } from '../dtos/table/createTable-dto';
import { GetOneTable } from '../dtos/table/getOneTable-dto';
import { UpdateTable } from '../dtos/table/updateTable-dto';

@ApiTags('/admin/table')
@Controller('/admin/table')
export class TableControllerAdmin {
  constructor(
    private readonly createTableController: CreateTableController,
    private readonly deleteTableController: DeleteTableController,
    private readonly UpdateTableController: UpdateTableController,
  ) {}


  @ApiOperation({
    summary: 'Route that an authorized account can create a new table for a restaurant.'
  })
  @ApiBearerAuth()
  @Post('/create-table')
  async create(@Body() body: CreateTable) {
    const httpRequest: HttpRequest = { body };
    return await this.createTableController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can delete table from a restaurant.'
  })
  @ApiBearerAuth()
  @Delete('/delete-table')
  async delete(@Query() query: GetOneTable) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteTableController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route that an authorized account can update a table from a restaurant.'
  })
  @ApiBearerAuth()
  @Patch('/update-table')
  async update(@Body() body:UpdateTable) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateTableController.execute(httpRequest);
  }
}
