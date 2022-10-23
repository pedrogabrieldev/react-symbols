import IconFlipCameraIosFill0Wght100Grad0Opsz48 from '../components/FlipCameraIosFill0Wght100Grad0Opsz48'
import IconFlipCameraIosFill0Wght200Grad0Opsz48 from '../components/FlipCameraIosFill0Wght200Grad0Opsz48'
import IconFlipCameraIosFill0Wght300Grad0Opsz48 from '../components/FlipCameraIosFill0Wght300Grad0Opsz48'
import IconFlipCameraIosFill0Wght400Grad0Opsz48 from '../components/FlipCameraIosFill0Wght400Grad0Opsz48'
import IconFlipCameraIosFill0Wght500Grad0Opsz48 from '../components/FlipCameraIosFill0Wght500Grad0Opsz48'
import IconFlipCameraIosFill0Wght600Grad0Opsz48 from '../components/FlipCameraIosFill0Wght600Grad0Opsz48'
import IconFlipCameraIosFill0Wght700Grad0Opsz48 from '../components/FlipCameraIosFill0Wght700Grad0Opsz48'
import IconFlipCameraIosFill1Wght100Grad0Opsz48 from '../components/FlipCameraIosFill1Wght100Grad0Opsz48'
import IconFlipCameraIosFill1Wght200Grad0Opsz48 from '../components/FlipCameraIosFill1Wght200Grad0Opsz48'
import IconFlipCameraIosFill1Wght300Grad0Opsz48 from '../components/FlipCameraIosFill1Wght300Grad0Opsz48'
import IconFlipCameraIosFill1Wght400Grad0Opsz48 from '../components/FlipCameraIosFill1Wght400Grad0Opsz48'
import IconFlipCameraIosFill1Wght500Grad0Opsz48 from '../components/FlipCameraIosFill1Wght500Grad0Opsz48'
import IconFlipCameraIosFill1Wght600Grad0Opsz48 from '../components/FlipCameraIosFill1Wght600Grad0Opsz48'
import IconFlipCameraIosFill1Wght700Grad0Opsz48 from '../components/FlipCameraIosFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlipCameraIos = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlipCameraIosFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlipCameraIosFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlipCameraIosFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlipCameraIosFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlipCameraIosFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlipCameraIosFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlipCameraIosFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlipCameraIosFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlipCameraIosFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlipCameraIosFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlipCameraIosFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlipCameraIosFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlipCameraIosFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlipCameraIosFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
