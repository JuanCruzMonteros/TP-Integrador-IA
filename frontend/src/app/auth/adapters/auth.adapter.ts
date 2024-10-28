import { LoginResponse } from "@auth/models/auth.model";

export const AuthAdapter = ( loginResponse: LoginResponse): string => loginResponse.token;