import IconBorderColorFill0Wght100Grad0Opsz48 from '../components/BorderColorFill0Wght100Grad0Opsz48'
import IconBorderColorFill0Wght200Grad0Opsz48 from '../components/BorderColorFill0Wght200Grad0Opsz48'
import IconBorderColorFill0Wght300Grad0Opsz48 from '../components/BorderColorFill0Wght300Grad0Opsz48'
import IconBorderColorFill0Wght400Grad0Opsz48 from '../components/BorderColorFill0Wght400Grad0Opsz48'
import IconBorderColorFill0Wght500Grad0Opsz48 from '../components/BorderColorFill0Wght500Grad0Opsz48'
import IconBorderColorFill0Wght600Grad0Opsz48 from '../components/BorderColorFill0Wght600Grad0Opsz48'
import IconBorderColorFill0Wght700Grad0Opsz48 from '../components/BorderColorFill0Wght700Grad0Opsz48'
import IconBorderColorFill1Wght100Grad0Opsz48 from '../components/BorderColorFill1Wght100Grad0Opsz48'
import IconBorderColorFill1Wght200Grad0Opsz48 from '../components/BorderColorFill1Wght200Grad0Opsz48'
import IconBorderColorFill1Wght300Grad0Opsz48 from '../components/BorderColorFill1Wght300Grad0Opsz48'
import IconBorderColorFill1Wght400Grad0Opsz48 from '../components/BorderColorFill1Wght400Grad0Opsz48'
import IconBorderColorFill1Wght500Grad0Opsz48 from '../components/BorderColorFill1Wght500Grad0Opsz48'
import IconBorderColorFill1Wght600Grad0Opsz48 from '../components/BorderColorFill1Wght600Grad0Opsz48'
import IconBorderColorFill1Wght700Grad0Opsz48 from '../components/BorderColorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderColor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderColorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderColorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderColorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderColorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderColorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderColorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderColorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderColorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderColorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderColorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderColorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderColorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderColorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderColorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
