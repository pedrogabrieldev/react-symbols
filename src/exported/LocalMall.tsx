import IconLocalMallFill0Wght100Grad0Opsz48 from '../components/LocalMallFill0Wght100Grad0Opsz48'
import IconLocalMallFill0Wght200Grad0Opsz48 from '../components/LocalMallFill0Wght200Grad0Opsz48'
import IconLocalMallFill0Wght300Grad0Opsz48 from '../components/LocalMallFill0Wght300Grad0Opsz48'
import IconLocalMallFill0Wght400Grad0Opsz48 from '../components/LocalMallFill0Wght400Grad0Opsz48'
import IconLocalMallFill0Wght500Grad0Opsz48 from '../components/LocalMallFill0Wght500Grad0Opsz48'
import IconLocalMallFill0Wght600Grad0Opsz48 from '../components/LocalMallFill0Wght600Grad0Opsz48'
import IconLocalMallFill0Wght700Grad0Opsz48 from '../components/LocalMallFill0Wght700Grad0Opsz48'
import IconLocalMallFill1Wght100Grad0Opsz48 from '../components/LocalMallFill1Wght100Grad0Opsz48'
import IconLocalMallFill1Wght200Grad0Opsz48 from '../components/LocalMallFill1Wght200Grad0Opsz48'
import IconLocalMallFill1Wght300Grad0Opsz48 from '../components/LocalMallFill1Wght300Grad0Opsz48'
import IconLocalMallFill1Wght400Grad0Opsz48 from '../components/LocalMallFill1Wght400Grad0Opsz48'
import IconLocalMallFill1Wght500Grad0Opsz48 from '../components/LocalMallFill1Wght500Grad0Opsz48'
import IconLocalMallFill1Wght600Grad0Opsz48 from '../components/LocalMallFill1Wght600Grad0Opsz48'
import IconLocalMallFill1Wght700Grad0Opsz48 from '../components/LocalMallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalMall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalMallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalMallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalMallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalMallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalMallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalMallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalMallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalMallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalMallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalMallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalMallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalMallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalMallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalMallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
