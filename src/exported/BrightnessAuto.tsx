import IconBrightnessAutoFill0Wght100Grad0Opsz48 from '../components/BrightnessAutoFill0Wght100Grad0Opsz48'
import IconBrightnessAutoFill0Wght200Grad0Opsz48 from '../components/BrightnessAutoFill0Wght200Grad0Opsz48'
import IconBrightnessAutoFill0Wght300Grad0Opsz48 from '../components/BrightnessAutoFill0Wght300Grad0Opsz48'
import IconBrightnessAutoFill0Wght400Grad0Opsz48 from '../components/BrightnessAutoFill0Wght400Grad0Opsz48'
import IconBrightnessAutoFill0Wght500Grad0Opsz48 from '../components/BrightnessAutoFill0Wght500Grad0Opsz48'
import IconBrightnessAutoFill0Wght600Grad0Opsz48 from '../components/BrightnessAutoFill0Wght600Grad0Opsz48'
import IconBrightnessAutoFill0Wght700Grad0Opsz48 from '../components/BrightnessAutoFill0Wght700Grad0Opsz48'
import IconBrightnessAutoFill1Wght100Grad0Opsz48 from '../components/BrightnessAutoFill1Wght100Grad0Opsz48'
import IconBrightnessAutoFill1Wght200Grad0Opsz48 from '../components/BrightnessAutoFill1Wght200Grad0Opsz48'
import IconBrightnessAutoFill1Wght300Grad0Opsz48 from '../components/BrightnessAutoFill1Wght300Grad0Opsz48'
import IconBrightnessAutoFill1Wght400Grad0Opsz48 from '../components/BrightnessAutoFill1Wght400Grad0Opsz48'
import IconBrightnessAutoFill1Wght500Grad0Opsz48 from '../components/BrightnessAutoFill1Wght500Grad0Opsz48'
import IconBrightnessAutoFill1Wght600Grad0Opsz48 from '../components/BrightnessAutoFill1Wght600Grad0Opsz48'
import IconBrightnessAutoFill1Wght700Grad0Opsz48 from '../components/BrightnessAutoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrightnessAuto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrightnessAutoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrightnessAutoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrightnessAutoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrightnessAutoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrightnessAutoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrightnessAutoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrightnessAutoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrightnessAutoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrightnessAutoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrightnessAutoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrightnessAutoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrightnessAutoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrightnessAutoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrightnessAutoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
