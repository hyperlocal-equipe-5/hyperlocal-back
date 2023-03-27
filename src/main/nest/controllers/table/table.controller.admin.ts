import { Controller, Post, Body, Delete, Query, Patch } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateTableController } from 'src/presentation/controllers/table/createTable-controller';
import { DeleteTableController } from 'src/presentation/controllers/table/deleteTable-controller';
import { UpdateTableController } from 'src/presentation/controllers/table/updateTable-controller';
import { GetOneRestaurant } from '../../dtos/getOneRestaurant-dto';
import { CreateTable } from '../../dtos/table/createTable-dto';
import { UpdateTable } from '../../dtos/table/updateTable-dto';

@ApiTags('/admin/table')
@Controller('/admin/table')
export class TableControllerAdmin {
  constructor(
    private readonly createTableController: CreateTableController,
    private readonly deleteTableController: DeleteTableController,
    private readonly UpdateTableController: UpdateTableController,
  ) {}

  @ApiOperation({
    summary:
      'Route that an authorized account can create a new table for a restaurant.',
  })
  @ApiBearerAuth()
  @Post()
  async create(@Body() body: CreateTable) {
    const httpRequest: HttpRequest = { body };
    return await this.createTableController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can delete table from a restaurant.',
  })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string, @Query() query: GetOneRestaurant) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteTableController.execute(httpRequest);
  }

  @ApiOperation({
    summary:
      'Route that an authorized account can update a table from a restaurant.',
  })
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTable) {
    const httpRequest: HttpRequest = { body: { ...body, id } };
    return await this.UpdateTableController.execute(httpRequest);
  }
}
