import IconAddCircleFill0Wght100Grad0Opsz48 from '../components/AddCircleFill0Wght100Grad0Opsz48'
import IconAddCircleFill0Wght200Grad0Opsz48 from '../components/AddCircleFill0Wght200Grad0Opsz48'
import IconAddCircleFill0Wght300Grad0Opsz48 from '../components/AddCircleFill0Wght300Grad0Opsz48'
import IconAddCircleFill0Wght400Grad0Opsz48 from '../components/AddCircleFill0Wght400Grad0Opsz48'
import IconAddCircleFill0Wght500Grad0Opsz48 from '../components/AddCircleFill0Wght500Grad0Opsz48'
import IconAddCircleFill0Wght600Grad0Opsz48 from '../components/AddCircleFill0Wght600Grad0Opsz48'
import IconAddCircleFill0Wght700Grad0Opsz48 from '../components/AddCircleFill0Wght700Grad0Opsz48'
import IconAddCircleFill1Wght100Grad0Opsz48 from '../components/AddCircleFill1Wght100Grad0Opsz48'
import IconAddCircleFill1Wght200Grad0Opsz48 from '../components/AddCircleFill1Wght200Grad0Opsz48'
import IconAddCircleFill1Wght300Grad0Opsz48 from '../components/AddCircleFill1Wght300Grad0Opsz48'
import IconAddCircleFill1Wght400Grad0Opsz48 from '../components/AddCircleFill1Wght400Grad0Opsz48'
import IconAddCircleFill1Wght500Grad0Opsz48 from '../components/AddCircleFill1Wght500Grad0Opsz48'
import IconAddCircleFill1Wght600Grad0Opsz48 from '../components/AddCircleFill1Wght600Grad0Opsz48'
import IconAddCircleFill1Wght700Grad0Opsz48 from '../components/AddCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
