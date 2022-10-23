import IconHomeMiniFill0Wght100Grad0Opsz48 from '../components/HomeMiniFill0Wght100Grad0Opsz48'
import IconHomeMiniFill0Wght200Grad0Opsz48 from '../components/HomeMiniFill0Wght200Grad0Opsz48'
import IconHomeMiniFill0Wght300Grad0Opsz48 from '../components/HomeMiniFill0Wght300Grad0Opsz48'
import IconHomeMiniFill0Wght400Grad0Opsz48 from '../components/HomeMiniFill0Wght400Grad0Opsz48'
import IconHomeMiniFill0Wght500Grad0Opsz48 from '../components/HomeMiniFill0Wght500Grad0Opsz48'
import IconHomeMiniFill0Wght600Grad0Opsz48 from '../components/HomeMiniFill0Wght600Grad0Opsz48'
import IconHomeMiniFill0Wght700Grad0Opsz48 from '../components/HomeMiniFill0Wght700Grad0Opsz48'
import IconHomeMiniFill1Wght100Grad0Opsz48 from '../components/HomeMiniFill1Wght100Grad0Opsz48'
import IconHomeMiniFill1Wght200Grad0Opsz48 from '../components/HomeMiniFill1Wght200Grad0Opsz48'
import IconHomeMiniFill1Wght300Grad0Opsz48 from '../components/HomeMiniFill1Wght300Grad0Opsz48'
import IconHomeMiniFill1Wght400Grad0Opsz48 from '../components/HomeMiniFill1Wght400Grad0Opsz48'
import IconHomeMiniFill1Wght500Grad0Opsz48 from '../components/HomeMiniFill1Wght500Grad0Opsz48'
import IconHomeMiniFill1Wght600Grad0Opsz48 from '../components/HomeMiniFill1Wght600Grad0Opsz48'
import IconHomeMiniFill1Wght700Grad0Opsz48 from '../components/HomeMiniFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHomeMini = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomeMiniFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomeMiniFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomeMiniFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomeMiniFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomeMiniFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomeMiniFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomeMiniFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomeMiniFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomeMiniFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomeMiniFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomeMiniFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomeMiniFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomeMiniFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomeMiniFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
