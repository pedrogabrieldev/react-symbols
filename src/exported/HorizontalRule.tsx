import IconHorizontalRuleFill0Wght100Grad0Opsz48 from '../components/HorizontalRuleFill0Wght100Grad0Opsz48'
import IconHorizontalRuleFill0Wght200Grad0Opsz48 from '../components/HorizontalRuleFill0Wght200Grad0Opsz48'
import IconHorizontalRuleFill0Wght300Grad0Opsz48 from '../components/HorizontalRuleFill0Wght300Grad0Opsz48'
import IconHorizontalRuleFill0Wght400Grad0Opsz48 from '../components/HorizontalRuleFill0Wght400Grad0Opsz48'
import IconHorizontalRuleFill0Wght500Grad0Opsz48 from '../components/HorizontalRuleFill0Wght500Grad0Opsz48'
import IconHorizontalRuleFill0Wght600Grad0Opsz48 from '../components/HorizontalRuleFill0Wght600Grad0Opsz48'
import IconHorizontalRuleFill0Wght700Grad0Opsz48 from '../components/HorizontalRuleFill0Wght700Grad0Opsz48'
import IconHorizontalRuleFill1Wght100Grad0Opsz48 from '../components/HorizontalRuleFill1Wght100Grad0Opsz48'
import IconHorizontalRuleFill1Wght200Grad0Opsz48 from '../components/HorizontalRuleFill1Wght200Grad0Opsz48'
import IconHorizontalRuleFill1Wght300Grad0Opsz48 from '../components/HorizontalRuleFill1Wght300Grad0Opsz48'
import IconHorizontalRuleFill1Wght400Grad0Opsz48 from '../components/HorizontalRuleFill1Wght400Grad0Opsz48'
import IconHorizontalRuleFill1Wght500Grad0Opsz48 from '../components/HorizontalRuleFill1Wght500Grad0Opsz48'
import IconHorizontalRuleFill1Wght600Grad0Opsz48 from '../components/HorizontalRuleFill1Wght600Grad0Opsz48'
import IconHorizontalRuleFill1Wght700Grad0Opsz48 from '../components/HorizontalRuleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHorizontalRule = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHorizontalRuleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHorizontalRuleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHorizontalRuleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHorizontalRuleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHorizontalRuleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHorizontalRuleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHorizontalRuleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHorizontalRuleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHorizontalRuleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHorizontalRuleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHorizontalRuleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHorizontalRuleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHorizontalRuleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHorizontalRuleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
