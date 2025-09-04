export interface Comment {
    "id": number,
    "title": string,
    "content": string,
    "author_id": number,
    "likes": number,
    "dislikes": number,
    "rating": number,
    "published_at": string,
    "updated_at": string
}

export interface GetCommentData {
    posts: Comment[]
}