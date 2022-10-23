import IconVillaFill0Wght100Grad0Opsz48 from '../components/VillaFill0Wght100Grad0Opsz48'
import IconVillaFill0Wght200Grad0Opsz48 from '../components/VillaFill0Wght200Grad0Opsz48'
import IconVillaFill0Wght300Grad0Opsz48 from '../components/VillaFill0Wght300Grad0Opsz48'
import IconVillaFill0Wght400Grad0Opsz48 from '../components/VillaFill0Wght400Grad0Opsz48'
import IconVillaFill0Wght500Grad0Opsz48 from '../components/VillaFill0Wght500Grad0Opsz48'
import IconVillaFill0Wght600Grad0Opsz48 from '../components/VillaFill0Wght600Grad0Opsz48'
import IconVillaFill0Wght700Grad0Opsz48 from '../components/VillaFill0Wght700Grad0Opsz48'
import IconVillaFill1Wght100Grad0Opsz48 from '../components/VillaFill1Wght100Grad0Opsz48'
import IconVillaFill1Wght200Grad0Opsz48 from '../components/VillaFill1Wght200Grad0Opsz48'
import IconVillaFill1Wght300Grad0Opsz48 from '../components/VillaFill1Wght300Grad0Opsz48'
import IconVillaFill1Wght400Grad0Opsz48 from '../components/VillaFill1Wght400Grad0Opsz48'
import IconVillaFill1Wght500Grad0Opsz48 from '../components/VillaFill1Wght500Grad0Opsz48'
import IconVillaFill1Wght600Grad0Opsz48 from '../components/VillaFill1Wght600Grad0Opsz48'
import IconVillaFill1Wght700Grad0Opsz48 from '../components/VillaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVilla = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVillaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVillaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVillaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVillaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVillaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVillaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVillaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVillaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVillaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVillaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVillaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVillaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVillaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVillaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
