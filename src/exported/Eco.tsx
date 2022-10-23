import IconEcoFill0Wght100Grad0Opsz48 from '../components/EcoFill0Wght100Grad0Opsz48'
import IconEcoFill0Wght200Grad0Opsz48 from '../components/EcoFill0Wght200Grad0Opsz48'
import IconEcoFill0Wght300Grad0Opsz48 from '../components/EcoFill0Wght300Grad0Opsz48'
import IconEcoFill0Wght400Grad0Opsz48 from '../components/EcoFill0Wght400Grad0Opsz48'
import IconEcoFill0Wght500Grad0Opsz48 from '../components/EcoFill0Wght500Grad0Opsz48'
import IconEcoFill0Wght600Grad0Opsz48 from '../components/EcoFill0Wght600Grad0Opsz48'
import IconEcoFill0Wght700Grad0Opsz48 from '../components/EcoFill0Wght700Grad0Opsz48'
import IconEcoFill1Wght100Grad0Opsz48 from '../components/EcoFill1Wght100Grad0Opsz48'
import IconEcoFill1Wght200Grad0Opsz48 from '../components/EcoFill1Wght200Grad0Opsz48'
import IconEcoFill1Wght300Grad0Opsz48 from '../components/EcoFill1Wght300Grad0Opsz48'
import IconEcoFill1Wght400Grad0Opsz48 from '../components/EcoFill1Wght400Grad0Opsz48'
import IconEcoFill1Wght500Grad0Opsz48 from '../components/EcoFill1Wght500Grad0Opsz48'
import IconEcoFill1Wght600Grad0Opsz48 from '../components/EcoFill1Wght600Grad0Opsz48'
import IconEcoFill1Wght700Grad0Opsz48 from '../components/EcoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEco = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEcoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEcoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEcoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEcoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEcoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEcoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEcoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEcoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEcoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEcoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEcoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEcoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEcoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEcoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
