import IconOutgoingMailFill0Wght100Grad0Opsz48 from '../components/OutgoingMailFill0Wght100Grad0Opsz48'
import IconOutgoingMailFill0Wght200Grad0Opsz48 from '../components/OutgoingMailFill0Wght200Grad0Opsz48'
import IconOutgoingMailFill0Wght300Grad0Opsz48 from '../components/OutgoingMailFill0Wght300Grad0Opsz48'
import IconOutgoingMailFill0Wght400Grad0Opsz48 from '../components/OutgoingMailFill0Wght400Grad0Opsz48'
import IconOutgoingMailFill0Wght500Grad0Opsz48 from '../components/OutgoingMailFill0Wght500Grad0Opsz48'
import IconOutgoingMailFill0Wght600Grad0Opsz48 from '../components/OutgoingMailFill0Wght600Grad0Opsz48'
import IconOutgoingMailFill0Wght700Grad0Opsz48 from '../components/OutgoingMailFill0Wght700Grad0Opsz48'
import IconOutgoingMailFill1Wght100Grad0Opsz48 from '../components/OutgoingMailFill1Wght100Grad0Opsz48'
import IconOutgoingMailFill1Wght200Grad0Opsz48 from '../components/OutgoingMailFill1Wght200Grad0Opsz48'
import IconOutgoingMailFill1Wght300Grad0Opsz48 from '../components/OutgoingMailFill1Wght300Grad0Opsz48'
import IconOutgoingMailFill1Wght400Grad0Opsz48 from '../components/OutgoingMailFill1Wght400Grad0Opsz48'
import IconOutgoingMailFill1Wght500Grad0Opsz48 from '../components/OutgoingMailFill1Wght500Grad0Opsz48'
import IconOutgoingMailFill1Wght600Grad0Opsz48 from '../components/OutgoingMailFill1Wght600Grad0Opsz48'
import IconOutgoingMailFill1Wght700Grad0Opsz48 from '../components/OutgoingMailFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOutgoingMail = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOutgoingMailFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOutgoingMailFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOutgoingMailFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOutgoingMailFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOutgoingMailFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOutgoingMailFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOutgoingMailFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOutgoingMailFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOutgoingMailFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOutgoingMailFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOutgoingMailFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOutgoingMailFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOutgoingMailFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOutgoingMailFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
