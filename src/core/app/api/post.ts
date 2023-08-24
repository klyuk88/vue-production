const baseUrl = '/posts'
export const PostApi = {
    LIST: baseUrl,
} as const;

export type TPostApi = typeof PostApi[keyof typeof PostApi]

