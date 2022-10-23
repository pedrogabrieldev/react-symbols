import IconAttributionFill0Wght100Grad0Opsz48 from '../components/AttributionFill0Wght100Grad0Opsz48'
import IconAttributionFill0Wght200Grad0Opsz48 from '../components/AttributionFill0Wght200Grad0Opsz48'
import IconAttributionFill0Wght300Grad0Opsz48 from '../components/AttributionFill0Wght300Grad0Opsz48'
import IconAttributionFill0Wght400Grad0Opsz48 from '../components/AttributionFill0Wght400Grad0Opsz48'
import IconAttributionFill0Wght500Grad0Opsz48 from '../components/AttributionFill0Wght500Grad0Opsz48'
import IconAttributionFill0Wght600Grad0Opsz48 from '../components/AttributionFill0Wght600Grad0Opsz48'
import IconAttributionFill0Wght700Grad0Opsz48 from '../components/AttributionFill0Wght700Grad0Opsz48'
import IconAttributionFill1Wght100Grad0Opsz48 from '../components/AttributionFill1Wght100Grad0Opsz48'
import IconAttributionFill1Wght200Grad0Opsz48 from '../components/AttributionFill1Wght200Grad0Opsz48'
import IconAttributionFill1Wght300Grad0Opsz48 from '../components/AttributionFill1Wght300Grad0Opsz48'
import IconAttributionFill1Wght400Grad0Opsz48 from '../components/AttributionFill1Wght400Grad0Opsz48'
import IconAttributionFill1Wght500Grad0Opsz48 from '../components/AttributionFill1Wght500Grad0Opsz48'
import IconAttributionFill1Wght600Grad0Opsz48 from '../components/AttributionFill1Wght600Grad0Opsz48'
import IconAttributionFill1Wght700Grad0Opsz48 from '../components/AttributionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAttribution = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAttributionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAttributionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAttributionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAttributionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAttributionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAttributionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAttributionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAttributionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAttributionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAttributionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAttributionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAttributionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAttributionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAttributionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
