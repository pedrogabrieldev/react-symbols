import IconCasinoFill0Wght100Grad0Opsz48 from '../components/CasinoFill0Wght100Grad0Opsz48'
import IconCasinoFill0Wght200Grad0Opsz48 from '../components/CasinoFill0Wght200Grad0Opsz48'
import IconCasinoFill0Wght300Grad0Opsz48 from '../components/CasinoFill0Wght300Grad0Opsz48'
import IconCasinoFill0Wght400Grad0Opsz48 from '../components/CasinoFill0Wght400Grad0Opsz48'
import IconCasinoFill0Wght500Grad0Opsz48 from '../components/CasinoFill0Wght500Grad0Opsz48'
import IconCasinoFill0Wght600Grad0Opsz48 from '../components/CasinoFill0Wght600Grad0Opsz48'
import IconCasinoFill0Wght700Grad0Opsz48 from '../components/CasinoFill0Wght700Grad0Opsz48'
import IconCasinoFill1Wght100Grad0Opsz48 from '../components/CasinoFill1Wght100Grad0Opsz48'
import IconCasinoFill1Wght200Grad0Opsz48 from '../components/CasinoFill1Wght200Grad0Opsz48'
import IconCasinoFill1Wght300Grad0Opsz48 from '../components/CasinoFill1Wght300Grad0Opsz48'
import IconCasinoFill1Wght400Grad0Opsz48 from '../components/CasinoFill1Wght400Grad0Opsz48'
import IconCasinoFill1Wght500Grad0Opsz48 from '../components/CasinoFill1Wght500Grad0Opsz48'
import IconCasinoFill1Wght600Grad0Opsz48 from '../components/CasinoFill1Wght600Grad0Opsz48'
import IconCasinoFill1Wght700Grad0Opsz48 from '../components/CasinoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCasino = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCasinoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCasinoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCasinoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCasinoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCasinoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCasinoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCasinoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCasinoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCasinoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCasinoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCasinoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCasinoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCasinoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCasinoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
