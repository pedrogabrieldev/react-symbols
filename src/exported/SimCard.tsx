import IconSimCardFill0Wght100Grad0Opsz48 from '../components/SimCardFill0Wght100Grad0Opsz48'
import IconSimCardFill0Wght200Grad0Opsz48 from '../components/SimCardFill0Wght200Grad0Opsz48'
import IconSimCardFill0Wght300Grad0Opsz48 from '../components/SimCardFill0Wght300Grad0Opsz48'
import IconSimCardFill0Wght400Grad0Opsz48 from '../components/SimCardFill0Wght400Grad0Opsz48'
import IconSimCardFill0Wght500Grad0Opsz48 from '../components/SimCardFill0Wght500Grad0Opsz48'
import IconSimCardFill0Wght600Grad0Opsz48 from '../components/SimCardFill0Wght600Grad0Opsz48'
import IconSimCardFill0Wght700Grad0Opsz48 from '../components/SimCardFill0Wght700Grad0Opsz48'
import IconSimCardFill1Wght100Grad0Opsz48 from '../components/SimCardFill1Wght100Grad0Opsz48'
import IconSimCardFill1Wght200Grad0Opsz48 from '../components/SimCardFill1Wght200Grad0Opsz48'
import IconSimCardFill1Wght300Grad0Opsz48 from '../components/SimCardFill1Wght300Grad0Opsz48'
import IconSimCardFill1Wght400Grad0Opsz48 from '../components/SimCardFill1Wght400Grad0Opsz48'
import IconSimCardFill1Wght500Grad0Opsz48 from '../components/SimCardFill1Wght500Grad0Opsz48'
import IconSimCardFill1Wght600Grad0Opsz48 from '../components/SimCardFill1Wght600Grad0Opsz48'
import IconSimCardFill1Wght700Grad0Opsz48 from '../components/SimCardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSimCard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSimCardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSimCardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSimCardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSimCardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSimCardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSimCardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSimCardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSimCardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSimCardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSimCardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSimCardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSimCardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSimCardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSimCardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
