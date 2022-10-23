import IconVideoCallFill0Wght100Grad0Opsz48 from '../components/VideoCallFill0Wght100Grad0Opsz48'
import IconVideoCallFill0Wght200Grad0Opsz48 from '../components/VideoCallFill0Wght200Grad0Opsz48'
import IconVideoCallFill0Wght300Grad0Opsz48 from '../components/VideoCallFill0Wght300Grad0Opsz48'
import IconVideoCallFill0Wght400Grad0Opsz48 from '../components/VideoCallFill0Wght400Grad0Opsz48'
import IconVideoCallFill0Wght500Grad0Opsz48 from '../components/VideoCallFill0Wght500Grad0Opsz48'
import IconVideoCallFill0Wght600Grad0Opsz48 from '../components/VideoCallFill0Wght600Grad0Opsz48'
import IconVideoCallFill0Wght700Grad0Opsz48 from '../components/VideoCallFill0Wght700Grad0Opsz48'
import IconVideoCallFill1Wght100Grad0Opsz48 from '../components/VideoCallFill1Wght100Grad0Opsz48'
import IconVideoCallFill1Wght200Grad0Opsz48 from '../components/VideoCallFill1Wght200Grad0Opsz48'
import IconVideoCallFill1Wght300Grad0Opsz48 from '../components/VideoCallFill1Wght300Grad0Opsz48'
import IconVideoCallFill1Wght400Grad0Opsz48 from '../components/VideoCallFill1Wght400Grad0Opsz48'
import IconVideoCallFill1Wght500Grad0Opsz48 from '../components/VideoCallFill1Wght500Grad0Opsz48'
import IconVideoCallFill1Wght600Grad0Opsz48 from '../components/VideoCallFill1Wght600Grad0Opsz48'
import IconVideoCallFill1Wght700Grad0Opsz48 from '../components/VideoCallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideoCall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideoCallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideoCallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideoCallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideoCallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideoCallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideoCallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideoCallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideoCallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideoCallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideoCallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideoCallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideoCallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideoCallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideoCallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
