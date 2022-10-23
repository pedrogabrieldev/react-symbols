import IconDeselectFill0Wght100Grad0Opsz48 from '../components/DeselectFill0Wght100Grad0Opsz48'
import IconDeselectFill0Wght200Grad0Opsz48 from '../components/DeselectFill0Wght200Grad0Opsz48'
import IconDeselectFill0Wght300Grad0Opsz48 from '../components/DeselectFill0Wght300Grad0Opsz48'
import IconDeselectFill0Wght400Grad0Opsz48 from '../components/DeselectFill0Wght400Grad0Opsz48'
import IconDeselectFill0Wght500Grad0Opsz48 from '../components/DeselectFill0Wght500Grad0Opsz48'
import IconDeselectFill0Wght600Grad0Opsz48 from '../components/DeselectFill0Wght600Grad0Opsz48'
import IconDeselectFill0Wght700Grad0Opsz48 from '../components/DeselectFill0Wght700Grad0Opsz48'
import IconDeselectFill1Wght100Grad0Opsz48 from '../components/DeselectFill1Wght100Grad0Opsz48'
import IconDeselectFill1Wght200Grad0Opsz48 from '../components/DeselectFill1Wght200Grad0Opsz48'
import IconDeselectFill1Wght300Grad0Opsz48 from '../components/DeselectFill1Wght300Grad0Opsz48'
import IconDeselectFill1Wght400Grad0Opsz48 from '../components/DeselectFill1Wght400Grad0Opsz48'
import IconDeselectFill1Wght500Grad0Opsz48 from '../components/DeselectFill1Wght500Grad0Opsz48'
import IconDeselectFill1Wght600Grad0Opsz48 from '../components/DeselectFill1Wght600Grad0Opsz48'
import IconDeselectFill1Wght700Grad0Opsz48 from '../components/DeselectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeselect = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeselectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeselectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeselectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeselectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeselectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeselectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeselectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeselectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeselectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeselectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeselectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeselectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeselectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeselectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
