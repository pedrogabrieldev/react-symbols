import IconMonetizationOnFill0Wght100Grad0Opsz48 from '../components/MonetizationOnFill0Wght100Grad0Opsz48'
import IconMonetizationOnFill0Wght200Grad0Opsz48 from '../components/MonetizationOnFill0Wght200Grad0Opsz48'
import IconMonetizationOnFill0Wght300Grad0Opsz48 from '../components/MonetizationOnFill0Wght300Grad0Opsz48'
import IconMonetizationOnFill0Wght400Grad0Opsz48 from '../components/MonetizationOnFill0Wght400Grad0Opsz48'
import IconMonetizationOnFill0Wght500Grad0Opsz48 from '../components/MonetizationOnFill0Wght500Grad0Opsz48'
import IconMonetizationOnFill0Wght600Grad0Opsz48 from '../components/MonetizationOnFill0Wght600Grad0Opsz48'
import IconMonetizationOnFill0Wght700Grad0Opsz48 from '../components/MonetizationOnFill0Wght700Grad0Opsz48'
import IconMonetizationOnFill1Wght100Grad0Opsz48 from '../components/MonetizationOnFill1Wght100Grad0Opsz48'
import IconMonetizationOnFill1Wght200Grad0Opsz48 from '../components/MonetizationOnFill1Wght200Grad0Opsz48'
import IconMonetizationOnFill1Wght300Grad0Opsz48 from '../components/MonetizationOnFill1Wght300Grad0Opsz48'
import IconMonetizationOnFill1Wght400Grad0Opsz48 from '../components/MonetizationOnFill1Wght400Grad0Opsz48'
import IconMonetizationOnFill1Wght500Grad0Opsz48 from '../components/MonetizationOnFill1Wght500Grad0Opsz48'
import IconMonetizationOnFill1Wght600Grad0Opsz48 from '../components/MonetizationOnFill1Wght600Grad0Opsz48'
import IconMonetizationOnFill1Wght700Grad0Opsz48 from '../components/MonetizationOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMonetizationOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMonetizationOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMonetizationOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMonetizationOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMonetizationOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMonetizationOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMonetizationOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMonetizationOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMonetizationOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMonetizationOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMonetizationOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMonetizationOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMonetizationOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMonetizationOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMonetizationOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
