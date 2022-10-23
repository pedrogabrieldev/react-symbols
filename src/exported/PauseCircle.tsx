import IconPauseCircleFill0Wght100Grad0Opsz48 from '../components/PauseCircleFill0Wght100Grad0Opsz48'
import IconPauseCircleFill0Wght200Grad0Opsz48 from '../components/PauseCircleFill0Wght200Grad0Opsz48'
import IconPauseCircleFill0Wght300Grad0Opsz48 from '../components/PauseCircleFill0Wght300Grad0Opsz48'
import IconPauseCircleFill0Wght400Grad0Opsz48 from '../components/PauseCircleFill0Wght400Grad0Opsz48'
import IconPauseCircleFill0Wght500Grad0Opsz48 from '../components/PauseCircleFill0Wght500Grad0Opsz48'
import IconPauseCircleFill0Wght600Grad0Opsz48 from '../components/PauseCircleFill0Wght600Grad0Opsz48'
import IconPauseCircleFill0Wght700Grad0Opsz48 from '../components/PauseCircleFill0Wght700Grad0Opsz48'
import IconPauseCircleFill1Wght100Grad0Opsz48 from '../components/PauseCircleFill1Wght100Grad0Opsz48'
import IconPauseCircleFill1Wght200Grad0Opsz48 from '../components/PauseCircleFill1Wght200Grad0Opsz48'
import IconPauseCircleFill1Wght300Grad0Opsz48 from '../components/PauseCircleFill1Wght300Grad0Opsz48'
import IconPauseCircleFill1Wght400Grad0Opsz48 from '../components/PauseCircleFill1Wght400Grad0Opsz48'
import IconPauseCircleFill1Wght500Grad0Opsz48 from '../components/PauseCircleFill1Wght500Grad0Opsz48'
import IconPauseCircleFill1Wght600Grad0Opsz48 from '../components/PauseCircleFill1Wght600Grad0Opsz48'
import IconPauseCircleFill1Wght700Grad0Opsz48 from '../components/PauseCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPauseCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPauseCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPauseCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPauseCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPauseCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPauseCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPauseCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPauseCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPauseCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPauseCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPauseCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPauseCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPauseCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPauseCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPauseCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
