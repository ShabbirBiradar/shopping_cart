
import data from "./jsonData.json"
export const getJsonData=()=>{
    return new Promise(async(resolve, reject)=>{
        resolve(data)
    })
}