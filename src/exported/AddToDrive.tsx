import IconAddToDriveFill0Wght100Grad0Opsz48 from '../components/AddToDriveFill0Wght100Grad0Opsz48'
import IconAddToDriveFill0Wght200Grad0Opsz48 from '../components/AddToDriveFill0Wght200Grad0Opsz48'
import IconAddToDriveFill0Wght300Grad0Opsz48 from '../components/AddToDriveFill0Wght300Grad0Opsz48'
import IconAddToDriveFill0Wght400Grad0Opsz48 from '../components/AddToDriveFill0Wght400Grad0Opsz48'
import IconAddToDriveFill0Wght500Grad0Opsz48 from '../components/AddToDriveFill0Wght500Grad0Opsz48'
import IconAddToDriveFill0Wght600Grad0Opsz48 from '../components/AddToDriveFill0Wght600Grad0Opsz48'
import IconAddToDriveFill0Wght700Grad0Opsz48 from '../components/AddToDriveFill0Wght700Grad0Opsz48'
import IconAddToDriveFill1Wght100Grad0Opsz48 from '../components/AddToDriveFill1Wght100Grad0Opsz48'
import IconAddToDriveFill1Wght200Grad0Opsz48 from '../components/AddToDriveFill1Wght200Grad0Opsz48'
import IconAddToDriveFill1Wght300Grad0Opsz48 from '../components/AddToDriveFill1Wght300Grad0Opsz48'
import IconAddToDriveFill1Wght400Grad0Opsz48 from '../components/AddToDriveFill1Wght400Grad0Opsz48'
import IconAddToDriveFill1Wght500Grad0Opsz48 from '../components/AddToDriveFill1Wght500Grad0Opsz48'
import IconAddToDriveFill1Wght600Grad0Opsz48 from '../components/AddToDriveFill1Wght600Grad0Opsz48'
import IconAddToDriveFill1Wght700Grad0Opsz48 from '../components/AddToDriveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddToDrive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddToDriveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddToDriveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddToDriveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddToDriveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddToDriveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddToDriveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddToDriveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddToDriveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddToDriveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddToDriveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddToDriveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddToDriveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddToDriveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddToDriveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
