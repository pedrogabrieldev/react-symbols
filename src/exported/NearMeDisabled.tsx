import IconNearMeDisabledFill0Wght100Grad0Opsz48 from '../components/NearMeDisabledFill0Wght100Grad0Opsz48'
import IconNearMeDisabledFill0Wght200Grad0Opsz48 from '../components/NearMeDisabledFill0Wght200Grad0Opsz48'
import IconNearMeDisabledFill0Wght300Grad0Opsz48 from '../components/NearMeDisabledFill0Wght300Grad0Opsz48'
import IconNearMeDisabledFill0Wght400Grad0Opsz48 from '../components/NearMeDisabledFill0Wght400Grad0Opsz48'
import IconNearMeDisabledFill0Wght500Grad0Opsz48 from '../components/NearMeDisabledFill0Wght500Grad0Opsz48'
import IconNearMeDisabledFill0Wght600Grad0Opsz48 from '../components/NearMeDisabledFill0Wght600Grad0Opsz48'
import IconNearMeDisabledFill0Wght700Grad0Opsz48 from '../components/NearMeDisabledFill0Wght700Grad0Opsz48'
import IconNearMeDisabledFill1Wght100Grad0Opsz48 from '../components/NearMeDisabledFill1Wght100Grad0Opsz48'
import IconNearMeDisabledFill1Wght200Grad0Opsz48 from '../components/NearMeDisabledFill1Wght200Grad0Opsz48'
import IconNearMeDisabledFill1Wght300Grad0Opsz48 from '../components/NearMeDisabledFill1Wght300Grad0Opsz48'
import IconNearMeDisabledFill1Wght400Grad0Opsz48 from '../components/NearMeDisabledFill1Wght400Grad0Opsz48'
import IconNearMeDisabledFill1Wght500Grad0Opsz48 from '../components/NearMeDisabledFill1Wght500Grad0Opsz48'
import IconNearMeDisabledFill1Wght600Grad0Opsz48 from '../components/NearMeDisabledFill1Wght600Grad0Opsz48'
import IconNearMeDisabledFill1Wght700Grad0Opsz48 from '../components/NearMeDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNearMeDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNearMeDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNearMeDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNearMeDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNearMeDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNearMeDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNearMeDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNearMeDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNearMeDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNearMeDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNearMeDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNearMeDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNearMeDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNearMeDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNearMeDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
