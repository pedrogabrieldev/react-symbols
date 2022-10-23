import IconSquareFootFill0Wght100Grad0Opsz48 from '../components/SquareFootFill0Wght100Grad0Opsz48'
import IconSquareFootFill0Wght200Grad0Opsz48 from '../components/SquareFootFill0Wght200Grad0Opsz48'
import IconSquareFootFill0Wght300Grad0Opsz48 from '../components/SquareFootFill0Wght300Grad0Opsz48'
import IconSquareFootFill0Wght400Grad0Opsz48 from '../components/SquareFootFill0Wght400Grad0Opsz48'
import IconSquareFootFill0Wght500Grad0Opsz48 from '../components/SquareFootFill0Wght500Grad0Opsz48'
import IconSquareFootFill0Wght600Grad0Opsz48 from '../components/SquareFootFill0Wght600Grad0Opsz48'
import IconSquareFootFill0Wght700Grad0Opsz48 from '../components/SquareFootFill0Wght700Grad0Opsz48'
import IconSquareFootFill1Wght100Grad0Opsz48 from '../components/SquareFootFill1Wght100Grad0Opsz48'
import IconSquareFootFill1Wght200Grad0Opsz48 from '../components/SquareFootFill1Wght200Grad0Opsz48'
import IconSquareFootFill1Wght300Grad0Opsz48 from '../components/SquareFootFill1Wght300Grad0Opsz48'
import IconSquareFootFill1Wght400Grad0Opsz48 from '../components/SquareFootFill1Wght400Grad0Opsz48'
import IconSquareFootFill1Wght500Grad0Opsz48 from '../components/SquareFootFill1Wght500Grad0Opsz48'
import IconSquareFootFill1Wght600Grad0Opsz48 from '../components/SquareFootFill1Wght600Grad0Opsz48'
import IconSquareFootFill1Wght700Grad0Opsz48 from '../components/SquareFootFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSquareFoot = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSquareFootFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSquareFootFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSquareFootFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSquareFootFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSquareFootFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSquareFootFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSquareFootFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSquareFootFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSquareFootFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSquareFootFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSquareFootFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSquareFootFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSquareFootFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSquareFootFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
