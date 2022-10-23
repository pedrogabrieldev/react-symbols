import IconMediationFill0Wght100Grad0Opsz48 from '../components/MediationFill0Wght100Grad0Opsz48'
import IconMediationFill0Wght200Grad0Opsz48 from '../components/MediationFill0Wght200Grad0Opsz48'
import IconMediationFill0Wght300Grad0Opsz48 from '../components/MediationFill0Wght300Grad0Opsz48'
import IconMediationFill0Wght400Grad0Opsz48 from '../components/MediationFill0Wght400Grad0Opsz48'
import IconMediationFill0Wght500Grad0Opsz48 from '../components/MediationFill0Wght500Grad0Opsz48'
import IconMediationFill0Wght600Grad0Opsz48 from '../components/MediationFill0Wght600Grad0Opsz48'
import IconMediationFill0Wght700Grad0Opsz48 from '../components/MediationFill0Wght700Grad0Opsz48'
import IconMediationFill1Wght100Grad0Opsz48 from '../components/MediationFill1Wght100Grad0Opsz48'
import IconMediationFill1Wght200Grad0Opsz48 from '../components/MediationFill1Wght200Grad0Opsz48'
import IconMediationFill1Wght300Grad0Opsz48 from '../components/MediationFill1Wght300Grad0Opsz48'
import IconMediationFill1Wght400Grad0Opsz48 from '../components/MediationFill1Wght400Grad0Opsz48'
import IconMediationFill1Wght500Grad0Opsz48 from '../components/MediationFill1Wght500Grad0Opsz48'
import IconMediationFill1Wght600Grad0Opsz48 from '../components/MediationFill1Wght600Grad0Opsz48'
import IconMediationFill1Wght700Grad0Opsz48 from '../components/MediationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMediation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMediationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMediationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMediationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMediationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMediationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMediationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMediationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMediationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMediationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMediationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMediationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMediationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMediationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMediationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
