import TransshipmentPic from '../../public/images/icons/big/transshipment.png';
import OrganizationPic from '../../public/images/icons/big/organization.png';
import StoragePic from '../../public/images/icons/big/storage.png';
import CustomsPic from '../../public/images/icons/big/customs.png';
import PhotoPic from '../../public/images/icons/big/photo.png';
import TrackingPic from '../../public/images/icons/big/tracking.png';
import { StaticImageData } from 'next/image';

interface ICard {
  id: number;
  textKey: string;
  src: StaticImageData;
}

export const cards: ICard[] = [
  {
    id: 1,
    textKey: 'Transshipment',
    src: TransshipmentPic,
  },
  {
    id: 2,
    textKey: 'Organizations',
    src: OrganizationPic,
  },
  {
    id: 3,
    textKey: 'Storage',
    src: StoragePic,
  },
  {
    id: 4,
    textKey: 'Customs',
    src: CustomsPic,
  },
  {
    id: 5,
    textKey: 'Photo',
    src: PhotoPic,
  },
  {
    id: 6,
    textKey: 'Tracking',
    src: TrackingPic,
  },
];
