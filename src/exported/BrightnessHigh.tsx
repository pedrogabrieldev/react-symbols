import IconBrightnessHighFill0Wght100Grad0Opsz48 from '../components/BrightnessHighFill0Wght100Grad0Opsz48'
import IconBrightnessHighFill0Wght200Grad0Opsz48 from '../components/BrightnessHighFill0Wght200Grad0Opsz48'
import IconBrightnessHighFill0Wght300Grad0Opsz48 from '../components/BrightnessHighFill0Wght300Grad0Opsz48'
import IconBrightnessHighFill0Wght400Grad0Opsz48 from '../components/BrightnessHighFill0Wght400Grad0Opsz48'
import IconBrightnessHighFill0Wght500Grad0Opsz48 from '../components/BrightnessHighFill0Wght500Grad0Opsz48'
import IconBrightnessHighFill0Wght600Grad0Opsz48 from '../components/BrightnessHighFill0Wght600Grad0Opsz48'
import IconBrightnessHighFill0Wght700Grad0Opsz48 from '../components/BrightnessHighFill0Wght700Grad0Opsz48'
import IconBrightnessHighFill1Wght100Grad0Opsz48 from '../components/BrightnessHighFill1Wght100Grad0Opsz48'
import IconBrightnessHighFill1Wght200Grad0Opsz48 from '../components/BrightnessHighFill1Wght200Grad0Opsz48'
import IconBrightnessHighFill1Wght300Grad0Opsz48 from '../components/BrightnessHighFill1Wght300Grad0Opsz48'
import IconBrightnessHighFill1Wght400Grad0Opsz48 from '../components/BrightnessHighFill1Wght400Grad0Opsz48'
import IconBrightnessHighFill1Wght500Grad0Opsz48 from '../components/BrightnessHighFill1Wght500Grad0Opsz48'
import IconBrightnessHighFill1Wght600Grad0Opsz48 from '../components/BrightnessHighFill1Wght600Grad0Opsz48'
import IconBrightnessHighFill1Wght700Grad0Opsz48 from '../components/BrightnessHighFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrightnessHigh = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrightnessHighFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrightnessHighFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrightnessHighFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrightnessHighFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrightnessHighFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrightnessHighFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrightnessHighFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrightnessHighFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrightnessHighFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrightnessHighFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrightnessHighFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrightnessHighFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrightnessHighFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrightnessHighFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
