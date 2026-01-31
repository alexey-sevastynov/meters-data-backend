export const httpMethods = {
    get: "GET",
    post: "POST",
    put: "PUT",
    patch: "PATCH",
    delete: "DELETE",
} as const;

export type HttpMethod = (typeof httpMethods)[keyof typeof httpMethods];

export const auditHttpMethods = {
    post: httpMethods.post,
    put: httpMethods.put,
    patch: httpMethods.patch,
    delete: httpMethods.delete,
} as const;

export type AuditHttpMethod = (typeof auditHttpMethods)[keyof typeof auditHttpMethods];
