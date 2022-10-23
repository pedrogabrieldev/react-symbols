import IconPictureInPictureAltFill0Wght100Grad0Opsz48 from '../components/PictureInPictureAltFill0Wght100Grad0Opsz48'
import IconPictureInPictureAltFill0Wght200Grad0Opsz48 from '../components/PictureInPictureAltFill0Wght200Grad0Opsz48'
import IconPictureInPictureAltFill0Wght300Grad0Opsz48 from '../components/PictureInPictureAltFill0Wght300Grad0Opsz48'
import IconPictureInPictureAltFill0Wght400Grad0Opsz48 from '../components/PictureInPictureAltFill0Wght400Grad0Opsz48'
import IconPictureInPictureAltFill0Wght500Grad0Opsz48 from '../components/PictureInPictureAltFill0Wght500Grad0Opsz48'
import IconPictureInPictureAltFill0Wght600Grad0Opsz48 from '../components/PictureInPictureAltFill0Wght600Grad0Opsz48'
import IconPictureInPictureAltFill0Wght700Grad0Opsz48 from '../components/PictureInPictureAltFill0Wght700Grad0Opsz48'
import IconPictureInPictureAltFill1Wght100Grad0Opsz48 from '../components/PictureInPictureAltFill1Wght100Grad0Opsz48'
import IconPictureInPictureAltFill1Wght200Grad0Opsz48 from '../components/PictureInPictureAltFill1Wght200Grad0Opsz48'
import IconPictureInPictureAltFill1Wght300Grad0Opsz48 from '../components/PictureInPictureAltFill1Wght300Grad0Opsz48'
import IconPictureInPictureAltFill1Wght400Grad0Opsz48 from '../components/PictureInPictureAltFill1Wght400Grad0Opsz48'
import IconPictureInPictureAltFill1Wght500Grad0Opsz48 from '../components/PictureInPictureAltFill1Wght500Grad0Opsz48'
import IconPictureInPictureAltFill1Wght600Grad0Opsz48 from '../components/PictureInPictureAltFill1Wght600Grad0Opsz48'
import IconPictureInPictureAltFill1Wght700Grad0Opsz48 from '../components/PictureInPictureAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPictureInPictureAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPictureInPictureAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPictureInPictureAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPictureInPictureAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPictureInPictureAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPictureInPictureAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPictureInPictureAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPictureInPictureAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPictureInPictureAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPictureInPictureAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPictureInPictureAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPictureInPictureAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPictureInPictureAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPictureInPictureAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPictureInPictureAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
