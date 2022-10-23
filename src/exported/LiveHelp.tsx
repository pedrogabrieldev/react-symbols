import IconLiveHelpFill0Wght100Grad0Opsz48 from '../components/LiveHelpFill0Wght100Grad0Opsz48'
import IconLiveHelpFill0Wght200Grad0Opsz48 from '../components/LiveHelpFill0Wght200Grad0Opsz48'
import IconLiveHelpFill0Wght300Grad0Opsz48 from '../components/LiveHelpFill0Wght300Grad0Opsz48'
import IconLiveHelpFill0Wght400Grad0Opsz48 from '../components/LiveHelpFill0Wght400Grad0Opsz48'
import IconLiveHelpFill0Wght500Grad0Opsz48 from '../components/LiveHelpFill0Wght500Grad0Opsz48'
import IconLiveHelpFill0Wght600Grad0Opsz48 from '../components/LiveHelpFill0Wght600Grad0Opsz48'
import IconLiveHelpFill0Wght700Grad0Opsz48 from '../components/LiveHelpFill0Wght700Grad0Opsz48'
import IconLiveHelpFill1Wght100Grad0Opsz48 from '../components/LiveHelpFill1Wght100Grad0Opsz48'
import IconLiveHelpFill1Wght200Grad0Opsz48 from '../components/LiveHelpFill1Wght200Grad0Opsz48'
import IconLiveHelpFill1Wght300Grad0Opsz48 from '../components/LiveHelpFill1Wght300Grad0Opsz48'
import IconLiveHelpFill1Wght400Grad0Opsz48 from '../components/LiveHelpFill1Wght400Grad0Opsz48'
import IconLiveHelpFill1Wght500Grad0Opsz48 from '../components/LiveHelpFill1Wght500Grad0Opsz48'
import IconLiveHelpFill1Wght600Grad0Opsz48 from '../components/LiveHelpFill1Wght600Grad0Opsz48'
import IconLiveHelpFill1Wght700Grad0Opsz48 from '../components/LiveHelpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLiveHelp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLiveHelpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLiveHelpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLiveHelpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLiveHelpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLiveHelpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLiveHelpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLiveHelpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLiveHelpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLiveHelpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLiveHelpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLiveHelpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLiveHelpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLiveHelpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLiveHelpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
