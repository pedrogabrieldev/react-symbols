import IconStrollerFill0Wght100Grad0Opsz48 from '../components/StrollerFill0Wght100Grad0Opsz48'
import IconStrollerFill0Wght200Grad0Opsz48 from '../components/StrollerFill0Wght200Grad0Opsz48'
import IconStrollerFill0Wght300Grad0Opsz48 from '../components/StrollerFill0Wght300Grad0Opsz48'
import IconStrollerFill0Wght400Grad0Opsz48 from '../components/StrollerFill0Wght400Grad0Opsz48'
import IconStrollerFill0Wght500Grad0Opsz48 from '../components/StrollerFill0Wght500Grad0Opsz48'
import IconStrollerFill0Wght600Grad0Opsz48 from '../components/StrollerFill0Wght600Grad0Opsz48'
import IconStrollerFill0Wght700Grad0Opsz48 from '../components/StrollerFill0Wght700Grad0Opsz48'
import IconStrollerFill1Wght100Grad0Opsz48 from '../components/StrollerFill1Wght100Grad0Opsz48'
import IconStrollerFill1Wght200Grad0Opsz48 from '../components/StrollerFill1Wght200Grad0Opsz48'
import IconStrollerFill1Wght300Grad0Opsz48 from '../components/StrollerFill1Wght300Grad0Opsz48'
import IconStrollerFill1Wght400Grad0Opsz48 from '../components/StrollerFill1Wght400Grad0Opsz48'
import IconStrollerFill1Wght500Grad0Opsz48 from '../components/StrollerFill1Wght500Grad0Opsz48'
import IconStrollerFill1Wght600Grad0Opsz48 from '../components/StrollerFill1Wght600Grad0Opsz48'
import IconStrollerFill1Wght700Grad0Opsz48 from '../components/StrollerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStroller = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStrollerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStrollerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStrollerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStrollerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStrollerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStrollerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStrollerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStrollerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStrollerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStrollerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStrollerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStrollerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStrollerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStrollerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
