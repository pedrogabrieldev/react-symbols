import IconPhishingFill0Wght100Grad0Opsz48 from '../components/PhishingFill0Wght100Grad0Opsz48'
import IconPhishingFill0Wght200Grad0Opsz48 from '../components/PhishingFill0Wght200Grad0Opsz48'
import IconPhishingFill0Wght300Grad0Opsz48 from '../components/PhishingFill0Wght300Grad0Opsz48'
import IconPhishingFill0Wght400Grad0Opsz48 from '../components/PhishingFill0Wght400Grad0Opsz48'
import IconPhishingFill0Wght500Grad0Opsz48 from '../components/PhishingFill0Wght500Grad0Opsz48'
import IconPhishingFill0Wght600Grad0Opsz48 from '../components/PhishingFill0Wght600Grad0Opsz48'
import IconPhishingFill0Wght700Grad0Opsz48 from '../components/PhishingFill0Wght700Grad0Opsz48'
import IconPhishingFill1Wght100Grad0Opsz48 from '../components/PhishingFill1Wght100Grad0Opsz48'
import IconPhishingFill1Wght200Grad0Opsz48 from '../components/PhishingFill1Wght200Grad0Opsz48'
import IconPhishingFill1Wght300Grad0Opsz48 from '../components/PhishingFill1Wght300Grad0Opsz48'
import IconPhishingFill1Wght400Grad0Opsz48 from '../components/PhishingFill1Wght400Grad0Opsz48'
import IconPhishingFill1Wght500Grad0Opsz48 from '../components/PhishingFill1Wght500Grad0Opsz48'
import IconPhishingFill1Wght600Grad0Opsz48 from '../components/PhishingFill1Wght600Grad0Opsz48'
import IconPhishingFill1Wght700Grad0Opsz48 from '../components/PhishingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhishing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhishingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhishingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhishingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhishingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhishingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhishingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhishingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhishingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhishingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhishingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhishingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhishingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhishingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhishingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
