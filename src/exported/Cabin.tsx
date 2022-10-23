import IconCabinFill0Wght100Grad0Opsz48 from '../components/CabinFill0Wght100Grad0Opsz48'
import IconCabinFill0Wght200Grad0Opsz48 from '../components/CabinFill0Wght200Grad0Opsz48'
import IconCabinFill0Wght300Grad0Opsz48 from '../components/CabinFill0Wght300Grad0Opsz48'
import IconCabinFill0Wght400Grad0Opsz48 from '../components/CabinFill0Wght400Grad0Opsz48'
import IconCabinFill0Wght500Grad0Opsz48 from '../components/CabinFill0Wght500Grad0Opsz48'
import IconCabinFill0Wght600Grad0Opsz48 from '../components/CabinFill0Wght600Grad0Opsz48'
import IconCabinFill0Wght700Grad0Opsz48 from '../components/CabinFill0Wght700Grad0Opsz48'
import IconCabinFill1Wght100Grad0Opsz48 from '../components/CabinFill1Wght100Grad0Opsz48'
import IconCabinFill1Wght200Grad0Opsz48 from '../components/CabinFill1Wght200Grad0Opsz48'
import IconCabinFill1Wght300Grad0Opsz48 from '../components/CabinFill1Wght300Grad0Opsz48'
import IconCabinFill1Wght400Grad0Opsz48 from '../components/CabinFill1Wght400Grad0Opsz48'
import IconCabinFill1Wght500Grad0Opsz48 from '../components/CabinFill1Wght500Grad0Opsz48'
import IconCabinFill1Wght600Grad0Opsz48 from '../components/CabinFill1Wght600Grad0Opsz48'
import IconCabinFill1Wght700Grad0Opsz48 from '../components/CabinFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCabin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCabinFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCabinFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCabinFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCabinFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCabinFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCabinFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCabinFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCabinFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCabinFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCabinFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCabinFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCabinFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCabinFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCabinFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
