import IconCutFill0Wght100Grad0Opsz48 from '../components/CutFill0Wght100Grad0Opsz48'
import IconCutFill0Wght200Grad0Opsz48 from '../components/CutFill0Wght200Grad0Opsz48'
import IconCutFill0Wght300Grad0Opsz48 from '../components/CutFill0Wght300Grad0Opsz48'
import IconCutFill0Wght400Grad0Opsz48 from '../components/CutFill0Wght400Grad0Opsz48'
import IconCutFill0Wght500Grad0Opsz48 from '../components/CutFill0Wght500Grad0Opsz48'
import IconCutFill0Wght600Grad0Opsz48 from '../components/CutFill0Wght600Grad0Opsz48'
import IconCutFill0Wght700Grad0Opsz48 from '../components/CutFill0Wght700Grad0Opsz48'
import IconCutFill1Wght100Grad0Opsz48 from '../components/CutFill1Wght100Grad0Opsz48'
import IconCutFill1Wght200Grad0Opsz48 from '../components/CutFill1Wght200Grad0Opsz48'
import IconCutFill1Wght300Grad0Opsz48 from '../components/CutFill1Wght300Grad0Opsz48'
import IconCutFill1Wght400Grad0Opsz48 from '../components/CutFill1Wght400Grad0Opsz48'
import IconCutFill1Wght500Grad0Opsz48 from '../components/CutFill1Wght500Grad0Opsz48'
import IconCutFill1Wght600Grad0Opsz48 from '../components/CutFill1Wght600Grad0Opsz48'
import IconCutFill1Wght700Grad0Opsz48 from '../components/CutFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCut = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCutFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCutFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCutFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCutFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCutFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCutFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCutFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCutFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCutFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCutFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCutFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCutFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCutFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCutFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
