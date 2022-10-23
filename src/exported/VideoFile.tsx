import IconVideoFileFill0Wght100Grad0Opsz48 from '../components/VideoFileFill0Wght100Grad0Opsz48'
import IconVideoFileFill0Wght200Grad0Opsz48 from '../components/VideoFileFill0Wght200Grad0Opsz48'
import IconVideoFileFill0Wght300Grad0Opsz48 from '../components/VideoFileFill0Wght300Grad0Opsz48'
import IconVideoFileFill0Wght400Grad0Opsz48 from '../components/VideoFileFill0Wght400Grad0Opsz48'
import IconVideoFileFill0Wght500Grad0Opsz48 from '../components/VideoFileFill0Wght500Grad0Opsz48'
import IconVideoFileFill0Wght600Grad0Opsz48 from '../components/VideoFileFill0Wght600Grad0Opsz48'
import IconVideoFileFill0Wght700Grad0Opsz48 from '../components/VideoFileFill0Wght700Grad0Opsz48'
import IconVideoFileFill1Wght100Grad0Opsz48 from '../components/VideoFileFill1Wght100Grad0Opsz48'
import IconVideoFileFill1Wght200Grad0Opsz48 from '../components/VideoFileFill1Wght200Grad0Opsz48'
import IconVideoFileFill1Wght300Grad0Opsz48 from '../components/VideoFileFill1Wght300Grad0Opsz48'
import IconVideoFileFill1Wght400Grad0Opsz48 from '../components/VideoFileFill1Wght400Grad0Opsz48'
import IconVideoFileFill1Wght500Grad0Opsz48 from '../components/VideoFileFill1Wght500Grad0Opsz48'
import IconVideoFileFill1Wght600Grad0Opsz48 from '../components/VideoFileFill1Wght600Grad0Opsz48'
import IconVideoFileFill1Wght700Grad0Opsz48 from '../components/VideoFileFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideoFile = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideoFileFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideoFileFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideoFileFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideoFileFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideoFileFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideoFileFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideoFileFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideoFileFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideoFileFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideoFileFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideoFileFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideoFileFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideoFileFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideoFileFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
