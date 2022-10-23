import IconTapasFill0Wght100Grad0Opsz48 from '../components/TapasFill0Wght100Grad0Opsz48'
import IconTapasFill0Wght200Grad0Opsz48 from '../components/TapasFill0Wght200Grad0Opsz48'
import IconTapasFill0Wght300Grad0Opsz48 from '../components/TapasFill0Wght300Grad0Opsz48'
import IconTapasFill0Wght400Grad0Opsz48 from '../components/TapasFill0Wght400Grad0Opsz48'
import IconTapasFill0Wght500Grad0Opsz48 from '../components/TapasFill0Wght500Grad0Opsz48'
import IconTapasFill0Wght600Grad0Opsz48 from '../components/TapasFill0Wght600Grad0Opsz48'
import IconTapasFill0Wght700Grad0Opsz48 from '../components/TapasFill0Wght700Grad0Opsz48'
import IconTapasFill1Wght100Grad0Opsz48 from '../components/TapasFill1Wght100Grad0Opsz48'
import IconTapasFill1Wght200Grad0Opsz48 from '../components/TapasFill1Wght200Grad0Opsz48'
import IconTapasFill1Wght300Grad0Opsz48 from '../components/TapasFill1Wght300Grad0Opsz48'
import IconTapasFill1Wght400Grad0Opsz48 from '../components/TapasFill1Wght400Grad0Opsz48'
import IconTapasFill1Wght500Grad0Opsz48 from '../components/TapasFill1Wght500Grad0Opsz48'
import IconTapasFill1Wght600Grad0Opsz48 from '../components/TapasFill1Wght600Grad0Opsz48'
import IconTapasFill1Wght700Grad0Opsz48 from '../components/TapasFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTapas = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTapasFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTapasFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTapasFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTapasFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTapasFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTapasFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTapasFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTapasFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTapasFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTapasFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTapasFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTapasFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTapasFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTapasFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
