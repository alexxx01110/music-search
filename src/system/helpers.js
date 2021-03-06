const dummyImg = './static/img/no-image.png'

export const reduceImageSize = function (text, size) {
  return text ? text.replace('large', 't' + size) : dummyImg
}

export const textTruncate = function (text, stop, clamp) {
  return text ? text.slice(0, stop) + (stop < text.length ? clamp || '...' : '') : ''
}

export const removeArrayItem = function (array, item) {
  const index = array.indexOf(item)

  if (index !== -1) {
    array.splice(index, 1)
  }
}
