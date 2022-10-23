import IconCallReceivedFill0Wght100Grad0Opsz48 from '../components/CallReceivedFill0Wght100Grad0Opsz48'
import IconCallReceivedFill0Wght200Grad0Opsz48 from '../components/CallReceivedFill0Wght200Grad0Opsz48'
import IconCallReceivedFill0Wght300Grad0Opsz48 from '../components/CallReceivedFill0Wght300Grad0Opsz48'
import IconCallReceivedFill0Wght400Grad0Opsz48 from '../components/CallReceivedFill0Wght400Grad0Opsz48'
import IconCallReceivedFill0Wght500Grad0Opsz48 from '../components/CallReceivedFill0Wght500Grad0Opsz48'
import IconCallReceivedFill0Wght600Grad0Opsz48 from '../components/CallReceivedFill0Wght600Grad0Opsz48'
import IconCallReceivedFill0Wght700Grad0Opsz48 from '../components/CallReceivedFill0Wght700Grad0Opsz48'
import IconCallReceivedFill1Wght100Grad0Opsz48 from '../components/CallReceivedFill1Wght100Grad0Opsz48'
import IconCallReceivedFill1Wght200Grad0Opsz48 from '../components/CallReceivedFill1Wght200Grad0Opsz48'
import IconCallReceivedFill1Wght300Grad0Opsz48 from '../components/CallReceivedFill1Wght300Grad0Opsz48'
import IconCallReceivedFill1Wght400Grad0Opsz48 from '../components/CallReceivedFill1Wght400Grad0Opsz48'
import IconCallReceivedFill1Wght500Grad0Opsz48 from '../components/CallReceivedFill1Wght500Grad0Opsz48'
import IconCallReceivedFill1Wght600Grad0Opsz48 from '../components/CallReceivedFill1Wght600Grad0Opsz48'
import IconCallReceivedFill1Wght700Grad0Opsz48 from '../components/CallReceivedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCallReceived = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCallReceivedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCallReceivedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCallReceivedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCallReceivedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCallReceivedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCallReceivedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCallReceivedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCallReceivedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCallReceivedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCallReceivedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCallReceivedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCallReceivedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCallReceivedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCallReceivedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
