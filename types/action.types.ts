export type Action = 'like' | 'dislike'

export type PostAction = {
    id: number,
    action: Action
}