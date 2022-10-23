import IconHideFill0Wght100Grad0Opsz48 from '../components/HideFill0Wght100Grad0Opsz48'
import IconHideFill0Wght200Grad0Opsz48 from '../components/HideFill0Wght200Grad0Opsz48'
import IconHideFill0Wght300Grad0Opsz48 from '../components/HideFill0Wght300Grad0Opsz48'
import IconHideFill0Wght400Grad0Opsz48 from '../components/HideFill0Wght400Grad0Opsz48'
import IconHideFill0Wght500Grad0Opsz48 from '../components/HideFill0Wght500Grad0Opsz48'
import IconHideFill0Wght600Grad0Opsz48 from '../components/HideFill0Wght600Grad0Opsz48'
import IconHideFill0Wght700Grad0Opsz48 from '../components/HideFill0Wght700Grad0Opsz48'
import IconHideFill1Wght100Grad0Opsz48 from '../components/HideFill1Wght100Grad0Opsz48'
import IconHideFill1Wght200Grad0Opsz48 from '../components/HideFill1Wght200Grad0Opsz48'
import IconHideFill1Wght300Grad0Opsz48 from '../components/HideFill1Wght300Grad0Opsz48'
import IconHideFill1Wght400Grad0Opsz48 from '../components/HideFill1Wght400Grad0Opsz48'
import IconHideFill1Wght500Grad0Opsz48 from '../components/HideFill1Wght500Grad0Opsz48'
import IconHideFill1Wght600Grad0Opsz48 from '../components/HideFill1Wght600Grad0Opsz48'
import IconHideFill1Wght700Grad0Opsz48 from '../components/HideFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHide = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHideFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHideFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHideFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHideFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHideFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHideFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHideFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHideFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHideFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHideFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHideFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHideFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHideFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHideFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
