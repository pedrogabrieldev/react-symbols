import IconPictureInPictureFill0Wght100Grad0Opsz48 from '../components/PictureInPictureFill0Wght100Grad0Opsz48'
import IconPictureInPictureFill0Wght200Grad0Opsz48 from '../components/PictureInPictureFill0Wght200Grad0Opsz48'
import IconPictureInPictureFill0Wght300Grad0Opsz48 from '../components/PictureInPictureFill0Wght300Grad0Opsz48'
import IconPictureInPictureFill0Wght400Grad0Opsz48 from '../components/PictureInPictureFill0Wght400Grad0Opsz48'
import IconPictureInPictureFill0Wght500Grad0Opsz48 from '../components/PictureInPictureFill0Wght500Grad0Opsz48'
import IconPictureInPictureFill0Wght600Grad0Opsz48 from '../components/PictureInPictureFill0Wght600Grad0Opsz48'
import IconPictureInPictureFill0Wght700Grad0Opsz48 from '../components/PictureInPictureFill0Wght700Grad0Opsz48'
import IconPictureInPictureFill1Wght100Grad0Opsz48 from '../components/PictureInPictureFill1Wght100Grad0Opsz48'
import IconPictureInPictureFill1Wght200Grad0Opsz48 from '../components/PictureInPictureFill1Wght200Grad0Opsz48'
import IconPictureInPictureFill1Wght300Grad0Opsz48 from '../components/PictureInPictureFill1Wght300Grad0Opsz48'
import IconPictureInPictureFill1Wght400Grad0Opsz48 from '../components/PictureInPictureFill1Wght400Grad0Opsz48'
import IconPictureInPictureFill1Wght500Grad0Opsz48 from '../components/PictureInPictureFill1Wght500Grad0Opsz48'
import IconPictureInPictureFill1Wght600Grad0Opsz48 from '../components/PictureInPictureFill1Wght600Grad0Opsz48'
import IconPictureInPictureFill1Wght700Grad0Opsz48 from '../components/PictureInPictureFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPictureInPicture = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPictureInPictureFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPictureInPictureFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPictureInPictureFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPictureInPictureFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPictureInPictureFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPictureInPictureFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPictureInPictureFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPictureInPictureFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPictureInPictureFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPictureInPictureFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPictureInPictureFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPictureInPictureFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPictureInPictureFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPictureInPictureFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
