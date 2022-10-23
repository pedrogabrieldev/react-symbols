import IconTextRotationAngledownFill0Wght100Grad0Opsz48 from '../components/TextRotationAngledownFill0Wght100Grad0Opsz48'
import IconTextRotationAngledownFill0Wght200Grad0Opsz48 from '../components/TextRotationAngledownFill0Wght200Grad0Opsz48'
import IconTextRotationAngledownFill0Wght300Grad0Opsz48 from '../components/TextRotationAngledownFill0Wght300Grad0Opsz48'
import IconTextRotationAngledownFill0Wght400Grad0Opsz48 from '../components/TextRotationAngledownFill0Wght400Grad0Opsz48'
import IconTextRotationAngledownFill0Wght500Grad0Opsz48 from '../components/TextRotationAngledownFill0Wght500Grad0Opsz48'
import IconTextRotationAngledownFill0Wght600Grad0Opsz48 from '../components/TextRotationAngledownFill0Wght600Grad0Opsz48'
import IconTextRotationAngledownFill0Wght700Grad0Opsz48 from '../components/TextRotationAngledownFill0Wght700Grad0Opsz48'
import IconTextRotationAngledownFill1Wght100Grad0Opsz48 from '../components/TextRotationAngledownFill1Wght100Grad0Opsz48'
import IconTextRotationAngledownFill1Wght200Grad0Opsz48 from '../components/TextRotationAngledownFill1Wght200Grad0Opsz48'
import IconTextRotationAngledownFill1Wght300Grad0Opsz48 from '../components/TextRotationAngledownFill1Wght300Grad0Opsz48'
import IconTextRotationAngledownFill1Wght400Grad0Opsz48 from '../components/TextRotationAngledownFill1Wght400Grad0Opsz48'
import IconTextRotationAngledownFill1Wght500Grad0Opsz48 from '../components/TextRotationAngledownFill1Wght500Grad0Opsz48'
import IconTextRotationAngledownFill1Wght600Grad0Opsz48 from '../components/TextRotationAngledownFill1Wght600Grad0Opsz48'
import IconTextRotationAngledownFill1Wght700Grad0Opsz48 from '../components/TextRotationAngledownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextRotationAngledown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextRotationAngledownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextRotationAngledownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextRotationAngledownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextRotationAngledownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextRotationAngledownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextRotationAngledownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextRotationAngledownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextRotationAngledownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextRotationAngledownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextRotationAngledownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextRotationAngledownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextRotationAngledownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextRotationAngledownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextRotationAngledownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
