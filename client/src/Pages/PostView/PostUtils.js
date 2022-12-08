import CONST from "../../utils/CONST"
import { getFormDataObject } from "../../utils/utils"

export function loadAllPosts(){
    return fetch(CONST.getApiUrl('/posts'))
    .then(data => data.json())
}

export function createPost(data){
    // const formData = new FormData()
    return fetch(CONST.getApiUrl('/posts'), {
        method: 'POST',
        body: getFormDataObject(data)
    })
}