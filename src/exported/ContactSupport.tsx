import IconContactSupportFill0Wght100Grad0Opsz48 from '../components/ContactSupportFill0Wght100Grad0Opsz48'
import IconContactSupportFill0Wght200Grad0Opsz48 from '../components/ContactSupportFill0Wght200Grad0Opsz48'
import IconContactSupportFill0Wght300Grad0Opsz48 from '../components/ContactSupportFill0Wght300Grad0Opsz48'
import IconContactSupportFill0Wght400Grad0Opsz48 from '../components/ContactSupportFill0Wght400Grad0Opsz48'
import IconContactSupportFill0Wght500Grad0Opsz48 from '../components/ContactSupportFill0Wght500Grad0Opsz48'
import IconContactSupportFill0Wght600Grad0Opsz48 from '../components/ContactSupportFill0Wght600Grad0Opsz48'
import IconContactSupportFill0Wght700Grad0Opsz48 from '../components/ContactSupportFill0Wght700Grad0Opsz48'
import IconContactSupportFill1Wght100Grad0Opsz48 from '../components/ContactSupportFill1Wght100Grad0Opsz48'
import IconContactSupportFill1Wght200Grad0Opsz48 from '../components/ContactSupportFill1Wght200Grad0Opsz48'
import IconContactSupportFill1Wght300Grad0Opsz48 from '../components/ContactSupportFill1Wght300Grad0Opsz48'
import IconContactSupportFill1Wght400Grad0Opsz48 from '../components/ContactSupportFill1Wght400Grad0Opsz48'
import IconContactSupportFill1Wght500Grad0Opsz48 from '../components/ContactSupportFill1Wght500Grad0Opsz48'
import IconContactSupportFill1Wght600Grad0Opsz48 from '../components/ContactSupportFill1Wght600Grad0Opsz48'
import IconContactSupportFill1Wght700Grad0Opsz48 from '../components/ContactSupportFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContactSupport = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContactSupportFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContactSupportFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContactSupportFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContactSupportFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContactSupportFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContactSupportFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContactSupportFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContactSupportFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContactSupportFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContactSupportFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContactSupportFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContactSupportFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContactSupportFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContactSupportFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
