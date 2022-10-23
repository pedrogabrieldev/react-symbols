import IconLegendToggleFill0Wght100Grad0Opsz48 from '../components/LegendToggleFill0Wght100Grad0Opsz48'
import IconLegendToggleFill0Wght200Grad0Opsz48 from '../components/LegendToggleFill0Wght200Grad0Opsz48'
import IconLegendToggleFill0Wght300Grad0Opsz48 from '../components/LegendToggleFill0Wght300Grad0Opsz48'
import IconLegendToggleFill0Wght400Grad0Opsz48 from '../components/LegendToggleFill0Wght400Grad0Opsz48'
import IconLegendToggleFill0Wght500Grad0Opsz48 from '../components/LegendToggleFill0Wght500Grad0Opsz48'
import IconLegendToggleFill0Wght600Grad0Opsz48 from '../components/LegendToggleFill0Wght600Grad0Opsz48'
import IconLegendToggleFill0Wght700Grad0Opsz48 from '../components/LegendToggleFill0Wght700Grad0Opsz48'
import IconLegendToggleFill1Wght100Grad0Opsz48 from '../components/LegendToggleFill1Wght100Grad0Opsz48'
import IconLegendToggleFill1Wght200Grad0Opsz48 from '../components/LegendToggleFill1Wght200Grad0Opsz48'
import IconLegendToggleFill1Wght300Grad0Opsz48 from '../components/LegendToggleFill1Wght300Grad0Opsz48'
import IconLegendToggleFill1Wght400Grad0Opsz48 from '../components/LegendToggleFill1Wght400Grad0Opsz48'
import IconLegendToggleFill1Wght500Grad0Opsz48 from '../components/LegendToggleFill1Wght500Grad0Opsz48'
import IconLegendToggleFill1Wght600Grad0Opsz48 from '../components/LegendToggleFill1Wght600Grad0Opsz48'
import IconLegendToggleFill1Wght700Grad0Opsz48 from '../components/LegendToggleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLegendToggle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLegendToggleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLegendToggleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLegendToggleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLegendToggleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLegendToggleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLegendToggleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLegendToggleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLegendToggleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLegendToggleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLegendToggleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLegendToggleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLegendToggleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLegendToggleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLegendToggleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
