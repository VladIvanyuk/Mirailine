export type IImage = {
  key: string;
  last_modified: Date;
  etag: string;
  size: number;
  storage_class: string;
  checksum_algorithm: any[];
  type: string;
};

export type IImageList = IImage[];
