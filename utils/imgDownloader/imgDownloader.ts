import FileSaver from 'file-saver';
import JSZip from 'jszip';

export const handleZip = async (images: any) => {
  const zip = new JSZip();

  for (let i = 0; i < images.length; i++) {
    const response = await fetch(images[i].image);
    const blob = await response.blob();
    zip.file(`image_${i}.jpg`, blob);
  }

  zip
    .generateAsync({
      type: 'blob',
      streamFiles: true,
    })
    .then(function (content) {
      FileSaver.saveAs(content, 'download.zip');
    });
};
