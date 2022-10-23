import IconMailFill0Wght100Grad0Opsz48 from '../components/MailFill0Wght100Grad0Opsz48'
import IconMailFill0Wght200Grad0Opsz48 from '../components/MailFill0Wght200Grad0Opsz48'
import IconMailFill0Wght300Grad0Opsz48 from '../components/MailFill0Wght300Grad0Opsz48'
import IconMailFill0Wght400Grad0Opsz48 from '../components/MailFill0Wght400Grad0Opsz48'
import IconMailFill0Wght500Grad0Opsz48 from '../components/MailFill0Wght500Grad0Opsz48'
import IconMailFill0Wght600Grad0Opsz48 from '../components/MailFill0Wght600Grad0Opsz48'
import IconMailFill0Wght700Grad0Opsz48 from '../components/MailFill0Wght700Grad0Opsz48'
import IconMailFill1Wght100Grad0Opsz48 from '../components/MailFill1Wght100Grad0Opsz48'
import IconMailFill1Wght200Grad0Opsz48 from '../components/MailFill1Wght200Grad0Opsz48'
import IconMailFill1Wght300Grad0Opsz48 from '../components/MailFill1Wght300Grad0Opsz48'
import IconMailFill1Wght400Grad0Opsz48 from '../components/MailFill1Wght400Grad0Opsz48'
import IconMailFill1Wght500Grad0Opsz48 from '../components/MailFill1Wght500Grad0Opsz48'
import IconMailFill1Wght600Grad0Opsz48 from '../components/MailFill1Wght600Grad0Opsz48'
import IconMailFill1Wght700Grad0Opsz48 from '../components/MailFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMail = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMailFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMailFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMailFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMailFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMailFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMailFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMailFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMailFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMailFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMailFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMailFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMailFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMailFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMailFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
