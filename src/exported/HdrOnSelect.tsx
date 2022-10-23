import IconHdrOnSelectFill0Wght100Grad0Opsz48 from '../components/HdrOnSelectFill0Wght100Grad0Opsz48'
import IconHdrOnSelectFill0Wght200Grad0Opsz48 from '../components/HdrOnSelectFill0Wght200Grad0Opsz48'
import IconHdrOnSelectFill0Wght300Grad0Opsz48 from '../components/HdrOnSelectFill0Wght300Grad0Opsz48'
import IconHdrOnSelectFill0Wght400Grad0Opsz48 from '../components/HdrOnSelectFill0Wght400Grad0Opsz48'
import IconHdrOnSelectFill0Wght500Grad0Opsz48 from '../components/HdrOnSelectFill0Wght500Grad0Opsz48'
import IconHdrOnSelectFill0Wght600Grad0Opsz48 from '../components/HdrOnSelectFill0Wght600Grad0Opsz48'
import IconHdrOnSelectFill0Wght700Grad0Opsz48 from '../components/HdrOnSelectFill0Wght700Grad0Opsz48'
import IconHdrOnSelectFill1Wght100Grad0Opsz48 from '../components/HdrOnSelectFill1Wght100Grad0Opsz48'
import IconHdrOnSelectFill1Wght200Grad0Opsz48 from '../components/HdrOnSelectFill1Wght200Grad0Opsz48'
import IconHdrOnSelectFill1Wght300Grad0Opsz48 from '../components/HdrOnSelectFill1Wght300Grad0Opsz48'
import IconHdrOnSelectFill1Wght400Grad0Opsz48 from '../components/HdrOnSelectFill1Wght400Grad0Opsz48'
import IconHdrOnSelectFill1Wght500Grad0Opsz48 from '../components/HdrOnSelectFill1Wght500Grad0Opsz48'
import IconHdrOnSelectFill1Wght600Grad0Opsz48 from '../components/HdrOnSelectFill1Wght600Grad0Opsz48'
import IconHdrOnSelectFill1Wght700Grad0Opsz48 from '../components/HdrOnSelectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHdrOnSelect = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdrOnSelectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdrOnSelectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdrOnSelectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdrOnSelectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdrOnSelectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdrOnSelectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdrOnSelectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdrOnSelectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdrOnSelectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdrOnSelectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdrOnSelectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdrOnSelectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdrOnSelectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdrOnSelectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
