import IconViewComfyFill0Wght100Grad0Opsz48 from '../components/ViewComfyFill0Wght100Grad0Opsz48'
import IconViewComfyFill0Wght200Grad0Opsz48 from '../components/ViewComfyFill0Wght200Grad0Opsz48'
import IconViewComfyFill0Wght300Grad0Opsz48 from '../components/ViewComfyFill0Wght300Grad0Opsz48'
import IconViewComfyFill0Wght400Grad0Opsz48 from '../components/ViewComfyFill0Wght400Grad0Opsz48'
import IconViewComfyFill0Wght500Grad0Opsz48 from '../components/ViewComfyFill0Wght500Grad0Opsz48'
import IconViewComfyFill0Wght600Grad0Opsz48 from '../components/ViewComfyFill0Wght600Grad0Opsz48'
import IconViewComfyFill0Wght700Grad0Opsz48 from '../components/ViewComfyFill0Wght700Grad0Opsz48'
import IconViewComfyFill1Wght100Grad0Opsz48 from '../components/ViewComfyFill1Wght100Grad0Opsz48'
import IconViewComfyFill1Wght200Grad0Opsz48 from '../components/ViewComfyFill1Wght200Grad0Opsz48'
import IconViewComfyFill1Wght300Grad0Opsz48 from '../components/ViewComfyFill1Wght300Grad0Opsz48'
import IconViewComfyFill1Wght400Grad0Opsz48 from '../components/ViewComfyFill1Wght400Grad0Opsz48'
import IconViewComfyFill1Wght500Grad0Opsz48 from '../components/ViewComfyFill1Wght500Grad0Opsz48'
import IconViewComfyFill1Wght600Grad0Opsz48 from '../components/ViewComfyFill1Wght600Grad0Opsz48'
import IconViewComfyFill1Wght700Grad0Opsz48 from '../components/ViewComfyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewComfy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewComfyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewComfyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewComfyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewComfyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewComfyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewComfyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewComfyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewComfyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewComfyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewComfyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewComfyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewComfyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewComfyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewComfyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
