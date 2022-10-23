import IconTransitEnterexitFill0Wght100Grad0Opsz48 from '../components/TransitEnterexitFill0Wght100Grad0Opsz48'
import IconTransitEnterexitFill0Wght200Grad0Opsz48 from '../components/TransitEnterexitFill0Wght200Grad0Opsz48'
import IconTransitEnterexitFill0Wght300Grad0Opsz48 from '../components/TransitEnterexitFill0Wght300Grad0Opsz48'
import IconTransitEnterexitFill0Wght400Grad0Opsz48 from '../components/TransitEnterexitFill0Wght400Grad0Opsz48'
import IconTransitEnterexitFill0Wght500Grad0Opsz48 from '../components/TransitEnterexitFill0Wght500Grad0Opsz48'
import IconTransitEnterexitFill0Wght600Grad0Opsz48 from '../components/TransitEnterexitFill0Wght600Grad0Opsz48'
import IconTransitEnterexitFill0Wght700Grad0Opsz48 from '../components/TransitEnterexitFill0Wght700Grad0Opsz48'
import IconTransitEnterexitFill1Wght100Grad0Opsz48 from '../components/TransitEnterexitFill1Wght100Grad0Opsz48'
import IconTransitEnterexitFill1Wght200Grad0Opsz48 from '../components/TransitEnterexitFill1Wght200Grad0Opsz48'
import IconTransitEnterexitFill1Wght300Grad0Opsz48 from '../components/TransitEnterexitFill1Wght300Grad0Opsz48'
import IconTransitEnterexitFill1Wght400Grad0Opsz48 from '../components/TransitEnterexitFill1Wght400Grad0Opsz48'
import IconTransitEnterexitFill1Wght500Grad0Opsz48 from '../components/TransitEnterexitFill1Wght500Grad0Opsz48'
import IconTransitEnterexitFill1Wght600Grad0Opsz48 from '../components/TransitEnterexitFill1Wght600Grad0Opsz48'
import IconTransitEnterexitFill1Wght700Grad0Opsz48 from '../components/TransitEnterexitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTransitEnterexit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTransitEnterexitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTransitEnterexitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTransitEnterexitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTransitEnterexitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTransitEnterexitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTransitEnterexitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTransitEnterexitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTransitEnterexitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTransitEnterexitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTransitEnterexitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTransitEnterexitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTransitEnterexitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTransitEnterexitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTransitEnterexitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
