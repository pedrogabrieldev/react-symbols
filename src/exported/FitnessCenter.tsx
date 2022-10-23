import IconFitnessCenterFill0Wght100Grad0Opsz48 from '../components/FitnessCenterFill0Wght100Grad0Opsz48'
import IconFitnessCenterFill0Wght200Grad0Opsz48 from '../components/FitnessCenterFill0Wght200Grad0Opsz48'
import IconFitnessCenterFill0Wght300Grad0Opsz48 from '../components/FitnessCenterFill0Wght300Grad0Opsz48'
import IconFitnessCenterFill0Wght400Grad0Opsz48 from '../components/FitnessCenterFill0Wght400Grad0Opsz48'
import IconFitnessCenterFill0Wght500Grad0Opsz48 from '../components/FitnessCenterFill0Wght500Grad0Opsz48'
import IconFitnessCenterFill0Wght600Grad0Opsz48 from '../components/FitnessCenterFill0Wght600Grad0Opsz48'
import IconFitnessCenterFill0Wght700Grad0Opsz48 from '../components/FitnessCenterFill0Wght700Grad0Opsz48'
import IconFitnessCenterFill1Wght100Grad0Opsz48 from '../components/FitnessCenterFill1Wght100Grad0Opsz48'
import IconFitnessCenterFill1Wght200Grad0Opsz48 from '../components/FitnessCenterFill1Wght200Grad0Opsz48'
import IconFitnessCenterFill1Wght300Grad0Opsz48 from '../components/FitnessCenterFill1Wght300Grad0Opsz48'
import IconFitnessCenterFill1Wght400Grad0Opsz48 from '../components/FitnessCenterFill1Wght400Grad0Opsz48'
import IconFitnessCenterFill1Wght500Grad0Opsz48 from '../components/FitnessCenterFill1Wght500Grad0Opsz48'
import IconFitnessCenterFill1Wght600Grad0Opsz48 from '../components/FitnessCenterFill1Wght600Grad0Opsz48'
import IconFitnessCenterFill1Wght700Grad0Opsz48 from '../components/FitnessCenterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFitnessCenter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFitnessCenterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFitnessCenterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFitnessCenterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFitnessCenterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFitnessCenterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFitnessCenterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFitnessCenterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFitnessCenterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFitnessCenterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFitnessCenterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFitnessCenterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFitnessCenterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFitnessCenterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFitnessCenterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
