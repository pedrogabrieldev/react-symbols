import IconEuroFill0Wght100Grad0Opsz48 from '../components/EuroFill0Wght100Grad0Opsz48'
import IconEuroFill0Wght200Grad0Opsz48 from '../components/EuroFill0Wght200Grad0Opsz48'
import IconEuroFill0Wght300Grad0Opsz48 from '../components/EuroFill0Wght300Grad0Opsz48'
import IconEuroFill0Wght400Grad0Opsz48 from '../components/EuroFill0Wght400Grad0Opsz48'
import IconEuroFill0Wght500Grad0Opsz48 from '../components/EuroFill0Wght500Grad0Opsz48'
import IconEuroFill0Wght600Grad0Opsz48 from '../components/EuroFill0Wght600Grad0Opsz48'
import IconEuroFill0Wght700Grad0Opsz48 from '../components/EuroFill0Wght700Grad0Opsz48'
import IconEuroFill1Wght100Grad0Opsz48 from '../components/EuroFill1Wght100Grad0Opsz48'
import IconEuroFill1Wght200Grad0Opsz48 from '../components/EuroFill1Wght200Grad0Opsz48'
import IconEuroFill1Wght300Grad0Opsz48 from '../components/EuroFill1Wght300Grad0Opsz48'
import IconEuroFill1Wght400Grad0Opsz48 from '../components/EuroFill1Wght400Grad0Opsz48'
import IconEuroFill1Wght500Grad0Opsz48 from '../components/EuroFill1Wght500Grad0Opsz48'
import IconEuroFill1Wght600Grad0Opsz48 from '../components/EuroFill1Wght600Grad0Opsz48'
import IconEuroFill1Wght700Grad0Opsz48 from '../components/EuroFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEuro = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEuroFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEuroFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEuroFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEuroFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEuroFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEuroFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEuroFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEuroFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEuroFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEuroFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEuroFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEuroFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEuroFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEuroFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
