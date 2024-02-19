export function checkPermission(permission: string | string[], permissions: string[] | null): boolean {
    if (typeof permission === "string") {
      return !!permissions?.includes(permission);
    } else {
      return permission.some(perm => permissions?.includes(perm));
    }
  }
  