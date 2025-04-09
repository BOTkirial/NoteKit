/**
 * Checks if an API Route is valid
 * It must start with "/"
 * It must end with "/"
 * Ex: 
 * api/users/  ----> not ok
 * /api/users/ ----> ok
 */
const isValidApiRoute = (route: string):boolean => {
    return route.startsWith("/") && route.endsWith("/");
}

export default isValidApiRoute;