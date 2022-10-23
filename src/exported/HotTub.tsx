import IconHotTubFill0Wght100Grad0Opsz48 from '../components/HotTubFill0Wght100Grad0Opsz48'
import IconHotTubFill0Wght200Grad0Opsz48 from '../components/HotTubFill0Wght200Grad0Opsz48'
import IconHotTubFill0Wght300Grad0Opsz48 from '../components/HotTubFill0Wght300Grad0Opsz48'
import IconHotTubFill0Wght400Grad0Opsz48 from '../components/HotTubFill0Wght400Grad0Opsz48'
import IconHotTubFill0Wght500Grad0Opsz48 from '../components/HotTubFill0Wght500Grad0Opsz48'
import IconHotTubFill0Wght600Grad0Opsz48 from '../components/HotTubFill0Wght600Grad0Opsz48'
import IconHotTubFill0Wght700Grad0Opsz48 from '../components/HotTubFill0Wght700Grad0Opsz48'
import IconHotTubFill1Wght100Grad0Opsz48 from '../components/HotTubFill1Wght100Grad0Opsz48'
import IconHotTubFill1Wght200Grad0Opsz48 from '../components/HotTubFill1Wght200Grad0Opsz48'
import IconHotTubFill1Wght300Grad0Opsz48 from '../components/HotTubFill1Wght300Grad0Opsz48'
import IconHotTubFill1Wght400Grad0Opsz48 from '../components/HotTubFill1Wght400Grad0Opsz48'
import IconHotTubFill1Wght500Grad0Opsz48 from '../components/HotTubFill1Wght500Grad0Opsz48'
import IconHotTubFill1Wght600Grad0Opsz48 from '../components/HotTubFill1Wght600Grad0Opsz48'
import IconHotTubFill1Wght700Grad0Opsz48 from '../components/HotTubFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHotTub = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHotTubFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHotTubFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHotTubFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHotTubFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHotTubFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHotTubFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHotTubFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHotTubFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHotTubFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHotTubFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHotTubFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHotTubFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHotTubFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHotTubFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
