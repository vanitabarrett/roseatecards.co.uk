import { FreeDownload } from "../types";

export function augmentDownloadData(download): FreeDownload {
  return {
    id: `/wedding/free-downloads/${download.id}`,
    title: download.title,
    price: "0",
    created: 0,
    type: "download",
    description: download.description,
    url: `/download-files/${download.id}.pdf`,
    images: [{
      url_570xN: `/download-images/${download.id}.jpg`,
      description: ""
    }]
  }
}
