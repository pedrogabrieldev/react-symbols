import IconForestFill0Wght100Grad0Opsz48 from '../components/ForestFill0Wght100Grad0Opsz48'
import IconForestFill0Wght200Grad0Opsz48 from '../components/ForestFill0Wght200Grad0Opsz48'
import IconForestFill0Wght300Grad0Opsz48 from '../components/ForestFill0Wght300Grad0Opsz48'
import IconForestFill0Wght400Grad0Opsz48 from '../components/ForestFill0Wght400Grad0Opsz48'
import IconForestFill0Wght500Grad0Opsz48 from '../components/ForestFill0Wght500Grad0Opsz48'
import IconForestFill0Wght600Grad0Opsz48 from '../components/ForestFill0Wght600Grad0Opsz48'
import IconForestFill0Wght700Grad0Opsz48 from '../components/ForestFill0Wght700Grad0Opsz48'
import IconForestFill1Wght100Grad0Opsz48 from '../components/ForestFill1Wght100Grad0Opsz48'
import IconForestFill1Wght200Grad0Opsz48 from '../components/ForestFill1Wght200Grad0Opsz48'
import IconForestFill1Wght300Grad0Opsz48 from '../components/ForestFill1Wght300Grad0Opsz48'
import IconForestFill1Wght400Grad0Opsz48 from '../components/ForestFill1Wght400Grad0Opsz48'
import IconForestFill1Wght500Grad0Opsz48 from '../components/ForestFill1Wght500Grad0Opsz48'
import IconForestFill1Wght600Grad0Opsz48 from '../components/ForestFill1Wght600Grad0Opsz48'
import IconForestFill1Wght700Grad0Opsz48 from '../components/ForestFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconForest = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconForestFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconForestFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconForestFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconForestFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconForestFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconForestFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconForestFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconForestFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconForestFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconForestFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconForestFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconForestFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconForestFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconForestFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
