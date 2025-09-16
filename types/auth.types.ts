export type User = {
    id: number,
    email: string,
}

export type LoginResponse = {
    token: string,
    user: User
}