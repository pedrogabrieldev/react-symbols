import IconFitScreenFill0Wght100Grad0Opsz48 from '../components/FitScreenFill0Wght100Grad0Opsz48'
import IconFitScreenFill0Wght200Grad0Opsz48 from '../components/FitScreenFill0Wght200Grad0Opsz48'
import IconFitScreenFill0Wght300Grad0Opsz48 from '../components/FitScreenFill0Wght300Grad0Opsz48'
import IconFitScreenFill0Wght400Grad0Opsz48 from '../components/FitScreenFill0Wght400Grad0Opsz48'
import IconFitScreenFill0Wght500Grad0Opsz48 from '../components/FitScreenFill0Wght500Grad0Opsz48'
import IconFitScreenFill0Wght600Grad0Opsz48 from '../components/FitScreenFill0Wght600Grad0Opsz48'
import IconFitScreenFill0Wght700Grad0Opsz48 from '../components/FitScreenFill0Wght700Grad0Opsz48'
import IconFitScreenFill1Wght100Grad0Opsz48 from '../components/FitScreenFill1Wght100Grad0Opsz48'
import IconFitScreenFill1Wght200Grad0Opsz48 from '../components/FitScreenFill1Wght200Grad0Opsz48'
import IconFitScreenFill1Wght300Grad0Opsz48 from '../components/FitScreenFill1Wght300Grad0Opsz48'
import IconFitScreenFill1Wght400Grad0Opsz48 from '../components/FitScreenFill1Wght400Grad0Opsz48'
import IconFitScreenFill1Wght500Grad0Opsz48 from '../components/FitScreenFill1Wght500Grad0Opsz48'
import IconFitScreenFill1Wght600Grad0Opsz48 from '../components/FitScreenFill1Wght600Grad0Opsz48'
import IconFitScreenFill1Wght700Grad0Opsz48 from '../components/FitScreenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFitScreen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFitScreenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFitScreenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFitScreenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFitScreenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFitScreenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFitScreenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFitScreenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFitScreenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFitScreenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFitScreenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFitScreenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFitScreenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFitScreenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFitScreenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
