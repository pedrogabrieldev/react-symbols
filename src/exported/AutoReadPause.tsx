import IconAutoReadPauseFill0Wght100Grad0Opsz48 from '../components/AutoReadPauseFill0Wght100Grad0Opsz48'
import IconAutoReadPauseFill0Wght200Grad0Opsz48 from '../components/AutoReadPauseFill0Wght200Grad0Opsz48'
import IconAutoReadPauseFill0Wght300Grad0Opsz48 from '../components/AutoReadPauseFill0Wght300Grad0Opsz48'
import IconAutoReadPauseFill0Wght400Grad0Opsz48 from '../components/AutoReadPauseFill0Wght400Grad0Opsz48'
import IconAutoReadPauseFill0Wght500Grad0Opsz48 from '../components/AutoReadPauseFill0Wght500Grad0Opsz48'
import IconAutoReadPauseFill0Wght600Grad0Opsz48 from '../components/AutoReadPauseFill0Wght600Grad0Opsz48'
import IconAutoReadPauseFill0Wght700Grad0Opsz48 from '../components/AutoReadPauseFill0Wght700Grad0Opsz48'
import IconAutoReadPauseFill1Wght100Grad0Opsz48 from '../components/AutoReadPauseFill1Wght100Grad0Opsz48'
import IconAutoReadPauseFill1Wght200Grad0Opsz48 from '../components/AutoReadPauseFill1Wght200Grad0Opsz48'
import IconAutoReadPauseFill1Wght300Grad0Opsz48 from '../components/AutoReadPauseFill1Wght300Grad0Opsz48'
import IconAutoReadPauseFill1Wght400Grad0Opsz48 from '../components/AutoReadPauseFill1Wght400Grad0Opsz48'
import IconAutoReadPauseFill1Wght500Grad0Opsz48 from '../components/AutoReadPauseFill1Wght500Grad0Opsz48'
import IconAutoReadPauseFill1Wght600Grad0Opsz48 from '../components/AutoReadPauseFill1Wght600Grad0Opsz48'
import IconAutoReadPauseFill1Wght700Grad0Opsz48 from '../components/AutoReadPauseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoReadPause = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoReadPauseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoReadPauseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoReadPauseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoReadPauseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoReadPauseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoReadPauseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoReadPauseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoReadPauseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoReadPauseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoReadPauseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoReadPauseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoReadPauseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoReadPauseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoReadPauseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
