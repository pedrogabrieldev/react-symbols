import IconHeatPumpFill0Wght100Grad0Opsz48 from '../components/HeatPumpFill0Wght100Grad0Opsz48'
import IconHeatPumpFill0Wght200Grad0Opsz48 from '../components/HeatPumpFill0Wght200Grad0Opsz48'
import IconHeatPumpFill0Wght300Grad0Opsz48 from '../components/HeatPumpFill0Wght300Grad0Opsz48'
import IconHeatPumpFill0Wght400Grad0Opsz48 from '../components/HeatPumpFill0Wght400Grad0Opsz48'
import IconHeatPumpFill0Wght500Grad0Opsz48 from '../components/HeatPumpFill0Wght500Grad0Opsz48'
import IconHeatPumpFill0Wght600Grad0Opsz48 from '../components/HeatPumpFill0Wght600Grad0Opsz48'
import IconHeatPumpFill0Wght700Grad0Opsz48 from '../components/HeatPumpFill0Wght700Grad0Opsz48'
import IconHeatPumpFill1Wght100Grad0Opsz48 from '../components/HeatPumpFill1Wght100Grad0Opsz48'
import IconHeatPumpFill1Wght200Grad0Opsz48 from '../components/HeatPumpFill1Wght200Grad0Opsz48'
import IconHeatPumpFill1Wght300Grad0Opsz48 from '../components/HeatPumpFill1Wght300Grad0Opsz48'
import IconHeatPumpFill1Wght400Grad0Opsz48 from '../components/HeatPumpFill1Wght400Grad0Opsz48'
import IconHeatPumpFill1Wght500Grad0Opsz48 from '../components/HeatPumpFill1Wght500Grad0Opsz48'
import IconHeatPumpFill1Wght600Grad0Opsz48 from '../components/HeatPumpFill1Wght600Grad0Opsz48'
import IconHeatPumpFill1Wght700Grad0Opsz48 from '../components/HeatPumpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHeatPump = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHeatPumpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHeatPumpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHeatPumpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHeatPumpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHeatPumpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHeatPumpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHeatPumpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHeatPumpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHeatPumpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHeatPumpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHeatPumpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHeatPumpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHeatPumpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHeatPumpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
