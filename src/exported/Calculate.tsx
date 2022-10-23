import IconCalculateFill0Wght100Grad0Opsz48 from '../components/CalculateFill0Wght100Grad0Opsz48'
import IconCalculateFill0Wght200Grad0Opsz48 from '../components/CalculateFill0Wght200Grad0Opsz48'
import IconCalculateFill0Wght300Grad0Opsz48 from '../components/CalculateFill0Wght300Grad0Opsz48'
import IconCalculateFill0Wght400Grad0Opsz48 from '../components/CalculateFill0Wght400Grad0Opsz48'
import IconCalculateFill0Wght500Grad0Opsz48 from '../components/CalculateFill0Wght500Grad0Opsz48'
import IconCalculateFill0Wght600Grad0Opsz48 from '../components/CalculateFill0Wght600Grad0Opsz48'
import IconCalculateFill0Wght700Grad0Opsz48 from '../components/CalculateFill0Wght700Grad0Opsz48'
import IconCalculateFill1Wght100Grad0Opsz48 from '../components/CalculateFill1Wght100Grad0Opsz48'
import IconCalculateFill1Wght200Grad0Opsz48 from '../components/CalculateFill1Wght200Grad0Opsz48'
import IconCalculateFill1Wght300Grad0Opsz48 from '../components/CalculateFill1Wght300Grad0Opsz48'
import IconCalculateFill1Wght400Grad0Opsz48 from '../components/CalculateFill1Wght400Grad0Opsz48'
import IconCalculateFill1Wght500Grad0Opsz48 from '../components/CalculateFill1Wght500Grad0Opsz48'
import IconCalculateFill1Wght600Grad0Opsz48 from '../components/CalculateFill1Wght600Grad0Opsz48'
import IconCalculateFill1Wght700Grad0Opsz48 from '../components/CalculateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCalculate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCalculateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCalculateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCalculateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCalculateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCalculateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCalculateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCalculateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCalculateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCalculateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCalculateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCalculateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCalculateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCalculateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCalculateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
