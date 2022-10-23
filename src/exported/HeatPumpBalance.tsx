import IconHeatPumpBalanceFill0Wght100Grad0Opsz48 from '../components/HeatPumpBalanceFill0Wght100Grad0Opsz48'
import IconHeatPumpBalanceFill0Wght200Grad0Opsz48 from '../components/HeatPumpBalanceFill0Wght200Grad0Opsz48'
import IconHeatPumpBalanceFill0Wght300Grad0Opsz48 from '../components/HeatPumpBalanceFill0Wght300Grad0Opsz48'
import IconHeatPumpBalanceFill0Wght400Grad0Opsz48 from '../components/HeatPumpBalanceFill0Wght400Grad0Opsz48'
import IconHeatPumpBalanceFill0Wght500Grad0Opsz48 from '../components/HeatPumpBalanceFill0Wght500Grad0Opsz48'
import IconHeatPumpBalanceFill0Wght600Grad0Opsz48 from '../components/HeatPumpBalanceFill0Wght600Grad0Opsz48'
import IconHeatPumpBalanceFill0Wght700Grad0Opsz48 from '../components/HeatPumpBalanceFill0Wght700Grad0Opsz48'
import IconHeatPumpBalanceFill1Wght100Grad0Opsz48 from '../components/HeatPumpBalanceFill1Wght100Grad0Opsz48'
import IconHeatPumpBalanceFill1Wght200Grad0Opsz48 from '../components/HeatPumpBalanceFill1Wght200Grad0Opsz48'
import IconHeatPumpBalanceFill1Wght300Grad0Opsz48 from '../components/HeatPumpBalanceFill1Wght300Grad0Opsz48'
import IconHeatPumpBalanceFill1Wght400Grad0Opsz48 from '../components/HeatPumpBalanceFill1Wght400Grad0Opsz48'
import IconHeatPumpBalanceFill1Wght500Grad0Opsz48 from '../components/HeatPumpBalanceFill1Wght500Grad0Opsz48'
import IconHeatPumpBalanceFill1Wght600Grad0Opsz48 from '../components/HeatPumpBalanceFill1Wght600Grad0Opsz48'
import IconHeatPumpBalanceFill1Wght700Grad0Opsz48 from '../components/HeatPumpBalanceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHeatPumpBalance = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHeatPumpBalanceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHeatPumpBalanceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHeatPumpBalanceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHeatPumpBalanceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHeatPumpBalanceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHeatPumpBalanceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHeatPumpBalanceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHeatPumpBalanceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHeatPumpBalanceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHeatPumpBalanceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHeatPumpBalanceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHeatPumpBalanceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHeatPumpBalanceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHeatPumpBalanceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
