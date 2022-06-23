// * Flood Fill
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const currentPixelColor = image[sr][sc];

  const fillColor = (image, sr, sc, currentColor, toFillColor) => {
    if (currentPixelColor === color) return image;

    const currentPixel = [sr, sc];
    const rLen = image.length;
    const cLen = image[0].length;

    const getNeighbors = (pixel) => {
      const [sr, sc] = pixel;
      const toChange = [];
      if (sc + 1 < cLen && image[sr][sc + 1] === currentColor) {
        toChange.push([sr, sc + 1]);
      }
      if (sc - 1 >= 0 && image[sr][sc - 1] === currentColor) {
        toChange.push([sr, sc - 1]);
      }
      if (sr + 1 < rLen && image[sr + 1][sc] === currentColor) {
        toChange.push([sr + 1, sc]);
      }
      if (sr - 1 >= 0 && image[sr - 1][sc] === currentColor) {
        toChange.push([sr - 1, sc]);
      }
      return toChange;
    };

    const currentPixelNeighbors = getNeighbors(currentPixel);
    image[sr][sc] = toFillColor;
    while (currentPixelNeighbors.length > 0) {
      const [sr, sc] = currentPixelNeighbors[0];
      currentPixelNeighbors.splice(0, 1);
      image[sr][sc] = toFillColor;
      image = fillColor(image, sr, sc, currentColor, toFillColor);
    }

    return image;
  };

  return fillColor(image, sr, sc, currentPixelColor, color);
};
// console.log(
//   floodFill(
//     [
//       [0, 0, 0],
//       [0, 1, 0],
//     ],
//     1,
//     1,
//     2
//   )
// );
