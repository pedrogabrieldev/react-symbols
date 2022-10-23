import IconNearMeFill0Wght100Grad0Opsz48 from '../components/NearMeFill0Wght100Grad0Opsz48'
import IconNearMeFill0Wght200Grad0Opsz48 from '../components/NearMeFill0Wght200Grad0Opsz48'
import IconNearMeFill0Wght300Grad0Opsz48 from '../components/NearMeFill0Wght300Grad0Opsz48'
import IconNearMeFill0Wght400Grad0Opsz48 from '../components/NearMeFill0Wght400Grad0Opsz48'
import IconNearMeFill0Wght500Grad0Opsz48 from '../components/NearMeFill0Wght500Grad0Opsz48'
import IconNearMeFill0Wght600Grad0Opsz48 from '../components/NearMeFill0Wght600Grad0Opsz48'
import IconNearMeFill0Wght700Grad0Opsz48 from '../components/NearMeFill0Wght700Grad0Opsz48'
import IconNearMeFill1Wght100Grad0Opsz48 from '../components/NearMeFill1Wght100Grad0Opsz48'
import IconNearMeFill1Wght200Grad0Opsz48 from '../components/NearMeFill1Wght200Grad0Opsz48'
import IconNearMeFill1Wght300Grad0Opsz48 from '../components/NearMeFill1Wght300Grad0Opsz48'
import IconNearMeFill1Wght400Grad0Opsz48 from '../components/NearMeFill1Wght400Grad0Opsz48'
import IconNearMeFill1Wght500Grad0Opsz48 from '../components/NearMeFill1Wght500Grad0Opsz48'
import IconNearMeFill1Wght600Grad0Opsz48 from '../components/NearMeFill1Wght600Grad0Opsz48'
import IconNearMeFill1Wght700Grad0Opsz48 from '../components/NearMeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNearMe = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNearMeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNearMeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNearMeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNearMeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNearMeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNearMeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNearMeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNearMeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNearMeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNearMeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNearMeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNearMeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNearMeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNearMeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
