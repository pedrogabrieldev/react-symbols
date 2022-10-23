import IconEuroSymbolFill0Wght100Grad0Opsz48 from '../components/EuroSymbolFill0Wght100Grad0Opsz48'
import IconEuroSymbolFill0Wght200Grad0Opsz48 from '../components/EuroSymbolFill0Wght200Grad0Opsz48'
import IconEuroSymbolFill0Wght300Grad0Opsz48 from '../components/EuroSymbolFill0Wght300Grad0Opsz48'
import IconEuroSymbolFill0Wght400Grad0Opsz48 from '../components/EuroSymbolFill0Wght400Grad0Opsz48'
import IconEuroSymbolFill0Wght500Grad0Opsz48 from '../components/EuroSymbolFill0Wght500Grad0Opsz48'
import IconEuroSymbolFill0Wght600Grad0Opsz48 from '../components/EuroSymbolFill0Wght600Grad0Opsz48'
import IconEuroSymbolFill0Wght700Grad0Opsz48 from '../components/EuroSymbolFill0Wght700Grad0Opsz48'
import IconEuroSymbolFill1Wght100Grad0Opsz48 from '../components/EuroSymbolFill1Wght100Grad0Opsz48'
import IconEuroSymbolFill1Wght200Grad0Opsz48 from '../components/EuroSymbolFill1Wght200Grad0Opsz48'
import IconEuroSymbolFill1Wght300Grad0Opsz48 from '../components/EuroSymbolFill1Wght300Grad0Opsz48'
import IconEuroSymbolFill1Wght400Grad0Opsz48 from '../components/EuroSymbolFill1Wght400Grad0Opsz48'
import IconEuroSymbolFill1Wght500Grad0Opsz48 from '../components/EuroSymbolFill1Wght500Grad0Opsz48'
import IconEuroSymbolFill1Wght600Grad0Opsz48 from '../components/EuroSymbolFill1Wght600Grad0Opsz48'
import IconEuroSymbolFill1Wght700Grad0Opsz48 from '../components/EuroSymbolFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEuroSymbol = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEuroSymbolFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEuroSymbolFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEuroSymbolFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEuroSymbolFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEuroSymbolFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEuroSymbolFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEuroSymbolFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEuroSymbolFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEuroSymbolFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEuroSymbolFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEuroSymbolFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEuroSymbolFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEuroSymbolFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEuroSymbolFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
