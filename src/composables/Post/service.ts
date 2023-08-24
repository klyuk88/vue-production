import {AxiosProvider} from "@/core/axiosProvider";

class PostService {
    private dataProvider = new AxiosProvider()
     async getAllPosts() {
        const posts = await this.dataProvider.get('/posts')
         if(!posts.status) {
             return;
         }
         return posts?.data?.data

    }
}

export default new PostService()