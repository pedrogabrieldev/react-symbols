import IconBoyFill0Wght100Grad0Opsz48 from '../components/BoyFill0Wght100Grad0Opsz48'
import IconBoyFill0Wght200Grad0Opsz48 from '../components/BoyFill0Wght200Grad0Opsz48'
import IconBoyFill0Wght300Grad0Opsz48 from '../components/BoyFill0Wght300Grad0Opsz48'
import IconBoyFill0Wght400Grad0Opsz48 from '../components/BoyFill0Wght400Grad0Opsz48'
import IconBoyFill0Wght500Grad0Opsz48 from '../components/BoyFill0Wght500Grad0Opsz48'
import IconBoyFill0Wght600Grad0Opsz48 from '../components/BoyFill0Wght600Grad0Opsz48'
import IconBoyFill0Wght700Grad0Opsz48 from '../components/BoyFill0Wght700Grad0Opsz48'
import IconBoyFill1Wght100Grad0Opsz48 from '../components/BoyFill1Wght100Grad0Opsz48'
import IconBoyFill1Wght200Grad0Opsz48 from '../components/BoyFill1Wght200Grad0Opsz48'
import IconBoyFill1Wght300Grad0Opsz48 from '../components/BoyFill1Wght300Grad0Opsz48'
import IconBoyFill1Wght400Grad0Opsz48 from '../components/BoyFill1Wght400Grad0Opsz48'
import IconBoyFill1Wght500Grad0Opsz48 from '../components/BoyFill1Wght500Grad0Opsz48'
import IconBoyFill1Wght600Grad0Opsz48 from '../components/BoyFill1Wght600Grad0Opsz48'
import IconBoyFill1Wght700Grad0Opsz48 from '../components/BoyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBoy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBoyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBoyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBoyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBoyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBoyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBoyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBoyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBoyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBoyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBoyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBoyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBoyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBoyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBoyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
