import IconMonochromePhotosFill0Wght100Grad0Opsz48 from '../components/MonochromePhotosFill0Wght100Grad0Opsz48'
import IconMonochromePhotosFill0Wght200Grad0Opsz48 from '../components/MonochromePhotosFill0Wght200Grad0Opsz48'
import IconMonochromePhotosFill0Wght300Grad0Opsz48 from '../components/MonochromePhotosFill0Wght300Grad0Opsz48'
import IconMonochromePhotosFill0Wght400Grad0Opsz48 from '../components/MonochromePhotosFill0Wght400Grad0Opsz48'
import IconMonochromePhotosFill0Wght500Grad0Opsz48 from '../components/MonochromePhotosFill0Wght500Grad0Opsz48'
import IconMonochromePhotosFill0Wght600Grad0Opsz48 from '../components/MonochromePhotosFill0Wght600Grad0Opsz48'
import IconMonochromePhotosFill0Wght700Grad0Opsz48 from '../components/MonochromePhotosFill0Wght700Grad0Opsz48'
import IconMonochromePhotosFill1Wght100Grad0Opsz48 from '../components/MonochromePhotosFill1Wght100Grad0Opsz48'
import IconMonochromePhotosFill1Wght200Grad0Opsz48 from '../components/MonochromePhotosFill1Wght200Grad0Opsz48'
import IconMonochromePhotosFill1Wght300Grad0Opsz48 from '../components/MonochromePhotosFill1Wght300Grad0Opsz48'
import IconMonochromePhotosFill1Wght400Grad0Opsz48 from '../components/MonochromePhotosFill1Wght400Grad0Opsz48'
import IconMonochromePhotosFill1Wght500Grad0Opsz48 from '../components/MonochromePhotosFill1Wght500Grad0Opsz48'
import IconMonochromePhotosFill1Wght600Grad0Opsz48 from '../components/MonochromePhotosFill1Wght600Grad0Opsz48'
import IconMonochromePhotosFill1Wght700Grad0Opsz48 from '../components/MonochromePhotosFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMonochromePhotos = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMonochromePhotosFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMonochromePhotosFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMonochromePhotosFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMonochromePhotosFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMonochromePhotosFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMonochromePhotosFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMonochromePhotosFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMonochromePhotosFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMonochromePhotosFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMonochromePhotosFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMonochromePhotosFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMonochromePhotosFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMonochromePhotosFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMonochromePhotosFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
