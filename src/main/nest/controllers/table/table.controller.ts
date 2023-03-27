import { Controller, Query, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { GetAllTablesController } from 'src/presentation/controllers/table/getAllTables-controller';
import { GetOneTableController } from 'src/presentation/controllers/table/getOneTable-controller';
import { GetAllTables } from '../../dtos/table/getAllTable-dto';
import { GetOneTable } from '../../dtos/table/getOneTable-dto';

@ApiTags('/table')
@Controller('/table')
export class TableController {
  constructor(
    private readonly getAllTablesController: GetAllTablesController,
    private readonly getOneTableController: GetOneTableController,
  ) {}

  @ApiOperation({
    summary: 'Route to get one table from a restaurant.',
  })
  @Get(':id')
  async getOne(@Param('id') id: string, @Query() query: GetOneTable) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneTableController.execute(httpRequest);
  }

  @ApiOperation({
    summary: 'Route to get all tables from a restaurant.',
  })
  @Get()
  async getAll(@Query() query: GetAllTables) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllTablesController.execute(httpRequest);
  }
}
