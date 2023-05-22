

const fzfromdata = (data) => {
  const fromdata = new FormData()
  for (const key of Object.keys(data)) {
    if (data[key]) {
      fromdata.append(key, data[key])
    }
  }
  return fromdata
}

const tools = {
  fzfromdata,
}

export default tools 