import IconMotionPhotosPausedFill0Wght100Grad0Opsz48 from '../components/MotionPhotosPausedFill0Wght100Grad0Opsz48'
import IconMotionPhotosPausedFill0Wght200Grad0Opsz48 from '../components/MotionPhotosPausedFill0Wght200Grad0Opsz48'
import IconMotionPhotosPausedFill0Wght300Grad0Opsz48 from '../components/MotionPhotosPausedFill0Wght300Grad0Opsz48'
import IconMotionPhotosPausedFill0Wght400Grad0Opsz48 from '../components/MotionPhotosPausedFill0Wght400Grad0Opsz48'
import IconMotionPhotosPausedFill0Wght500Grad0Opsz48 from '../components/MotionPhotosPausedFill0Wght500Grad0Opsz48'
import IconMotionPhotosPausedFill0Wght600Grad0Opsz48 from '../components/MotionPhotosPausedFill0Wght600Grad0Opsz48'
import IconMotionPhotosPausedFill0Wght700Grad0Opsz48 from '../components/MotionPhotosPausedFill0Wght700Grad0Opsz48'
import IconMotionPhotosPausedFill1Wght100Grad0Opsz48 from '../components/MotionPhotosPausedFill1Wght100Grad0Opsz48'
import IconMotionPhotosPausedFill1Wght200Grad0Opsz48 from '../components/MotionPhotosPausedFill1Wght200Grad0Opsz48'
import IconMotionPhotosPausedFill1Wght300Grad0Opsz48 from '../components/MotionPhotosPausedFill1Wght300Grad0Opsz48'
import IconMotionPhotosPausedFill1Wght400Grad0Opsz48 from '../components/MotionPhotosPausedFill1Wght400Grad0Opsz48'
import IconMotionPhotosPausedFill1Wght500Grad0Opsz48 from '../components/MotionPhotosPausedFill1Wght500Grad0Opsz48'
import IconMotionPhotosPausedFill1Wght600Grad0Opsz48 from '../components/MotionPhotosPausedFill1Wght600Grad0Opsz48'
import IconMotionPhotosPausedFill1Wght700Grad0Opsz48 from '../components/MotionPhotosPausedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMotionPhotosPaused = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMotionPhotosPausedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMotionPhotosPausedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMotionPhotosPausedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMotionPhotosPausedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMotionPhotosPausedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMotionPhotosPausedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMotionPhotosPausedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMotionPhotosPausedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMotionPhotosPausedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMotionPhotosPausedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMotionPhotosPausedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMotionPhotosPausedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMotionPhotosPausedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMotionPhotosPausedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
