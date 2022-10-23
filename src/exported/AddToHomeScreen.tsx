import IconAddToHomeScreenFill0Wght100Grad0Opsz48 from '../components/AddToHomeScreenFill0Wght100Grad0Opsz48'
import IconAddToHomeScreenFill0Wght200Grad0Opsz48 from '../components/AddToHomeScreenFill0Wght200Grad0Opsz48'
import IconAddToHomeScreenFill0Wght300Grad0Opsz48 from '../components/AddToHomeScreenFill0Wght300Grad0Opsz48'
import IconAddToHomeScreenFill0Wght400Grad0Opsz48 from '../components/AddToHomeScreenFill0Wght400Grad0Opsz48'
import IconAddToHomeScreenFill0Wght500Grad0Opsz48 from '../components/AddToHomeScreenFill0Wght500Grad0Opsz48'
import IconAddToHomeScreenFill0Wght600Grad0Opsz48 from '../components/AddToHomeScreenFill0Wght600Grad0Opsz48'
import IconAddToHomeScreenFill0Wght700Grad0Opsz48 from '../components/AddToHomeScreenFill0Wght700Grad0Opsz48'
import IconAddToHomeScreenFill1Wght100Grad0Opsz48 from '../components/AddToHomeScreenFill1Wght100Grad0Opsz48'
import IconAddToHomeScreenFill1Wght200Grad0Opsz48 from '../components/AddToHomeScreenFill1Wght200Grad0Opsz48'
import IconAddToHomeScreenFill1Wght300Grad0Opsz48 from '../components/AddToHomeScreenFill1Wght300Grad0Opsz48'
import IconAddToHomeScreenFill1Wght400Grad0Opsz48 from '../components/AddToHomeScreenFill1Wght400Grad0Opsz48'
import IconAddToHomeScreenFill1Wght500Grad0Opsz48 from '../components/AddToHomeScreenFill1Wght500Grad0Opsz48'
import IconAddToHomeScreenFill1Wght600Grad0Opsz48 from '../components/AddToHomeScreenFill1Wght600Grad0Opsz48'
import IconAddToHomeScreenFill1Wght700Grad0Opsz48 from '../components/AddToHomeScreenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddToHomeScreen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddToHomeScreenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddToHomeScreenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddToHomeScreenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddToHomeScreenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddToHomeScreenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddToHomeScreenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddToHomeScreenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddToHomeScreenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddToHomeScreenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddToHomeScreenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddToHomeScreenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddToHomeScreenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddToHomeScreenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddToHomeScreenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
