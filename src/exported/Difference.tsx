import IconDifferenceFill0Wght100Grad0Opsz48 from '../components/DifferenceFill0Wght100Grad0Opsz48'
import IconDifferenceFill0Wght200Grad0Opsz48 from '../components/DifferenceFill0Wght200Grad0Opsz48'
import IconDifferenceFill0Wght300Grad0Opsz48 from '../components/DifferenceFill0Wght300Grad0Opsz48'
import IconDifferenceFill0Wght400Grad0Opsz48 from '../components/DifferenceFill0Wght400Grad0Opsz48'
import IconDifferenceFill0Wght500Grad0Opsz48 from '../components/DifferenceFill0Wght500Grad0Opsz48'
import IconDifferenceFill0Wght600Grad0Opsz48 from '../components/DifferenceFill0Wght600Grad0Opsz48'
import IconDifferenceFill0Wght700Grad0Opsz48 from '../components/DifferenceFill0Wght700Grad0Opsz48'
import IconDifferenceFill1Wght100Grad0Opsz48 from '../components/DifferenceFill1Wght100Grad0Opsz48'
import IconDifferenceFill1Wght200Grad0Opsz48 from '../components/DifferenceFill1Wght200Grad0Opsz48'
import IconDifferenceFill1Wght300Grad0Opsz48 from '../components/DifferenceFill1Wght300Grad0Opsz48'
import IconDifferenceFill1Wght400Grad0Opsz48 from '../components/DifferenceFill1Wght400Grad0Opsz48'
import IconDifferenceFill1Wght500Grad0Opsz48 from '../components/DifferenceFill1Wght500Grad0Opsz48'
import IconDifferenceFill1Wght600Grad0Opsz48 from '../components/DifferenceFill1Wght600Grad0Opsz48'
import IconDifferenceFill1Wght700Grad0Opsz48 from '../components/DifferenceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDifference = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDifferenceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDifferenceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDifferenceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDifferenceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDifferenceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDifferenceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDifferenceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDifferenceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDifferenceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDifferenceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDifferenceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDifferenceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDifferenceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDifferenceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
