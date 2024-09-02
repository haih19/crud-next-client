/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Get list of users
     * @param search Search term
     * @param pageSize Number of items per page
     * @param pageNumb Page number
     * @returns any List of users
     * @throws ApiError
     */
    public static c457726701591D1183B53Aa71Fc13441(
        search?: string,
        pageSize?: number,
        pageNumb?: number,
    ): CancelablePromise<{
        success?: boolean;
        data?: Array<User>;
        message?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users',
            query: {
                'search': search,
                'page_size': pageSize,
                'page_numb': pageNumb,
            },
        });
    }
    /**
     * Create a new user
     * @param requestBody
     * @returns User User created successfully
     * @throws ApiError
     */
    public static a0265360B2014512D6Dbfaf0E7(
        requestBody: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a specific user
     * @param id User ID
     * @returns User User retrieved successfully
     * @throws ApiError
     */
    public static a33Ff774D5Cba33C039Dec2C3E0287(
        id: number,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Update a user
     * @param id User ID
     * @param requestBody
     * @returns User User updated successfully
     * @throws ApiError
     */
    public static b9091397C8B25F12C6Adb74Be6Ce3A5A(
        id: number,
        requestBody: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Delete a user
     * @param id User ID
     * @returns any User deleted successfully
     * @throws ApiError
     */
    public static fa56Cffde745D3F152F95Cbacd936C0B(
        id: number,
    ): CancelablePromise<{
        success?: boolean;
        data?: null;
        message?: string;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
}
