import IconViewQuiltFill0Wght100Grad0Opsz48 from '../components/ViewQuiltFill0Wght100Grad0Opsz48'
import IconViewQuiltFill0Wght200Grad0Opsz48 from '../components/ViewQuiltFill0Wght200Grad0Opsz48'
import IconViewQuiltFill0Wght300Grad0Opsz48 from '../components/ViewQuiltFill0Wght300Grad0Opsz48'
import IconViewQuiltFill0Wght400Grad0Opsz48 from '../components/ViewQuiltFill0Wght400Grad0Opsz48'
import IconViewQuiltFill0Wght500Grad0Opsz48 from '../components/ViewQuiltFill0Wght500Grad0Opsz48'
import IconViewQuiltFill0Wght600Grad0Opsz48 from '../components/ViewQuiltFill0Wght600Grad0Opsz48'
import IconViewQuiltFill0Wght700Grad0Opsz48 from '../components/ViewQuiltFill0Wght700Grad0Opsz48'
import IconViewQuiltFill1Wght100Grad0Opsz48 from '../components/ViewQuiltFill1Wght100Grad0Opsz48'
import IconViewQuiltFill1Wght200Grad0Opsz48 from '../components/ViewQuiltFill1Wght200Grad0Opsz48'
import IconViewQuiltFill1Wght300Grad0Opsz48 from '../components/ViewQuiltFill1Wght300Grad0Opsz48'
import IconViewQuiltFill1Wght400Grad0Opsz48 from '../components/ViewQuiltFill1Wght400Grad0Opsz48'
import IconViewQuiltFill1Wght500Grad0Opsz48 from '../components/ViewQuiltFill1Wght500Grad0Opsz48'
import IconViewQuiltFill1Wght600Grad0Opsz48 from '../components/ViewQuiltFill1Wght600Grad0Opsz48'
import IconViewQuiltFill1Wght700Grad0Opsz48 from '../components/ViewQuiltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewQuilt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewQuiltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewQuiltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewQuiltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewQuiltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewQuiltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewQuiltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewQuiltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewQuiltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewQuiltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewQuiltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewQuiltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewQuiltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewQuiltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewQuiltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
