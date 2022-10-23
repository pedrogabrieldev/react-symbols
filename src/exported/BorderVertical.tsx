import IconBorderVerticalFill0Wght100Grad0Opsz48 from '../components/BorderVerticalFill0Wght100Grad0Opsz48'
import IconBorderVerticalFill0Wght200Grad0Opsz48 from '../components/BorderVerticalFill0Wght200Grad0Opsz48'
import IconBorderVerticalFill0Wght300Grad0Opsz48 from '../components/BorderVerticalFill0Wght300Grad0Opsz48'
import IconBorderVerticalFill0Wght400Grad0Opsz48 from '../components/BorderVerticalFill0Wght400Grad0Opsz48'
import IconBorderVerticalFill0Wght500Grad0Opsz48 from '../components/BorderVerticalFill0Wght500Grad0Opsz48'
import IconBorderVerticalFill0Wght600Grad0Opsz48 from '../components/BorderVerticalFill0Wght600Grad0Opsz48'
import IconBorderVerticalFill0Wght700Grad0Opsz48 from '../components/BorderVerticalFill0Wght700Grad0Opsz48'
import IconBorderVerticalFill1Wght100Grad0Opsz48 from '../components/BorderVerticalFill1Wght100Grad0Opsz48'
import IconBorderVerticalFill1Wght200Grad0Opsz48 from '../components/BorderVerticalFill1Wght200Grad0Opsz48'
import IconBorderVerticalFill1Wght300Grad0Opsz48 from '../components/BorderVerticalFill1Wght300Grad0Opsz48'
import IconBorderVerticalFill1Wght400Grad0Opsz48 from '../components/BorderVerticalFill1Wght400Grad0Opsz48'
import IconBorderVerticalFill1Wght500Grad0Opsz48 from '../components/BorderVerticalFill1Wght500Grad0Opsz48'
import IconBorderVerticalFill1Wght600Grad0Opsz48 from '../components/BorderVerticalFill1Wght600Grad0Opsz48'
import IconBorderVerticalFill1Wght700Grad0Opsz48 from '../components/BorderVerticalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderVertical = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderVerticalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderVerticalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderVerticalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderVerticalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderVerticalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderVerticalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderVerticalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderVerticalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderVerticalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderVerticalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderVerticalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderVerticalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderVerticalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderVerticalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
