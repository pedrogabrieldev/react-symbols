import IconPrivacyTipFill0Wght100Grad0Opsz48 from '../components/PrivacyTipFill0Wght100Grad0Opsz48'
import IconPrivacyTipFill0Wght200Grad0Opsz48 from '../components/PrivacyTipFill0Wght200Grad0Opsz48'
import IconPrivacyTipFill0Wght300Grad0Opsz48 from '../components/PrivacyTipFill0Wght300Grad0Opsz48'
import IconPrivacyTipFill0Wght400Grad0Opsz48 from '../components/PrivacyTipFill0Wght400Grad0Opsz48'
import IconPrivacyTipFill0Wght500Grad0Opsz48 from '../components/PrivacyTipFill0Wght500Grad0Opsz48'
import IconPrivacyTipFill0Wght600Grad0Opsz48 from '../components/PrivacyTipFill0Wght600Grad0Opsz48'
import IconPrivacyTipFill0Wght700Grad0Opsz48 from '../components/PrivacyTipFill0Wght700Grad0Opsz48'
import IconPrivacyTipFill1Wght100Grad0Opsz48 from '../components/PrivacyTipFill1Wght100Grad0Opsz48'
import IconPrivacyTipFill1Wght200Grad0Opsz48 from '../components/PrivacyTipFill1Wght200Grad0Opsz48'
import IconPrivacyTipFill1Wght300Grad0Opsz48 from '../components/PrivacyTipFill1Wght300Grad0Opsz48'
import IconPrivacyTipFill1Wght400Grad0Opsz48 from '../components/PrivacyTipFill1Wght400Grad0Opsz48'
import IconPrivacyTipFill1Wght500Grad0Opsz48 from '../components/PrivacyTipFill1Wght500Grad0Opsz48'
import IconPrivacyTipFill1Wght600Grad0Opsz48 from '../components/PrivacyTipFill1Wght600Grad0Opsz48'
import IconPrivacyTipFill1Wght700Grad0Opsz48 from '../components/PrivacyTipFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPrivacyTip = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPrivacyTipFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPrivacyTipFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPrivacyTipFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPrivacyTipFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPrivacyTipFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPrivacyTipFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPrivacyTipFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPrivacyTipFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPrivacyTipFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPrivacyTipFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPrivacyTipFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPrivacyTipFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPrivacyTipFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPrivacyTipFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
