import { getAssetsPath } from "../utils/utils"

export default function Image({src, ...rest}){
    return <img src={`${getAssetsPath()}/${src}`} {...rest} alt='Post'/>
}