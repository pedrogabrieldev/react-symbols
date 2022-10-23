import IconHexagonFill0Wght100Grad0Opsz48 from '../components/HexagonFill0Wght100Grad0Opsz48'
import IconHexagonFill0Wght200Grad0Opsz48 from '../components/HexagonFill0Wght200Grad0Opsz48'
import IconHexagonFill0Wght300Grad0Opsz48 from '../components/HexagonFill0Wght300Grad0Opsz48'
import IconHexagonFill0Wght400Grad0Opsz48 from '../components/HexagonFill0Wght400Grad0Opsz48'
import IconHexagonFill0Wght500Grad0Opsz48 from '../components/HexagonFill0Wght500Grad0Opsz48'
import IconHexagonFill0Wght600Grad0Opsz48 from '../components/HexagonFill0Wght600Grad0Opsz48'
import IconHexagonFill0Wght700Grad0Opsz48 from '../components/HexagonFill0Wght700Grad0Opsz48'
import IconHexagonFill1Wght100Grad0Opsz48 from '../components/HexagonFill1Wght100Grad0Opsz48'
import IconHexagonFill1Wght200Grad0Opsz48 from '../components/HexagonFill1Wght200Grad0Opsz48'
import IconHexagonFill1Wght300Grad0Opsz48 from '../components/HexagonFill1Wght300Grad0Opsz48'
import IconHexagonFill1Wght400Grad0Opsz48 from '../components/HexagonFill1Wght400Grad0Opsz48'
import IconHexagonFill1Wght500Grad0Opsz48 from '../components/HexagonFill1Wght500Grad0Opsz48'
import IconHexagonFill1Wght600Grad0Opsz48 from '../components/HexagonFill1Wght600Grad0Opsz48'
import IconHexagonFill1Wght700Grad0Opsz48 from '../components/HexagonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHexagon = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHexagonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHexagonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHexagonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHexagonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHexagonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHexagonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHexagonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHexagonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHexagonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHexagonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHexagonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHexagonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHexagonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHexagonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
