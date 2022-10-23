import IconPrivacyFill0Wght100Grad0Opsz48 from '../components/PrivacyFill0Wght100Grad0Opsz48'
import IconPrivacyFill0Wght200Grad0Opsz48 from '../components/PrivacyFill0Wght200Grad0Opsz48'
import IconPrivacyFill0Wght300Grad0Opsz48 from '../components/PrivacyFill0Wght300Grad0Opsz48'
import IconPrivacyFill0Wght400Grad0Opsz48 from '../components/PrivacyFill0Wght400Grad0Opsz48'
import IconPrivacyFill0Wght500Grad0Opsz48 from '../components/PrivacyFill0Wght500Grad0Opsz48'
import IconPrivacyFill0Wght600Grad0Opsz48 from '../components/PrivacyFill0Wght600Grad0Opsz48'
import IconPrivacyFill0Wght700Grad0Opsz48 from '../components/PrivacyFill0Wght700Grad0Opsz48'
import IconPrivacyFill1Wght100Grad0Opsz48 from '../components/PrivacyFill1Wght100Grad0Opsz48'
import IconPrivacyFill1Wght200Grad0Opsz48 from '../components/PrivacyFill1Wght200Grad0Opsz48'
import IconPrivacyFill1Wght300Grad0Opsz48 from '../components/PrivacyFill1Wght300Grad0Opsz48'
import IconPrivacyFill1Wght400Grad0Opsz48 from '../components/PrivacyFill1Wght400Grad0Opsz48'
import IconPrivacyFill1Wght500Grad0Opsz48 from '../components/PrivacyFill1Wght500Grad0Opsz48'
import IconPrivacyFill1Wght600Grad0Opsz48 from '../components/PrivacyFill1Wght600Grad0Opsz48'
import IconPrivacyFill1Wght700Grad0Opsz48 from '../components/PrivacyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPrivacy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPrivacyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPrivacyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPrivacyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPrivacyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPrivacyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPrivacyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPrivacyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPrivacyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPrivacyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPrivacyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPrivacyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPrivacyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPrivacyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPrivacyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
