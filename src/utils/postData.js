/**
 * use to set data into FormData
 * @param {*} datas
 * @return {*} formData
 */
function postData(datas) {
  const formData = new FormData()
  const dataName = Object.keys(datas)

  dataName.map((name) => {
    formData.append(name, datas[name])
  })

  return formData
}

export {
  postData
}
