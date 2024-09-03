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
    public static getUsers(
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
                'pageSize': pageSize,
                'pageNumb': pageNumb,
            },
        });
    }
    /**
     * Create a new user
     * @param requestBody
     * @returns User User created successfully
     * @throws ApiError
     */
    public static createUser(
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
    public static getUserById(
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
    public static updateUser(
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
    public static deleteUser(
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
