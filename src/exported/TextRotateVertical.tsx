import IconTextRotateVerticalFill0Wght100Grad0Opsz48 from '../components/TextRotateVerticalFill0Wght100Grad0Opsz48'
import IconTextRotateVerticalFill0Wght200Grad0Opsz48 from '../components/TextRotateVerticalFill0Wght200Grad0Opsz48'
import IconTextRotateVerticalFill0Wght300Grad0Opsz48 from '../components/TextRotateVerticalFill0Wght300Grad0Opsz48'
import IconTextRotateVerticalFill0Wght400Grad0Opsz48 from '../components/TextRotateVerticalFill0Wght400Grad0Opsz48'
import IconTextRotateVerticalFill0Wght500Grad0Opsz48 from '../components/TextRotateVerticalFill0Wght500Grad0Opsz48'
import IconTextRotateVerticalFill0Wght600Grad0Opsz48 from '../components/TextRotateVerticalFill0Wght600Grad0Opsz48'
import IconTextRotateVerticalFill0Wght700Grad0Opsz48 from '../components/TextRotateVerticalFill0Wght700Grad0Opsz48'
import IconTextRotateVerticalFill1Wght100Grad0Opsz48 from '../components/TextRotateVerticalFill1Wght100Grad0Opsz48'
import IconTextRotateVerticalFill1Wght200Grad0Opsz48 from '../components/TextRotateVerticalFill1Wght200Grad0Opsz48'
import IconTextRotateVerticalFill1Wght300Grad0Opsz48 from '../components/TextRotateVerticalFill1Wght300Grad0Opsz48'
import IconTextRotateVerticalFill1Wght400Grad0Opsz48 from '../components/TextRotateVerticalFill1Wght400Grad0Opsz48'
import IconTextRotateVerticalFill1Wght500Grad0Opsz48 from '../components/TextRotateVerticalFill1Wght500Grad0Opsz48'
import IconTextRotateVerticalFill1Wght600Grad0Opsz48 from '../components/TextRotateVerticalFill1Wght600Grad0Opsz48'
import IconTextRotateVerticalFill1Wght700Grad0Opsz48 from '../components/TextRotateVerticalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextRotateVertical = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextRotateVerticalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextRotateVerticalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextRotateVerticalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextRotateVerticalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextRotateVerticalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextRotateVerticalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextRotateVerticalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextRotateVerticalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextRotateVerticalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextRotateVerticalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextRotateVerticalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextRotateVerticalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextRotateVerticalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextRotateVerticalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
