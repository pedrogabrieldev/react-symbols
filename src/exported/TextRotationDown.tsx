import IconTextRotationDownFill0Wght100Grad0Opsz48 from '../components/TextRotationDownFill0Wght100Grad0Opsz48'
import IconTextRotationDownFill0Wght200Grad0Opsz48 from '../components/TextRotationDownFill0Wght200Grad0Opsz48'
import IconTextRotationDownFill0Wght300Grad0Opsz48 from '../components/TextRotationDownFill0Wght300Grad0Opsz48'
import IconTextRotationDownFill0Wght400Grad0Opsz48 from '../components/TextRotationDownFill0Wght400Grad0Opsz48'
import IconTextRotationDownFill0Wght500Grad0Opsz48 from '../components/TextRotationDownFill0Wght500Grad0Opsz48'
import IconTextRotationDownFill0Wght600Grad0Opsz48 from '../components/TextRotationDownFill0Wght600Grad0Opsz48'
import IconTextRotationDownFill0Wght700Grad0Opsz48 from '../components/TextRotationDownFill0Wght700Grad0Opsz48'
import IconTextRotationDownFill1Wght100Grad0Opsz48 from '../components/TextRotationDownFill1Wght100Grad0Opsz48'
import IconTextRotationDownFill1Wght200Grad0Opsz48 from '../components/TextRotationDownFill1Wght200Grad0Opsz48'
import IconTextRotationDownFill1Wght300Grad0Opsz48 from '../components/TextRotationDownFill1Wght300Grad0Opsz48'
import IconTextRotationDownFill1Wght400Grad0Opsz48 from '../components/TextRotationDownFill1Wght400Grad0Opsz48'
import IconTextRotationDownFill1Wght500Grad0Opsz48 from '../components/TextRotationDownFill1Wght500Grad0Opsz48'
import IconTextRotationDownFill1Wght600Grad0Opsz48 from '../components/TextRotationDownFill1Wght600Grad0Opsz48'
import IconTextRotationDownFill1Wght700Grad0Opsz48 from '../components/TextRotationDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextRotationDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextRotationDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextRotationDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextRotationDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextRotationDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextRotationDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextRotationDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextRotationDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextRotationDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextRotationDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextRotationDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextRotationDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextRotationDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextRotationDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextRotationDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
