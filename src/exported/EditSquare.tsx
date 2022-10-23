import IconEditSquareFill0Wght100Grad0Opsz48 from '../components/EditSquareFill0Wght100Grad0Opsz48'
import IconEditSquareFill0Wght200Grad0Opsz48 from '../components/EditSquareFill0Wght200Grad0Opsz48'
import IconEditSquareFill0Wght300Grad0Opsz48 from '../components/EditSquareFill0Wght300Grad0Opsz48'
import IconEditSquareFill0Wght400Grad0Opsz48 from '../components/EditSquareFill0Wght400Grad0Opsz48'
import IconEditSquareFill0Wght500Grad0Opsz48 from '../components/EditSquareFill0Wght500Grad0Opsz48'
import IconEditSquareFill0Wght600Grad0Opsz48 from '../components/EditSquareFill0Wght600Grad0Opsz48'
import IconEditSquareFill0Wght700Grad0Opsz48 from '../components/EditSquareFill0Wght700Grad0Opsz48'
import IconEditSquareFill1Wght100Grad0Opsz48 from '../components/EditSquareFill1Wght100Grad0Opsz48'
import IconEditSquareFill1Wght200Grad0Opsz48 from '../components/EditSquareFill1Wght200Grad0Opsz48'
import IconEditSquareFill1Wght300Grad0Opsz48 from '../components/EditSquareFill1Wght300Grad0Opsz48'
import IconEditSquareFill1Wght400Grad0Opsz48 from '../components/EditSquareFill1Wght400Grad0Opsz48'
import IconEditSquareFill1Wght500Grad0Opsz48 from '../components/EditSquareFill1Wght500Grad0Opsz48'
import IconEditSquareFill1Wght600Grad0Opsz48 from '../components/EditSquareFill1Wght600Grad0Opsz48'
import IconEditSquareFill1Wght700Grad0Opsz48 from '../components/EditSquareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEditSquare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditSquareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditSquareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditSquareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditSquareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditSquareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditSquareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditSquareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditSquareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditSquareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditSquareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditSquareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditSquareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditSquareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditSquareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
