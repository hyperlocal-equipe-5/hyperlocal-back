import { Role } from 'src/domain/entities/role';
import { UpdateRoleAdminRequestBody } from 'src/domain/http/routes/admin/roles/update-role/updateRole-request';

export interface UpdateRoleUseCaseInterface {
  execute(
    updateRoleAdminRequestBody: UpdateRoleAdminRequestBody,
  ): Promise<Role>;
}
