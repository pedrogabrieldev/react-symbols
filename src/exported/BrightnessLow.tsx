import IconBrightnessLowFill0Wght100Grad0Opsz48 from '../components/BrightnessLowFill0Wght100Grad0Opsz48'
import IconBrightnessLowFill0Wght200Grad0Opsz48 from '../components/BrightnessLowFill0Wght200Grad0Opsz48'
import IconBrightnessLowFill0Wght300Grad0Opsz48 from '../components/BrightnessLowFill0Wght300Grad0Opsz48'
import IconBrightnessLowFill0Wght400Grad0Opsz48 from '../components/BrightnessLowFill0Wght400Grad0Opsz48'
import IconBrightnessLowFill0Wght500Grad0Opsz48 from '../components/BrightnessLowFill0Wght500Grad0Opsz48'
import IconBrightnessLowFill0Wght600Grad0Opsz48 from '../components/BrightnessLowFill0Wght600Grad0Opsz48'
import IconBrightnessLowFill0Wght700Grad0Opsz48 from '../components/BrightnessLowFill0Wght700Grad0Opsz48'
import IconBrightnessLowFill1Wght100Grad0Opsz48 from '../components/BrightnessLowFill1Wght100Grad0Opsz48'
import IconBrightnessLowFill1Wght200Grad0Opsz48 from '../components/BrightnessLowFill1Wght200Grad0Opsz48'
import IconBrightnessLowFill1Wght300Grad0Opsz48 from '../components/BrightnessLowFill1Wght300Grad0Opsz48'
import IconBrightnessLowFill1Wght400Grad0Opsz48 from '../components/BrightnessLowFill1Wght400Grad0Opsz48'
import IconBrightnessLowFill1Wght500Grad0Opsz48 from '../components/BrightnessLowFill1Wght500Grad0Opsz48'
import IconBrightnessLowFill1Wght600Grad0Opsz48 from '../components/BrightnessLowFill1Wght600Grad0Opsz48'
import IconBrightnessLowFill1Wght700Grad0Opsz48 from '../components/BrightnessLowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrightnessLow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrightnessLowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrightnessLowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrightnessLowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrightnessLowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrightnessLowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrightnessLowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrightnessLowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrightnessLowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrightnessLowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrightnessLowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrightnessLowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrightnessLowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrightnessLowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrightnessLowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
