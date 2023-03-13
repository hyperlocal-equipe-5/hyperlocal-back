import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Patch,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpRequest } from 'src/domain/http/httpRequest';
import { CreateRoleController } from 'src/presentation/controllers/role/createRole-controller';
import { DeleteRoleController } from 'src/presentation/controllers/role/deleteRole-controller';
import { GetAllRolesController } from 'src/presentation/controllers/role/getAllRoles-controller';
import { GetOneRoleController } from 'src/presentation/controllers/role/getOneRole-controller';
import { UpdateRoleController } from 'src/presentation/controllers/role/updateRole-controller';

@ApiTags('/admin/role')
@Controller('/admin/role')
export class RoleControllerAdmin {
  constructor(
    private readonly createRoleController: CreateRoleController,
    private readonly deleteRoleController: DeleteRoleController,
    private readonly UpdateRoleController: UpdateRoleController,
    private readonly getAllRolesController: GetAllRolesController,
    private readonly getOneRoleController: GetOneRoleController,
  ) {}

  @ApiOperation({
    summary: ''
  })
  @Post('/create-role')
  async create(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.createRoleController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Delete('/delete-role')
  async delete(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.deleteRoleController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Patch('/update-role')
  async update(@Body() body) {
    const httpRequest: HttpRequest = { body };
    return await this.UpdateRoleController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Get('/get-one-role')
  async getOne(@Query() query) {
    const { id, restaurant } = query;
    const httpRequest: HttpRequest = { id, restaurant };
    return await this.getOneRoleController.execute(httpRequest);
  }

  @ApiOperation({
    summary: ''
  })
  @Get('/get-all-roles')
  async getAll(@Query() query) {
    const { restaurant } = query;
    const httpRequest: HttpRequest = { restaurant };
    return await this.getAllRolesController.execute(httpRequest);
  }
}
