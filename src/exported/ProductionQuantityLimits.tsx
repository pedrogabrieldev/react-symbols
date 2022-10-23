import IconProductionQuantityLimitsFill0Wght100Grad0Opsz48 from '../components/ProductionQuantityLimitsFill0Wght100Grad0Opsz48'
import IconProductionQuantityLimitsFill0Wght200Grad0Opsz48 from '../components/ProductionQuantityLimitsFill0Wght200Grad0Opsz48'
import IconProductionQuantityLimitsFill0Wght300Grad0Opsz48 from '../components/ProductionQuantityLimitsFill0Wght300Grad0Opsz48'
import IconProductionQuantityLimitsFill0Wght400Grad0Opsz48 from '../components/ProductionQuantityLimitsFill0Wght400Grad0Opsz48'
import IconProductionQuantityLimitsFill0Wght500Grad0Opsz48 from '../components/ProductionQuantityLimitsFill0Wght500Grad0Opsz48'
import IconProductionQuantityLimitsFill0Wght600Grad0Opsz48 from '../components/ProductionQuantityLimitsFill0Wght600Grad0Opsz48'
import IconProductionQuantityLimitsFill0Wght700Grad0Opsz48 from '../components/ProductionQuantityLimitsFill0Wght700Grad0Opsz48'
import IconProductionQuantityLimitsFill1Wght100Grad0Opsz48 from '../components/ProductionQuantityLimitsFill1Wght100Grad0Opsz48'
import IconProductionQuantityLimitsFill1Wght200Grad0Opsz48 from '../components/ProductionQuantityLimitsFill1Wght200Grad0Opsz48'
import IconProductionQuantityLimitsFill1Wght300Grad0Opsz48 from '../components/ProductionQuantityLimitsFill1Wght300Grad0Opsz48'
import IconProductionQuantityLimitsFill1Wght400Grad0Opsz48 from '../components/ProductionQuantityLimitsFill1Wght400Grad0Opsz48'
import IconProductionQuantityLimitsFill1Wght500Grad0Opsz48 from '../components/ProductionQuantityLimitsFill1Wght500Grad0Opsz48'
import IconProductionQuantityLimitsFill1Wght600Grad0Opsz48 from '../components/ProductionQuantityLimitsFill1Wght600Grad0Opsz48'
import IconProductionQuantityLimitsFill1Wght700Grad0Opsz48 from '../components/ProductionQuantityLimitsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconProductionQuantityLimits = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconProductionQuantityLimitsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconProductionQuantityLimitsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconProductionQuantityLimitsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconProductionQuantityLimitsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconProductionQuantityLimitsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconProductionQuantityLimitsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconProductionQuantityLimitsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconProductionQuantityLimitsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconProductionQuantityLimitsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconProductionQuantityLimitsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconProductionQuantityLimitsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconProductionQuantityLimitsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconProductionQuantityLimitsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconProductionQuantityLimitsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
