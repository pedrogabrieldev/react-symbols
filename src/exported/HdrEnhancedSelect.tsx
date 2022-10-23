import IconHdrEnhancedSelectFill0Wght100Grad0Opsz48 from '../components/HdrEnhancedSelectFill0Wght100Grad0Opsz48'
import IconHdrEnhancedSelectFill0Wght200Grad0Opsz48 from '../components/HdrEnhancedSelectFill0Wght200Grad0Opsz48'
import IconHdrEnhancedSelectFill0Wght300Grad0Opsz48 from '../components/HdrEnhancedSelectFill0Wght300Grad0Opsz48'
import IconHdrEnhancedSelectFill0Wght400Grad0Opsz48 from '../components/HdrEnhancedSelectFill0Wght400Grad0Opsz48'
import IconHdrEnhancedSelectFill0Wght500Grad0Opsz48 from '../components/HdrEnhancedSelectFill0Wght500Grad0Opsz48'
import IconHdrEnhancedSelectFill0Wght600Grad0Opsz48 from '../components/HdrEnhancedSelectFill0Wght600Grad0Opsz48'
import IconHdrEnhancedSelectFill0Wght700Grad0Opsz48 from '../components/HdrEnhancedSelectFill0Wght700Grad0Opsz48'
import IconHdrEnhancedSelectFill1Wght100Grad0Opsz48 from '../components/HdrEnhancedSelectFill1Wght100Grad0Opsz48'
import IconHdrEnhancedSelectFill1Wght200Grad0Opsz48 from '../components/HdrEnhancedSelectFill1Wght200Grad0Opsz48'
import IconHdrEnhancedSelectFill1Wght300Grad0Opsz48 from '../components/HdrEnhancedSelectFill1Wght300Grad0Opsz48'
import IconHdrEnhancedSelectFill1Wght400Grad0Opsz48 from '../components/HdrEnhancedSelectFill1Wght400Grad0Opsz48'
import IconHdrEnhancedSelectFill1Wght500Grad0Opsz48 from '../components/HdrEnhancedSelectFill1Wght500Grad0Opsz48'
import IconHdrEnhancedSelectFill1Wght600Grad0Opsz48 from '../components/HdrEnhancedSelectFill1Wght600Grad0Opsz48'
import IconHdrEnhancedSelectFill1Wght700Grad0Opsz48 from '../components/HdrEnhancedSelectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHdrEnhancedSelect = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdrEnhancedSelectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdrEnhancedSelectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdrEnhancedSelectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdrEnhancedSelectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdrEnhancedSelectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdrEnhancedSelectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdrEnhancedSelectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdrEnhancedSelectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdrEnhancedSelectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdrEnhancedSelectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdrEnhancedSelectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdrEnhancedSelectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdrEnhancedSelectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdrEnhancedSelectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
