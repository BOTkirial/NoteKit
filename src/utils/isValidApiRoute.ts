/**
 * Checks if an API Route is valid
 * It must start with "/"
 * It must not end with "/"
 * Ex:
 * api/users/  ----> not ok
 * /api/users/ ----> not ok
 * /api/users  ----> ok
 */
const isValidApiRoute = (route: string):boolean => {
  if (route.startsWith("/api"))
    return false;

  return route.startsWith("/") && !route.endsWith("/");
}

export default isValidApiRoute;
