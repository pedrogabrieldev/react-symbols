import IconSquareFill0Wght100Grad0Opsz48 from '../components/SquareFill0Wght100Grad0Opsz48'
import IconSquareFill0Wght200Grad0Opsz48 from '../components/SquareFill0Wght200Grad0Opsz48'
import IconSquareFill0Wght300Grad0Opsz48 from '../components/SquareFill0Wght300Grad0Opsz48'
import IconSquareFill0Wght400Grad0Opsz48 from '../components/SquareFill0Wght400Grad0Opsz48'
import IconSquareFill0Wght500Grad0Opsz48 from '../components/SquareFill0Wght500Grad0Opsz48'
import IconSquareFill0Wght600Grad0Opsz48 from '../components/SquareFill0Wght600Grad0Opsz48'
import IconSquareFill0Wght700Grad0Opsz48 from '../components/SquareFill0Wght700Grad0Opsz48'
import IconSquareFill1Wght100Grad0Opsz48 from '../components/SquareFill1Wght100Grad0Opsz48'
import IconSquareFill1Wght200Grad0Opsz48 from '../components/SquareFill1Wght200Grad0Opsz48'
import IconSquareFill1Wght300Grad0Opsz48 from '../components/SquareFill1Wght300Grad0Opsz48'
import IconSquareFill1Wght400Grad0Opsz48 from '../components/SquareFill1Wght400Grad0Opsz48'
import IconSquareFill1Wght500Grad0Opsz48 from '../components/SquareFill1Wght500Grad0Opsz48'
import IconSquareFill1Wght600Grad0Opsz48 from '../components/SquareFill1Wght600Grad0Opsz48'
import IconSquareFill1Wght700Grad0Opsz48 from '../components/SquareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSquare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSquareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSquareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSquareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSquareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSquareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSquareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSquareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSquareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSquareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSquareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSquareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSquareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSquareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSquareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
