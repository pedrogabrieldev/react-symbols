import IconRepartitionFill0Wght100Grad0Opsz48 from '../components/RepartitionFill0Wght100Grad0Opsz48'
import IconRepartitionFill0Wght200Grad0Opsz48 from '../components/RepartitionFill0Wght200Grad0Opsz48'
import IconRepartitionFill0Wght300Grad0Opsz48 from '../components/RepartitionFill0Wght300Grad0Opsz48'
import IconRepartitionFill0Wght400Grad0Opsz48 from '../components/RepartitionFill0Wght400Grad0Opsz48'
import IconRepartitionFill0Wght500Grad0Opsz48 from '../components/RepartitionFill0Wght500Grad0Opsz48'
import IconRepartitionFill0Wght600Grad0Opsz48 from '../components/RepartitionFill0Wght600Grad0Opsz48'
import IconRepartitionFill0Wght700Grad0Opsz48 from '../components/RepartitionFill0Wght700Grad0Opsz48'
import IconRepartitionFill1Wght100Grad0Opsz48 from '../components/RepartitionFill1Wght100Grad0Opsz48'
import IconRepartitionFill1Wght200Grad0Opsz48 from '../components/RepartitionFill1Wght200Grad0Opsz48'
import IconRepartitionFill1Wght300Grad0Opsz48 from '../components/RepartitionFill1Wght300Grad0Opsz48'
import IconRepartitionFill1Wght400Grad0Opsz48 from '../components/RepartitionFill1Wght400Grad0Opsz48'
import IconRepartitionFill1Wght500Grad0Opsz48 from '../components/RepartitionFill1Wght500Grad0Opsz48'
import IconRepartitionFill1Wght600Grad0Opsz48 from '../components/RepartitionFill1Wght600Grad0Opsz48'
import IconRepartitionFill1Wght700Grad0Opsz48 from '../components/RepartitionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRepartition = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRepartitionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRepartitionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRepartitionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRepartitionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRepartitionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRepartitionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRepartitionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRepartitionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRepartitionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRepartitionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRepartitionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRepartitionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRepartitionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRepartitionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
