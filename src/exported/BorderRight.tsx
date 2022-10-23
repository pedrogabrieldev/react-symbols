import IconBorderRightFill0Wght100Grad0Opsz48 from '../components/BorderRightFill0Wght100Grad0Opsz48'
import IconBorderRightFill0Wght200Grad0Opsz48 from '../components/BorderRightFill0Wght200Grad0Opsz48'
import IconBorderRightFill0Wght300Grad0Opsz48 from '../components/BorderRightFill0Wght300Grad0Opsz48'
import IconBorderRightFill0Wght400Grad0Opsz48 from '../components/BorderRightFill0Wght400Grad0Opsz48'
import IconBorderRightFill0Wght500Grad0Opsz48 from '../components/BorderRightFill0Wght500Grad0Opsz48'
import IconBorderRightFill0Wght600Grad0Opsz48 from '../components/BorderRightFill0Wght600Grad0Opsz48'
import IconBorderRightFill0Wght700Grad0Opsz48 from '../components/BorderRightFill0Wght700Grad0Opsz48'
import IconBorderRightFill1Wght100Grad0Opsz48 from '../components/BorderRightFill1Wght100Grad0Opsz48'
import IconBorderRightFill1Wght200Grad0Opsz48 from '../components/BorderRightFill1Wght200Grad0Opsz48'
import IconBorderRightFill1Wght300Grad0Opsz48 from '../components/BorderRightFill1Wght300Grad0Opsz48'
import IconBorderRightFill1Wght400Grad0Opsz48 from '../components/BorderRightFill1Wght400Grad0Opsz48'
import IconBorderRightFill1Wght500Grad0Opsz48 from '../components/BorderRightFill1Wght500Grad0Opsz48'
import IconBorderRightFill1Wght600Grad0Opsz48 from '../components/BorderRightFill1Wght600Grad0Opsz48'
import IconBorderRightFill1Wght700Grad0Opsz48 from '../components/BorderRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
