import IconNoPhotographyFill0Wght100Grad0Opsz48 from '../components/NoPhotographyFill0Wght100Grad0Opsz48'
import IconNoPhotographyFill0Wght200Grad0Opsz48 from '../components/NoPhotographyFill0Wght200Grad0Opsz48'
import IconNoPhotographyFill0Wght300Grad0Opsz48 from '../components/NoPhotographyFill0Wght300Grad0Opsz48'
import IconNoPhotographyFill0Wght400Grad0Opsz48 from '../components/NoPhotographyFill0Wght400Grad0Opsz48'
import IconNoPhotographyFill0Wght500Grad0Opsz48 from '../components/NoPhotographyFill0Wght500Grad0Opsz48'
import IconNoPhotographyFill0Wght600Grad0Opsz48 from '../components/NoPhotographyFill0Wght600Grad0Opsz48'
import IconNoPhotographyFill0Wght700Grad0Opsz48 from '../components/NoPhotographyFill0Wght700Grad0Opsz48'
import IconNoPhotographyFill1Wght100Grad0Opsz48 from '../components/NoPhotographyFill1Wght100Grad0Opsz48'
import IconNoPhotographyFill1Wght200Grad0Opsz48 from '../components/NoPhotographyFill1Wght200Grad0Opsz48'
import IconNoPhotographyFill1Wght300Grad0Opsz48 from '../components/NoPhotographyFill1Wght300Grad0Opsz48'
import IconNoPhotographyFill1Wght400Grad0Opsz48 from '../components/NoPhotographyFill1Wght400Grad0Opsz48'
import IconNoPhotographyFill1Wght500Grad0Opsz48 from '../components/NoPhotographyFill1Wght500Grad0Opsz48'
import IconNoPhotographyFill1Wght600Grad0Opsz48 from '../components/NoPhotographyFill1Wght600Grad0Opsz48'
import IconNoPhotographyFill1Wght700Grad0Opsz48 from '../components/NoPhotographyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoPhotography = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoPhotographyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoPhotographyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoPhotographyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoPhotographyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoPhotographyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoPhotographyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoPhotographyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoPhotographyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoPhotographyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoPhotographyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoPhotographyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoPhotographyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoPhotographyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoPhotographyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
