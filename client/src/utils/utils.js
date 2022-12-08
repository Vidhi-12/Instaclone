import CONSTANTS from "./CONST"

function getAssetsPath() {
    return `${CONSTANTS.ASSETS_BASE_PATH}`
}

function getFormDataObject(data) {
    const formData = new FormData()
    for (let key in data) {
        formData.append(key, data[key])
    }
    return formData
}

export {
    getAssetsPath,
    getFormDataObject
}