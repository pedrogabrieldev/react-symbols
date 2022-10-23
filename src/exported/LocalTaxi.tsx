import IconLocalTaxiFill0Wght100Grad0Opsz48 from '../components/LocalTaxiFill0Wght100Grad0Opsz48'
import IconLocalTaxiFill0Wght200Grad0Opsz48 from '../components/LocalTaxiFill0Wght200Grad0Opsz48'
import IconLocalTaxiFill0Wght300Grad0Opsz48 from '../components/LocalTaxiFill0Wght300Grad0Opsz48'
import IconLocalTaxiFill0Wght400Grad0Opsz48 from '../components/LocalTaxiFill0Wght400Grad0Opsz48'
import IconLocalTaxiFill0Wght500Grad0Opsz48 from '../components/LocalTaxiFill0Wght500Grad0Opsz48'
import IconLocalTaxiFill0Wght600Grad0Opsz48 from '../components/LocalTaxiFill0Wght600Grad0Opsz48'
import IconLocalTaxiFill0Wght700Grad0Opsz48 from '../components/LocalTaxiFill0Wght700Grad0Opsz48'
import IconLocalTaxiFill1Wght100Grad0Opsz48 from '../components/LocalTaxiFill1Wght100Grad0Opsz48'
import IconLocalTaxiFill1Wght200Grad0Opsz48 from '../components/LocalTaxiFill1Wght200Grad0Opsz48'
import IconLocalTaxiFill1Wght300Grad0Opsz48 from '../components/LocalTaxiFill1Wght300Grad0Opsz48'
import IconLocalTaxiFill1Wght400Grad0Opsz48 from '../components/LocalTaxiFill1Wght400Grad0Opsz48'
import IconLocalTaxiFill1Wght500Grad0Opsz48 from '../components/LocalTaxiFill1Wght500Grad0Opsz48'
import IconLocalTaxiFill1Wght600Grad0Opsz48 from '../components/LocalTaxiFill1Wght600Grad0Opsz48'
import IconLocalTaxiFill1Wght700Grad0Opsz48 from '../components/LocalTaxiFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalTaxi = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalTaxiFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalTaxiFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalTaxiFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalTaxiFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalTaxiFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalTaxiFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalTaxiFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalTaxiFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalTaxiFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalTaxiFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalTaxiFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalTaxiFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalTaxiFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalTaxiFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
