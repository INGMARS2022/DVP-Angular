export interface Login{
    user:    string,
    password: string
}
export interface LoginResponse{
    jwt:    string,
    users:   User
}
export interface User{
    email:    string,
    name:     string
}