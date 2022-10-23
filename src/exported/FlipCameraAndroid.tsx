import IconFlipCameraAndroidFill0Wght100Grad0Opsz48 from '../components/FlipCameraAndroidFill0Wght100Grad0Opsz48'
import IconFlipCameraAndroidFill0Wght200Grad0Opsz48 from '../components/FlipCameraAndroidFill0Wght200Grad0Opsz48'
import IconFlipCameraAndroidFill0Wght300Grad0Opsz48 from '../components/FlipCameraAndroidFill0Wght300Grad0Opsz48'
import IconFlipCameraAndroidFill0Wght400Grad0Opsz48 from '../components/FlipCameraAndroidFill0Wght400Grad0Opsz48'
import IconFlipCameraAndroidFill0Wght500Grad0Opsz48 from '../components/FlipCameraAndroidFill0Wght500Grad0Opsz48'
import IconFlipCameraAndroidFill0Wght600Grad0Opsz48 from '../components/FlipCameraAndroidFill0Wght600Grad0Opsz48'
import IconFlipCameraAndroidFill0Wght700Grad0Opsz48 from '../components/FlipCameraAndroidFill0Wght700Grad0Opsz48'
import IconFlipCameraAndroidFill1Wght100Grad0Opsz48 from '../components/FlipCameraAndroidFill1Wght100Grad0Opsz48'
import IconFlipCameraAndroidFill1Wght200Grad0Opsz48 from '../components/FlipCameraAndroidFill1Wght200Grad0Opsz48'
import IconFlipCameraAndroidFill1Wght300Grad0Opsz48 from '../components/FlipCameraAndroidFill1Wght300Grad0Opsz48'
import IconFlipCameraAndroidFill1Wght400Grad0Opsz48 from '../components/FlipCameraAndroidFill1Wght400Grad0Opsz48'
import IconFlipCameraAndroidFill1Wght500Grad0Opsz48 from '../components/FlipCameraAndroidFill1Wght500Grad0Opsz48'
import IconFlipCameraAndroidFill1Wght600Grad0Opsz48 from '../components/FlipCameraAndroidFill1Wght600Grad0Opsz48'
import IconFlipCameraAndroidFill1Wght700Grad0Opsz48 from '../components/FlipCameraAndroidFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlipCameraAndroid = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlipCameraAndroidFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlipCameraAndroidFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlipCameraAndroidFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlipCameraAndroidFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlipCameraAndroidFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlipCameraAndroidFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlipCameraAndroidFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlipCameraAndroidFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlipCameraAndroidFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlipCameraAndroidFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlipCameraAndroidFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlipCameraAndroidFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlipCameraAndroidFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlipCameraAndroidFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
