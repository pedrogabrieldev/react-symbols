import IconHdFill0Wght100Grad0Opsz48 from '../components/HdFill0Wght100Grad0Opsz48'
import IconHdFill0Wght200Grad0Opsz48 from '../components/HdFill0Wght200Grad0Opsz48'
import IconHdFill0Wght300Grad0Opsz48 from '../components/HdFill0Wght300Grad0Opsz48'
import IconHdFill0Wght400Grad0Opsz48 from '../components/HdFill0Wght400Grad0Opsz48'
import IconHdFill0Wght500Grad0Opsz48 from '../components/HdFill0Wght500Grad0Opsz48'
import IconHdFill0Wght600Grad0Opsz48 from '../components/HdFill0Wght600Grad0Opsz48'
import IconHdFill0Wght700Grad0Opsz48 from '../components/HdFill0Wght700Grad0Opsz48'
import IconHdFill1Wght100Grad0Opsz48 from '../components/HdFill1Wght100Grad0Opsz48'
import IconHdFill1Wght200Grad0Opsz48 from '../components/HdFill1Wght200Grad0Opsz48'
import IconHdFill1Wght300Grad0Opsz48 from '../components/HdFill1Wght300Grad0Opsz48'
import IconHdFill1Wght400Grad0Opsz48 from '../components/HdFill1Wght400Grad0Opsz48'
import IconHdFill1Wght500Grad0Opsz48 from '../components/HdFill1Wght500Grad0Opsz48'
import IconHdFill1Wght600Grad0Opsz48 from '../components/HdFill1Wght600Grad0Opsz48'
import IconHdFill1Wght700Grad0Opsz48 from '../components/HdFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
