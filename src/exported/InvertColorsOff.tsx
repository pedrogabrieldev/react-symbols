import IconInvertColorsOffFill0Wght100Grad0Opsz48 from '../components/InvertColorsOffFill0Wght100Grad0Opsz48'
import IconInvertColorsOffFill0Wght200Grad0Opsz48 from '../components/InvertColorsOffFill0Wght200Grad0Opsz48'
import IconInvertColorsOffFill0Wght300Grad0Opsz48 from '../components/InvertColorsOffFill0Wght300Grad0Opsz48'
import IconInvertColorsOffFill0Wght400Grad0Opsz48 from '../components/InvertColorsOffFill0Wght400Grad0Opsz48'
import IconInvertColorsOffFill0Wght500Grad0Opsz48 from '../components/InvertColorsOffFill0Wght500Grad0Opsz48'
import IconInvertColorsOffFill0Wght600Grad0Opsz48 from '../components/InvertColorsOffFill0Wght600Grad0Opsz48'
import IconInvertColorsOffFill0Wght700Grad0Opsz48 from '../components/InvertColorsOffFill0Wght700Grad0Opsz48'
import IconInvertColorsOffFill1Wght100Grad0Opsz48 from '../components/InvertColorsOffFill1Wght100Grad0Opsz48'
import IconInvertColorsOffFill1Wght200Grad0Opsz48 from '../components/InvertColorsOffFill1Wght200Grad0Opsz48'
import IconInvertColorsOffFill1Wght300Grad0Opsz48 from '../components/InvertColorsOffFill1Wght300Grad0Opsz48'
import IconInvertColorsOffFill1Wght400Grad0Opsz48 from '../components/InvertColorsOffFill1Wght400Grad0Opsz48'
import IconInvertColorsOffFill1Wght500Grad0Opsz48 from '../components/InvertColorsOffFill1Wght500Grad0Opsz48'
import IconInvertColorsOffFill1Wght600Grad0Opsz48 from '../components/InvertColorsOffFill1Wght600Grad0Opsz48'
import IconInvertColorsOffFill1Wght700Grad0Opsz48 from '../components/InvertColorsOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInvertColorsOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInvertColorsOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInvertColorsOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInvertColorsOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInvertColorsOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInvertColorsOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInvertColorsOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInvertColorsOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInvertColorsOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInvertColorsOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInvertColorsOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInvertColorsOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInvertColorsOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInvertColorsOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInvertColorsOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
