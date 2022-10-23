import IconPlumbingFill0Wght100Grad0Opsz48 from '../components/PlumbingFill0Wght100Grad0Opsz48'
import IconPlumbingFill0Wght200Grad0Opsz48 from '../components/PlumbingFill0Wght200Grad0Opsz48'
import IconPlumbingFill0Wght300Grad0Opsz48 from '../components/PlumbingFill0Wght300Grad0Opsz48'
import IconPlumbingFill0Wght400Grad0Opsz48 from '../components/PlumbingFill0Wght400Grad0Opsz48'
import IconPlumbingFill0Wght500Grad0Opsz48 from '../components/PlumbingFill0Wght500Grad0Opsz48'
import IconPlumbingFill0Wght600Grad0Opsz48 from '../components/PlumbingFill0Wght600Grad0Opsz48'
import IconPlumbingFill0Wght700Grad0Opsz48 from '../components/PlumbingFill0Wght700Grad0Opsz48'
import IconPlumbingFill1Wght100Grad0Opsz48 from '../components/PlumbingFill1Wght100Grad0Opsz48'
import IconPlumbingFill1Wght200Grad0Opsz48 from '../components/PlumbingFill1Wght200Grad0Opsz48'
import IconPlumbingFill1Wght300Grad0Opsz48 from '../components/PlumbingFill1Wght300Grad0Opsz48'
import IconPlumbingFill1Wght400Grad0Opsz48 from '../components/PlumbingFill1Wght400Grad0Opsz48'
import IconPlumbingFill1Wght500Grad0Opsz48 from '../components/PlumbingFill1Wght500Grad0Opsz48'
import IconPlumbingFill1Wght600Grad0Opsz48 from '../components/PlumbingFill1Wght600Grad0Opsz48'
import IconPlumbingFill1Wght700Grad0Opsz48 from '../components/PlumbingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlumbing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlumbingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlumbingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlumbingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlumbingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlumbingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlumbingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlumbingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlumbingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlumbingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlumbingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlumbingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlumbingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlumbingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlumbingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
