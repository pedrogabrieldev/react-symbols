import IconLocationChipFill0Wght100Grad0Opsz48 from '../components/LocationChipFill0Wght100Grad0Opsz48'
import IconLocationChipFill0Wght200Grad0Opsz48 from '../components/LocationChipFill0Wght200Grad0Opsz48'
import IconLocationChipFill0Wght300Grad0Opsz48 from '../components/LocationChipFill0Wght300Grad0Opsz48'
import IconLocationChipFill0Wght400Grad0Opsz48 from '../components/LocationChipFill0Wght400Grad0Opsz48'
import IconLocationChipFill0Wght500Grad0Opsz48 from '../components/LocationChipFill0Wght500Grad0Opsz48'
import IconLocationChipFill0Wght600Grad0Opsz48 from '../components/LocationChipFill0Wght600Grad0Opsz48'
import IconLocationChipFill0Wght700Grad0Opsz48 from '../components/LocationChipFill0Wght700Grad0Opsz48'
import IconLocationChipFill1Wght100Grad0Opsz48 from '../components/LocationChipFill1Wght100Grad0Opsz48'
import IconLocationChipFill1Wght200Grad0Opsz48 from '../components/LocationChipFill1Wght200Grad0Opsz48'
import IconLocationChipFill1Wght300Grad0Opsz48 from '../components/LocationChipFill1Wght300Grad0Opsz48'
import IconLocationChipFill1Wght400Grad0Opsz48 from '../components/LocationChipFill1Wght400Grad0Opsz48'
import IconLocationChipFill1Wght500Grad0Opsz48 from '../components/LocationChipFill1Wght500Grad0Opsz48'
import IconLocationChipFill1Wght600Grad0Opsz48 from '../components/LocationChipFill1Wght600Grad0Opsz48'
import IconLocationChipFill1Wght700Grad0Opsz48 from '../components/LocationChipFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocationChip = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocationChipFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocationChipFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocationChipFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocationChipFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocationChipFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocationChipFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocationChipFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocationChipFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocationChipFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocationChipFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocationChipFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocationChipFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocationChipFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocationChipFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
