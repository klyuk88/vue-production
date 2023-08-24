import {AxiosProvider} from "@/core/app/axiosProvider";
import type {IPost} from "./model";
import {PostApi} from "@/core/app/api";

class PostService {
    private dataProvider = new AxiosProvider()
     async getAllPosts(): Promise<IPost[]> {
        const posts = await this.dataProvider.get(PostApi.LIST)
         if(!posts.status) {
             return [];
         }
         return posts?.data?.data
    }
}

export default new PostService()