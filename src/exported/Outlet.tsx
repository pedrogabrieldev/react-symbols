import IconOutletFill0Wght100Grad0Opsz48 from '../components/OutletFill0Wght100Grad0Opsz48'
import IconOutletFill0Wght200Grad0Opsz48 from '../components/OutletFill0Wght200Grad0Opsz48'
import IconOutletFill0Wght300Grad0Opsz48 from '../components/OutletFill0Wght300Grad0Opsz48'
import IconOutletFill0Wght400Grad0Opsz48 from '../components/OutletFill0Wght400Grad0Opsz48'
import IconOutletFill0Wght500Grad0Opsz48 from '../components/OutletFill0Wght500Grad0Opsz48'
import IconOutletFill0Wght600Grad0Opsz48 from '../components/OutletFill0Wght600Grad0Opsz48'
import IconOutletFill0Wght700Grad0Opsz48 from '../components/OutletFill0Wght700Grad0Opsz48'
import IconOutletFill1Wght100Grad0Opsz48 from '../components/OutletFill1Wght100Grad0Opsz48'
import IconOutletFill1Wght200Grad0Opsz48 from '../components/OutletFill1Wght200Grad0Opsz48'
import IconOutletFill1Wght300Grad0Opsz48 from '../components/OutletFill1Wght300Grad0Opsz48'
import IconOutletFill1Wght400Grad0Opsz48 from '../components/OutletFill1Wght400Grad0Opsz48'
import IconOutletFill1Wght500Grad0Opsz48 from '../components/OutletFill1Wght500Grad0Opsz48'
import IconOutletFill1Wght600Grad0Opsz48 from '../components/OutletFill1Wght600Grad0Opsz48'
import IconOutletFill1Wght700Grad0Opsz48 from '../components/OutletFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOutlet = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOutletFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOutletFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOutletFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOutletFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOutletFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOutletFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOutletFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOutletFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOutletFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOutletFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOutletFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOutletFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOutletFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOutletFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
