import IconMailLockFill0Wght100Grad0Opsz48 from '../components/MailLockFill0Wght100Grad0Opsz48'
import IconMailLockFill0Wght200Grad0Opsz48 from '../components/MailLockFill0Wght200Grad0Opsz48'
import IconMailLockFill0Wght300Grad0Opsz48 from '../components/MailLockFill0Wght300Grad0Opsz48'
import IconMailLockFill0Wght400Grad0Opsz48 from '../components/MailLockFill0Wght400Grad0Opsz48'
import IconMailLockFill0Wght500Grad0Opsz48 from '../components/MailLockFill0Wght500Grad0Opsz48'
import IconMailLockFill0Wght600Grad0Opsz48 from '../components/MailLockFill0Wght600Grad0Opsz48'
import IconMailLockFill0Wght700Grad0Opsz48 from '../components/MailLockFill0Wght700Grad0Opsz48'
import IconMailLockFill1Wght100Grad0Opsz48 from '../components/MailLockFill1Wght100Grad0Opsz48'
import IconMailLockFill1Wght200Grad0Opsz48 from '../components/MailLockFill1Wght200Grad0Opsz48'
import IconMailLockFill1Wght300Grad0Opsz48 from '../components/MailLockFill1Wght300Grad0Opsz48'
import IconMailLockFill1Wght400Grad0Opsz48 from '../components/MailLockFill1Wght400Grad0Opsz48'
import IconMailLockFill1Wght500Grad0Opsz48 from '../components/MailLockFill1Wght500Grad0Opsz48'
import IconMailLockFill1Wght600Grad0Opsz48 from '../components/MailLockFill1Wght600Grad0Opsz48'
import IconMailLockFill1Wght700Grad0Opsz48 from '../components/MailLockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMailLock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMailLockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMailLockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMailLockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMailLockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMailLockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMailLockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMailLockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMailLockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMailLockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMailLockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMailLockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMailLockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMailLockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMailLockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
