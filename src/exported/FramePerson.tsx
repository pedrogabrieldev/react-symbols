import IconFramePersonFill0Wght100Grad0Opsz48 from '../components/FramePersonFill0Wght100Grad0Opsz48'
import IconFramePersonFill0Wght200Grad0Opsz48 from '../components/FramePersonFill0Wght200Grad0Opsz48'
import IconFramePersonFill0Wght300Grad0Opsz48 from '../components/FramePersonFill0Wght300Grad0Opsz48'
import IconFramePersonFill0Wght400Grad0Opsz48 from '../components/FramePersonFill0Wght400Grad0Opsz48'
import IconFramePersonFill0Wght500Grad0Opsz48 from '../components/FramePersonFill0Wght500Grad0Opsz48'
import IconFramePersonFill0Wght600Grad0Opsz48 from '../components/FramePersonFill0Wght600Grad0Opsz48'
import IconFramePersonFill0Wght700Grad0Opsz48 from '../components/FramePersonFill0Wght700Grad0Opsz48'
import IconFramePersonFill1Wght100Grad0Opsz48 from '../components/FramePersonFill1Wght100Grad0Opsz48'
import IconFramePersonFill1Wght200Grad0Opsz48 from '../components/FramePersonFill1Wght200Grad0Opsz48'
import IconFramePersonFill1Wght300Grad0Opsz48 from '../components/FramePersonFill1Wght300Grad0Opsz48'
import IconFramePersonFill1Wght400Grad0Opsz48 from '../components/FramePersonFill1Wght400Grad0Opsz48'
import IconFramePersonFill1Wght500Grad0Opsz48 from '../components/FramePersonFill1Wght500Grad0Opsz48'
import IconFramePersonFill1Wght600Grad0Opsz48 from '../components/FramePersonFill1Wght600Grad0Opsz48'
import IconFramePersonFill1Wght700Grad0Opsz48 from '../components/FramePersonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFramePerson = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFramePersonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFramePersonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFramePersonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFramePersonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFramePersonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFramePersonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFramePersonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFramePersonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFramePersonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFramePersonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFramePersonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFramePersonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFramePersonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFramePersonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
