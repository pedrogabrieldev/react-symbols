import IconBusinessChipFill0Wght100Grad0Opsz48 from '../components/BusinessChipFill0Wght100Grad0Opsz48'
import IconBusinessChipFill0Wght200Grad0Opsz48 from '../components/BusinessChipFill0Wght200Grad0Opsz48'
import IconBusinessChipFill0Wght300Grad0Opsz48 from '../components/BusinessChipFill0Wght300Grad0Opsz48'
import IconBusinessChipFill0Wght400Grad0Opsz48 from '../components/BusinessChipFill0Wght400Grad0Opsz48'
import IconBusinessChipFill0Wght500Grad0Opsz48 from '../components/BusinessChipFill0Wght500Grad0Opsz48'
import IconBusinessChipFill0Wght600Grad0Opsz48 from '../components/BusinessChipFill0Wght600Grad0Opsz48'
import IconBusinessChipFill0Wght700Grad0Opsz48 from '../components/BusinessChipFill0Wght700Grad0Opsz48'
import IconBusinessChipFill1Wght100Grad0Opsz48 from '../components/BusinessChipFill1Wght100Grad0Opsz48'
import IconBusinessChipFill1Wght200Grad0Opsz48 from '../components/BusinessChipFill1Wght200Grad0Opsz48'
import IconBusinessChipFill1Wght300Grad0Opsz48 from '../components/BusinessChipFill1Wght300Grad0Opsz48'
import IconBusinessChipFill1Wght400Grad0Opsz48 from '../components/BusinessChipFill1Wght400Grad0Opsz48'
import IconBusinessChipFill1Wght500Grad0Opsz48 from '../components/BusinessChipFill1Wght500Grad0Opsz48'
import IconBusinessChipFill1Wght600Grad0Opsz48 from '../components/BusinessChipFill1Wght600Grad0Opsz48'
import IconBusinessChipFill1Wght700Grad0Opsz48 from '../components/BusinessChipFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBusinessChip = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBusinessChipFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBusinessChipFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBusinessChipFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBusinessChipFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBusinessChipFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBusinessChipFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBusinessChipFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBusinessChipFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBusinessChipFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBusinessChipFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBusinessChipFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBusinessChipFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBusinessChipFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBusinessChipFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
