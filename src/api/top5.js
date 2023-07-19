import axios from "axios";

export default {
    get_top5: function(postId){
        return axios.get(`http://ec2-15-164-162-180.ap-northeast-2.compute.amazonaws.com:8080/api/posts/top5`);
    }
}