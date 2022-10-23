import IconTagFill0Wght100Grad0Opsz48 from '../components/TagFill0Wght100Grad0Opsz48'
import IconTagFill0Wght200Grad0Opsz48 from '../components/TagFill0Wght200Grad0Opsz48'
import IconTagFill0Wght300Grad0Opsz48 from '../components/TagFill0Wght300Grad0Opsz48'
import IconTagFill0Wght400Grad0Opsz48 from '../components/TagFill0Wght400Grad0Opsz48'
import IconTagFill0Wght500Grad0Opsz48 from '../components/TagFill0Wght500Grad0Opsz48'
import IconTagFill0Wght600Grad0Opsz48 from '../components/TagFill0Wght600Grad0Opsz48'
import IconTagFill0Wght700Grad0Opsz48 from '../components/TagFill0Wght700Grad0Opsz48'
import IconTagFill1Wght100Grad0Opsz48 from '../components/TagFill1Wght100Grad0Opsz48'
import IconTagFill1Wght200Grad0Opsz48 from '../components/TagFill1Wght200Grad0Opsz48'
import IconTagFill1Wght300Grad0Opsz48 from '../components/TagFill1Wght300Grad0Opsz48'
import IconTagFill1Wght400Grad0Opsz48 from '../components/TagFill1Wght400Grad0Opsz48'
import IconTagFill1Wght500Grad0Opsz48 from '../components/TagFill1Wght500Grad0Opsz48'
import IconTagFill1Wght600Grad0Opsz48 from '../components/TagFill1Wght600Grad0Opsz48'
import IconTagFill1Wght700Grad0Opsz48 from '../components/TagFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTag = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTagFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTagFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTagFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTagFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTagFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTagFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTagFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTagFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTagFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTagFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTagFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTagFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTagFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTagFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
