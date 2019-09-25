import _ from 'lodash';
import ImageResizer from 'react-native-image-resizer';

const supportExtensions = ['JPEG', 'PNG'];

// eslint-disable-next-line import/prefer-default-export
export const compressImage = image => new Promise(((resolve, reject) => {
  // image is the response object of react-native-image-crop-picker
  const imageExtension = _.upperCase(image.mime.split('/')[1]);
  const isExtensionSupport = _.indexOf(supportExtensions, imageExtension) >= 0;
  if (isExtensionSupport) {
    const path = image.sourceURL ? image.sourceURL : image.path;
    const compressFormat = imageExtension;
    const maxWidth = 1280;
    const maxHeight = 720;
    const quality = 80;
    const rotation = 0;
    const outputPath = null;
    ImageResizer.createResizedImage(
      path,
      maxWidth,
      maxHeight,
      compressFormat,
      quality,
      rotation,
      outputPath,
    ).then((response) => {
      // response.uri is the URI of the new image that can now be displayed, uploaded...
      // response.path is the path of the new image
      // response.name is the name of the new image with the extension
      // response.size is the size of the new image
      console.log('res', response);
      resolve(response);
    }).catch((err) => {
      // Oops, something went wrong. Check that the filename is correct and
      // inspect err to get more details.
      console.log('compress image failed', err);
      reject(new Error(`compress image failed: ${err.message}`));
    });
  } else {
    resolve(image);
  }
}));
