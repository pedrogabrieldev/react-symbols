import IconVerticalShadesClosedFill0Wght100Grad0Opsz48 from '../components/VerticalShadesClosedFill0Wght100Grad0Opsz48'
import IconVerticalShadesClosedFill0Wght200Grad0Opsz48 from '../components/VerticalShadesClosedFill0Wght200Grad0Opsz48'
import IconVerticalShadesClosedFill0Wght300Grad0Opsz48 from '../components/VerticalShadesClosedFill0Wght300Grad0Opsz48'
import IconVerticalShadesClosedFill0Wght400Grad0Opsz48 from '../components/VerticalShadesClosedFill0Wght400Grad0Opsz48'
import IconVerticalShadesClosedFill0Wght500Grad0Opsz48 from '../components/VerticalShadesClosedFill0Wght500Grad0Opsz48'
import IconVerticalShadesClosedFill0Wght600Grad0Opsz48 from '../components/VerticalShadesClosedFill0Wght600Grad0Opsz48'
import IconVerticalShadesClosedFill0Wght700Grad0Opsz48 from '../components/VerticalShadesClosedFill0Wght700Grad0Opsz48'
import IconVerticalShadesClosedFill1Wght100Grad0Opsz48 from '../components/VerticalShadesClosedFill1Wght100Grad0Opsz48'
import IconVerticalShadesClosedFill1Wght200Grad0Opsz48 from '../components/VerticalShadesClosedFill1Wght200Grad0Opsz48'
import IconVerticalShadesClosedFill1Wght300Grad0Opsz48 from '../components/VerticalShadesClosedFill1Wght300Grad0Opsz48'
import IconVerticalShadesClosedFill1Wght400Grad0Opsz48 from '../components/VerticalShadesClosedFill1Wght400Grad0Opsz48'
import IconVerticalShadesClosedFill1Wght500Grad0Opsz48 from '../components/VerticalShadesClosedFill1Wght500Grad0Opsz48'
import IconVerticalShadesClosedFill1Wght600Grad0Opsz48 from '../components/VerticalShadesClosedFill1Wght600Grad0Opsz48'
import IconVerticalShadesClosedFill1Wght700Grad0Opsz48 from '../components/VerticalShadesClosedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVerticalShadesClosed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVerticalShadesClosedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVerticalShadesClosedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVerticalShadesClosedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVerticalShadesClosedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVerticalShadesClosedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVerticalShadesClosedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVerticalShadesClosedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVerticalShadesClosedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVerticalShadesClosedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVerticalShadesClosedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVerticalShadesClosedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVerticalShadesClosedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVerticalShadesClosedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVerticalShadesClosedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
