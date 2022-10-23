import IconGradientFill0Wght100Grad0Opsz48 from '../components/GradientFill0Wght100Grad0Opsz48'
import IconGradientFill0Wght200Grad0Opsz48 from '../components/GradientFill0Wght200Grad0Opsz48'
import IconGradientFill0Wght300Grad0Opsz48 from '../components/GradientFill0Wght300Grad0Opsz48'
import IconGradientFill0Wght400Grad0Opsz48 from '../components/GradientFill0Wght400Grad0Opsz48'
import IconGradientFill0Wght500Grad0Opsz48 from '../components/GradientFill0Wght500Grad0Opsz48'
import IconGradientFill0Wght600Grad0Opsz48 from '../components/GradientFill0Wght600Grad0Opsz48'
import IconGradientFill0Wght700Grad0Opsz48 from '../components/GradientFill0Wght700Grad0Opsz48'
import IconGradientFill1Wght100Grad0Opsz48 from '../components/GradientFill1Wght100Grad0Opsz48'
import IconGradientFill1Wght200Grad0Opsz48 from '../components/GradientFill1Wght200Grad0Opsz48'
import IconGradientFill1Wght300Grad0Opsz48 from '../components/GradientFill1Wght300Grad0Opsz48'
import IconGradientFill1Wght400Grad0Opsz48 from '../components/GradientFill1Wght400Grad0Opsz48'
import IconGradientFill1Wght500Grad0Opsz48 from '../components/GradientFill1Wght500Grad0Opsz48'
import IconGradientFill1Wght600Grad0Opsz48 from '../components/GradientFill1Wght600Grad0Opsz48'
import IconGradientFill1Wght700Grad0Opsz48 from '../components/GradientFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGradient = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGradientFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGradientFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGradientFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGradientFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGradientFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGradientFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGradientFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGradientFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGradientFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGradientFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGradientFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGradientFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGradientFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGradientFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
