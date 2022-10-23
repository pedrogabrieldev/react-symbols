import IconControlPointDuplicateFill0Wght100Grad0Opsz48 from '../components/ControlPointDuplicateFill0Wght100Grad0Opsz48'
import IconControlPointDuplicateFill0Wght200Grad0Opsz48 from '../components/ControlPointDuplicateFill0Wght200Grad0Opsz48'
import IconControlPointDuplicateFill0Wght300Grad0Opsz48 from '../components/ControlPointDuplicateFill0Wght300Grad0Opsz48'
import IconControlPointDuplicateFill0Wght400Grad0Opsz48 from '../components/ControlPointDuplicateFill0Wght400Grad0Opsz48'
import IconControlPointDuplicateFill0Wght500Grad0Opsz48 from '../components/ControlPointDuplicateFill0Wght500Grad0Opsz48'
import IconControlPointDuplicateFill0Wght600Grad0Opsz48 from '../components/ControlPointDuplicateFill0Wght600Grad0Opsz48'
import IconControlPointDuplicateFill0Wght700Grad0Opsz48 from '../components/ControlPointDuplicateFill0Wght700Grad0Opsz48'
import IconControlPointDuplicateFill1Wght100Grad0Opsz48 from '../components/ControlPointDuplicateFill1Wght100Grad0Opsz48'
import IconControlPointDuplicateFill1Wght200Grad0Opsz48 from '../components/ControlPointDuplicateFill1Wght200Grad0Opsz48'
import IconControlPointDuplicateFill1Wght300Grad0Opsz48 from '../components/ControlPointDuplicateFill1Wght300Grad0Opsz48'
import IconControlPointDuplicateFill1Wght400Grad0Opsz48 from '../components/ControlPointDuplicateFill1Wght400Grad0Opsz48'
import IconControlPointDuplicateFill1Wght500Grad0Opsz48 from '../components/ControlPointDuplicateFill1Wght500Grad0Opsz48'
import IconControlPointDuplicateFill1Wght600Grad0Opsz48 from '../components/ControlPointDuplicateFill1Wght600Grad0Opsz48'
import IconControlPointDuplicateFill1Wght700Grad0Opsz48 from '../components/ControlPointDuplicateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconControlPointDuplicate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconControlPointDuplicateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconControlPointDuplicateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconControlPointDuplicateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconControlPointDuplicateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconControlPointDuplicateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconControlPointDuplicateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconControlPointDuplicateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconControlPointDuplicateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconControlPointDuplicateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconControlPointDuplicateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconControlPointDuplicateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconControlPointDuplicateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconControlPointDuplicateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconControlPointDuplicateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
