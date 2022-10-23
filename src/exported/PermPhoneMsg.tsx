import IconPermPhoneMsgFill0Wght100Grad0Opsz48 from '../components/PermPhoneMsgFill0Wght100Grad0Opsz48'
import IconPermPhoneMsgFill0Wght200Grad0Opsz48 from '../components/PermPhoneMsgFill0Wght200Grad0Opsz48'
import IconPermPhoneMsgFill0Wght300Grad0Opsz48 from '../components/PermPhoneMsgFill0Wght300Grad0Opsz48'
import IconPermPhoneMsgFill0Wght400Grad0Opsz48 from '../components/PermPhoneMsgFill0Wght400Grad0Opsz48'
import IconPermPhoneMsgFill0Wght500Grad0Opsz48 from '../components/PermPhoneMsgFill0Wght500Grad0Opsz48'
import IconPermPhoneMsgFill0Wght600Grad0Opsz48 from '../components/PermPhoneMsgFill0Wght600Grad0Opsz48'
import IconPermPhoneMsgFill0Wght700Grad0Opsz48 from '../components/PermPhoneMsgFill0Wght700Grad0Opsz48'
import IconPermPhoneMsgFill1Wght100Grad0Opsz48 from '../components/PermPhoneMsgFill1Wght100Grad0Opsz48'
import IconPermPhoneMsgFill1Wght200Grad0Opsz48 from '../components/PermPhoneMsgFill1Wght200Grad0Opsz48'
import IconPermPhoneMsgFill1Wght300Grad0Opsz48 from '../components/PermPhoneMsgFill1Wght300Grad0Opsz48'
import IconPermPhoneMsgFill1Wght400Grad0Opsz48 from '../components/PermPhoneMsgFill1Wght400Grad0Opsz48'
import IconPermPhoneMsgFill1Wght500Grad0Opsz48 from '../components/PermPhoneMsgFill1Wght500Grad0Opsz48'
import IconPermPhoneMsgFill1Wght600Grad0Opsz48 from '../components/PermPhoneMsgFill1Wght600Grad0Opsz48'
import IconPermPhoneMsgFill1Wght700Grad0Opsz48 from '../components/PermPhoneMsgFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPermPhoneMsg = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPermPhoneMsgFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPermPhoneMsgFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPermPhoneMsgFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPermPhoneMsgFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPermPhoneMsgFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPermPhoneMsgFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPermPhoneMsgFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPermPhoneMsgFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPermPhoneMsgFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPermPhoneMsgFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPermPhoneMsgFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPermPhoneMsgFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPermPhoneMsgFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPermPhoneMsgFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
