import IconCallMissedOutgoingFill0Wght100Grad0Opsz48 from '../components/CallMissedOutgoingFill0Wght100Grad0Opsz48'
import IconCallMissedOutgoingFill0Wght200Grad0Opsz48 from '../components/CallMissedOutgoingFill0Wght200Grad0Opsz48'
import IconCallMissedOutgoingFill0Wght300Grad0Opsz48 from '../components/CallMissedOutgoingFill0Wght300Grad0Opsz48'
import IconCallMissedOutgoingFill0Wght400Grad0Opsz48 from '../components/CallMissedOutgoingFill0Wght400Grad0Opsz48'
import IconCallMissedOutgoingFill0Wght500Grad0Opsz48 from '../components/CallMissedOutgoingFill0Wght500Grad0Opsz48'
import IconCallMissedOutgoingFill0Wght600Grad0Opsz48 from '../components/CallMissedOutgoingFill0Wght600Grad0Opsz48'
import IconCallMissedOutgoingFill0Wght700Grad0Opsz48 from '../components/CallMissedOutgoingFill0Wght700Grad0Opsz48'
import IconCallMissedOutgoingFill1Wght100Grad0Opsz48 from '../components/CallMissedOutgoingFill1Wght100Grad0Opsz48'
import IconCallMissedOutgoingFill1Wght200Grad0Opsz48 from '../components/CallMissedOutgoingFill1Wght200Grad0Opsz48'
import IconCallMissedOutgoingFill1Wght300Grad0Opsz48 from '../components/CallMissedOutgoingFill1Wght300Grad0Opsz48'
import IconCallMissedOutgoingFill1Wght400Grad0Opsz48 from '../components/CallMissedOutgoingFill1Wght400Grad0Opsz48'
import IconCallMissedOutgoingFill1Wght500Grad0Opsz48 from '../components/CallMissedOutgoingFill1Wght500Grad0Opsz48'
import IconCallMissedOutgoingFill1Wght600Grad0Opsz48 from '../components/CallMissedOutgoingFill1Wght600Grad0Opsz48'
import IconCallMissedOutgoingFill1Wght700Grad0Opsz48 from '../components/CallMissedOutgoingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCallMissedOutgoing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCallMissedOutgoingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCallMissedOutgoingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCallMissedOutgoingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCallMissedOutgoingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCallMissedOutgoingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCallMissedOutgoingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCallMissedOutgoingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCallMissedOutgoingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCallMissedOutgoingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCallMissedOutgoingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCallMissedOutgoingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCallMissedOutgoingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCallMissedOutgoingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCallMissedOutgoingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
