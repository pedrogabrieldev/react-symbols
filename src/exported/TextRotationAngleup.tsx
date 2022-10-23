import IconTextRotationAngleupFill0Wght100Grad0Opsz48 from '../components/TextRotationAngleupFill0Wght100Grad0Opsz48'
import IconTextRotationAngleupFill0Wght200Grad0Opsz48 from '../components/TextRotationAngleupFill0Wght200Grad0Opsz48'
import IconTextRotationAngleupFill0Wght300Grad0Opsz48 from '../components/TextRotationAngleupFill0Wght300Grad0Opsz48'
import IconTextRotationAngleupFill0Wght400Grad0Opsz48 from '../components/TextRotationAngleupFill0Wght400Grad0Opsz48'
import IconTextRotationAngleupFill0Wght500Grad0Opsz48 from '../components/TextRotationAngleupFill0Wght500Grad0Opsz48'
import IconTextRotationAngleupFill0Wght600Grad0Opsz48 from '../components/TextRotationAngleupFill0Wght600Grad0Opsz48'
import IconTextRotationAngleupFill0Wght700Grad0Opsz48 from '../components/TextRotationAngleupFill0Wght700Grad0Opsz48'
import IconTextRotationAngleupFill1Wght100Grad0Opsz48 from '../components/TextRotationAngleupFill1Wght100Grad0Opsz48'
import IconTextRotationAngleupFill1Wght200Grad0Opsz48 from '../components/TextRotationAngleupFill1Wght200Grad0Opsz48'
import IconTextRotationAngleupFill1Wght300Grad0Opsz48 from '../components/TextRotationAngleupFill1Wght300Grad0Opsz48'
import IconTextRotationAngleupFill1Wght400Grad0Opsz48 from '../components/TextRotationAngleupFill1Wght400Grad0Opsz48'
import IconTextRotationAngleupFill1Wght500Grad0Opsz48 from '../components/TextRotationAngleupFill1Wght500Grad0Opsz48'
import IconTextRotationAngleupFill1Wght600Grad0Opsz48 from '../components/TextRotationAngleupFill1Wght600Grad0Opsz48'
import IconTextRotationAngleupFill1Wght700Grad0Opsz48 from '../components/TextRotationAngleupFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextRotationAngleup = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextRotationAngleupFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextRotationAngleupFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextRotationAngleupFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextRotationAngleupFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextRotationAngleupFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextRotationAngleupFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextRotationAngleupFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextRotationAngleupFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextRotationAngleupFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextRotationAngleupFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextRotationAngleupFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextRotationAngleupFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextRotationAngleupFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextRotationAngleupFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
