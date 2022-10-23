import IconRequestQuoteFill0Wght100Grad0Opsz48 from '../components/RequestQuoteFill0Wght100Grad0Opsz48'
import IconRequestQuoteFill0Wght200Grad0Opsz48 from '../components/RequestQuoteFill0Wght200Grad0Opsz48'
import IconRequestQuoteFill0Wght300Grad0Opsz48 from '../components/RequestQuoteFill0Wght300Grad0Opsz48'
import IconRequestQuoteFill0Wght400Grad0Opsz48 from '../components/RequestQuoteFill0Wght400Grad0Opsz48'
import IconRequestQuoteFill0Wght500Grad0Opsz48 from '../components/RequestQuoteFill0Wght500Grad0Opsz48'
import IconRequestQuoteFill0Wght600Grad0Opsz48 from '../components/RequestQuoteFill0Wght600Grad0Opsz48'
import IconRequestQuoteFill0Wght700Grad0Opsz48 from '../components/RequestQuoteFill0Wght700Grad0Opsz48'
import IconRequestQuoteFill1Wght100Grad0Opsz48 from '../components/RequestQuoteFill1Wght100Grad0Opsz48'
import IconRequestQuoteFill1Wght200Grad0Opsz48 from '../components/RequestQuoteFill1Wght200Grad0Opsz48'
import IconRequestQuoteFill1Wght300Grad0Opsz48 from '../components/RequestQuoteFill1Wght300Grad0Opsz48'
import IconRequestQuoteFill1Wght400Grad0Opsz48 from '../components/RequestQuoteFill1Wght400Grad0Opsz48'
import IconRequestQuoteFill1Wght500Grad0Opsz48 from '../components/RequestQuoteFill1Wght500Grad0Opsz48'
import IconRequestQuoteFill1Wght600Grad0Opsz48 from '../components/RequestQuoteFill1Wght600Grad0Opsz48'
import IconRequestQuoteFill1Wght700Grad0Opsz48 from '../components/RequestQuoteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRequestQuote = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRequestQuoteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRequestQuoteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRequestQuoteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRequestQuoteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRequestQuoteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRequestQuoteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRequestQuoteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRequestQuoteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRequestQuoteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRequestQuoteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRequestQuoteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRequestQuoteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRequestQuoteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRequestQuoteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
