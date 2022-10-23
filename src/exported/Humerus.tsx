import IconHumerusFill0Wght100Grad0Opsz48 from '../components/HumerusFill0Wght100Grad0Opsz48'
import IconHumerusFill0Wght200Grad0Opsz48 from '../components/HumerusFill0Wght200Grad0Opsz48'
import IconHumerusFill0Wght300Grad0Opsz48 from '../components/HumerusFill0Wght300Grad0Opsz48'
import IconHumerusFill0Wght400Grad0Opsz48 from '../components/HumerusFill0Wght400Grad0Opsz48'
import IconHumerusFill0Wght500Grad0Opsz48 from '../components/HumerusFill0Wght500Grad0Opsz48'
import IconHumerusFill0Wght600Grad0Opsz48 from '../components/HumerusFill0Wght600Grad0Opsz48'
import IconHumerusFill0Wght700Grad0Opsz48 from '../components/HumerusFill0Wght700Grad0Opsz48'
import IconHumerusFill1Wght100Grad0Opsz48 from '../components/HumerusFill1Wght100Grad0Opsz48'
import IconHumerusFill1Wght200Grad0Opsz48 from '../components/HumerusFill1Wght200Grad0Opsz48'
import IconHumerusFill1Wght300Grad0Opsz48 from '../components/HumerusFill1Wght300Grad0Opsz48'
import IconHumerusFill1Wght400Grad0Opsz48 from '../components/HumerusFill1Wght400Grad0Opsz48'
import IconHumerusFill1Wght500Grad0Opsz48 from '../components/HumerusFill1Wght500Grad0Opsz48'
import IconHumerusFill1Wght600Grad0Opsz48 from '../components/HumerusFill1Wght600Grad0Opsz48'
import IconHumerusFill1Wght700Grad0Opsz48 from '../components/HumerusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHumerus = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHumerusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHumerusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHumerusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHumerusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHumerusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHumerusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHumerusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHumerusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHumerusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHumerusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHumerusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHumerusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHumerusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHumerusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
