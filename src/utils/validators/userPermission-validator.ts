import { User } from 'src/domain/entities/user';

export class UserPermissionValidator {
  public static validate(loggedUser: User, accessType: string) {
    const userIsUndefined = loggedUser === undefined ? true : false;
    const userHasNotARole = loggedUser
      ? !loggedUser.role
        ? true
        : false
      : false;
    const userHasARoleAndNotAccess = loggedUser
      ? loggedUser.role
        ? !loggedUser.role.access
          ? true
          : false
        : false
      : false;
    const userHasARoleAndAccessButNotPermition = loggedUser
      ? loggedUser.role
        ? !loggedUser.role.access[accessType]
          ? true
          : false
        : false
      : false;

    if (
      userIsUndefined ||
      userHasNotARole ||
      userHasARoleAndNotAccess ||
      userHasARoleAndAccessButNotPermition
    ) {
      return false;
    }
    return true;
  }
}
