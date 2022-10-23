import IconRemoteGenFill0Wght100Grad0Opsz48 from '../components/RemoteGenFill0Wght100Grad0Opsz48'
import IconRemoteGenFill0Wght200Grad0Opsz48 from '../components/RemoteGenFill0Wght200Grad0Opsz48'
import IconRemoteGenFill0Wght300Grad0Opsz48 from '../components/RemoteGenFill0Wght300Grad0Opsz48'
import IconRemoteGenFill0Wght400Grad0Opsz48 from '../components/RemoteGenFill0Wght400Grad0Opsz48'
import IconRemoteGenFill0Wght500Grad0Opsz48 from '../components/RemoteGenFill0Wght500Grad0Opsz48'
import IconRemoteGenFill0Wght600Grad0Opsz48 from '../components/RemoteGenFill0Wght600Grad0Opsz48'
import IconRemoteGenFill0Wght700Grad0Opsz48 from '../components/RemoteGenFill0Wght700Grad0Opsz48'
import IconRemoteGenFill1Wght100Grad0Opsz48 from '../components/RemoteGenFill1Wght100Grad0Opsz48'
import IconRemoteGenFill1Wght200Grad0Opsz48 from '../components/RemoteGenFill1Wght200Grad0Opsz48'
import IconRemoteGenFill1Wght300Grad0Opsz48 from '../components/RemoteGenFill1Wght300Grad0Opsz48'
import IconRemoteGenFill1Wght400Grad0Opsz48 from '../components/RemoteGenFill1Wght400Grad0Opsz48'
import IconRemoteGenFill1Wght500Grad0Opsz48 from '../components/RemoteGenFill1Wght500Grad0Opsz48'
import IconRemoteGenFill1Wght600Grad0Opsz48 from '../components/RemoteGenFill1Wght600Grad0Opsz48'
import IconRemoteGenFill1Wght700Grad0Opsz48 from '../components/RemoteGenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRemoteGen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRemoteGenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRemoteGenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRemoteGenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRemoteGenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRemoteGenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRemoteGenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRemoteGenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRemoteGenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRemoteGenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRemoteGenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRemoteGenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRemoteGenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRemoteGenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRemoteGenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
