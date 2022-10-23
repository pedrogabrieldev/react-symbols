import IconKeyVisualizerFill0Wght100Grad0Opsz48 from '../components/KeyVisualizerFill0Wght100Grad0Opsz48'
import IconKeyVisualizerFill0Wght200Grad0Opsz48 from '../components/KeyVisualizerFill0Wght200Grad0Opsz48'
import IconKeyVisualizerFill0Wght300Grad0Opsz48 from '../components/KeyVisualizerFill0Wght300Grad0Opsz48'
import IconKeyVisualizerFill0Wght400Grad0Opsz48 from '../components/KeyVisualizerFill0Wght400Grad0Opsz48'
import IconKeyVisualizerFill0Wght500Grad0Opsz48 from '../components/KeyVisualizerFill0Wght500Grad0Opsz48'
import IconKeyVisualizerFill0Wght600Grad0Opsz48 from '../components/KeyVisualizerFill0Wght600Grad0Opsz48'
import IconKeyVisualizerFill0Wght700Grad0Opsz48 from '../components/KeyVisualizerFill0Wght700Grad0Opsz48'
import IconKeyVisualizerFill1Wght100Grad0Opsz48 from '../components/KeyVisualizerFill1Wght100Grad0Opsz48'
import IconKeyVisualizerFill1Wght200Grad0Opsz48 from '../components/KeyVisualizerFill1Wght200Grad0Opsz48'
import IconKeyVisualizerFill1Wght300Grad0Opsz48 from '../components/KeyVisualizerFill1Wght300Grad0Opsz48'
import IconKeyVisualizerFill1Wght400Grad0Opsz48 from '../components/KeyVisualizerFill1Wght400Grad0Opsz48'
import IconKeyVisualizerFill1Wght500Grad0Opsz48 from '../components/KeyVisualizerFill1Wght500Grad0Opsz48'
import IconKeyVisualizerFill1Wght600Grad0Opsz48 from '../components/KeyVisualizerFill1Wght600Grad0Opsz48'
import IconKeyVisualizerFill1Wght700Grad0Opsz48 from '../components/KeyVisualizerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyVisualizer = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyVisualizerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyVisualizerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyVisualizerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyVisualizerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyVisualizerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyVisualizerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyVisualizerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyVisualizerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyVisualizerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyVisualizerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyVisualizerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyVisualizerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyVisualizerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyVisualizerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
