import IconHvacFill0Wght100Grad0Opsz48 from '../components/HvacFill0Wght100Grad0Opsz48'
import IconHvacFill0Wght200Grad0Opsz48 from '../components/HvacFill0Wght200Grad0Opsz48'
import IconHvacFill0Wght300Grad0Opsz48 from '../components/HvacFill0Wght300Grad0Opsz48'
import IconHvacFill0Wght400Grad0Opsz48 from '../components/HvacFill0Wght400Grad0Opsz48'
import IconHvacFill0Wght500Grad0Opsz48 from '../components/HvacFill0Wght500Grad0Opsz48'
import IconHvacFill0Wght600Grad0Opsz48 from '../components/HvacFill0Wght600Grad0Opsz48'
import IconHvacFill0Wght700Grad0Opsz48 from '../components/HvacFill0Wght700Grad0Opsz48'
import IconHvacFill1Wght100Grad0Opsz48 from '../components/HvacFill1Wght100Grad0Opsz48'
import IconHvacFill1Wght200Grad0Opsz48 from '../components/HvacFill1Wght200Grad0Opsz48'
import IconHvacFill1Wght300Grad0Opsz48 from '../components/HvacFill1Wght300Grad0Opsz48'
import IconHvacFill1Wght400Grad0Opsz48 from '../components/HvacFill1Wght400Grad0Opsz48'
import IconHvacFill1Wght500Grad0Opsz48 from '../components/HvacFill1Wght500Grad0Opsz48'
import IconHvacFill1Wght600Grad0Opsz48 from '../components/HvacFill1Wght600Grad0Opsz48'
import IconHvacFill1Wght700Grad0Opsz48 from '../components/HvacFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHvac = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHvacFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHvacFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHvacFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHvacFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHvacFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHvacFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHvacFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHvacFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHvacFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHvacFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHvacFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHvacFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHvacFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHvacFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
