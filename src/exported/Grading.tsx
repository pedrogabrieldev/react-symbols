import IconGradingFill0Wght100Grad0Opsz48 from '../components/GradingFill0Wght100Grad0Opsz48'
import IconGradingFill0Wght200Grad0Opsz48 from '../components/GradingFill0Wght200Grad0Opsz48'
import IconGradingFill0Wght300Grad0Opsz48 from '../components/GradingFill0Wght300Grad0Opsz48'
import IconGradingFill0Wght400Grad0Opsz48 from '../components/GradingFill0Wght400Grad0Opsz48'
import IconGradingFill0Wght500Grad0Opsz48 from '../components/GradingFill0Wght500Grad0Opsz48'
import IconGradingFill0Wght600Grad0Opsz48 from '../components/GradingFill0Wght600Grad0Opsz48'
import IconGradingFill0Wght700Grad0Opsz48 from '../components/GradingFill0Wght700Grad0Opsz48'
import IconGradingFill1Wght100Grad0Opsz48 from '../components/GradingFill1Wght100Grad0Opsz48'
import IconGradingFill1Wght200Grad0Opsz48 from '../components/GradingFill1Wght200Grad0Opsz48'
import IconGradingFill1Wght300Grad0Opsz48 from '../components/GradingFill1Wght300Grad0Opsz48'
import IconGradingFill1Wght400Grad0Opsz48 from '../components/GradingFill1Wght400Grad0Opsz48'
import IconGradingFill1Wght500Grad0Opsz48 from '../components/GradingFill1Wght500Grad0Opsz48'
import IconGradingFill1Wght600Grad0Opsz48 from '../components/GradingFill1Wght600Grad0Opsz48'
import IconGradingFill1Wght700Grad0Opsz48 from '../components/GradingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGrading = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGradingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGradingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGradingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGradingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGradingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGradingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGradingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGradingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGradingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGradingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGradingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGradingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGradingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGradingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
