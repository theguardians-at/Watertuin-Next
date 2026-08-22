import DesignImage from './DesignImage'

export const customComponents = [
  {
    component: DesignImage,
    name: 'Bild',
    noWrap: true,
    inputs: [
      {
        name: 'image',
        type: 'file',
        friendlyName: 'Bild',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp', 'avif'],
      },
      { name: 'altText', type: 'string', friendlyName: 'Bildbeschreibung' },
    ],
  },
]
