import IconHdrOnFill0Wght100Grad0Opsz48 from '../components/HdrOnFill0Wght100Grad0Opsz48'
import IconHdrOnFill0Wght200Grad0Opsz48 from '../components/HdrOnFill0Wght200Grad0Opsz48'
import IconHdrOnFill0Wght300Grad0Opsz48 from '../components/HdrOnFill0Wght300Grad0Opsz48'
import IconHdrOnFill0Wght400Grad0Opsz48 from '../components/HdrOnFill0Wght400Grad0Opsz48'
import IconHdrOnFill0Wght500Grad0Opsz48 from '../components/HdrOnFill0Wght500Grad0Opsz48'
import IconHdrOnFill0Wght600Grad0Opsz48 from '../components/HdrOnFill0Wght600Grad0Opsz48'
import IconHdrOnFill0Wght700Grad0Opsz48 from '../components/HdrOnFill0Wght700Grad0Opsz48'
import IconHdrOnFill1Wght100Grad0Opsz48 from '../components/HdrOnFill1Wght100Grad0Opsz48'
import IconHdrOnFill1Wght200Grad0Opsz48 from '../components/HdrOnFill1Wght200Grad0Opsz48'
import IconHdrOnFill1Wght300Grad0Opsz48 from '../components/HdrOnFill1Wght300Grad0Opsz48'
import IconHdrOnFill1Wght400Grad0Opsz48 from '../components/HdrOnFill1Wght400Grad0Opsz48'
import IconHdrOnFill1Wght500Grad0Opsz48 from '../components/HdrOnFill1Wght500Grad0Opsz48'
import IconHdrOnFill1Wght600Grad0Opsz48 from '../components/HdrOnFill1Wght600Grad0Opsz48'
import IconHdrOnFill1Wght700Grad0Opsz48 from '../components/HdrOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHdrOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdrOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdrOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdrOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdrOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdrOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdrOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdrOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdrOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdrOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdrOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdrOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdrOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdrOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdrOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
