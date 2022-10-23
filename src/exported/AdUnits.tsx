import IconAdUnitsFill0Wght100Grad0Opsz48 from '../components/AdUnitsFill0Wght100Grad0Opsz48'
import IconAdUnitsFill0Wght200Grad0Opsz48 from '../components/AdUnitsFill0Wght200Grad0Opsz48'
import IconAdUnitsFill0Wght300Grad0Opsz48 from '../components/AdUnitsFill0Wght300Grad0Opsz48'
import IconAdUnitsFill0Wght400Grad0Opsz48 from '../components/AdUnitsFill0Wght400Grad0Opsz48'
import IconAdUnitsFill0Wght500Grad0Opsz48 from '../components/AdUnitsFill0Wght500Grad0Opsz48'
import IconAdUnitsFill0Wght600Grad0Opsz48 from '../components/AdUnitsFill0Wght600Grad0Opsz48'
import IconAdUnitsFill0Wght700Grad0Opsz48 from '../components/AdUnitsFill0Wght700Grad0Opsz48'
import IconAdUnitsFill1Wght100Grad0Opsz48 from '../components/AdUnitsFill1Wght100Grad0Opsz48'
import IconAdUnitsFill1Wght200Grad0Opsz48 from '../components/AdUnitsFill1Wght200Grad0Opsz48'
import IconAdUnitsFill1Wght300Grad0Opsz48 from '../components/AdUnitsFill1Wght300Grad0Opsz48'
import IconAdUnitsFill1Wght400Grad0Opsz48 from '../components/AdUnitsFill1Wght400Grad0Opsz48'
import IconAdUnitsFill1Wght500Grad0Opsz48 from '../components/AdUnitsFill1Wght500Grad0Opsz48'
import IconAdUnitsFill1Wght600Grad0Opsz48 from '../components/AdUnitsFill1Wght600Grad0Opsz48'
import IconAdUnitsFill1Wght700Grad0Opsz48 from '../components/AdUnitsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAdUnits = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAdUnitsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAdUnitsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAdUnitsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAdUnitsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAdUnitsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAdUnitsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAdUnitsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAdUnitsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAdUnitsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAdUnitsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAdUnitsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAdUnitsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAdUnitsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAdUnitsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
