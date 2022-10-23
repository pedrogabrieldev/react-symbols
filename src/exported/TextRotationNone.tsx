import IconTextRotationNoneFill0Wght100Grad0Opsz48 from '../components/TextRotationNoneFill0Wght100Grad0Opsz48'
import IconTextRotationNoneFill0Wght200Grad0Opsz48 from '../components/TextRotationNoneFill0Wght200Grad0Opsz48'
import IconTextRotationNoneFill0Wght300Grad0Opsz48 from '../components/TextRotationNoneFill0Wght300Grad0Opsz48'
import IconTextRotationNoneFill0Wght400Grad0Opsz48 from '../components/TextRotationNoneFill0Wght400Grad0Opsz48'
import IconTextRotationNoneFill0Wght500Grad0Opsz48 from '../components/TextRotationNoneFill0Wght500Grad0Opsz48'
import IconTextRotationNoneFill0Wght600Grad0Opsz48 from '../components/TextRotationNoneFill0Wght600Grad0Opsz48'
import IconTextRotationNoneFill0Wght700Grad0Opsz48 from '../components/TextRotationNoneFill0Wght700Grad0Opsz48'
import IconTextRotationNoneFill1Wght100Grad0Opsz48 from '../components/TextRotationNoneFill1Wght100Grad0Opsz48'
import IconTextRotationNoneFill1Wght200Grad0Opsz48 from '../components/TextRotationNoneFill1Wght200Grad0Opsz48'
import IconTextRotationNoneFill1Wght300Grad0Opsz48 from '../components/TextRotationNoneFill1Wght300Grad0Opsz48'
import IconTextRotationNoneFill1Wght400Grad0Opsz48 from '../components/TextRotationNoneFill1Wght400Grad0Opsz48'
import IconTextRotationNoneFill1Wght500Grad0Opsz48 from '../components/TextRotationNoneFill1Wght500Grad0Opsz48'
import IconTextRotationNoneFill1Wght600Grad0Opsz48 from '../components/TextRotationNoneFill1Wght600Grad0Opsz48'
import IconTextRotationNoneFill1Wght700Grad0Opsz48 from '../components/TextRotationNoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextRotationNone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextRotationNoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextRotationNoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextRotationNoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextRotationNoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextRotationNoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextRotationNoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextRotationNoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextRotationNoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextRotationNoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextRotationNoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextRotationNoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextRotationNoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextRotationNoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextRotationNoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
