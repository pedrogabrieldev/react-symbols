import IconWysiwygFill0Wght100Grad0Opsz48 from '../components/WysiwygFill0Wght100Grad0Opsz48'
import IconWysiwygFill0Wght200Grad0Opsz48 from '../components/WysiwygFill0Wght200Grad0Opsz48'
import IconWysiwygFill0Wght300Grad0Opsz48 from '../components/WysiwygFill0Wght300Grad0Opsz48'
import IconWysiwygFill0Wght400Grad0Opsz48 from '../components/WysiwygFill0Wght400Grad0Opsz48'
import IconWysiwygFill0Wght500Grad0Opsz48 from '../components/WysiwygFill0Wght500Grad0Opsz48'
import IconWysiwygFill0Wght600Grad0Opsz48 from '../components/WysiwygFill0Wght600Grad0Opsz48'
import IconWysiwygFill0Wght700Grad0Opsz48 from '../components/WysiwygFill0Wght700Grad0Opsz48'
import IconWysiwygFill1Wght100Grad0Opsz48 from '../components/WysiwygFill1Wght100Grad0Opsz48'
import IconWysiwygFill1Wght200Grad0Opsz48 from '../components/WysiwygFill1Wght200Grad0Opsz48'
import IconWysiwygFill1Wght300Grad0Opsz48 from '../components/WysiwygFill1Wght300Grad0Opsz48'
import IconWysiwygFill1Wght400Grad0Opsz48 from '../components/WysiwygFill1Wght400Grad0Opsz48'
import IconWysiwygFill1Wght500Grad0Opsz48 from '../components/WysiwygFill1Wght500Grad0Opsz48'
import IconWysiwygFill1Wght600Grad0Opsz48 from '../components/WysiwygFill1Wght600Grad0Opsz48'
import IconWysiwygFill1Wght700Grad0Opsz48 from '../components/WysiwygFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWysiwyg = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWysiwygFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWysiwygFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWysiwygFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWysiwygFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWysiwygFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWysiwygFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWysiwygFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWysiwygFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWysiwygFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWysiwygFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWysiwygFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWysiwygFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWysiwygFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWysiwygFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
